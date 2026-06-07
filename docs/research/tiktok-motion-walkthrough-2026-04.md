# Research motion cho walkthrough TikTok - 2026-04

## Mục tiêu

Tổng hợp nguyên tắc ngoài mạng để dựng walkthrough web app theo hướng TikTok-first nhưng vẫn giữ được logic sản phẩm thật.

## Ghi nhận chính

### 1. Hook phải vào rất sớm

- TikTok for Business ghi rõ nên đưa proposition sớm và ưu tiên hook trong 6 giây đầu; tốt hơn nữa là nêu nội dung chính trong 3 giây đầu.
- Adobe cũng nhấn mạnh short-form cần hook trong 3-5 giây đầu và mỗi video chỉ nên có một takeaway rõ.

Áp dụng:

- Scene 1 không nên cố kể quá nhiều.
- Dùng một visual anchor mạnh + một câu khóa đúng bản chất sản phẩm.

### 2. Vertical full-screen và safe zone là nền tảng, không phải tùy chọn

- TikTok for Business khuyến nghị video 9:16, ít nhất 720p, và giữ nội dung trong UI safe zone.
- Adobe cũng nhấn mạnh vertical full-screen cho trải nghiệm mobile.

Áp dụng:

- Không làm app thành vật thể bé ở giữa rồi để nền trống quá nhiều.
- Text, chip, card phụ phải tránh các vùng dễ bị UI nền tảng che.

### 3. Transition phải phục vụ nghĩa

- Adobe phân biệt khá rõ: wipe hợp khi đổi bối cảnh, thời gian hoặc chủ thể; cut là mặc định tốt; zoom/distortion hợp cho các đoạn năng lượng cao hơn.
- TikTok for Business nói transitions, graphics, movement nên dùng để giữ attention, không phải để trang trí.

Áp dụng:

- Đổi tab lớn hoặc đổi role: wipe hoặc push có hướng.
- Click CTA hoặc mở modal: punch-in hoặc focus reveal.
- Đa nhánh: branch growth hoặc split path.
- Kết quả/proof: cascade hoặc stagger metric reveal.

### 4. Cần làm mới creative để tránh cảm giác lặp

- TikTok for Business nhắc tới creative fatigue và khuyên refresh creative thường xuyên.

Áp dụng:

- Không tái dùng một template motion cho mọi tab.
- Mỗi cụm scene phải có grammar riêng: breadth, action, reply, branch, outcome.

### 5. Thumbnail và readability rất quan trọng

- Adobe nhấn mạnh thumbnail và vài giây đầu quyết định người xem có dừng lại hay không.

Áp dụng:

- Ảnh phụ phải đủ lớn để nhận ra ngay trong preview nhỏ.
- Nếu card phụ chỉ còn vai trò trang trí, bỏ.

### 6. Feature hero phải thắng feature support

Suy luận từ các guideline về hook, one clear takeaway và movement có nghĩa:

- nếu người xem nhớ tính năng phụ vì nó dễ hiểu hơn, nghĩa là hook và hierarchy đang sai
- feature khác biệt nhất phải được:
  - gọi tên sớm
  - cho thấy hình lạ sớm
  - có khung hình lớn hơn hoặc hold lâu hơn
  - có copy khóa nghĩa ngắn và đanh

Áp dụng:

- `AI nhập vai nhân vật` và `đa vũ trụ tác phẩm` không được chỉ đứng ở giữa video như một tab nữa
- ít nhất một trong hai phải xuất hiện ngay từ hook hoặc opening montage với framing đủ lớn

## Bộ motion đề xuất cho walkthrough web app

### A. Breadth của hệ thống

- use case: dashboard, overview, nhiều tab
- motion: staggered card sweep, anchored overview, guided route
- tránh: nhiều card nhỏ li ti không đọc được

### B. Hành động chính

- use case: bấm tạo đề, nộp bài, mở modal
- motion: punch-in, spotlight, click ripple, short hold
- tránh: ring sai vị trí, zoom vào chỗ không quan trọng

### C. Chuyển giao giữa vai trò

- use case: giáo viên tạo xong, học sinh nhận bài
- motion: directional push, handoff line, split role
- tránh: line decor không bám đúng điểm gốc/đích

### D. Chat / hội thoại

- use case: AI trả lời đúng vai, phản hồi nhân vật
- motion: focus panel, bubble emphasis, reply lift
- tránh: crop nửa vời làm mất người hỏi/người trả lời

### E. Branching / đa nhánh

- use case: đa vũ trụ, story tree
- motion: branch growth, node reveal, panel split
- tránh: dây nối không ăn khớp card/node thật

### F. Kết quả / proof

- use case: điểm số, phân tích AI, hồ sơ học sinh
- motion: cascade, comparison stack, metric pulse
- tránh: ba card nhỏ treo lơ lửng mà không đọc được

## Tương tác giữa vật thể

Suy luận từ guideline của TikTok và Adobe về movement có nghĩa:

- Vật thể trong scene nên có `quan hệ`, không chỉ `cùng xuất hiện`.
- Tương tác tốt thường rơi vào 4 mẫu:
  - `click -> phản hồi`
  - `root -> nhánh`
  - `dashboard -> proof`
  - `sender -> receiver`

