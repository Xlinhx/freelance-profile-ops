# Quy tắc video walkthrough

## 1. Khóa đúng bản chất sản phẩm trước

Phải rõ:

- sản phẩm là gì
- ai xem
- ai mua
- video đang bán điều gì nhất
- hero feature là gì
- điều gì tuyệt đối không được mô tả sai

## 2. Mặc định kể theo role nếu sản phẩm có nhiều vai trò

Nếu web app có `giáo viên / học sinh`, `admin / user`, `chủ shop / nhân viên`, `bếp / thu ngân`, mặc định đi:

`role A mở gì -> role A quản lý gì -> role A thao tác gì -> role B nhận gì -> role B dùng gì`

Chỉ được phá cấu trúc này nếu có một spine mạnh hơn và được khóa rõ trong storyboard.

## 3. Label phải gọi đúng tên trang, tab, module

Không dùng label chung chung như:

- `bên giáo viên`
- `phía học sinh`
- `quản trị`

Phải gọi đúng như:

- `Dashboard giáo viên`
- `Lớp học giáo viên`
- `Ngân hàng đề`
- `Dashboard học sinh`

## 4. Duration scoring — scene 2-5 giây theo tiêu chí

Không set duration cảm tính. Chấm 5 tiêu chí, mỗi tiêu chí 0-2 điểm:

| Tiêu chí | 0 | 1 | 2 |
|----------|---|---|---|
| Complexity (số vùng UI) | 1 vùng | 2-3 vùng | phức tạp, nhiều tương tác |
| Novelty (tính mới lạ) | quản lý cơ bản | feature độc đáo | hero feature, wow moment |
| Readability (cần đọc text?) | chỉ nhìn là hiểu | text ngắn | text dài, chat, bài văn |
| Interaction (object tương tác) | không có | 1-2 tooltip | connector lines, chain reaction |
| Narrative Weight (trọng số) | lướt qua được | cần hiểu | climax, turning point |

Quy đổi:
- 0-2 điểm → `2s` (60 frames)
- 3-4 điểm → `3s` (90 frames)
- 5-6 điểm → `4s` (120 frames)
- 7-8 điểm → `5s` (150 frames)
- 9-10 điểm → `5s + hold` (150-180 frames)

Không được dùng animation nhanh để lách thời lượng.

## 5. Breadth giải ở cấp video, clarity giải ở cấp scene

- video có thể show nhiều module
- nhưng mỗi scene chỉ trả lời `1 câu hỏi chính`
- nếu một feature cần vừa breadth vừa detail, phải tách ra `2 scene`

## 6. Support proof không được làm thay việc của scene riêng

Nếu proof phụ quá nhỏ hoặc quá nhiều:

- phóng to nó
- hoặc tách scene
- hoặc bỏ

Không dùng thumbnail-size support proof để “đã show rồi”.

## 7. Ngưỡng kích cỡ proof là gate cứng

- panel nhận diện module: `>= 360px`
- panel có title/state/action: `>= 420px`
- panel có text/chat/bài đọc cần đọc thật: `>= 480px`

Không đạt ngưỡng thì fail.

## 8. Asset mapping phải verify trước khi dựng

Mỗi scene phải verify:

- đúng role
- đúng tab/module
- đúng visible anchors

Sai 1 trong 3 cái này là không được đưa asset vào composition.

## 9. Motion phải có nghĩa

Mỗi effect phải trả lời nó đang chứng minh gì:

- state
- handoff
- breadth
- detail
- proof
- outcome

Không chứng minh được gì thì bỏ.

## 10. Không để copy cứu hình

Nếu người xem phải đọc copy mới hiểu scene đang là tab gì hoặc đang làm gì, scene đó chưa đạt.

Hình phải tự nói được trước.

## 11. Safe zone là rule cứng

- key text không được rơi vào caption band
- key object không được chạm right action rail
- hook và outro phải được review với giả định caption dài vừa

## 12. Verify theo still trước, full render sau

Quy trình bắt buộc:

1. render still từng scene nhạy cảm
2. soi bằng mắt
3. sửa
4. chỉ khi pass mới render full

Không được xuất bản chỉ vì “video chạy được”.

## 13. Hook và outro mặc định phải ngắn

- mặc định chỉ giữ `1 luận điểm chính`
- không thêm `hooks phụ`, chip phụ hoặc đoạn giải thích dài nếu chưa có lý do thật mạnh
- nếu hook cần dài để cứu nghĩa thì storyboard đang sai

## 14. Asset nghèo thì recapture từ trạng thái sống

Nếu module thật đang trống, nghèo hoặc không chứng minh được giá trị:

- làm giàu state trực tiếp trên website thật
- recapture lại asset

Không được vá bằng ảnh phụ trang trí.

## 15. Gate chống chồng lấn (No-Overlap Gate) — CỨNG

Mọi scene có >= 2 PanelCard phải pass kiểm tra sau TRƯỚC khi render:

Công thức tính toạ độ cuối cùng:

