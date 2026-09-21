# Mockup desktop và mobile

Bộ duyệt hiện tại: **9 cặp section desktop/mobile và 1 cặp popup**. Mỗi desktop chỉ có một ảnh responsive mobile; không còn các bản tablet/laptop hoặc biến thể theo độ rộng. Giữ số section của desktop hiện tại (không có S07 trong bộ này).

| Desktop | Mobile |
| --- | --- |
| [section-01-gioi-thieu](section-01-gioi-thieu.png) | [responsive](section-01-gioi-thieu-responsive.png) |
| [section-02-du-an](section-02-du-an.png) | [responsive](section-02-du-an-responsive.png) |
| [section-03-thong-diep](section-03-thong-diep.png) | [responsive](section-03-thong-diep-responsive.png) |
| [section-04-pham-vi](section-04-pham-vi.png) | [responsive](section-04-pham-vi-responsive.png) |
| [section-05-cach-hop-tac](section-05-cach-hop-tac.png) | [responsive](section-05-cach-hop-tac-responsive.png) |
| [section-06-responsive](section-06-responsive.png) | [responsive](section-06-responsive-responsive.png) |
| [section-08-nguoi-thuc-hien](section-08-nguoi-thuc-hien.png) | [responsive](section-08-nguoi-thuc-hien-responsive.png) |
| [section-09-cau-hoi-thuong-gap](section-09-cau-hoi-thuong-gap.png) | [responsive](section-09-cau-hoi-thuong-gap-responsive.png) |
| [section-10-lien-he](section-10-lien-he.png) | [responsive](section-10-lien-he-responsive.png) |
| [popup-du-an](popup-du-an.png) | [responsive](popup-du-an-responsive.png) |

Mobile là bố cục riêng, dùng linh hoạt từ 320px: cho phép chữ xuống dòng, chiều cao tự nhiên, body/label HTML tối thiểu16px, vùng chạm44px. Không scale toàn bộ ảnh hay ép nội dung vừa một màn. Ảnh là tham chiếu mỹ thuật, không phải chứng minh runtime.

Popup mobile một cột và một vùng cuộn, close luôn tiếp cận được. Giữ đủ10 mục Tech Stack và biểu tượng: React, TypeScript, Vite; AI, Zalo OA, Realtime; Restaurant Ops, Dashboard; Cloudflare Pages, VPS. Screenshot thật giữ tỷ lệ gốc với chức năng xem lớn. Tech Stack không có mũi tên click giả. Logo công nghệ dùng SVG chính thức khi dựng.

## Vai trò và hành vi

| Section | Công dụng | Hành vi khi dựng |
| --- | --- | --- |
| S01 | Nêu rõ Web, AI, tự động hóa và dẫn vào bằng chứng | Xem dự án về S02; trao đổi về S10 |
| S02 | Xem việc đã làm và vai trò | Card mở detail từ catalog thật; không dùng hình mockup làm bằng chứng |
| S03 | Khoảng nghỉ nghệ thuật duy nhất | Ngắn; không gán click giả, không ép dừng cuộn |
| S04 | Chọn ưu tiên và hình dung phạm vi đầu tiên | Radio đổi gợi ý; chuyển tóm tắt có thể sửa tới contact |
| S05 | Biết mình tham gia và nhận gì mỗi chặng | Nội dung đọc trực tiếp, mở hướng dẫn góp ý khi cần |
| S06 | Thấy và thử cách bố trí theo màn hình | Accordion và chuyển chế độ thật; cùng nội dung qua hai bố cục |
| S08 | Biết người làm, thế mạnh và nguồn kiểm chứng | Link dự án, CV, GitHub thật; công nghệ mở khi cần |
| S09 | Giải đáp băn khoăn | Accordion keyboard/touch, câu trả lời cụ thể |
| S10 | Bắt đầu liên hệ | Form soạn mailto encoded, có copy fallback; không báo đã gửi |

## Các ràng buộc triển khai

**Chi tiết ảnh gen cần chuẩn hóa:** các header xuất hiện ở section giữa trang chỉ là khung preview; trang thật chỉ có một header tại S01. Bỏ micro-slogan ở mép cảnh; không đưa chữ vụn vào HTML. S05 bỏ nhãn “Đang thực hiện” vì đây không phải tiến độ dự án của khách. S08 bỏ CTA trùng với các link trên thẻ. S09 bỏ câu quote trang trí. S10 bỏ câu tự thêm về giờ hành chính/thời gian phản hồi và slogan dưới contact; không có dữ liệu xác nhận những lời hứa này. Logo lá do gen không thay logo XL chính thức. Đây là các giới hạn của mockup, chưa phải bản nội dung xuất bản.

Mọi chữ/controls dựng bằng HTML Be Vietnam Pro, icon SVG. Ảnh mockup không dùng nguyên khối làm web; gen asset bối cảnh sạch rồi ghép, tránh chữ đè vật thể. Nội dung bị imagegen thêm hoặc sai dấu không phải nguồn copy chuẩn. Không dùng tên khách, thành tích, giá, số liệu do ảnh bịa.

S02 dùng dữ liệu từ frontend-apps/shared/data/projects-catalog.js và screenshot thật trong shared/projects-media khi implement. Ảnh ở bộ này chỉ minh họa bố cục gallery và cách khung trắng chứa screenshot đa sắc. Không cố đổi màu screenshot thật. Trước khi công bố mô tả kết quả phải có nguồn xác nhận.

S04 radio phải đổi gợi ý theo nhu cầu; CTA mang tóm tắt sang S10 và không ghi đè thư người dùng đã nhập. Gợi ý không phải báo giá. Demo responsive S06 phải có nhãn minh họa, không giả là dự án đã triển khai. S05 các đầu ra đều theo phạm vi đã thống nhất; không hứa mọi dự án nhận cùng một gói.

S09 câu trả lời: chi phí/thời gian phụ thuộc phạm vi, dữ liệu và tích hợp; hệ thống cũ cần xem hiện trạng và phần phải giữ; hỗ trợ sau bàn giao theo thỏa thuận. S10 email linhnx.developer@gmail.com, Zalo 0932433459.

## Motion và responsive

Motion phục vụ đặc điểm mỗi phần: S01 mở mép sách một lần; S02 hover ảnh và mở detail; S03 cánh mở ngắn; S04 nội dung đổi mượt; S05 đánh dấu chặng đang xem; S06 reflow các thành phần; S08 underline liên kết; S09 accordion; S10 focus và trạng thái form. Chỉ animate vật thể riêng khi có layer phù hợp, không lật nguyên PNG chứa text. Không scroll hijack. Reduced-motion giữ nguyên nội dung và chức năng.

Mobile không thu nguyên desktop: hero copy trước art; gallery một cột; interlude thấp; sách S04 đổi thành lựa chọn rồi kết quả theo chiều dọc; S05 chặng dọc; S06 một demo mobile; S08 tên wrap; FAQ một cột; thư liên hệ một cột. Inputs không perspective, không parallax khi nhập. Xem cặp desktop/mobile ở đầu tài liệu.

## Kiểm chứng

Ảnh đã được xem xét về bố cục/công dụng; cần người dùng duyệt mỹ thuật. Khi implement phải kiểm tra mobile320/360/390/430px, chữ phóng lớn, keyboard, modal scroll, safe-area và reduced-motion; desktop đối chiếu ảnh gốc. Không khẳng định runtime đạt từ ảnh tĩnh.

[Prompts](PROMPTS.md) lưu lời yêu cầu gen bằng built-in image_gen.



