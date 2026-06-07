# QA Checklist Google I/O 2026 & Gemini 3.5 Flash

## Trạng thái kiểm chứng chất lượng

- [x] Kịch bản tiếng Việt (`script.md`) đã kiểm duyệt: Không dùng từ phóng đại, giữ nguyên tech terms, phù hợp định dạng màn dọc 9:16.
- [x] Thiết lập bố cục (`storyboard.md`) đã duyệt: Đủ 6 phân cảnh, phân bổ thời gian hợp lý (tổng cộng 30s/900 frames).
- [x] Code Remotion (`GoogleIO2026Gemini35Flash.tsx`) đã viết xong và không có lỗi logic, sẵn sàng biên dịch.
- [x] Cấu hình style CSS (`GoogleIO2026Gemini35Flash.css`) đã hoàn tất, áp dụng quy chuẩn prefix `gio-` để đảm bảo độc lập, không xung đột class.
- [x] Tích hợp Composition vào `Root.tsx` thành công.
- [x] Thêm các script render vào `package.json` thành công.
- [ ] Chạy render thực tế trên terminal: Đang đợi phân quyền chạy CLI.

## Bảng rà soát phân cảnh (Scene Review)

| Phân Cảnh | Trạng thái thiết kế | Chỉ số/Chứng cứ cần kiểm tra | Ghi chú kỹ thuật |
| --- | --- | --- | --- |
| **01 Hook** | Đã cấu hình | Tiêu đề lớn hiển thị chính xác, keyart keynote I/O 2026 zoom mượt mà. | Background zoom từ 1.08 -> 1.02. |
| **02 Intro** | Đã cấu hình | Giao diện mockup AI Studio sinh code JavaScript thực tế. | Hiệu ứng gõ chữ và cursor nhấp nháy. |
| **03 Benchmarks** | Đã cấu hình | Ba chỉ số MCP Atlas (83.6%), Terminal-Bench (76.2%), CharXiv (84.2%) chạy số đồng loạt. | Score Counter tăng dần từ 0 lên giá trị thực trong 40 frames. |
| **04 Speed** | Đã cấu hình | So sánh song song: Bên Flash gõ nhanh gấp 4 lần bên Pro. | Flash gõ hết code, Pro chỉ gõ được 45% code cùng thời điểm. |
| **05 Community** | Đã cấu hình | Các popup notification Reddit & HN trượt mượt mà so le. | Phân biệt màu sắc avatar và tag nguồn Reddit/HN. |
| **06 CTA** | Đã cấu hình | Logo CPU/AI chính giữa, nút bấm "BÌNH LUẬN NGAY" lớn ở dưới. | Nút CTA bay lên sau tiêu đề 20 frames. |

## Các rào cản nghiêm cấm đã vượt qua (Gates passed)

- [x] Không sử dụng font sans-serif hệ thống mặc định; dùng Outfit cho text chính và JetBrains Mono cho code.
- [x] Không pan/zoom nền quá nhanh gây rung màn hình.
- [x] Toàn bộ nhịp chuyển động dùng Remotion spring physics mượt mà thay vì CSS keyframe tuyến tính.
- [x] Text không đè lên News Ticker ở chân màn hình (News Ticker chiếm 64px ở đáy).
