# Brief Google I/O 2026 & Gemini 3.5 Flash

## 1. Trạng thái

- Ngày khởi tạo: 2026-05-22.
- Trạng thái: Đang biên soạn kịch bản và thiết kế tài nguyên, chuẩn bị code Remotion.
- Output: video dọc 9:16 cho TikTok / Reels / Shorts.
- Thời lượng mục tiêu: 30s (900 frames ở 30fps).

## 2. Nhận định

Sự kiện Google I/O 2026 (ngày 19/05/2026) đánh dấu bước chuyển mình quan trọng của Google từ kỷ nguyên "hỗ trợ AI" sang "kỷ nguyên Agentic AI" (AI tự hành). Điểm nhấn lớn nhất dành cho lập trình viên là **Gemini 3.5 Flash** - model đầu tiên trong thế hệ 3.5. Video này không đi theo lối mòn tóm tắt tin tức chung chung, mà tập trung vào **số liệu kỹ thuật cụ thể** và **góc nhìn phản biện thực tế của cộng đồng** (Reddit, Hacker News) để thu hút lượng view chất lượng cao từ giới công nghệ.

## 3. Product framing

- **Sản phẩm:** Gemini 3.5 Flash (Model ID: `gemini-3.5-flash`).
- **Domain:** Artificial Intelligence / API & Developer Tools.
- **Audience:** Lập trình viên, kỹ sư phần mềm, người quan tâm đến các công cụ AI và tự động hóa.
- **Buyer lens:** Một model giá cả hợp lý, tốc độ cực nhanh để xây dựng các agent chạy lặp (coding loops) mà không gây trễ lớn hoặc chi phí quá cao.
- **Hero feature:** Tốc độ phản hồi cực nhanh (x4 so với các model cùng phân khúc) và tối ưu hóa sâu cho việc gọi công cụ (tool calling), phối hợp sub-agent.
- **Support proof:**
  - Benchmark Terminal-Bench 2.1: 76.2%
  - Benchmark MCP Atlas: 83.6%
  - Benchmark CharXiv Reasoning: 84.2%
  - Giá API: $1.50/M input tokens, $9.00/M output tokens.
  - So sánh tốc độ xử lý trực quan qua hiệu ứng Remotion.

## 4. Góc nội dung

> Google I/O 2026: Gemini 3.5 Flash ra mắt nhằm thống trị kỷ nguyên Agentic AI, nhưng cộng đồng lập trình viên đang nói gì về nó?

Không đi theo hướng:
- “Tóm tắt sự kiện I/O chung chung cho tất cả mọi người”
- “Chỉ khen ngợi một chiều theo thông cáo báo chí của Google”
- “Giải thích lý thuyết AI quá cao siêu, không có số liệu thực tế”

## 5. Visual style

- **Vibe:** Modern premium developer environment (Dark mode huyền ảo, huyền bí và công nghệ).
- **Palette:** Nền xám đen tối (Google Dark Theme), kết hợp dải màu Neon đặc trưng của Gemini (Cyan `#00f2fe`, Blue `#4285F4`, Purple `#a6c0fe`), các điểm nhấn xanh progress `#22c55e` và đỏ cảnh báo `#ef4444`.
- **Motion:** Nhịp nhàng, năng động, dứt khoát, sử dụng Remotion spring animation cho các thẻ nổi, giả lập terminal chạy code thực tế.
- **Layout:** Kính mờ (Glassmorphism), thẻ trôi nổi đa tầng (Floating Cards Parallax), bảng so sánh chia đôi màn hình (Split Screen) trực quan, tin chạy dưới cùng (News Ticker) đưa tin tức bên lề I/O 2026.
