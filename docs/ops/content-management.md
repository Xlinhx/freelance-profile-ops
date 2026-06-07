# Quản Lý Nội Dung

## Khuyến Nghị Hiện Tại

Bắt đầu bằng `data/content-index.json` có cấu trúc rõ, kết hợp Markdown file cho từng project/video. Cách này nhanh hơn build CRUD app ngay và giữ workflow linh hoạt khi format nội dung còn đang thay đổi.

## Khi Nào Nên Build Web CRUD App

Build web app local khi có ít nhất 30-50 video hoặc khi quản lý bằng file bắt đầu mất thời gian. App nên quản lý:

- Backlog ý tưởng
- Trạng thái: idea, researching, scripting, producing, draft, scheduled, published, reviewing
- Script, caption, description, hashtag
- Asset và render path
- Link TikTok/Reels/Shorts/YouTube/LinkedIn
- Metrics: views, likes, comments, saves, shares, leads
- Follow-up task và repurpose content

## Data Model Đề Xuất

Trường cốt lõi:

- `id`
- `title`
- `platforms`
- `status`
- `visibility`
- `targetClient`
- `painPoint`
- `offerAngle`
- `scriptPath`
- `projectPath`
- `draftRenderPath`
- `finalRenderPath`
- `publishLinks`
- `metrics`
- `nextAction`

## Quy Tắc

Source of truth là `data/content-index.json` cho tới khi có web app. App tương lai nên đọc/ghi file này hoặc migrate sạch sang SQLite.
