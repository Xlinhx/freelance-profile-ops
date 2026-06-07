# VPS Operating Mode

Ngày cập nhật: 2026-04-22 Asia/Saigon.

Tài liệu này chốt cách vận hành mới:

- web/app nội bộ ưu tiên deploy trên VPS
- asset làm việc ưu tiên lưu trên VPS để dễ quản lý tài nguyên
- agent/runner nặng chạy gần asset và queue

## Mục Tiêu

Không tối ưu theo hướng "mọi thứ local" nữa.

Mục tiêu mới là:

- có một nơi chạy ổn định cho app, queue, Playwright, ffmpeg, Remotion
- asset nằm cùng môi trường chạy để tránh copy qua lại
- web chỉ là control panel, còn runner trên VPS thực thi job

## Vai Trò Của VPS

VPS là nơi chạy:

- web app nội bộ
- database nhẹ hoặc queue nếu cần
- Playwright runner
- ffmpeg / Remotion render
- local asset library của hệ thống
- cron hoặc worker loop

Cloudflare vẫn có thể giữ:

- DNS / proxy / CDN
- static pages public
- API nhẹ hoặc AI worker nhẹ nếu có ích

Nhưng trục vận hành chính chuyển sang VPS.

## Vai Trò Của Repo

Repo không còn là nơi giữ toàn bộ raw asset của hệ thống.

Repo nên giữ:

- context
- data
- docs
- selected proof
- source code
- script
- scene spec
- manifest asset nếu cần

VPS asset folder nên giữ:

- raw footage
- screenshot batch
- rendered draft
- render final
- audio temp
- thumbnail temp
- browser capture output

## Đề Xuất Cấu Trúc Trên VPS

Ví dụ:

```text
/srv/contentsocial/app
/srv/contentsocial/repo
/srv/contentsocial/data
/srv/contentsocial/assets/raw
/srv/contentsocial/assets/screenshots
/srv/contentsocial/assets/audio
/srv/contentsocial/assets/generated
/srv/contentsocial/renders/drafts
/srv/contentsocial/renders/finals
/srv/contentsocial/logs
```

Nếu muốn giữ rõ hơn:

- `repo/` là code + docs + context
- `data/` là DB hoặc JSON runtime
- `assets/` là kho media làm việc

## Nguyên Tắc Asset

- asset đang dùng để render hoặc automation nên nằm trên VPS
- repo chỉ giữ asset thật sự cần version-control
- không commit raw asset lớn chỉ để "cho đủ"
- nếu một asset chỉ là intermediate output thì không cần đưa vào repo

## Luồng Làm Việc Chuẩn

1. Creator hoặc agent cập nhật `data/` và `context/`
2. Web app tạo job
3. Worker trên VPS đọc job
4. Worker dùng asset local trên VPS để scan web, chụp screenshot, render, cắt video
5. Output ghi lại vào VPS asset folder
6. Metadata quay về `data/`
7. Nếu cần proof chọn lọc thì mới đưa một phần vào repo

## Khi Nào Dùng Cloudflare

- deploy site public như CV/portfolio khi được yêu cầu
- làm front proxy hoặc static hosting
- làm AI endpoint nhẹ hoặc webhook nhẹ nếu thật sự tiện

Không lấy Cloudflare làm nơi chạy job nặng:

- Playwright
- Remotion render
- ffmpeg batch
- asset processing lớn

## Tích Hợp Codex CLI / MCP

Hướng đúng là:

- web bấm nút
- tạo job trên app
- runner hoặc Codex worker trên VPS xử lý
- ghi kết quả lại

Nếu dùng MCP:

- MCP là bridge tới runner/tooling trên VPS
- không để MCP tự thành backend business chính

Nếu dùng Codex CLI:

- có thể chạy trực tiếp trên VPS
- hoặc web proxy job sang Codex runner
- phù hợp với flow "nút bấm đơn giản trên web, execution phức tạp ở backend"

## Điều Chưa Làm

- chưa tự động deploy CV/portfolio mỗi lần thay đổi
- chưa full-auto publish social
- chưa sync toàn bộ social API vào app

## Điều Nên Làm Tiếp

- thiết kế `job model`
- thiết kế `asset manifest`
- tách rõ `repo asset` và `VPS working asset`
- chuẩn hóa đường dẫn runtime cho Playwright / ffmpeg / Remotion
