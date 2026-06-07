# Capture Map Google I/O 2026 & Gemini 3.5 Flash

## Nguyên tắc capture & chuẩn bị tài nguyên

- Thư mục đầu ra: `public/media/google-io-2026/`.
- Độ phân giải: Ưu tiên các hình ảnh rõ nét, không bị nhòe, không lộ thông tin bảo mật hay email cá nhân.
- Nguồn thu thập: Crawl hình ảnh từ Google Blog chính thức, các bài báo công nghệ của The Verge, Mashable, PCMag, và chụp màn hình trực tiếp các thảo luận trên Reddit/Hacker News.

## Bản đồ thu thập chi tiết

| File | Phân Cảnh | Nguồn Ảnh / Giao diện | Vùng cần focus (Anchor) | Trạng thái |
| --- | --- | --- | --- | --- |
| `01-google-io-keyart.png` | Scene 1 | Google Blog / Press Kit | Logo Google I/O 2026 và sân khấu keynote | Đang thu thập |
| `02-gemini-35-flash-intro.png` | Scene 2 | Google AI Studio | Dropdown chọn model `gemini-3.5-flash` và giao diện prompt | Đang thu thập |
| `03-benchmarks-chart.png` | Scene 3 | DeepMind Blog | Bảng so sánh hoặc đồ thị radar benchmark của Gemini 3.5 Flash | Đang thu thập |
| `04-speed-comparison.png` | Scene 4 | VS Code / Copilot | Khung sinh code của Gemini 3.5 Flash vs Gemini 3.1 Pro | Đang thu thập |
| `05-community-sentiment.png` | Scene 5 | Reddit / Hacker News | Các bình luận nổi bật bàn về giá cả và tốc độ xử lý | Đang thu thập |
| `06-google-io-cta.png` | Scene 6 | Tự thiết kế | Phông nền kết thúc có logo Google I/O 2026 | Đang thu thập |

## Tương tác giả lập trong Remotion

- **Scene 2 (AI Studio):** Giả lập con trỏ chuột click chọn model `gemini-3.5-flash` trong dropdown và gõ lệnh chạy thử.
- **Scene 3 (Benchmarks):** Dùng Score Counter chạy số cho các chỉ số phần trăm từ 0% lên giá trị thực tế (ví dụ: Terminal-Bench 76.2%).
- **Scene 4 (Speed comparison):** Đồng thời chạy quá trình render code của 2 bên màn hình để so sánh trực quan tốc độ sinh từ (tokens/s), trong đó bên Gemini 3.5 Flash hoàn thành nhanh gấp 4 lần.
- **Scene 5 (Community):** Các popup notification trượt mượt mà từ hai bên vào giữa, phóng to nhẹ khi xuất hiện để thu hút điểm nhìn.
