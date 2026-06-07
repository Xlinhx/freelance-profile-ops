# Roadmap Tự Động Hóa

Mục tiêu: biến repository này thành hệ thống sản xuất nội dung có thể nối project proof, script, render, metadata đăng bài, cập nhật profile và metrics.

## Nguyên Tắc Vận Hành

Tự động hóa phần nhàm chán và lặp lại trước:

- research notes
- intake ý tưởng
- template script/storyboard
- caption/hashtag variants
- snippet cho README/CV
- đóng gói render
- checklist publish
- log metrics

Chưa nên full-auto posting khi định vị profile, format nội dung và approval rule chưa ổn định. API của social platform cũng có nhiều giới hạn quyền, nên version đầu tiên nên là semi-automation.

## Phase 1: Source Of Truth

Dùng local files làm backbone:

- `data/platforms.json`: map nền tảng, bio, URL, khả năng API, trạng thái automation.
- `data/content-index.json`: trạng thái video/project, asset, caption, link, metrics.
- `projects/<id>/`: brief, script, storyboard, publish notes, screenshots.
- `docs/profile/`, `docs/content/`, `docs/website/`: định vị, platform audit, offer strategy, CV/portfolio và content strategy.
- `assets/reference/`: bản lưu profile/CV và screenshot.

Phase này đã bắt đầu. Giữ file-based cho tới khi có đủ nội dung lặp lại để đáng chuyển sang database.

## Phase 2: VPS Content Manager

Build web app nội bộ trên VPS khi quản lý bằng JSON/Markdown bắt đầu chậm. Stack đề xuất:

- Frontend: React/Vite hoặc Next.js.
- Data: SQLite hoặc Postgres nhẹ tùy nhu cầu.
- File storage: asset working folder trên VPS.
- Auth: private-only trước; chưa public khi còn token hoặc dữ liệu private project.

Màn hình chính:

- Bản đồ profile từng nền tảng.
- Thư viện proof dự án.
- Idea backlog.
- Script/storyboard editor.
- Asset checklist.
- Render queue.
- Publish calendar.
- Metrics và lead tracker.

Quy tắc quan trọng: app không thay thế GitHub/CV/social profile. App chỉ chuẩn bị update sạch cho các nền tảng đó và đẩy job xuống runner trên VPS.

## Phase 3: Tự Động Đóng Gói Nội Dung

Mỗi project tạo một "content package" lặp lại được:

- Bản nháp cập nhật README.
- Bản nháp bullet cho CV.
- Post case study LinkedIn.
- YouTube title, description, chapters, tags.
- Caption variants cho TikTok/Reels/Shorts.
- Option text cho thumbnail.
- Shot list và checklist screen capture.
- Ý tưởng follow-up.

Giai đoạn này có thể làm bằng Codex CLI + template trong repo trước khi thêm tool ngoài. Khi runtime ổn hơn, chuyển phần execution sang runner trên VPS.

## Phase 4: Tích Hợp Publish

Ưu tiên API chính thức khi khả thi:

- GitHub: khả thi qua GitHub API/CLI để update README, docs, release, project page.
- YouTube: khả thi qua YouTube Data API `videos.insert`, nhưng project API chưa verify có thể bị giới hạn video upload ở private cho tới khi Google audit.
- TikTok: khả thi qua TikTok Content Posting API, gồm Direct Post hoặc Upload-to-Draft.
- Facebook/Instagram: chủ yếu khả thi qua Meta Graph API cho Page/Instagram professional account, không phù hợp với Facebook personal profile.
- LinkedIn: có thể làm qua LinkedIn API, nhưng permission và app review thường hạn chế.

Implementation đầu tiên nên là:

1. Generate file publish-ready local.
2. Người thật review title/caption/thumbnail.
3. Upload thủ công hoặc qua platform UI.
4. Lưu link final và metrics vào `data/content-index.json`.

Implementation thứ hai:

1. Dùng YouTube API cho upload draft nếu account/app setup được approve.
2. Dùng TikTok upload-to-draft thay vì direct post khi test.
3. Dùng Postiz hoặc n8n cho scheduling/orchestration sau khi chất lượng content ổn định.

## MCP Và Codex CLI

Codex CLI có thể làm operator cho "nhà máy nội dung" nếu MCP tool được thêm có kiểm soát:

- GitHub MCP/API: đọc repo, tạo issue, update docs, inspect release.
- Browser/Playwright MCP: chụp screenshot, verify page, upload draft khi API không có.
- Filesystem tools: quản lý asset và render output.
- Database MCP: query content status và metrics khi app dùng SQLite/Postgres.
- Cloudflare/GitHub Pages tooling: deploy update CV/portfolio.

Giữ permission của MCP càng hẹp càng tốt. Một content agent có quyền social account, browser cookies, repo files và cloud deploy có thể gây hậu quả thật nếu bị prompt injection hoặc web page lừa.

## OpenClaw Và Tool Open Source Khác

OpenClaw không cần cho version đầu. Theo public docs, nó có thể cung cấp long-running local agent, skills, cron/webhook workflow và browser automation qua browser tool có kiểm soát. Nó hữu ích về sau nếu muốn workflow chạy nền tự động hơn.

Thứ tự an toàn hơn cho workspace này:

1. Codex CLI + script/template trong repo.
2. Runner trên VPS cho Playwright, ffmpeg, Remotion.
3. Postiz nếu cần social scheduler open-source có API support.
4. n8n nếu cần workflow orchestration dạng visual giữa nhiều app/API.
5. OpenClaw chỉ khi cần persistent agent phức tạp hơn runner hiện tại.

Không nên dùng browser automation làm backend đăng bài chính nếu có API chính thức hoặc scheduler. Browser automation dễ vỡ, dễ gặp login/CAPTCHA và làm lộ session đăng nhập.

## Đường Deploy

Mode vận hành hiện tại:

- app và runner ưu tiên deploy trên VPS
- raw asset, screenshot batch, render draft/final ưu tiên lưu trên VPS
- repo giữ metadata, context, code và selected proof
- không commit social token
- chỉ dùng `.env`

Cloudflare vẫn dùng khi phù hợp:

- Pages cho site public
- proxy/CDN/DNS
- AI worker hoặc webhook nhẹ

Không dùng Cloudflare để gánh job nặng:

- Playwright browser automation
- Remotion render
- ffmpeg batch
- asset processing lớn

Không deploy dữ liệu khách hàng private, social token hoặc thông tin project chưa công bố vào public surface.

## Khuyến Nghị Build Đầu Tiên

Chưa build full automation factory ngay. Build app/script nhỏ giải quyết bottleneck gần nhất:

- quản lý platform map
- generate content package
- track trạng thái video
- lưu publish link và metrics
- export draft README/CV/social

Sau 15-30 video, quyết định có cần thêm database, render automation, scheduler integration và API posting hay không.