Áp dụng:

- Nếu có line, beam, branch hay route, nó phải đi từ vật thể A sang vật thể B có thật.
- Nếu không chứng minh được neo điểm đầu/điểm cuối, bỏ hẳn line.

## Ngoại cảnh, nội cảnh, đối tượng, hiệu ứng

Đây là phần suy luận ứng dụng cho short-form walkthrough:

### 1. Ngoại cảnh

- Với web walkthrough, "ngoại cảnh" có thể là nền rộng, hero screen, trang landing, dashboard overview.
- Nó cho người xem biết bối cảnh trước khi zoom vào detail.

### 2. Nội cảnh

- Là modal, panel, card, bubble chat, result box, branch detail.
- Nội cảnh là nơi người xem đọc giá trị cụ thể.

### 3. Đối tượng

- Nút, bubble, node, card, score, input, tab active.
- Muốn scene sống hơn, đối tượng phải có thứ tự ưu tiên và phản ứng qua lại.

### 4. Hiệu ứng

- Hiệu ứng nên đóng vai `động từ`: reveal, handoff, split, pulse, cascade.
- Tránh hiệu ứng chỉ làm nền mà không thêm nghĩa.

## Gợi ý thẩm mỹ nữ

Đây là suy luận thiết kế, không phải quote nguyên văn từ nguồn:

- Thiên về chuyển động mềm, có lực vừa phải, ít jerk.
- Dùng ánh sáng dịu, glow vừa, shadow mềm hơn.
- Palette phù hợp hơn: ivory, rose dust, plum, sage, warm gold.
- Tránh neon quá gắt, contrast quá bạo, wipe quá cứng ở mọi scene.
- Với card và text, ưu tiên tinh tế và sạch hơn là “cute”.

## Đề xuất sáng tạo bổ sung cho video walkthrough

Suy luận thêm từ các guideline trên, dùng được cho nhiều domain:

### 1. Với ngoại cảnh

- mở bằng `hero screen` hoặc `overview screen` nhưng phải có điểm neo rõ, ví dụ 1 card lớn hoặc 1 vùng tính năng nổi bật
- có thể dùng slow drift rất nhẹ để nền không chết, nhưng drift không thay cho action

### 2. Với nội cảnh

- modal, thread, branch panel, result card nên được đưa lên foreground như các `interior room`
- mỗi interior room nên có một hành động hoặc một bằng chứng chính

### 3. Với đối tượng

- button, bubble, node, chip, score là nơi motion nên bắt đầu
- nếu object không có vai trò, bỏ khỏi scene thay vì giữ làm trang trí

### 4. Với hiệu ứng

- line/beam hợp cho `A dẫn tới B`
- split hợp cho `đổi role`, `before/after`, `một gốc -> nhiều nhánh`
- cascade hợp cho `proof`, `kết quả`, `nhiều bằng chứng`
- focus lift hợp cho `chat`, `feedback`, `nhận xét`

### 5. Với cảnh cần mềm và tinh tế hơn

- dùng chuyển động `lift`, `drift`, `thread`, `bloom`
- giảm độ cứng của pulse tròn đơn lẻ
- tăng layer bằng shadow mềm và glow mỏng, không tăng bằng blur dày

## Nguồn

- TikTok for Business - Creative best practices for performance ads: https://ads.tiktok.com/help/article/creative-best-practices?redirected=1
- TikTok for Business Blog - Creative Best Practices for TikTok Ads: https://ads.tiktok.com/business/en-US/blog/creative-best-practices-top-performing-ads?redirected=1
- Adobe - How to make short videos: https://www.adobe.com/creativecloud/video/discover/short-videos
- Adobe - Wipe transition: https://www.adobe.com/creativecloud/video/post-production/transitions/wipe
- Adobe - Video transitions overview: https://www.adobe.com/creativecloud/video/discover/video-transitions

## Tâm lý mua của thầy cô với AI trong video demo

Dựa trên các nguồn giáo dục gần đây, điểm chốt không chỉ là “AI mạnh”, mà là:

- có giúp giảm tải công việc thật không
- có giữ được quyền kiểm soát và độ tin cậy khi đánh giá không
- có làm chất lượng học tập hoặc mức tham gia của học sinh tốt hơn không

Áp dụng vào outro:

- tránh kết kiểu feature list
- tránh kết kiểu chỉ nói công nghệ mới
- nên kết bằng một câu trấn an vai trò người dạy + một câu mở lợi ích thực tế

Nguồn tham khảo thêm:

- UNESCO guidance on generative AI in education: https://www.unesco.org/en/digital-education/artificial-intelligence
- OECD, “Students, Digital Devices and Success”: https://www.oecd.org/en/publications/students-digital-devices-and-success_ee173936-en.html
- NCTQ teacher attitudes toward AI, April 10, 2025: https://www.nctq.org/blog/Artificial-intelligence-in-the-classroom-Teachers-viewed-it-wary,-then-curious,-now-cautiously-optimistic
