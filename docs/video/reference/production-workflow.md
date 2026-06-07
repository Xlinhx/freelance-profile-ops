# Quy trình sản xuất video

## 1. Intake tối thiểu

Phải khóa trước khi storyboard:

- sản phẩm là gì
- audience xem là ai
- buyer là ai
- pain business chính là gì
- hero feature là gì
- proof hero là gì
- điều gì không được mô tả sai
- constraint về role, dữ liệu, URL, tài khoản

## 2. Mặc định cho web app nhiều role

Nếu sản phẩm có nhiều vai trò, mặc định đi theo trục:

`role A -> module của role A -> thao tác của role A -> handoff -> role B -> proof của role B`

Ví dụ:

- giáo viên -> dashboard -> lớp học -> ngân hàng đề -> học sinh -> phòng thi
- admin -> dashboard -> users -> billing -> customer -> portal

## 3. Storyboard

Mỗi scene phải có:

- purpose
- audience question
- asset chính
- label thật của tab/module
- motion chính
- proof chính
- proof phụ nếu thật sự cần
- risk nếu scene fail

## 4. Giới hạn density

- 1 scene chỉ trả lời 1 câu hỏi chính
- không quá 2 cụm chữ chính cùng lúc
- nếu nền đã nhiều chữ, foreground chỉ được giữ `1 proof chính + 1 proof phụ`
- support proof không được thay việc của scene riêng

## 5. Kích cỡ proof

- module recognition: `360px`
- title/state/action: `420px`
- text/chat/reader proof: `480px`

Không đạt ngưỡng thì:

1. phóng to
2. tách scene
3. bỏ

## 6. Asset verification

Mỗi asset phải qua `assets.md`:

- đúng role
- đúng tab/module
- đúng visible anchors

Không verify được thì không đưa vào video.

## 7. Motion mapping

Motion chỉ được dùng khi chứng minh:

- state
- handoff
- breadth
- detail
- proof
- outcome

Không dùng line, cursor, spotlight chỉ để trang trí.

## 8. Timing

- mọi scene walkthrough: tối thiểu `5 giây`
- nếu vẫn khó đọc thì tăng hold hoặc tách scene
- không dùng nhịp cắt dồn dập để cố “cho hiện đại”

## 9. Safe zone

- text chính tránh caption band
- object chính tránh right action rail
- hook/outro phải được review như thể caption dài vừa

## 10. Hook và outro

- hook mặc định chỉ có `1 ý chính`
- outro mặc định chỉ có `1 kết luận chính`
- không thêm hooks phụ hoặc đoạn phụ nếu người xem không cần đọc để hiểu video

## 11. Asset sống quan trọng hơn asset cũ

Nếu screenshot cũ quá trống, sai tab hoặc không còn chứng minh được giá trị:

1. quay lại website thật
2. tạo đúng state cần thiết
3. recapture
4. dựng từ asset mới

Không dùng overlay để che việc asset gốc đang yếu.

## 12. Verify

Thứ tự bắt buộc:

1. `npm.cmd test`
2. render still các scene nhạy cảm
3. soi still bằng mắt
4. sửa lỗi
5. render full MP4
6. xác nhận output bằng `ffprobe`

## 13. Output organization

- still review: `renders/drafts/<project-id>/stills/`
- video draft: `renders/drafts/<project-id>/video/`
- final publish: `renders/finals/`

Không trộn video với still.

## 14. Source of truth theo project

Mỗi project cần:

- `project.json`
- `brief.md`
- `coverage-map.md`
- `capture-map.md`
- `assets.md`
- `storyboard.md`
- `motion.md`
- `qa.md`
- `script.md`
- `publish.md`
- `handoff.md`

Nếu agent nào không bám bộ này, output không được coi là chuẩn repo.
