# QA Checklist EngPath Reset

## Kết quả chốt 2026-04-30

- [x] `npm.cmd test` pass sau các chỉnh sửa cuối.
- [x] Full render pass bằng `npm.cmd run render:engpath`.
- [x] `ffprobe` xác nhận video chính: H.264, 1080x1920, 30fps, `yuv420p`, `color_space=bt709`, duration `45.000000`.
- [x] Decode check bằng `ffmpeg -v error -i ... -f null -` không báo lỗi.
- [x] Đã review contact sheet giữa scene từ MP4 render thật.
- [x] Đã review contact sheet 12 frame cuối của từng scene từ MP4 render thật.
- [x] Đã soi riêng các frame trọng yếu: Writing action, AI feedback, AI chat.

## Review từng scene

| Scene | Kết quả | Ghi chú thật |
| --- | --- | --- |
| 01 Hook | Pass | Landing rõ, không claim quá proof thật. |
| 02 Dashboard | Pass | Tiến độ/XP/lịch học đọc được trong thumbnail. |
| 03 Roadmap | Pass | Connector bám roadmap, cuối scene không lệch. |
| 04 Unit | Pass | Card unit và khu học tập không bị che. |
| 05 Skills | Pass có lưu ý | Dày hơn các scene khác nhưng đúng mục tiêu đa dạng kỹ năng. |
| 06 Writing | Pass | Cursor/ring đúng nút `AI Chấm bài`. |
| 07 AI feedback | Pass | Feedback thật, sticker không đè rubric/text chính. |
| 08 AI chat | Pass | Đã sửa copy để không đè panel chat. |
| 09 Achievements | Pass | Progress/XP/leaderboard rõ, confetti không lấn text. |
| 10 Outro | Pass | Collage ổn định, không flash đen hoặc chồng scene. |

## Gate bắt buộc cho bản này

- [x] Không reuse composition/video EngPath cũ.
- [x] Không dùng CSS animation/transition cho EngPath mới.
- [x] Không dùng `Math.random`.
- [x] Không fake teacher dashboard khi không login được teacher.
- [x] Không để overlay mạnh hơn proof thật.
- [x] Không sign-off chỉ vì render xong; đã review frame từ MP4 cuối.

## Artifacts dùng để review

- `renders/drafts/engpath-ai-walkthrough/video/engpath-reset-walkthrough.mp4`
- `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-contact-mid.png`
- `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-contact-end.png`
- `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-review-mid/`
- `renders/drafts/engpath-ai-walkthrough/stills/engpath-reset-mp4-review-end/`
