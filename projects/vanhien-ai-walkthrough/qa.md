# QA Checklist

## A. Khóa đúng sản phẩm

- [ ] Hook gọi đúng bản chất `web app Ngữ văn AI`
- [ ] Video đi theo `role giáo viên -> role học sinh -> hero feature`
- [ ] `AI nhập vai nhân vật` và `Đa vũ trụ tác phẩm` là hero thật sự
- [ ] `Dashboard`, `Lớp học`, `Thư viện`, `Ngân hàng đề` đều được gọi đúng tên

## B. Asset mapping

- [ ] Mỗi asset khớp đúng role
- [ ] Mỗi asset khớp đúng tab/module
- [ ] Visible anchors đọc ra được bằng mắt
- [ ] Không còn ảnh nào dùng sai tab hay sai tính năng

## C. Kích cỡ proof

- [ ] Panel nhận diện module không dưới `360px`
- [ ] Panel có title/state/action không dưới `420px`
- [ ] Panel có text/chat/bài đọc cần đọc thật không dưới `480px`
- [ ] Proof phụ nào không đạt ngưỡng đã được phóng to, tách scene hoặc bỏ

## D. Canvas & density

- [ ] Không scene nào gánh hơn 1 câu hỏi chính
- [ ] Không scene nào có hơn 2 cụm chữ chính phải đọc cùng lúc
- [ ] Proof phụ không chồng vào copy card
- [ ] Nếu nền đã dày chữ, foreground chỉ còn `1 proof chính + 1 proof phụ`
- [ ] Không còn giant focus box che nửa màn hình

## E. Motion & interaction

- [ ] Click / hover / ripple đúng vị trí thật
- [ ] Không còn line trang trí vô nghĩa
- [ ] Motion của từng scene bám đúng mục tiêu scene
- [ ] Handoff giữa giáo viên và học sinh đi bằng thứ tự scene, không nhồi chung

## F. Pacing

- [ ] Mọi scene đều từ `5 giây` trở lên
- [ ] Scene hero đủ hold để đọc
- [ ] Không có chuyển động thừa chỉ để làm cảnh sống hơn

## G. Safe zone

- [ ] Hook và outro không nằm trong vùng caption band
- [ ] Nội dung quan trọng không chạm right action rail

## H. Quy trình verify

- [ ] Đã render still từng scene nhạy cảm
- [ ] Đã soi từng still bằng mắt trước khi render full
- [ ] Chỉ render full sau khi pass toàn bộ mục trên
