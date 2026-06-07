# Video Review Never Again

File này là lớp ghi nhớ bắt buộc sau các lỗi đã bị creator báo trong quá trình dựng video EngPath. Trước mỗi lần dựng hoặc sửa video walkthrough, agent phải đọc file này cùng `docs/videos/pipeline.md`, `docs/videos/reference/workflow-rules.md` và `docs/videos/qa-checklist.md`.

## Rule cứng trước khi render full

- Không render full nếu chưa soi still ở giữa và gần cuối từng scene quan trọng. Lỗi thường lộ ở đoạn cuối scene, không chỉ ở frame giữa.
- Không chỉ kiểm tra video “chạy được”. Phải review thật bằng mắt: ảnh có đủ lớn không, effect có lệch không, text có đúng nghĩa sản phẩm không, caption TikTok có che hook không.
- Nếu creator đã báo lỗi một scene, phải kiểm tra lại scene đó ở full-res sau sửa, không suy luận từ code.
- Mỗi scene chỉ được có một ý chính. Nếu phải thêm hook phụ để giải thích thì scene đang yếu.

## Lỗi layout phải tránh

- Screenshot/product image không được nhỏ như minh họa phụ khi mục tiêu là show web/app. Tận dụng gần full màn, chỉ chừa khoảng cho hook và caption-safe.
- Không để nhiều gap trống lớn trong khi UI chính bị thu nhỏ.
- Không dùng strip, ribbon, sweep, blur, gradient hoặc vệt màu mờ che lên ảnh UI. Decoration không được làm giảm khả năng xem sản phẩm.
- Không đặt text/hook chính vào vùng caption TikTok ở đáy video. Phải giả định TikTok có caption dài vừa che phần dưới.
- Outro mặc định chỉ có một kết luận chính. Không thêm hook phụ, chip phụ hoặc câu phụ nếu creator không yêu cầu.

## Lỗi semantic phải tránh

- Không tự đặt lại nghĩa của UI. Nếu UI là “đã học 6/35 ngày gần đây” thì không gọi là “lịch học hiện tại”.
- Overlay phải bám đúng thông tin đang nói. Nếu hook nói năng lực/kỹ năng thì phải highlight khối năng lực, không highlight XP chỉ vì dễ khoanh.
- Text label phải đúng dữ liệu thật trong ảnh: unit, tab, role, trạng thái, tên module.
- Chatbot scene phải show đúng loại tương tác đang claim. Nếu claim “hỏi tiến trình” thì nội dung chat phải là tiến trình học, không phải hỏi essay score.
- Không dùng proof giả hoặc label generic để cứu một ảnh không nói đúng ý.

## Lỗi effect phải tránh

- Viền, circle, cursor, ripple, line, radar, underline phải neo đúng pixel của object thật. Lệch vài chục pixel là fail.
- Nếu không canh được vị trí tương tác, bỏ effect hoặc dựng lại asset/crop, không để effect “gần đúng”.
- Line/scan/radar phải nằm trong card hoặc vùng được highlight; không tràn qua khe giữa card hoặc che text chính.
- Không dùng hai thanh ngang/trang trí khi chỉ cần một focus rõ. Mỗi effect phải chứng minh được state, process, handoff hoặc proof.
- Không lặp cùng form effect quá nhiều scene liên tiếp: khoanh viền, black chip, scan line, pill label phải được audit trước khi thêm.

## Checklist “soi bằng mắt” sau mỗi bản sửa

1. Ảnh chính có chiếm đủ màn chưa?
2. Có decoration nào đang che ảnh hoặc làm ảnh mờ đi không?
3. Hook/caption có nằm trong vùng TikTok caption có thể che không?
4. Label có đúng nghĩa thật của UI không?
5. Highlight có đúng object mà hook đang nói không?
6. Cursor/ripple/circle có bám đúng điểm thao tác không?
7. Scene cuối có còn hook phụ/chip phụ không cần thiết không?
8. Nếu scene claim chatbot/AI/progress, nội dung trên ảnh có khớp claim không?
9. Xem frame cuối scene: có object nào drift, lệch, tràn hoặc che text không?
10. Nếu fail một điểm, sửa và render still lại trước khi render full.
