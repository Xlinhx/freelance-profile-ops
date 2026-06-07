# Hard Rules Cho Canvas Và Readability

Đây là lớp rule siết trực tiếp từ các lỗi của VanHien AI.

## 1. Rule về đường đọc

- Mỗi scene chỉ được có `1 đường đọc chính`.
- Viewer phải biết nhìn:
  - đâu trước
  - đâu sau
  - đâu là điểm chốt
- Nếu một scene có từ 3 vùng đọc chính trở lên, scene đó phải bị coi là quá tải.

## 2. Rule về nền dày chữ / dày UI

Nếu màn nền vốn đã có nhiều text hoặc nhiều cấu trúc UI cần đọc:

- foreground chỉ được phép có tối đa `1 proof card chính`
- và tối đa `1 proof card phụ`

Không được:

- chồng 2-3 crop card lớn cùng lúc
- vừa bắt viewer đọc nền, vừa bắt viewer đọc nhiều overlay

## 3. Rule về crop

Crop bị xem là sai nếu làm mất một trong các thứ sau:

- active tab
- headline thật
- CTA thật
- header modal
- dấu hiệu role hiện tại

Nếu crop làm người xem không biết họ đang ở tab nào hoặc role nào, crop đó không hợp lệ.

## 4. Rule về card phụ

Card phụ chỉ được tồn tại khi:

- đọc được trong preview mobile
- chứng minh được một ý riêng
- không làm scene loạn hơn

Ngưỡng cứng:

- panel phụ chỉ để nhận diện module đơn giản: tối thiểu khoảng `320-360px` trên canvas `1080x1920`
- panel phụ có text / chat / nội dung cần đọc: tối thiểu khoảng `420px`
- nếu dưới ngưỡng này mà vẫn cần người xem hiểu nội dung, phải phóng to hoặc tách scene

Nếu card phụ chỉ làm scene “đầy hơn”, phải bỏ.

## 5. Rule về audience chuyên môn

Với audience như giáo viên, quản lý vận hành, buyer B2B:

- clarity quan trọng hơn nhiều so với “nhiều lớp cho đẹp”
- scene phải ưu tiên hiểu nhanh hơn là phô diễn motion
- collage dày chỉ được dùng cho hook breadth, không dùng cho scene giải thích tính năng học thuật hoặc nghiệp vụ

## 6. Rule về motion trong scene dày nội dung

Trong scene dày UI hoặc dày text:

- chỉ giữ `1 motion chủ đạo`
- tránh line / branch / orbit nếu không tăng độ rõ
- không thêm movement nền chỉ để scene “sống”

## 7. Rule về hold

Scene mà audience cần đọc thật phải có:

- reveal
- hold
- reinforce

Không được chỉ reveal rồi chuyển.

## 8. Rule về anti-template

Nếu một scene nhìn giống:

- cảnh chat của project cũ
- cảnh multiverse của project cũ
- cảnh proof của project cũ

thì phải trả lời được: `khác ở đâu về mục tiêu, bố cục, motion và buyer lens`.

Không trả lời được thì xem như đang reskin project cũ.

## 9. Rule về review

Một draft không được export final nếu chưa trả lời ổn 5 câu:

- Scene này viewer biết nhìn đâu đầu tiên chưa?
- Viewer có bị bắt đọc quá nhiều thứ cùng lúc không?
- Hero feature có đang thắng support không?
- Scene này có còn phụ thuộc vào text để cứu hình không?
- Nếu xem trên điện thoại trong 1 giây, proof phụ có còn hiểu được không?

## 10. Rule về safe zone nền tảng

- text quan trọng không được nằm trong vùng caption có thể che ở đáy video
- text quan trọng cũng không được dựa sát mép phải vì còn action rail
- hook, copy box, CTA, proof label đều phải qua bài test safe zone trước khi render full
- nếu cần chọn giữa “đẹp sát mép” và “an toàn khi lên nền tảng”, luôn chọn an toàn

## 11. Rule về breadth và detail của cùng một module

- Nếu một module vừa cần cho thấy toàn cảnh, vừa cần cho thấy nội dung để đọc, không được cố nhét cả hai vào một canvas.
- Phải tách thành hai scene liên tiếp:
  - scene breadth: cho thấy hệ thống hoặc danh sách
  - scene detail: cho thấy một nhánh hoặc một proof đọc được
- Cách này là bắt buộc cho mobile-first walkthrough.

## 12. Rule về panel có text thật

- Panel có text, chat, bài đọc, đoạn nội dung hoặc proof cần đọc không được tồn tại ở kích cỡ thumbnail.
- Nếu viewer phải nheo mắt mới hiểu panel đó, scene fail.
- Khi không đủ chỗ, ưu tiên split scene thay vì giữ card phụ nhỏ.
