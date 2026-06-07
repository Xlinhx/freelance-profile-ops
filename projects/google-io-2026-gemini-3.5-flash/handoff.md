# Handoff Google I/O 2026 & Gemini 3.5 Flash

## Trạng thái hiện tại

- Dự án video mới đã được thiết lập thành công dưới thư mục `projects/google-io-2026-gemini-3.5-flash/`.
- **Tài nguyên hình ảnh nền (Assets):** Đã tạo và lưu trữ 2 file ảnh nền chính thống chất lượng cao tại thư mục `public/media/google-io-2026/`:
  - `01-google-io-keyart.png` (Google I/O 2026 Keynote Stage)
  - `02-gemini-35-flash-concept.png` (Gemini 3.5 Flash concept illustration)
- **Mã nguồn Remotion:**
  - Khai báo dữ liệu tĩnh và mốc thời gian tại `src/remotion/data/google-io-2026-gemini-3.5-flash.ts`.
  - Viết component giao diện & chuyển động tại `src/remotion/videos/GoogleIO2026Gemini35Flash.tsx`.
  - Viết CSS tùy biến với namespace `gio-` tại `src/remotion/GoogleIO2026Gemini35Flash.css`.
- **Đăng ký hệ thống:** Đăng ký composition `GoogleIO2026Gemini35Flash` vào `src/remotion/Root.tsx` thành công.
- **Tích hợp scripts:** Thêm các script render vào `package.json` thành công.

## Thiết kế và Trực quan đã khóa

- **Vibe:** Premium developer dark mode. Phông nền xám đen mờ ảo kết hợp với lưới dot-grid lập trình viên chuyên nghiệp và dải màu neon đặc trưng của Gemini (Cyan, Blue, Purple).
- **Thời lượng:** 30 giây (900 frames ở tốc độ 30fps).
- **Cơ chế chuyển động chủ đạo:**
  - **Scene 1 (Hook) & Scene 6 (CTA):** Zoom nền chậm (Ken Burns effect) tạo cảm giác điện ảnh.
  - **Scene 2 (Intro):** Trình diễn mockup Google AI Studio gõ code cấu hình Agentic AI.
  - **Scene 3 (Benchmarks):** Thẻ Glassmorphic xuất hiện so le (spring-based parallax) kèm hiệu ứng chạy số Score Counter (Terminal-Bench 76.2%, MCP Atlas 83.6%, CharXiv 84.2%).
  - **Scene 4 (Speed comparison):** Chia đôi màn hình (Split Screen) so sánh tốc độ sinh code trực quan giữa Gemini 3.5 Flash (nhanh gấp 4 lần, gõ hết code) và Gemini 3.1 Pro (gõ 45% code cùng thời gian).
  - **Scene 5 (Community comments):** Các bong bóng bình luận (Reddit/Hacker News) bay vào so le từ hai bên.

## Lệnh sẵn sàng chạy

Để thực thi và trích xuất dữ liệu video (sau khi terminal được phân quyền):

- **Render toàn bộ video bản nháp (Draft):**
  ```powershell
  npm run render:googleio
  ```
  *Đầu ra:* `renders/drafts/google-io-2026-gemini-3.5-flash/video/google-io-2026.mp4`

- **Xuất ảnh tĩnh để rà soát chất lượng (Still review):**
  - Xem trước Hook (Scene 1): `npm run still:googleio:hook`
  - Xem trước Benchmark (Scene 3): `npm run still:googleio:benchmarks`
  - Xem trước So sánh tốc độ (Scene 4): `npm run still:googleio:speed`
  - Xem trước Cộng đồng (Scene 5): `npm run still:googleio:community`
