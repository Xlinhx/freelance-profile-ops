# Motion Lock Google I/O 2026 & Gemini 3.5 Flash

## Nguyên tắc thiết kế chuyển động

Video hướng đến cộng đồng developer và tech-savvy, do đó nhịp chuyển động cần dứt khoát, công nghệ, mượt mà nhưng không được gây rối mắt. Visual proof chính là các con số benchmark, giao diện AI Studio, và các bình luận thực tế.

## Story spine

`Google I/O announcement -> Gemini 3.5 Flash intro -> Benchmarks reveal -> Speed comparison -> Community response -> CTA`

## Aesthetic pack

Tên pack: `premium developer dark mode`

- **Nền:** Xám đen đậm (`#0B0F19`), kết hợp lưới chấm mờ (dot-grid) màu xám nhạt (`rgba(255, 255, 255, 0.05)`).
- **Accents:** Dải màu neon chuyển từ Google Blue `#4285F4`, sang Cyan `#00f2fe`, và Purple `#a6c0fe`. Màu xanh lá `#22c55e` dành cho các chỉ số tiến trình/kết quả tốt. Màu đỏ `#ef4444` cho cảnh báo hoặc tranh luận.
- **Thẻ (Cards):** Kính mờ (Glassmorphism) với `background: rgba(20, 26, 40, 0.6)`, viền mỏng `border: 1px solid rgba(255, 255, 255, 0.1)`, đổ bóng sâu `box-shadow` để tạo chiều sâu lập thể.
- **Tin chạy dưới (News Ticker):** Thanh tin tức chạy liên tục ở chân màn hình, giả lập bảng tin chứng khoán/tin tức công nghệ, chạy các tin bên lề I/O 2026 để tăng tính dynamic.

## Layout palette

- **L1 Fullscreen Cover:** Dùng ở Scene 1 (Hook) và Scene 6 (Outro). Tiêu đề lớn căn giữa, nền gradient mesh chuyển động chậm phía sau.
- **L2 Device Showcase:** Dùng ở Scene 2 (Gemini 3.5 Flash intro). Đưa mockup Google AI Studio nổi bật lên trên nền lưới.
- **L3 Floating Cards:** Dùng ở Scene 3 (Benchmarks). Các thẻ benchmark (Terminal-Bench, MCP Atlas) xuất hiện so le, bay vào từ dưới lên với độ sâu (parallax) khác nhau.
- **L4 Split Screen:** Dùng ở Scene 4 (Speed comparison). Chia đôi khung hình dọc để so sánh trực quan tốc độ sinh từ giữa Gemini 3.1 Pro (chậm hơn) và Gemini 3.5 Flash (nhanh gấp 4 lần).
- **L10 Notification Pop:** Dùng ở Scene 5 (Cộng đồng). Các notification chat mờ (Reddit/HN) bay vào từ hai bên trái và phải.

## Motion grammar

- **Score Counter:** Các con số phần trăm của benchmark phải chạy tăng dần từ 0 đến giá trị thực trong vòng 30 frames đầu tiên của scene.
- **Terminal Typing:** Giả lập dòng lệnh gõ từng chữ chân thực. Tốc độ gõ 1 chữ/frame.
- **Spring Physics:** Toàn bộ hiệu ứng xuất hiện của các thẻ bay vào phải dùng hàm `spring` của Remotion để tạo độ nảy (bounce) mượt mà tự nhiên, không dùng CSS animation tuyến tính (linear).
- **Parallax Drift:** Khi camera hoặc tiêu điểm di chuyển, các thẻ ở các độ sâu khác nhau sẽ dịch chuyển với tốc độ hơi khác nhau để tạo cảm giác 3D không gian sâu.

## Phân bổ thời gian (30fps)

- **Tổng thời lượng:** 30 giây (900 frames).
- **Scene 1 (Hook):** 4 giây (120 frames) - Bắt đầu từ frame 0 đến 119.
- **Scene 2 (Intro):** 5 giây (150 frames) - Từ frame 120 đến 269.
- **Scene 3 (Benchmarks):** 6 giây (180 frames) - Từ frame 270 đến 449.
- **Scene 4 (Speed):** 5 giây (150 frames) - Từ frame 450 đến 599.
- **Scene 5 (Community):** 6 giây (180 frames) - Từ frame 600 đến 779.
- **Scene 6 (CTA):** 4 giây (120 frames) - Từ frame 780 đến 899.

## Cấm tuyệt đối (Hard bans)

- Không sử dụng font chữ sans-serif mặc định của hệ thống; bắt buộc dùng font công nghệ chuyên dụng (như JetBrains Mono cho code, Inter hoặc Outfit cho tiêu đề).
- Không được pan hay zoom các screenshot ảnh chụp thực tế quá nhanh gây chóng mặt cho người xem trên màn hình điện thoại.
- Không để text của card đè lên hoặc bị đè bởi News Ticker ở chân màn hình.
