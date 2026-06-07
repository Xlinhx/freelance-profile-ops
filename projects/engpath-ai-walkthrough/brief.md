# Brief EngPath AI Walkthrough

## 1. Trạng thái

- Ngày reset: 2026-04-30.
- Trạng thái: đã xoá bản draft cũ, recapture asset mới, dựng composition mới và render draft đã review.
- Output: video dọc 9:16 cho TikTok / Reels / Shorts.
- Thời lượng render: 45s.
- File render: `renders/drafts/engpath-ai-walkthrough/video/engpath-reset-walkthrough.mp4`.

## 2. Nhận định

Bản cũ sai ở tư duy dựng: cố show quá nhiều màn hình theo dạng catalog rồi bù bằng overlay/focus/effect. Bản mới chuyển sang tư duy web thật trước, motion sau. Mỗi scene chỉ trả lời một câu hỏi, còn hiệu ứng chỉ dẫn mắt vào proof thật.

## 3. Product framing

- Sản phẩm: web app học tiếng Anh tích hợp AI.
- Domain: EdTech / web app học tập.
- Audience: giáo viên tiếng Anh, chủ trung tâm ngoại ngữ, trường học, người thuê freelance muốn thấy năng lực build web app thật.
- Buyer lens: hệ thống học tập có lộ trình, luyện kỹ năng, AI feedback và tiến trình rõ ràng.
- Hero feature: học sinh viết bài, gửi AI chấm, nhận feedback/rubric rõ, rồi hỏi tiếp trong AI chat.
- Support proof: dashboard học sinh, roadmap, unit overview, skill practice, achievements.
- Lưu ý trung thực: chưa có credential teacher hợp lệ nên bản render không show teacher dashboard.

## 4. Góc nội dung

> Một web học tiếng Anh có lộ trình học, luyện kỹ năng và AI feedback trong cùng một hệ thống.

Không đi theo hướng:

- “AI học tiếng Anh siêu ảo”
- “Chatbot luyện tiếng Anh”
- “Show hết mọi màn hình”
- “Neon / glass / purple để trông AI”

## 5. Visual style

- Vibe: clean learning operating system, sáng, vui, có cảm giác sản phẩm thật.
- Palette: nền paper trung tính, xanh/control, xanh lá/progress, amber/coral cho AI payoff.
- Motion: frame-based, ít layer, ít glow, không glitch, không shimmer trang trí.
- Layout: crop web lớn có context, sticker/ribbon/dot-grid tạo custom design nhưng không che proof.

## 6. Production complexity và QA

- Complexity: trung bình-cao vì phải recapture thật, dựng lại scene system và review frame cuối từng scene.
- Gate đã pass: `npm.cmd test`, render full, `ffprobe`, decode check, contact sheet giữa scene, contact sheet cuối scene, frame full-res của scene 06/07/08.
- Scene 05 dày hơn các scene khác để thể hiện breadth kỹ năng, nhưng vẫn pass thumbnail review.
