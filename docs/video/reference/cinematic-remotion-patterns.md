# Cinematic Remotion Patterns

Tài liệu này định nghĩa tiêu chuẩn mới cho các video Walkthrough dựng bằng Remotion, hướng tới chất lượng "Cinematic" (điện ảnh, không gian 3D, có chiều sâu) thay vì chỉ là các slide 2D phẳng tĩnh.

## 1. Nguyên tắc Pacing & Độ dài

Không mặc định mọi scene đều dài 5 giây (150 frames). Độ dài phải dựa trên khối lượng thông tin cần truyền tải:
- **3 giây (90 frames)**: Cho các màn hình quản lý đơn giản (danh sách lớp, thư viện) hoặc chuyển cảnh nhanh.
- **4 giây (120 frames)**: Cho các scene có 1 thao tác rõ ràng hoặc hook đầu/cuối video.
- **5 giây (150 frames)**: Chỉ dành cho hero features thực sự quan trọng (ví dụ: Chat AI nhập vai, Đa vũ trụ) nơi viewer cần thời gian để đọc nội dung text.

## 2. Text & Hook

- **Tuyệt đối không dùng caption dài dòng** kiểu mô tả tính năng. 
- Chỉ dùng các headline 1-2 dòng, punchy (ngắn gọn, đánh trúng tâm lý). Viewer trên TikTok/Reels sẽ lướt qua nếu text quá dài.
- Các mô tả phụ (secondary hooks) nếu quá dài thì bỏ luôn, tập trung vào text chính.

## 3. Cinematic Motion Palette

Thay vì chỉ dùng `translateY` và `scale` đơn giản, hệ thống Cinematic yêu cầu:

### A. Ken Burns FullShot
Bất cứ ảnh background (nền full màn hình) nào cũng không được đứng yên. Luôn phải có hiệu ứng trượt nhẹ (`drift`) và phóng to/thu nhỏ chậm (`zoomIn/zoomOut`) để tạo cảm giác hệ thống đang "sống".

### B. 3D Spatial Panels (Chiều sâu không gian)
Khi cắt các card nhỏ (CropShot/PanelCard) đè lên background:
- Set `perspective: 1200px` ở container ngoài cùng.
- Áp dụng `rotateX` hoặc `rotateY` (thường từ 5deg đến 15deg) kết hợp với `translateX/Y`.
- Điều này biến các card 2D thành các lớp (layer) lơ lửng trong không gian 3D.

### C. Native Spotlight & Tương tác
- Khi cần tập trung, thay vì cắt card, có thể dùng `NativeSpotlight` (mask bằng `radial-gradient`) để làm tối phần xung quanh và giữ sáng vùng focus ngay trên màn hình gốc.
- Các object trong video phải có kết nối thực sự: ví dụ tia nối SVG (SVG path strokes) giữa "Tác phẩm gốc" và "Đa vũ trụ", hoặc Hover Pulse tại vị trí click.

## 4. Equal Visual Weighting (Bình Đẳng Vai Trò)

> [!CAUTION]
> **Đây là lỗi sai thường gặp cần tránh tuyệt đối.**

Khi một scene thể hiện kết quả hoặc sự tương tác của **2 vai trò bình đẳng** (ví dụ: Học sinh nộp bài xong xem điểm - Giáo viên nhận bài và xem phân tích AI), tuyệt đối **KHÔNG** thiết kế theo kiểu 1 card to ở giữa (chính) và 1 card nhỏ bay vào từ góc (phụ).

**Quy tắc:**
- Phải dùng **Editorial Split**: Chia đôi không gian màn hình một cách cân bằng.
- Hai panel (ví dụ: Card Học sinh và Card Giáo viên) phải có width xấp xỉ nhau, xuất hiện ở vị trí đối xứng (ví dụ: trái/phải hoặc trên/dưới cân bằng).
- Viewer phải thấy rõ được đây là "2 góc nhìn đồng thời" chứ không phải một tính năng chính và một tính năng đính kèm.