```
outputHeight = (region.height / region.width) * outputWidth
top_base = 960 - outputHeight / 2
top_final = top_base + translateY_final
bottom_final = top_final + outputHeight
```

Điều kiện BẮT BUỘC:

- `Panel_B.top_final >= Panel_A.bottom_final + 40px` (gap tối thiểu 40px)
- nếu không pass → PHẢI dùng kỹ thuật thay thế (Sequential Reveal, Focus Mask, Callout Lines)
- không được dùng spring bounce để bào chữa va chạm tạm thời
- kiểm tra TRƯỚC render, không phải sau khi xem video

## 16. Camera nền — CỨNG

Chỉ dùng 3 mode: `in` (zoom nhẹ vào), `out` (zoom nhẹ ra), `static` (đứng yên).

- Zoom cực nhẹ (1-3% qua 5s). Nếu nhìn thấy rõ ràng ảnh đang di chuyển → quá mạnh.
- **TUYỆT ĐỐI KHÔNG dùng pan (trượt ngang/dọc) trên ảnh tĩnh** — nhìn nghiệp dư.
- Không quá 3 scene liên tiếp dùng cùng mode.

## 17. Đa dạng transition chuyển cảnh — CỨNG

Sử dụng `@remotion/transitions` `TransitionSeries`.

Không quá 2 transition liên tiếp dùng cùng kiểu (`fade`, `slide`, `wipe`, `flip`, `clockWipe`, `iris`).

Mỗi video phải dùng ít nhất 4 kiểu transition khác nhau.

Transition kéo dài 0.5-0.7s (15-20 frames).

## 18. Object interaction — KHUYẾN NGHỊ

Mỗi video >= 10 scene phải có >= 3 scene có object tương tác nội bộ.

Các kiểu tương tác hợp lệ:

- `Connector Lines` (SVG đường nối animate giữa 2 panel)
- `Chain Reaction` (Panel A kích hoạt → delay → Panel B kích hoạt)
- `Particle Flow` (chấm tròn bay từ A → B)
- `Mirror Echo` (Panel A thu nhỏ → nhúng vào Panel B)
- `Magnetic Pull` (2 panel hút lại gần nhau)
- `Glow Transfer` (vùng sáng di chuyển từ A → B)

Tương tác phải có nghĩa: chứng minh cause-effect hoặc relationship.

## 19. Kỹ thuật cho màn hình tĩnh / ít chức năng — CỨNG

Khi UI đơn giản hoặc chủ yếu là text/bảng:

- KHÔNG dùng crop + zoom-in đơn thuần
- PHẢI dùng ít nhất 1 trong:
  - `Callout Lines` (SVG vẽ đường + label)
  - `Focus Mask` (tối nền + sáng vùng di chuyển)
  - `Scroll Simulation` (giả lập cuộn trang)
  - `Cursor Journey` (con trỏ dẫn đường + highlight)
  - `Sequential Reveal` (lộ dần từng phần, 1 panel 1 lúc)
  - `Split Screen Wipe` (gạt ngang/dọc chuyển góc nhìn)

## 20. Mỗi scene phải có intent rõ ràng

Trước khi dựng mỗi scene, phải trả lời:

1. technique chính là gì (crop, callout, mask, scroll, wipe?)
2. camera mode là gì (in, out, static?)
3. transition vào là gì (fade, slide, wipe, flip, clockWipe, iris?)
4. có object interaction không? loại gì?
5. duration bao nhiêu giây? dựa trên tiêu chí nào?

Nếu không trả lời được cả 5 câu thì scene chưa sẵn sàng.

## 21. Screenshot phải ở trạng thái sống — CỨNG

Chuẩn cũ đã bỏ. Với video EngPath, đọc `projects/engpath-ai-walkthrough/notes/review-2026-04-30.md` và motion docs liên quan trước khi dựng.

- Data thật hoặc seed data giàu (tối thiểu 5 dòng nhìn thấy)
- Có notification, badge, activity indicator
- Resolution ≥ 2x output
- Verify 3 anchors: đúng role, đúng tab, đúng trạng thái giàu
- Screenshot trống/nghèo = fail tức thì, phải chụp lại

## 22. Typography phải có nhịp (stagger) — CỨNG

Text KHÔNG ĐƯỢC xuất hiện cùng lúc. Thứ tự bắt buộc:

1. **Label** xuất hiện trước (delay 0)
2. **Headline** xuất hiện sau label 8-12 frames (0.3-0.4s)
3. **Caption** xuất hiện sau headline 6-10 frames (0.2-0.3s)

Mỗi element phải có animation riêng:
- Label: slide-in từ cạnh (translateX) + fade
- Headline: từng dòng xuất hiện lần lượt (stagger per line)
- Caption: fade-in nhẹ

Tuyệt đối không dùng 1 spring duy nhất cho toàn bộ CopyCard.

## 23. QA checklist bắt buộc — CỨNG

Chi tiết xem `docs/videos/qa-checklist.md`.

Mỗi scene phải pass 10 điểm. Video phải pass 5 điểm. Fail 1 = không render.

