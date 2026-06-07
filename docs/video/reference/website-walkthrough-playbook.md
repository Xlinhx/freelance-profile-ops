# Playbook Quay Website Walkthrough

## Mục tiêu

Dùng cho video quay website, web app, dashboard, SaaS, ecommerce, FnB, hệ thống nội bộ.

Mục tiêu không phải thêm hiệu ứng cho đẹp, mà là:

- chứng minh đây là web thật
- chứng minh thao tác thật
- chứng minh luồng thật
- chứng minh hệ thống thật
- giữ viewer hiểu được ngay trên màn hình điện thoại

## 1. Bộ effect cốt lõi

### Native Establishing Shot

Dùng để mở scene và định vị module, tab, role.

### Guided Zoom

Dùng khi cần giữ context rồi mới đi sâu.

### Cursor Choreography

Dùng khi hành động là proof. Phải có hover, pause, click hoặc type đúng logic.

### Baton Pass

Dùng khi một hành động ở màn A tạo ra kết quả ở màn B.

### Dock / Undock

Dùng khi cần soi một panel mà vẫn giữ cảm giác nó thuộc cùng hệ thống.

### Module Mosaic

Dùng cho breadth scene. Chỉ hợp khi mỗi module đủ lớn để nhận ra.

### Native Spotlight

Dùng khi nền thật đã đủ đẹp và đủ rõ, chỉ cần highlight đúng vùng.

### Reply Lift

Dùng cho chat, AI response, review, generated answer.

### Branch Reveal

Dùng cho routing, workflow branching, multiverse, decision tree.

### Timeline Rail

Dùng cho flow nhiều bước có trục thời gian hoặc lifecycle rõ ràng.

### Proof Cascade

Dùng cho metrics, logs, report, profile, score, dashboard proof.

### Shrink-to-System / Expand-to-Detail

Dùng khi cần nối breadth và depth trong cùng một narrative.

## 2. Rule chọn effect theo scene

- scene breadth: Native Establishing Shot, Module Mosaic, Guided Zoom
- scene action: Cursor Choreography, Baton Pass
- scene detail: Dock / Undock, Guided Zoom, Native Spotlight
- scene response: Reply Lift
- scene branching: Branch Reveal
- scene workflow: Timeline Rail
- scene proof: Proof Cascade
- scene kết: Shrink-to-System

## 3. Rule cấm

- không click lệch nút
- không line trang trí không neo object
- không dùng scroll chỉ để tạo chuyển động
- không dùng mosaic nếu mỗi module quá nhỏ
- không dùng panel đọc-text ở kích cỡ thumbnail
- không trộn breadth và detail của cùng một feature trong một scene nếu mobile không đọc nổi

## 4. Rule mobile-first

- viewer phải hiểu trong 0.5-1 giây đầu tiên của scene
- panel có text cần đọc phải đủ lớn
- nếu không đủ chỗ: split scene
- safe zone của caption và action rail luôn được trừ trước

## 5. Mapping nhanh theo domain

### Education / EdTech
- Reply Lift
- Branch Reveal
- Guided Zoom
- Dock / Undock
- Native Establishing Shot

### SaaS / Dashboard
- Native Establishing Shot
- Guided Zoom
- Dock / Undock
- Proof Cascade
- Timeline Rail

### Ecommerce / Retail Ops
- Baton Pass
- Timeline Rail
- Module Mosaic
- Cursor Choreography
- Proof Cascade

### FnB / Operations
- Baton Pass
- Timeline Rail
- Native Spotlight
- Proof Cascade

### System Scale / 1k+ users
- System Map
- Proof Cascade
- Timeline Rail
- Shrink-to-System

## 6. QA trước khi render full

- mỗi scene đã rõ effect chủ đạo chưa
- effect đó có chứng minh logic hệ thống không
- viewer mobile có đọc được proof chính không
- có scene nào đang dùng effect chỉ vì quen tay không
- có scene nào giống project cũ quá mức không
