# Motion Lock

## Global Locks

- story spine: `overview -> giáo viên -> học sinh -> hero feature -> proof -> outcome`
- layout palette:
  - intro/outro: `screen-first editorial`
  - role pages: `full page + 1 proof panel lớn`
  - hero feature: `1 proof lớn + 1 proof phụ` hoặc `2 proof lớn cùng quan hệ`
  - proof scene: `proof chính + proof phụ`
- motion family: `editorial website walkthrough`
- proof style: `role proof + control proof + creativity proof`
- nhịp: `5 giây tối thiểu mỗi scene`

## Scene Mapping

| Scene | Motion chính | Interaction | Được phép | Cấm dùng | Lý do |
| --- | --- | --- | --- | --- | --- |
| 01 Hook | Stagger intro | screen-first | chips nhẹ | focus box khổng lồ che homepage | homepage phải thở được |
| 02 Dashboard giáo viên | Dock / Undock | page-to-proof | 1 proof panel lớn | 2-3 spotlight cùng lúc | dashboard là module mở role |
| 03 Lớp học | Soft dock | page-to-proof | crop lớn của class card | ghép thêm thư viện/bank trong cùng scene | scene chỉ nói về lớp học |
| 04 Thư viện tác phẩm | Soft dock | page-to-proof | crop lớn của filter + content area | biến thư viện thành thumbnail phụ | đây là module riêng |
| 05 Tạo bài bằng AI | HoverPulse + Click | cause-and-effect | ripple đúng nút | preview học sinh chồng vào copy | scene này chỉ nói về thao tác tạo bài |
| 06 Dashboard học sinh | Native focus | state proof | 2 focus rõ | line trang trí | role học sinh phải hiện rõ |
| 07 Phòng thi | Native UI | state proof | pills nhỏ | scroll filler | đây là trạng thái làm bài thật |
| 08 AI nhập vai | Reply Lift | question -> answer | 1 panel trả lời lớn + 1 panel câu hỏi | panel thứ ba | đường đọc phải ngắn và rõ |
| 09 Đa vũ trụ gốc | Branch Reveal | root -> branches | 2 panel lớn có quan hệ | spotlight nền + reader cùng lúc | phải thấy gốc và nhánh rõ ràng |
| 10 Storyline list | Native highlight | breadth proof | 1 highlight rõ | collage | đây là breadth của feature |
| 11 Storyline reader | Guided Zoom | detail proof | 1 panel reader lớn | list phụ nhắc lại breadth | scene đọc sâu phải yên |
| 12 Kết quả & phân tích | Proof Cascade | proof hierarchy | 1 proof chính + 1 proof phụ | 3 proof ngang sức | người xem phải biết cái nào là chính |
| 13 Outro | Soft settle | recap | chips nhẹ + concluding card | CTA trá hình | kết bằng nhận xét giá trị |

## Hard Constraints

- support proof phải đạt ngưỡng kích cỡ mobile đã khóa ở workflow
- proof phụ không được chạm hoặc chồng vào copy card
- label scene phải gọi đúng tab/module thật
- motion nào không chứng minh được state, handoff, breadth, detail hoặc proof thì bỏ
- nếu nền đã tự nhiều chữ, foreground chỉ được giữ tối đa `1 proof chính + 1 proof phụ`