Quy trình: TypeScript compile → still review → 10-point per scene → render full → xem full 1 lần không tua → sign-off.

## 24. Color space BT.709 bắt buộc — CỨNG

Remotion mặc định render `yuvj420p` (full range, PC) + `bt470bg` (SD color).
Khi upload TikTok/YouTube/Reels, platform hiển thị theo TV range → video bị tăng chói/trắng bệch.

**Fix bắt buộc:** Luôn render với `--color-space bt709`:

```
remotion render ... --color-space bt709
```

Verify sau render:
```
ffprobe -v error -show_streams -select_streams v:0 output.mp4 | grep -E "pix_fmt|color_range|color_space"
```

Kết quả đúng:
- `pix_fmt=yuv420p` (KHÔNG phải `yuvj420p`)
- `color_range=tv` (KHÔNG phải `pc`)
- `color_space=bt709`

Nếu vẫn sai → dùng ffmpeg re-encode:
```
ffmpeg -i input.mp4 -vf "scale=in_range=pc:out_range=tv" -color_primaries bt709 -color_trc bt709 -colorspace bt709 output.mp4
```

## 25. Refactor animation KHÔNG ĐƯỢC phá layout — CỨNG

Khi thêm animation mới vào component (stagger, delay, v.v.):

1. **GIỮ NGUYÊN container-level positioning** (transform, translateX, translateY gốc)
2. Chỉ thêm animation vào **elements bên trong** container
3. Đặc biệt: `translateX(-50%)` cho `side=center` KHÔNG ĐƯỢC bỏ
4. Test: render still ở frame 0 + frame giữa + frame cuối → layout phải ổn ở cả 3

Lỗi thường gặp:
- Bỏ container transform khi refactor → layout vỡ
- Thêm inline style mà quên style gốc từ CSS class → trùng/đè
- Spring config quá nhanh (stiffness > 200) → giật

## 26. Mỗi video phải là một tác phẩm nghệ thuật riêng — CỨNG

TUYỆT ĐỐI KHÔNG reuse component/CSS từ video khác. Mỗi sản phẩm phải có:

- **Component riêng** (file `.tsx` riêng, không import component video khác)
- **CSS prefix riêng** (vd: `vh5-` cho Vanhien, `ep-` cho EngPath)
- **Bảng màu riêng** (primary color, glow, gradient mesh khác nhau)
- **Layout system riêng** (cách bố trí screenshot, text, animation khác nhau)
- **Typography rhythm riêng** (font-size, spacing, animation timing khác nhau)

Lý do: Người xem phải cảm nhận ngay đây là video của sản phẩm khác. Nếu 2 video nhìn "na ná" hoặc "giống giống" → fail tức thì.

Checklist trước khi dựng video mới:
1. Đã tạo component `.tsx` riêng? ✓
2. Đã tạo CSS prefix riêng? ✓
3. Bảng màu có trùng video khác không? ✗ = fail
4. Layout pattern có giống video khác không? ✗ = fail
5. Xem 2 video cạnh nhau — có phân biệt được không? ✗ = fail

## 27. Viewport capture PHẢI khớp tỷ lệ video output — CỨNG

Đây là nguyên nhân gốc khiến EngPath vỡ khung hình: capture ngang (1536×864) rồi nhét vào video dọc (1080×1920).

**Quy tắc bắt buộc:**

- Video dọc 1080×1920 → capture viewport **dọc** (vd: `540×960` + `deviceScaleFactor: 2` = 1080×1920)
- Video ngang 1920×1080 → capture viewport **ngang** (vd: `960×540` + `deviceScaleFactor: 2`)
- KHÔNG BAO GIỜ capture viewport khác tỷ lệ output rồi "nhét" vào sau
- Nếu web app không responsive dọc → phải chọn viewport phù hợp nhất hoặc dùng device frame

**Tham khảo Vanhien (đúng):**
```js
const viewport = {width: 1080, height: 1920}; // ← khớp output 1:1
```

**EngPath sai:**
```js
const viewport = {width: 1536, height: 864};  // ← ngang, output dọc → VỠ
```

**Checklist capture:**
1. Xác định tỷ lệ video output (9:16 hay 16:9?)
2. Set viewport cùng tỷ lệ + deviceScaleFactor ≥ 2
3. Kiểm tra web có responsive ở viewport đó không
4. Nếu không responsive → chọn viewport gần nhất hoặc dùng device frame
5. Capture → verify ảnh fit đúng vào khung video

## 28. Mỗi video PHẢI chọn technique combo từ Technique Library — CỨNG

Trước khi dựng video mới, phải:

1. Mở `docs/videos/technique-library.md`
2. Chọn ít nhất: 2 Layout, 1 Hook, 3 Interaction, 4 Transition, 3 Effect
3. Ghi rõ combo đã chọn vào storyboard/data file
4. Combo KHÔNG ĐƯỢC trùng >50% với video đã có

Mục đích: Đảm bảo mỗi video có visual language riêng biệt, không bao giờ "na ná" video khác.
