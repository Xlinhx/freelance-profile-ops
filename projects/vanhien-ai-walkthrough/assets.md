# Asset Verification

## Rule

- overlay text không được gọi sai tab, sai role, sai tính năng
- asset nào không còn đọc được visible anchors thì không hợp lệ
- support proof nào nhỏ đến mức không đọc ra anchor thì coi như không tồn tại
- nếu asset không đủ rõ, recapture từ web thật thay vì cố cứu bằng crop

## Ngưỡng proof trên canvas 1080x1920

- panel nhận diện module: `360px`
- panel có title/state/action: `420px`
- panel có chat, bài đọc hoặc nội dung cần đọc thật: `480px`

## Scene Matrix

| Scene | Asset | Role | Tab / feature | Visible anchors bắt buộc | Trạng thái |
| --- | --- | --- | --- | --- | --- |
| 01 | `01-home.png` | buyer / giáo viên | homepage | hero homepage + capability cards | pass |
| 02 | `13-teacher-overview.png` | giáo viên | dashboard giáo viên | sidebar giáo viên + heading `Tổng quan` | pass |
| 03 | `10-teacher-classes.png` | giáo viên | lớp học | tab `Lớp học`, card lớp, nút `Thêm lớp mới` | pass |
| 04 | `11-teacher-library.png` | giáo viên | thư viện tác phẩm | tab `Thư viện Tác phẩm`, `2 tác phẩm`, có `Lão Hạc`, có panel chi tiết bên phải | pass |
| 05 | `03-teacher-ai-exam.png` | giáo viên | ngân hàng đề / tạo bài | heading `Ngân hàng Đề`, modal AI, nút `Tạo bằng AI` | pass |
| 06 | `06-student-dashboard.png` | học sinh | dashboard học sinh | `Bài sắp tới`, `Kết quả mới` | pass |
| 07 | `07-student-exam-room.png` | học sinh | phòng thi | sidebar học sinh, câu hỏi, ô trả lời | pass |
| 08 | `17-student-character-response.png` | học sinh | chat nhân vật AI | câu hỏi, câu trả lời, đúng tab `Chat Nhân vật AI` | pass |
| 09 | `09-student-multiverse.png` | học sinh | đa vũ trụ tác phẩm | root card, branch cards, modal đa vũ trụ | pass |
| 10 | `15-student-multiverse-list.png` | học sinh | danh sách storyline | heading, card storyline, nút `Tạo storyline mới` | pass |
| 11 | `09-student-multiverse.png` | học sinh | nhánh đọc cụ thể | reader panel đủ lớn để đọc thật | pass |
| 12 | `14-student-results.png` | học sinh | kết quả | heading `Kết quả của em`, điểm AI | pass |
| 12 | `05-teacher-ai-review.png` | giáo viên | phân tích AI | heading `Phân tích & Duyệt AI` | pass |
| 13 | `01-home.png` | buyer / giáo viên | homepage recap | capability cards + branding | pass |

## Ghi chú thực địa

- Scene 04 đã recapture từ website thật sau khi thêm `Lão Hạc` và `Lão Hạc - cậu Vàng`.
- Nút `Phân tích AI` trong thư viện hiện trả lỗi runtime `inputTokens is not defined`; lỗi này không được đưa vào video.

## Fail conditions

- label scene không khớp asset
- crop làm mất heading thật
- role trên ảnh không nhận ra được
- proof phụ nhỏ dưới ngưỡng nhưng vẫn bị ép giữ lại
- asset của một module bị dùng để nói module khác
