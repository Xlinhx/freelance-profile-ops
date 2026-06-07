# Ghi Chú API Tự Động Hóa Social

Ngày audit: 2026-04-18 Asia/Saigon.

## Nguồn Đã Kiểm Tra

- GitHub profile: https://github.com/initforge
- CV portfolio: https://initforge-cv.pages.dev/
- YouTube channel: https://www.youtube.com/@Linhnx.Developer
- TikTok profile: https://www.tiktok.com/@linhnx.developer
- TikTok Content Posting API: https://developers.tiktok.com/products/content-posting-api
- YouTube Data API video upload: https://developers.google.com/youtube/v3/docs/videos/insert
- Postiz repository: https://github.com/gitroomhq/postiz-app
- n8n repository: https://github.com/n8n-io/n8n
- OpenClaw repository: https://github.com/openclaw/openclaw
- OpenClaw browser docs: https://openclawlab.com/en/docs/tools/browser/

## Ghi Chú Chính

- TikTok có Content Posting API chính thức, hỗ trợ Direct Post và Upload-to-Draft.
- YouTube có upload video qua `videos.insert`; Google ghi rõ project API chưa verify tạo sau 2020-07-28 có thể bị giới hạn video upload ở chế độ private cho tới khi audit.
- Postiz là social scheduler open-source/self-hostable, có API automation support và dùng OAuth flow chính thức.
- n8n là workflow automation platform source-available, có nhiều integration và có thể self-host.
- OpenClaw có thể chạy local agent workflow và browser automation, nhưng browser session/cookie là dữ liệu nhạy cảm.

## Cách Hiểu Thực Tế

- Dùng API/scheduler cho việc đăng lặp lại khi permission đã ổn định.
- Dùng browser automation cho screenshot, QA và fallback workflow; không dùng làm backend đăng bài chính nếu chưa cần.
- Luôn giữ bước review của người thật trước khi publish public.
- Không lưu social token, private cookie, dữ liệu khách hàng hoặc API key trong repository.
