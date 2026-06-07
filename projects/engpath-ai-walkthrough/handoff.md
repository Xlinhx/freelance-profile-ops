# Handoff EngPath Reset

## Trạng thái hiện tại

- Đã xoá hướng video EngPath cũ khỏi pipeline và dựng lại bằng composition mới `EngpathResetWalkthrough`.
- Đã recapture lại asset thật từ website, ưu tiên luồng học sinh vì không có credential teacher hợp lệ để kiểm chứng dashboard giáo viên.
- Đã render full draft 45s, 1080x1920, 30fps, H.264, `bt709`.
- File render: `renders/drafts/engpath-ai-walkthrough/video/engpath-reset-walkthrough.mp4`.

## Thiết kế đã khóa

- Vibe: clean learning operating system, tươi sáng, vui hơn, có ribbon/dot-grid/sticker thủ công nhưng web thật vẫn là proof chính.
- Cấu trúc: 10 scene, mỗi scene một ý, tập trung từ lộ trình học đến Writing -> AI feedback -> AI chat -> tiến trình.
- Motion: frame-based trong Remotion, không dùng CSS `animation`, `transition`, `@keyframes` hoặc random runtime.
- Copy: ngắn, client-friendly, không giả teacher proof khi chưa login được role teacher.

## Review scene sau render

1. Hook: landing thật rõ, badge `Lớp -> Kỹ năng -> AI` không còn claim teacher.
2. Dashboard: tiến độ, XP, lịch học và kỹ năng cải thiện đọc được, bố cục sạch.
3. Roadmap: lộ trình lớp 11 có line/sticker bám object, cuối scene không drift.
4. Unit: card unit và các khu học tập rõ, không bị overlay che proof.
5. Skills: montage hơi dày nhưng vẫn đa dạng, nhịp vui và không mất anchor.
6. Writing: cursor/ring đúng nút `AI Chấm bài`, không lệch hiệu ứng.
7. AI feedback: rubric và gợi ý sửa bài thật, sticker không che text feedback.
8. AI chat: đã sửa layout để chữ nằm gọn trái, panel chat không bị text đè.
9. Achievements: XP, level, leaderboard và confetti đủ rõ, không quá rối.
10. Outro: collage tổng kết đồng nhất, không có flash đen/cuối scene.

## Lệnh đã chạy

- `npm.cmd test`
- `npm.cmd run render:engpath`
- `ffprobe -v error -show_entries stream=width,height,r_frame_rate,duration,codec_name,pix_fmt,color_space,color_range -of default=noprint_wrappers=1 renders\drafts\engpath-ai-walkthrough\video\engpath-reset-walkthrough.mp4`
- `ffmpeg -v error -i renders\drafts\engpath-ai-walkthrough\video\engpath-reset-walkthrough.mp4 -f null -`

## Review artifacts

- Mid-scene contact sheet: `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-contact-mid.png`
- End-of-scene contact sheet: `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-contact-end.png`
- Full-res MP4 frames: `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-review-mid/` và `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-review-end/`

## Hạn chế còn lại

- Không có teacher dashboard thật vì credential teacher thử nghiệm không login được. Video hiện tại trung thực: chỉ show public/student/system proof.
- Scene 05 cố ý dày để tạo cảm giác đa dạng kỹ năng; nếu muốn bản chậm hơn cho khách lớn tuổi, có thể tách scene này thành hai scene trong bản sau.
