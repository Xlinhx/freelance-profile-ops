# Cân Bằng Breadth Và Clarity

Đây là rule dành cho các web app nhiều module, nhiều tab, nhiều role.

Mục tiêu:

- vẫn cho người xem cảm giác `đây là cả một hệ thống thật`
- nhưng từng scene vẫn rõ, không loạn, không bắt viewer đọc quá nhiều cùng lúc

## 1. Nguyên tắc gốc

`Show hết` không có nghĩa là:

- nhét nhiều tab vào cùng một frame
- chồng nhiều crop card lên một scene
- cố gắng cho người xem thấy toàn bộ hệ thống trong 3 giây

`Show hết` đúng nghĩa là:

- ở cấp **toàn video**, người xem nhận ra đủ breadth của hệ thống
- ở cấp **từng scene**, người xem chỉ phải hiểu một ý chính

Nói ngắn:

- `breadth` giải ở cấp video
- `clarity` giải ở cấp scene

## 2. Coverage Map

Mỗi project nhiều module phải có `coverage-map.md`.

Mục đích:

- liệt kê toàn bộ module / tab / role quan trọng
- xác định cái nào phải được show rõ
- xác định cái nào chỉ cần lướt qua để tạo cảm giác full system

### 2.1. Phân loại coverage

- `Primary proof`: phải có scene riêng hoặc nắm spotlight rõ
- `Secondary proof`: xuất hiện rõ nhưng không cần giữ lâu
- `Context only`: chỉ cần thấy thoáng qua để viewer biết là hệ thống có phần đó
- `Hidden`: không cần show trong video này

## 3. Canvas Budget

Mỗi scene có một `canvas budget` cố định.

### 3.1. Budget mặc định

- `1 vùng đọc chính`
- `1 vùng đọc phụ`
- `1 điểm neo tương tác`

Nếu vượt quá mức này, scene mặc định bị coi là quá tải.

### 3.2. Với màn nền dày chữ / dày UI

Budget còn chặt hơn:

- `1 proof card chính`
- `1 proof card phụ tối đa`

Không chồng 3-4 lớp chỉ để “cho thấy nhiều”.

## 4. System Feeling Mà Không Bị Loạn

Muốn viewer thấy “đây là cả hệ thống”, dùng các cách sau thay vì nhồi overlay:

### A. Breadth Hook

- một scene mở đầu có `System Map`, `Breadth Montage` hoặc `Module Mosaic`
- chỉ để định vị breadth
- không bắt đọc sâu

### B. Focus Scene

- mỗi scene sau chỉ đào 1 module / 1 hành động / 1 role

### C. Return-to-System

- sau khi zoom sâu, quay lại một scene proof để chốt `chi tiết này nằm trong cả hệ thống`

## 5. Quy tắc show hết

Nếu user muốn `show hết`, dùng theo thứ tự:

1. liệt kê toàn bộ module trong `coverage-map`
2. chọn 3-5 module thành `Primary proof`
3. chọn 2-4 module làm `Secondary proof`
4. phần còn lại chỉ cần `Context only`

Không có video TikTok nào nên cố cho mọi module cùng quyền nói.

## 6. Quy tắc cho buyer chuyên môn

Với buyer như giáo viên, chủ shop, người vận hành:

- họ không cần thấy mọi thứ cùng lúc
- họ cần cảm giác:
  - sản phẩm đủ rộng
  - nhưng từng phần đủ rõ để tin là dùng thật được

Tức là:

- breadth tạo niềm tin `đây là system`
- clarity tạo niềm tin `system này dùng được`

## 7. Scene Grammar phù hợp

### Khi muốn show breadth

Ưu tiên:

- `System Map`
- `Breadth Montage`
- `Module Mosaic`

### Khi muốn show một phần rất rõ

Ưu tiên:

- `Hero + Support`
- `Focus Thread`
- `Proof Stack`

### Khi muốn nối breadth và depth

Ưu tiên:

- `Shrink-to-System`
- `Expand-to-Detail`
- `Dock / Undock`
- `Map-to-Node`

## 8. Dấu hiệu đang làm sai

- một scene có 3-4 vùng đọc chính
- card phụ càng thêm càng khó hiểu
- video có breadth nhưng viewer không kể lại được flow
- video có clarity ở từng scene nhưng xem xong vẫn không hình dung đây là cả web app

## 9. Tiêu chí đạt

Một walkthrough nhiều module được xem là cân bằng tốt khi:

- viewer hiểu sản phẩm là `một hệ thống`
- viewer kể lại được `3-5 phần chính`
- không scene nào buộc viewer đọc quá nhiều cùng lúc
- hero feature vẫn là thứ đọng lại mạnh nhất
