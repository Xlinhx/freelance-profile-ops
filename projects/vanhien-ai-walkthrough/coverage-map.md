# Coverage Map

## Mục tiêu

Video phải cho người xem thấy đây là cả web app, nhưng từng scene vẫn rõ.

Breadth giải ở cấp video. Clarity giải ở cấp scene.

## Quy ước

- `Primary proof`: cần spotlight rõ
- `Secondary proof`: cần thấy rõ nhưng không phải scene hero
- `Context only`: chỉ cần thấy để tạo breadth
- `Hidden`: không cần xuất hiện ở bản này

| Module / Tab / Flow | Role | Mức coverage | Scene dự kiến | Vì sao cần show | Risk nếu không show |
| --- | --- | --- | --- | --- | --- |
| Homepage / định vị sản phẩm | giáo viên / buyer | Primary proof | 01 | định vị đây là web app giáo dục | mở đầu dễ bị hiểu sai bản chất |
| Tổng quan giáo viên | giáo viên | Secondary proof | 02 | cho thấy đây là hệ thống, không phải 1 tool | mất breadth |
| Lớp học | giáo viên | Secondary proof | 02 | buyer thấy có quản lý lớp thật | mất chất hệ thống |
| Thư viện tác phẩm | giáo viên | Context only | 02 | cho breadth học thuật | có thể bỏ nếu scene loạn |
| Ngân hàng đề | giáo viên | Secondary proof | 02-03 | bridge sang flow giao bài | buyer nhớ sai trọng tâm nếu lạm dụng |
| Tạo đề / giao bài | giáo viên | Primary proof | 03 | proof dùng thật | mất niềm tin vận hành |
| Phòng thi / làm bài | học sinh | Secondary proof | 04 | chứng minh role học sinh thật | mất flow end-to-end |
| Chat nhân vật | học sinh | Primary proof | 05 | feature hero số 1 | mất novelty |
| Đa vũ trụ tác phẩm | học sinh | Primary proof | 06 | feature hero số 2 | mất novelty / sáng tạo |
| Kết quả / phân tích / hồ sơ | giáo viên + học sinh | Secondary proof | 07 | chốt control proof | buyer thấy sản phẩm “bay” quá |
| Các tab phụ khác của học sinh | học sinh | Context only | 04 / 07 | breadth vừa đủ | không quá rủi ro |

## Kiểm tra cân bằng

- breadth của hệ thống đã đủ chưa: có, nếu 01-02-03-04-07 đều rõ
- có module nào đang cố chen vào scene không đúng chỗ không: có nguy cơ ở 05-06
- scene nào đang ôm quá nhiều breadth thay vì focus:
  - 01
  - 05
  - 06
