# Storyboard

## Trục kể chuyện

- đi từ `web app là gì`
- sang `role giáo viên`
- rồi `module giáo viên`
- tới `thao tác tạo bài`
- sau đó mới `role học sinh`
- cuối cùng mới đẩy `AI nhập vai`, `đa vũ trụ`, `kết quả`

## Scene Map

| Scene | Thời gian | Mục tiêu | Câu hỏi người xem | Asset chính | Cách trình bày | Ghi chú bắt buộc |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | 0-5s | định vị sản phẩm | đây là loại web gì | `01-home.png` | full homepage + 1 hook card ngắn | không dùng hooks phụ |
| 02 | 5-10s | mở role giáo viên | phía giáo viên bắt đầu ở đâu | `13-teacher-overview.png` | full dashboard + 1 proof panel lớn | label phải ghi rõ `Dashboard giáo viên` |
| 03 | 10-15s | show lớp học | giáo viên quản lý lớp như thế nào | `10-teacher-classes.png` | full page + 1 crop lớn | không gom chung với thư viện |
| 04 | 15-20s | show thư viện tác phẩm | kho nội dung nằm ở đâu | `11-teacher-library.png` | full page + 1 crop lớn | phải thấy `Lão Hạc` và panel chi tiết thật |
| 05 | 20-25s | show tạo bài | giáo viên tạo bài bằng AI ở đâu | `03-teacher-ai-exam.png` | full page + hover/click/ripple | không nhồi luôn preview dashboard học sinh |
| 06 | 25-30s | handoff sang học sinh | bài giao tới đâu với học sinh | `06-student-dashboard.png` | full dashboard + focus rõ | role học sinh phải hiện rõ |
| 07 | 30-35s | show luồng làm bài | học sinh làm bài ra sao | `07-student-exam-room.png` | full page + native UI | không scroll filler |
| 08 | 35-40s | hero feature 1 | nhập vai khác chat thường ở đâu | `17-student-character-response.png` + question crop | 1 proof lớn + 1 proof phụ | support proof không được nhỏ dưới ngưỡng đọc mobile |
| 09 | 40-45s | hero feature 2 | đa vũ trụ bắt đầu từ đâu | `09-student-multiverse.png` | 2 crop lớn: gốc + nhánh | không dùng focus box trên nền loạn |
| 10 | 45-50s | breadth của feature 2 | các nhánh đi tiếp ra sao | `15-student-multiverse-list.png` | full page + 1 highlight rõ | chỉ 1 vùng đọc chính |
| 11 | 50-55s | detail của feature 2 | một nhánh cụ thể đọc như thế nào | `09-student-multiverse.png` | 1 proof panel lớn | phải đọc được thật trên mobile |
| 12 | 55-60s | proof theo dõi | sau bài làm thì giáo viên thấy gì | `14-student-results.png` + `05-teacher-ai-review.png` | 1 proof chính + 1 proof phụ | proof phụ không được lấn proof chính |
| 13 | 60-65s | kết tự nhiên | vì sao hệ này đáng nhớ | `01-home.png` | full homepage + concluding card ngắn | không CTA, không đoạn phụ dài |

## Kiểm tra logic

- scene 02-05 là trục giáo viên
- scene 06-07 là trục học sinh
- scene 08-11 là trục hero feature
- scene 12 là proof quay về quyền kiểm soát của người dạy
- scene 13 là kết luận giá trị, không bán hàng lộ

## Điều cấm

- không scene nào dưới `5 giây`
- không scene nào gánh quá `1 câu hỏi chính`
- không dùng label chung chung kiểu `bên giáo viên`
- không dùng support proof nhỏ để thay cho scene riêng
- không render full trước khi duyệt still từng scene nhạy cảm
