# Work Queue

Tự sinh từ `data/content-index.json` và `data/platforms.json`.

Ngày sync: `2026-04-27T06:22:42+07:00`

## Content Items Cần Quyết Định

- `yt-van-hoc-ai-2026-04-08`: quyết định giữ unlisted làm private proof hay public và cắt thành TikTok/Shorts
- `yt-suky-edu-2026-03-20`: quyết định public/unlisted và cắt thành nội dung ngắn về AI tạo câu hỏi cho giáo viên
- `demo-001`: quyết định có sản xuất demo này làm video đầu tiên hay không

## Content Items Có Thể Tái Sử Dụng Ngay

- `yt-engpath-ai-2026-03-28`: thêm link video vào CV/project page local và cắt 3-5 short clips; chưa chỉnh GitHub

## Platform Priorities

- `upwork`: Đã chỉnh public profile: vẫn Unverified, rate $16/hr, title `Full-Stack Web App Developer | Next.js, NestJS, AI Automation`, overview đã tập trung web apps, dashboards, AI automation, avatar chưa tối ưu.
- `cv`: Giữ layout CV cũ. Đã thêm switch VI/EN, lưu lựa chọn bằng cookie/localStorage, và Cloudflare Pages Worker tự detect IP/country để chọn lang mặc định.
- `linkedin`: Đã chỉnh headline và About theo hướng production-ready web apps, dashboards và AI automation. Featured hiện có GitHub, chưa thêm CV portfolio, chưa có bài đăng case study.
- `youtube`: Studio cho thấy 3 video dài: 1 public, 2 unlisted. Đã cập nhật channel description có Zalo/email/GitHub/LinkedIn và đã bỏ link Upwork/CV khỏi description lẫn channel links.
- `tiktok`: Đã cập nhật bio: `Build web app, AI tools & automation chạy thật. Zalo: 0932433459.` Không thêm CV/link CV. Giữ tên `Chủ Nô AI`.
- `facebook`: Đã cập nhật bio public: `Full-stack developer. Web app, dashboard & AI automation cho business. Zalo: 0932433459.` Profile có 113 bạn bè, chưa có bài viết giới thiệu dịch vụ.
- `zalo`: Số Zalo/phone do creator cung cấp và đã duyệt public: `0932433459`.
- `github`: Profile tập trung vào production, có public repos, live project proof và các mini project được pin.

## EngPath Walkthrough Reset 2026-04-30

- Đã xóa draft/video pipeline cũ và dựng lại bằng composition `EngpathResetWalkthrough`.
- Asset mới nằm tại `public/media/engpath-reset/`; không còn dùng `public/media/engpath`.
- Source-of-truth mới nằm tại `projects/engpath-ai-walkthrough/`.
- Đã render full draft: `renders/drafts/engpath-ai-walkthrough/video/engpath-reset-walkthrough.mp4`.
- QA đã pass: `npm.cmd test`, render full, `ffprobe`, decode check, mid-scene contact sheet và end-of-scene contact sheet từ MP4 render thật.
- Lưu ý trung thực: chưa có teacher credential hợp lệ, nên video hiện tại chỉ show public/student/system proof.
