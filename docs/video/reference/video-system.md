# Hệ Thống Video Đa Domain

## 1. Mục đích

Tài liệu này định nghĩa cách sản xuất video cho nhiều loại sản phẩm khác nhau mà vẫn giữ:

- chất lượng ổn định
- ngôn ngữ hình ảnh có hệ thống
- khác biệt giữa các video
- khả năng làm việc với nhiều agent

## 2. Product Framing Matrix

Trước khi dựng, mỗi sản phẩm phải được map vào 4 trục:

- `Domain`: giáo dục, ecommerce, SaaS, FnB, nội bộ doanh nghiệp, v.v.
- `Core pain`: việc lặp, lỗi vận hành, tải lớn, thiếu sáng tạo, chậm phản hồi, thất thoát, v.v.
- `Hero proof`: phần chứng minh mạnh nhất
- `Buyer lens`: người mua quan tâm điều gì nhất

### 2.1. Ví dụ

#### Giáo dục

- Hero proof: AI nhập vai, đa vũ trụ, giao bài, theo dõi
- Buyer lens: dạy tốt hơn, kiểm soát được, học sinh chủ động hơn

#### Ecommerce

- Hero proof: 2k sản phẩm, hóa đơn, tracking hằng ngày, alert
- Buyer lens: đỡ việc tay, nắm số liệu, ít thất thoát

#### Hệ thống 1k+ users

- Hero proof: nhiều người dùng, role, queue, logs, metrics
- Buyer lens: ổn định, scale, kiểm soát vận hành

#### FnB

- Hero proof: bếp, bàn, đơn, kho, tốc độ xử lý
- Buyer lens: ít nghẽn, ít sai, quay vòng nhanh

## 3. Menu Story Spine

Không dựng tùy hứng. Chọn 1 spine chính:

### A. Overview -> Hero -> Proof -> Outcome

Dùng khi:

- buyer cần hiểu sản phẩm là gì trước
- sản phẩm có nhiều module

### B. Result First -> Work Backwards

Dùng khi:

- kết quả cuối nhìn đủ mạnh để làm hook
- case có metric, throughput, time saved, dashboard đẹp

### C. Role Handoff

Dùng khi:

- sản phẩm có nhiều vai trò
- giá trị nằm ở việc chuyển giao giữa các role

### D. System Map -> Deep Dive -> Return

Dùng khi:

- hệ thống nhiều module
- cần chứng minh “đây là system, không phải 1 màn hình”

### E. Pain -> Relief -> Control -> Scale

Dùng khi:

- buyer quan tâm vận hành hơn novelty
- ecommerce, SaaS ops, FnB rất hợp

## 4. Variation Engine

Để các video không giống nhau quá nhiều, mỗi project phải khóa một tổ hợp riêng:

- 1 story spine
- 1 layout palette chủ đạo
- 1 motion family chủ đạo
- 1 aesthetic pack
- 1 proof style
- 1 pacing profile

### 4.1. Pacing profile

- `Measured`: rõ, chắc, ít cut hơn
- `Punchy`: nhanh, giàu chuyển động
- `Hybrid`: hook nhanh, phần proof đọc rõ

### 4.2. Luật chống lặp

Không được lặp nguyên bộ:

- cùng hook structure
- cùng 2 layout chính
- cùng 2 motion chính
- cùng vị trí text block
- cùng cách outro

qua 2 video liên tiếp cùng pipeline.

## 5. Catalog Hiệu Ứng Nâng Cao

Các hiệu ứng dưới đây đều hợp lệ, nhưng phải dùng đúng ngữ cảnh.

### A. Cursor Choreography

Mục đích:

- cho thấy thao tác thật
- dẫn mắt vào click / hover / drag / input

Dùng khi:

- thao tác nhỏ nhưng quan trọng
- cần chứng minh “đây là app chạy thật”

Không dùng khi:

- không có thao tác thật phía sau
- click giả lệch khỏi object

### B. Guided Zoom

Mục đích:

- từ toàn cảnh đi vào chi tiết

Dùng khi:

- cần giữ ngữ cảnh trước rồi mới đi sâu

Không dùng khi:

- ngay từ đầu scene đã chỉ có detail mà không có context

### C. Baton Pass

Mục đích:

- object A truyền logic sang object B
- ví dụ teacher -> student, invoice -> report, order -> kitchen

Dùng khi:

- có quan hệ nhân quả rõ

Không dùng khi:

- chỉ là 2 card đặt cạnh nhau

### D. Module Mosaic

Mục đích:

- nhiều module / nhiều mảnh UI ráp thành một bức tranh hệ thống

Dùng khi:

- mở đầu hoặc scene breadth
- sản phẩm có nhiều phần thật sự

Không dùng khi:

- số module quá ít
- mỗi mảnh quá nhỏ đến mức không đọc được

### E. Dock / Undock

Mục đích:

- panel con tách khỏi màn chính rồi quay lại

Dùng khi:

- muốn chứng minh một chi tiết nhưng vẫn muốn giữ cảm giác system

Không dùng khi:

- scene đã quá nhiều overlay

