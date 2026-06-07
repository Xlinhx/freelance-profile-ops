# Pipeline Làm Video

Pipeline này là đường chính cho mọi video mới, video sửa lại và video review. Không render final nếu chưa đi hết các gate bên dưới.

## 0. Mở Context Bắt Buộc

Trước khi làm:

- đọc `context/README.md`
- đọc `context/context-map.md`
- đọc `docs/videos/qa-checklist.md`
- đọc `docs/videos/never-again.md`
- nếu là video EngPath, đọc thêm `projects/engpath-ai-walkthrough/notes/review-2026-04-30.md`

## 1. Intake

Xác định:

- video đang bán sản phẩm, chứng minh năng lực hay tạo trust
- người xem chính là ai
- pain business là gì
- proof nào phải thấy bằng mắt
- CTA nên là gì
- có ràng buộc privacy, brand, dữ liệu thật hay không

Output bắt buộc trong `projects/<project-id>/`:

- `project.json`
- `brief.md`

## 2. Map Case Và Góc Kể

Nếu domain hoặc sản phẩm chưa rõ, mở `docs/videos/reference/case-mapping-framework.md`.

Khóa trước khi dựng:

- `story spine`
- `layout palette`
- `motion family`
- `aesthetic pack`
- `proof style`
- nhịp video và mức độ vui tươi/chuyên nghiệp

Output bắt buộc:

- `coverage-map.md`
- `motion.md`

## 3. Asset Và Coverage

Mỗi scene phải có mục tiêu rõ: show cái gì, vì sao người xem cần thấy, proof nằm ở đâu.

Output bắt buộc:

- `capture-map.md`
- `assets.md`

Gate:

- ảnh/screen phải đủ lớn, gần full màn khi đó là proof chính
- không để khoảng trống lớn làm mất cơ hội show UI
- không dùng lớp gạch, vệt màu, blur hoặc overlay mờ che mất UI
- phải check caption TikTok/Reels/Shorts có thể che hook, nhãn hoặc CTA không

## 4. Script Và Storyboard

Viết ngắn, rõ, client-friendly. Không dùng jargon nếu không tạo thêm proof.

Output bắt buộc:

- `script.md`
- `storyboard.md`

Gate:

- hook không bị caption che
- mỗi scene có một ý chính
- text onscreen không trùng vai trò với voice-over nếu không cần
- kết video phải nói đúng promise lớn, không viết slogan lệch sản phẩm

## 5. Motion Và Custom Design

Video phải có độ đồng nhất, đa dạng, vui tươi, hiệu ứng đẹp mắt và cuốn hút. Đa dạng không có nghĩa mỗi scene một style; phải cùng một hệ token màu, typography, spacing và nhịp chuyển động.

Trước khi code:

- chọn combo hiệu ứng từ `docs/videos/technique-library.md`
- tránh lặp lại cùng một annotation hoặc cùng một kiểu line quá nhiều lần
- ưu tiên motion giải thích sản phẩm, không trang trí che proof
- với dashboard/app UI, ảnh chính nên chiếm phần lớn khung hình

## 6. Build

Code trong `src/remotion/` theo project đang dựng.

Gate kỹ thuật:

- text không tràn container
- không overlap hook, nhãn, UI proof và vùng caption platform
- highlight/viền/cursor phải bám đúng mục tiêu
- hiệu ứng quét, radar, glow, scan phải nằm trong card hoặc vùng UI cần nhấn
- không để thanh, line hoặc overlay nổi lệch khỏi card

## 7. Still Review

Render still ở tối thiểu:

- hook
- scene đầu sau hook
- scene giữa
- scene phức tạp nhất
- scene gần kết
- frame cuối

Review từng still:

- ảnh proof đã đủ lớn chưa
- có khoảng trống thừa không
- annotation có đúng nghĩa không
- caption có khả năng che text/hook không
- hiệu ứng có che UI không
- scene có đồng nhất với vibe chung không

## 8. Full Render Review

Sau khi render draft, xem full video từ đầu đến cuối. Không chỉ xem thumbnail hoặc vài frame.

Review bắt buộc:

- từng scene
- đoạn cuối của từng scene
- frame chuyển cảnh
- nhịp motion có lệch UI không
- cursor/click/viền có bám đúng vị trí không
- text label có đúng nghiệp vụ không
- scene kết có đúng thông điệp tổng không

Với video dọc, luôn check vùng caption TikTok/Reels/Shorts trước khi duyệt.

## 9. Xuất Final

Trước final:

- chạy checklist trong `docs/videos/qa-checklist.md`
- chạy pass lỗi trong `docs/videos/never-again.md`
- nếu có video render, kiểm tra metadata bằng `ffprobe`
- ưu tiên BT.709, `yuv420p`, đúng kích thước 1080x1920, đúng fps

Output:

- draft trong `renders/drafts/<project-id>/video/`
- final trong `renders/finals/<project-id>/video/`
- still review trong `renders/drafts/<project-id>/stills/`

## 10. Handoff Và Publish

Cập nhật:

- `qa.md`
- `publish.md`
- `handoff.md`
- `data/content-index.json` nếu trạng thái video đổi

Handoff phải nói rõ:

- đã sửa gì
- còn rủi ro gì
- đã review scene nào
- file render nằm ở đâu
- câu chữ/hook cuối cùng là gì

## Gate Không Được Bỏ Qua

- Không dùng ảnh nhỏ khi proof chính cần được nhìn rõ.
- Không dùng overlay mờ che UI.
- Không để annotation sai nghĩa nghiệp vụ.
- Không để highlight/cursor lệch mục tiêu.
- Không dùng text caption có thể bị caption TikTok che.
- Không final nếu chưa xem full video và đoạn cuối từng scene.