### F. Timeline Rail

Mục đích:

- cho thấy tiến trình, nhiều bước, hoặc logic theo thời gian

Dùng khi:

- workflow có thứ tự rõ
- order lifecycle, class lifecycle, service lifecycle

Không dùng khi:

- các bước không thật sự có thứ tự mạnh

### G. Node Graph / Feature Linking

Mục đích:

- làm rõ mối quan hệ giữa các module

Dùng khi:

- data đi từ A sang B
- một hành động mở nhiều nhánh

Không dùng khi:

- không neo được đường nối vào object thật

### H. Shrink-to-System / Expand-to-Detail

Mục đích:

- từ một màn cụ thể zoom out thành system
- hoặc ngược lại

Dùng khi:

- buyer cần vừa thấy breadth vừa thấy depth

### I. Stack Collapse / Stack Cascade

Mục đích:

- gom nhiều proof thành một điểm chốt
- hoặc bung proof ra theo thứ tự

Dùng khi:

- dashboard, result, hồ sơ, analytics

### J. Scroll Reveal

Mục đích:

- reveal thông tin mới

Dùng khi:

- nội dung thật sự nằm phía dưới

Không dùng khi:

- chỉ để “cho video có chuyển động”

## 6. Conflict Matrix

### 6.1. Các cặp dễ xung đột

- `Module Mosaic` + `quá nhiều text block`
- `Node Graph` + `crop sâu`
- `Timeline Rail` + `scroll filler`
- `Dock / Undock` + `3 overlay cùng lúc`
- `Cursor Choreography` + `editorial line quá sáng`

### 6.2. Luật giải xung đột

- mỗi scene chỉ có 1 motion chủ đạo
- mỗi scene chỉ có 1 logic tương tác chính
- effect không được sáng hơn proof object quá lâu
- nếu connector không neo chuẩn, bỏ connector trước khi bỏ scene

## 7. Mapping Theo Tình Huống

### 7.1. Khi bán breadth của hệ thống

Ưu tiên:

- `Module Mosaic`
- `Breadth Montage`
- `System Map`

### 7.2. Khi bán một thao tác rất đắt

Ưu tiên:

- `Cursor Choreography`
- `Guided Zoom`
- `Punch-in`

### 7.3. Khi bán chuyển giao giữa nhiều role

Ưu tiên:

- `Baton Pass`
- `Editorial Split`
- `Directional Push`

### 7.4. Khi bán logic phân nhánh / AI sáng tạo

Ưu tiên:

- `Branch Reveal`
- `Node Graph`
- `Parent-to-Children`

### 7.5. Khi bán kết quả / quản trị / kiểm soát

Ưu tiên:

- `Proof Stack`
- `Cascade Proof`
- `Shrink-to-System`

## 8. Aesthetic Packs

### A. Editorial Proof

- sạch
- chắc
- ít phô diễn
- hợp giáo dục, admin, ops

### B. Cinematic Proof

- depth mạnh
- nhịp giàu chuyển động hơn
- hợp AI, novelty, feature lạ

### C. Soft / Feminine

- tinh tế
- mềm
- sáng
- hợp audience nữ tính hoặc muốn cảm giác dịu, premium

### D. Industrial / Operational

- nhịp chắc
- contrast rõ
- ít glow
- hợp ecommerce scale, SaaS ops, FnB

## 9. Multi-agent Source of Truth

Mỗi project phải có bộ file sau:

- `brief.md`
- `coverage-map.md`
- `capture-map.md`
- `storyboard.md`
- `motion.md`
- `script.md`
- `publish.md`
- `handoff.md`

### 9.1. Ý nghĩa từng file

- `brief.md`: bài toán kinh doanh, buyer, hero, constraints
- `coverage-map.md`: breadth của hệ thống, module nào là primary/secondary/context
- `capture-map.md`: cần quay gì, ở đâu, role nào, interaction gì
- `storyboard.md`: scene order, timing, scene purpose
- `motion.md`: layout, motion, interaction grammar, aesthetic
- `script.md`: on-screen text, caption, publish language
- `publish.md`: cover, caption, hashtag, metrics
- `handoff.md`: khóa gì rồi, pending gì, ai làm tiếp gì

## 10. Khi Nào Cần Hỏi User

### Hỏi ngay

- chưa rõ người mua
- chưa rõ feature hero
- chưa rõ pain business
- có nhiều hướng framing khác nhau nhưng kéo sản phẩm theo bản chất khác nhau
- có rủi ro lộ dữ liệu / tên khách / KPI nhạy cảm

### Không cần hỏi

- chọn motion cụ thể trong family đã khóa
- chọn easing
- chọn độ mạnh glow / shadow / depth
- chọn layout con trong cùng một palette

## 11. Thước Đo Thành Công

Một hệ video tốt phải đạt cả 4:

- `chất lượng`: xem nhỏ vẫn rõ
- `đúng người`: buyer hiểu đúng thứ cần mua
- `không lặp`: video sau không như reskin video trước
- `handoff được`: agent khác đọc file là vào làm tiếp được
