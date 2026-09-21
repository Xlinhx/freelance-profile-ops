> Tài liệu review lịch sử của thiết kế cũ, không còn là brief triển khai hiện hành. Bộ thiết kế thay thế và hướng dẫn mới: [assets/concepts/README.md](../../assets/concepts/README.md). Chỉ giữ các nhận xét kỹ thuật còn phù hợp; không phục hồi bố cục cũ.

# Xlinhx — yêu cầu sửa bản Gemini theo mockup đã chốt

Đối chiếu ngày 2026-09-17: `assets/screenshots/xlinhx-fullpage.png` (1784 × 7340), ảnh mở tech stack người dùng gửi, hai mockup trong `assets/concepts/`, và source `portfolio/xlinhx/`. Đây là review ảnh + source, chưa phải kết quả chạy thử tương tác/mobile.

## Kết luận và phạm vi

Bản hiện tại giữ tên section và các vật thể, nhưng sai cách tổ chức không gian: nó là một landing page nền phẳng, bên trên đặt các ảnh chữ nhật bo góc. Mockup là một studio xuyên suốt: nền, ánh sáng, vật thể, bóng tiếp xúc và mép sứ cùng tạo thành section. Cần sửa cấu trúc cảnh trước, không chỉ đổi màu hay tăng shadow.

Giữ concept trắng sữa–xanh ngọc–petrol, thứ tự journey, tên Xlinhx và cảnh phong thư kết thúc. Không thiết kế style mới. Chỉ card dự án và các control phù hợp mới cần bề mặt card; không bọc mọi hình minh họa vào card.

**Yêu cầu mới của người dùng thay thế brief placeholder trước đây:** gallery phải phục hồi ảnh, nội dung và panel/popup dự án thật từ portfolio cũ. Chỉ điều chỉnh giao diện/màu sắc theo Xlinhx. Hai mockup vẫn là chuẩn thị giác, nhưng tên và preview placeholder trong mockup không còn là yêu cầu về dữ liệu dự án.

## 1. Sửa nền và chuyển cảnh trước — P1

**Đang sai:** nền hiện tại gần như một màu xám sữa với vài radial gradient. Ánh sáng cửa sổ/lá cây chỉ xuất hiện bên trong từng ảnh chữ nhật. Khi hết ảnh, ánh sáng bị cắt; khoảng trống giữa section thay cho chiều sâu của cảnh. Nhịp nhiều section trở thành “heading → hộp nội dung → khoảng trắng”.

**Bằng chứng source:** `styles.css:52` dùng gradient cho body; `body::before` tại dòng 65 được gọi là leaf shadow nhưng thực tế vẫn là hai radial gradient. `.container` tại dòng 77 giới hạn toàn bộ nội dung ở 1180px. `.porcelain-wave-divider` có CSS nhưng không được gắn vào HTML.

**Cách sửa:** tách lớp nền/cảnh full-width khỏi lớp chữ và control có max-width. Tạo studio background theo từng vùng với cùng hướng sáng, nhiệt độ màu và mặt phẳng. Giữ vùng chữ yên để đọc; bóng lá/cửa sổ tiết chế ở rìa, không phủ đậm lên chữ. Gen lại asset nếu ảnh nền hiện tại không đủ biên để hòa vào trang. Không chỉ bỏ border-radius rồi để lại hình chữ nhật.

**Khôi phục các mép chuyển cảnh cụ thể:**

- Hero → năng lực: một mép sứ uốn rộng có gờ sáng, lớp dưới hơi xanh xám và bóng mềm; mặt bàn hero trôi tới mép này, không kết thúc ở khung ảnh.
- Năng lực → dự án: bề mặt trưng bày đi qua dưới ba giao diện, dòng “Xem công nghệ” nằm trong vùng nền đó; mép uốn mở sang gallery.
- Gallery → cộng tác: dải thấp mềm dưới gallery nối vào nền cảnh tiếp theo. Không ghép nguyên hai PNG với một đường nối ngang.
- Cộng tác → kiểm thử: mép bề mặt chạy dưới canvas/bút và dòng giới thiệu; tiếp tục tới vùng tiêu đề kiểm thử.
- Kiểm thử → bàn giao: đường cong thấp chạy dưới chú thích quy trình, không thay bằng một pill trắng.
- Bàn giao → liên hệ: FAQ là hàng mảnh gắn vào mặt nền; phía dưới có mép chuyển sang cảnh phong thư.
- Liên hệ → footer: một bề mặt trắng dịu nâng chân trang; không chỉ dùng một đường border ngang.

Mép chuyển cảnh là **bề mặt có chiều sâu**, không phải stroke SVG đơn lẻ. Có thể dùng asset, mask, SVG/CSS hoặc kết hợp; mỗi mép theo hình của mockup, không copy một sine wave giống nhau 6 lần. Chỉ mask vùng nền cần hòa, không làm nhòe silhouette vật thể.

**Đạt khi:** nhìn fullpage thấy một studio liên tục; vẫn phân biệt rõ từng chặng bằng mặt nền và bố cục, không thấy ranh giới ảnh nhập vào trang.

## 2. Hero — P1

**Đang sai:** cảnh đèn/logo bị nhốt trong một thẻ chữ nhật ở nửa phải, có radius và shadow ngoài. Hero thành layout hai cột thông thường. Vật thể, chân đế, ánh sáng và bóng lá không tham gia vào nền của phần chữ. Heading nặng hơn mẫu; ảnh gen hơi ngả xám ấm so với phần nền ngoài.

**Sửa:** bỏ lớp trang trí `.hero-visual-frame` (`styles.css:214`) theo kiểu photo card. Mở cảnh ra rộng; chữ Xlinhx trên chân đế ở thấp gần trung tâm, đèn phía phải, ánh sáng trải qua toàn hero. Giữ HTML cho heading/CTA và khoảng trống bên trái; không bake cả hero thành ảnh có chữ. Chỉnh weight/scale heading theo mẫu, giảm cảm giác headline đậm và nút nổi bóng. Nav cùng nằm trong không gian hero.

**Đạt khi:** không còn bốn cạnh/bo góc bao ảnh; đế sứ thật sự đặt trên mặt nền trang, chứ không nằm trong một tấm ảnh nổi.

## 3. Năng lực — P1; cập nhật ý đồ sau review

**Đang sai:** ba mẫu phần mềm biến thành ba card trắng đặc cùng chiều cao. Mẫu đặt lịch/AI mất thân dáng thanh, panel ecommerce có khoảng rỗng lớn và hình ghế bị thu nhỏ. Các panel không còn chân đỡ, cạnh kính hay quan hệ với mặt sứ. Nhìn giống feature grid của SaaS.

**Bằng chứng:** `.solutions-grid` dùng `align-items: stretch`; `.solution-card` có `height:100%`, `min-height:470px`, padding 22px, nền trắng 0.94 và radius 24px (`styles.css:279–307`).

**Ý đồ mới thay thế ba UI cũ:** khách chưa chắc biết cần app gì, nên không chào bằng đặt lịch/ecommerce/chatbot. Dùng heading “Công việc nhẹ hơn. Mọi thứ rõ hơn.” và subtitle “Bắt đầu từ những điều đang khiến bạn mất thời gian.” Ba lợi ích là “Bớt làm tay” (tác vụ lặp đi theo một luồng tự động đến hoàn tất), “Thông tin liền mạch” (nhiều nguồn hợp về một hồ sơ, không nhập lại), “Dễ theo dõi” (trạng thái Cần làm/Đang làm/Hoàn tất). Ảnh `assets/concepts/01-xlinhx-upper.png` đã được thay bằng bản mới. Không phục hồi ba ví dụ cũ khi sửa layout.

**Sửa bố cục:** ba cảnh tượng hình có silhouette và độ cao khác nhau trên cùng mặt sứ; trung tâm là cảnh hợp nhất thông tin. Cạnh kính mảnh, phản xạ và bóng tiếp xúc; không dùng opacity/blur trên hộp trắng rồi gọi là kính. Dựng chữ/chi tiết cần đọc bằng HTML khi ảnh AI sai; các chữ nhỏ lỗi trong mockup không phải nội dung chuẩn. Chú thích đi cùng vật thể, nền hòa với section. Không biến các cảnh thành ba bảng dashboard hoặc ba feature card.

**Đạt khi:** khách nhận ra ba lợi ích chung mà không cần biết thuật ngữ phần mềm; mỗi hình thể hiện đúng lời chú thích, không còn lịch đặt chỗ/ghế bán hàng/chatbot trong section này và không có ba hộp giống nhau.

## 4. Tech stack mở rộng — P1 về craft, P2 về chi tiết

Ảnh người dùng gửi cho thấy một capsule dài với sáu logo trôi giữa vùng trắng, không nhãn. Đây là phần phụ đúng phạm vi nhưng thiếu thiết kế: khoảng trống lớn, logo lệch diện tích thị giác, người không biết công nghệ phải đoán. Mockup chỉ chốt trạng thái đóng, vì vậy phần mở cần được thiết kế bổ sung; không coi capsule hiện tại là yêu cầu của mẫu.

**Sửa:** giữ trigger “Xem công nghệ +/−” nhẹ. Mở thành một dải/surface thấp hòa với nền studio, không thêm pill to bên trong pill. Mỗi công nghệ có logo chuẩn và tên nhỏ; căn theo diện tích nhìn thấy, không chỉ cùng `height:28px`. Docker ngang cần cách cân riêng với TypeScript vuông và React nhiều khoảng rỗng. Sáu mục là đủ nếu đúng năng lực; không kéo toàn bộ icon trong thư mục ra để lấp chỗ. Có thể chia nhẹ frontend và backend/vận hành bằng khoảng cách, không cần các card con.

Kiểm tra nguồn SVG theo nguồn chính thức trong brief; file tên đúng chưa chứng minh logo đúng. Giữ variant hợp lệ, không tự vẽ/biến dạng logo. Hover/focus có phản hồi tinh tế, tên không phụ thuộc tooltip `title`. Accordion có trạng thái ARIA đúng và keyboard hoạt động; panel tự cao theo nội dung khi mobile wrap, tránh `max-height:200px` cố định cắt mất logo/nhãn. Không làm phần này thành một showcase lớn tranh với sản phẩm.

## 5. Gallery dự án — P0 về mất khả năng xem dự án

**Về hình:** hiện có đúng nhịp 2 card lớn + 3 card nhỏ, nhưng nhiều wrapper bo tròn/padding khiến preview co lại. Tên/caption đứng ngoài bề mặt card, tách khỏi preview; mẫu cho thấy một card liền khối bao ảnh và footer. Preview dựng giả có chữ rất nhỏ, khoảng trống không chủ đích và control không liên quan tới việc xem dự án.

**Sửa hình:** giữ card thật, thống nhất ảnh + metadata + action trong cùng một bề mặt, radius nhỏ hơn hiện tại, preview lớn. Dùng screenshot dự án cũ, không tự gen screenshot thay cho proof. Không phủ màu xanh lên nội dung screenshot; chỉ theme vỏ card/popup. Hình chụp admin là đúng nếu dự án đó có admin, không ép screenshot thật thành các loại UI trong placeholder.

**Sửa chức năng theo yêu cầu mới:** phục hồi toàn bộ danh mục hợp lệ, click card mở panel/popup chi tiết đúng dự án. Không giữ nút/arrow giả hoặc để click vào hình dự án nhảy xuống liên hệ. Không buộc danh mục thật chỉ còn 5 mục vì mockup có 5 placeholder; giữ nhịp featured gần mẫu và cơ chế xem toàn bộ cho phần còn lại.

### Nguồn khôi phục đã xác định

Lúc review, `git diff` và `git diff --cached` đều không có thay đổi tracked; `portfolio/xlinhx/` đang **untracked**. Vì vậy không thể nói “diff rỗng nghĩa là không mất chức năng”. Portfolio cũ đang tracked và còn nguyên:

- `portfolio/portfolio-spatial/project-showcase.js`: `PROJECT_CASES`, render card, popup chi tiết, showcase và tab mobile.
- `portfolio/portfolio-spatial/project-showcase.css`: bố cục case study/screenshot, device frame, responsive tab và styling liên quan.
- `portfolio/portfolio-spatial/index.html:1460`: modal danh sách; dòng 1474: modal chi tiết.
- `portfolio/portfolio-spatial/main.js:901`: logic danh sách; quanh dòng 1148: đóng chi tiết/scroll lock/Escape. Cần đọc cùng `project-showcase.js` vì hàm mở chi tiết được override.
- `portfolio/portfolio-spatial/assets/projects/`: ảnh thật của từng dự án. Các path tương đối phải được giải quyết đúng khi đưa vào Xlinhx.

Gemini phải kiểm tra lại `git status`, `git diff`, `git diff --cached` và history ở môi trường của mình trước khi sửa. Có thể đối chiếu thư mục bằng `git diff --no-index`; exit 1 lúc đó chỉ có nghĩa hai bản khác nhau. Dùng `git show` để đọc bản cũ nếu cần, không reset/checkout cả file hoặc cả repo làm mất công việc hiện tại.

Danh sách hiệu lực trong source hiện có **6 dự án**: FabSolution, Thương mại điện tử bán sỉ (dealer), Cổ Nhơn, EngPath, Văn Hiến và Sử Ký. `uicar` và `muong` có khai báo ban đầu nhưng đã bị lọc khỏi danh sách cuối tại `project-showcase.js:382`; không phục hồi mù quáng hai mục này. Không suy luận từ số object ban đầu.

### Hành vi phải giữ khi port

- Card dùng `cover`, title, summary/category của đúng project; mở theo ID.
- Danh sách tất cả và bộ lọc theo danh mục có dữ liệu, không mất các dự án ngoài featured.
- Popup có tóm tắt, loại dự án, trạng thái, vai trò, bài toán, tech stack theo lớp, kiến trúc và demo URL có sẵn.
- Showcase chuyển PC/Mobile, ảnh trước/sau, caption và chỉ báo ảnh; giữ `contain`/fallback ở những mục có chủ đích. Không kéo dãn ảnh desktop thành ảnh mobile rồi coi là screenshot mobile mới.
- Trên mobile giữ cách chia Tổng quan / Ảnh / Stack / Kiến trúc; chuyển dự án reset trạng thái ảnh/thiết bị đúng cách.
- Đóng bằng nút, backdrop, Escape; khóa/mở cuộn nền đúng. Bổ sung/kiểm tra dialog semantics, focus trap và trả focus về card mở — đây là tiêu chí cần kiểm tra, không khẳng định code cũ đã có đủ.

Chỉ port phần cần dùng, không copy nguyên `main.js`/`project-showcase.js` rồi vô tình kéo thêm testimonials hoặc script của trang cũ. Popup mới dùng trắng sữa, petrol, xanh ngọc, radius/border vừa phải; giữ nội dung ảnh và các chức năng, không mang nguyên theme cũ sang.

## 6. Cộng tác “Cùng làm rõ…” — P1

**Đang sai:** canvas là một ảnh landscape trong khung bo góc lớn; bút và kẹp nằm bên trong ảnh nên cạnh ảnh cắt cả môi trường. Vùng title, ảnh và dòng giới thiệu tách thành ba block. Ảnh gen xuất hiện nhiều tên cursor lạ như Trực/Quân, ghi chú lỗi; không còn đúng cặp Bạn/Lĩnh. Chuyển sang toàn wireframe cũng làm mất cân bằng giữa preview sản phẩm và luồng trao đổi của mẫu.

**Sửa:** bỏ photo wrapper `.collab-canvas-frame` (`styles.css:1099`), dựng canvas như vật thể rộng trên nền liên tục, góc nghiêng nhẹ; bút và kẹp có bóng chạm cùng mặt nền. Giữ phần preview travel bên trái, customer journey bên phải và đúng hai cursor Bạn/Lĩnh. Ghi chú chỉ cần “Ưu tiên đặt lịch”, “Rút ngắn thao tác”; nên overlay text/vector nếu AI tiếp tục sai chữ. Dòng giới thiệu ở vùng sáng dưới canvas, gần trung tâm-phải như mẫu, liên kết Về tôi bên phải. Không tách thành banner tiểu sử.

## 7. Kiểm thử “Thử kỹ…” — P1

**Đang sai:** một hộp trắng lớn bọc hai card trắng nhỏ và checklist; toàn bộ vật thể bị thu nhỏ bên trong padding. Desktop/mobile giống hai widget thay vì hai viewport của cùng sản phẩm. Bên dưới thêm pill cho câu “Xem bản chạy thử…” trong khi mẫu là chữ đặt trên mép sứ. Ba địa danh dùng cùng một ảnh làm nội dung lặp máy móc.

**Sửa:** bỏ vỏ `.testing-box` (`styles.css:1157`) dạng card lớn; đưa preview desktop/mobile thành một vật thể kính rộng, liền mạch, desktop chiếm ưu thế và mobile đủ cao. Checklist là panel nhỏ phụ, đặt lệch cạnh phải ở thấp, không chiếm một cột bằng nội dung chính. Chú thích nằm trực tiếp trên nền; bỏ capsule `.ribbon-pill` (`styles.css:1338`). Dùng một trang mẫu nhất quán giữa desktop/mobile, bố trí responsive thực chứ không phóng nhỏ nguyên desktop. Nếu có tay nắm so sánh như mockup thì implement thật; nếu chỉ là minh họa, đừng trình bày thành control giả. Kiểm tra ba ảnh destination không lặp vô nghĩa.

## 8. Bàn giao — P1

**Đang sai:** hộp bàn giao tự nó gần mẫu, nhưng bị bọc thành ảnh bo tròn chiếm cột phải; mặt bàn và bóng không nối với section. Caption bên trái đứng tách rời, FAQ thành một thanh card trắng dày có shadow.

**Sửa:** giữ asset hộp nếu chất lượng đáp ứng nhưng bỏ `.handover-visual-frame` (`styles.css:1376`) kiểu khung ảnh. Tách vật thể/background hoặc gen canvas rộng để mặt bàn nối tự nhiên; đừng chỉ xóa border. Hộp vẫn là trọng tâm ở phải, caption ngắn nằm trong cùng vùng sáng bên trái. Giữ ba thành phần Mã nguồn/Hướng dẫn/Vận hành. FAQ dùng một hàng mảnh theo bề mặt, border nhẹ và nền hòa vào scene; khi mở vẫn đọc được và không cắt nội dung. Không biến FAQ thành block quảng cáo lớn.

## 9. Liên hệ và footer — P1

**Đang sai:** phong thư bị đặt trong ảnh gần vuông bo góc, shadow ngoài như thumbnail sản phẩm. Mặt nền ảnh khác mặt nền trang. Khoảng cách giữa đoạn trước và liên hệ chỉ là trống; footer kết thúc bằng border thẳng, mất lớp bề mặt trắng của mẫu.

**Sửa:** giữ phong thư xanh ngọc, tấm brief “Ý tưởng của bạn”; bỏ `.envelope-frame` (`styles.css:1497`) dạng card. Phong thư hiện diện trực tiếp trên nền, góc nhìn cận ba phần tư, shadow chạm thật và scale như mockup. Copy bên trái cân với vật thể, không phóng heading nặng quá mức. Không thêm lại đèn hay đế hero. Footer gọn nằm trên mặt trắng nối tiếp, có khoảng thở nhưng không thành section khác.

## 10. Cách thực hiện và nghiệm thu

1. Giữ nguyên bản hiện tại để so sánh; kiểm tra Git và nguồn dữ liệu trước. Cập nhật gallery từ placeholder sang dữ liệu thật theo yêu cầu mới.
2. Sửa một lát cắt gồm **hero + mép chuyển + năng lực** trước. Đây là nơi chứng minh đã hiểu cách hòa cảnh. Chưa đạt thì không nhân pattern sai ra phần còn lại.
3. Với mỗi section, xác định nền, vật thể, UI, text và transition riêng. Gen lại nguyên cảnh nếu thuận lợi; nếu tiếp tục lệch thì gen riêng background/foreground rồi ghép, khớp phối cảnh/ánh sáng/bóng/độ nét. Text chính và control là HTML thật. Không dùng screenshot mockup nguyên trang làm website.
4. Đặt asset vào trang rồi chụp browser, đối chiếu section ở **cùng bề rộng tương đối** với reference. Không chỉ mở file asset rồi coi là đạt. Mockup và screenshot hiện tại khác aspect ratio nên so mốc tương đối, không lấy pixel height thô làm lỗi.
5. Lặp gen/lắp/render/sửa đến khi không còn khung ảnh nổi, đường nối ảnh, vật thể như sticker hoặc chuyển cảnh bị thiếu. Khớp silhouette, diện tích chủ thể và dòng đọc trước, sau đó mới chỉnh font/shadow chi tiết. Không kéo dài trang bằng padding để giả độ sâu.
6. Chụp fullpage desktop, mobile và trạng thái tech stack mở; chụp popup một dự án nhiều screenshot, PC/Mobile và tab mobile. Kiểm tra mọi card mở đúng dữ liệu, ảnh không 404, prev/next, close/backdrop/Escape, scroll lock và focus. Kiểm tra ảnh bàn giao và contact không bị crop mất ở mobile.

**Bộ bằng chứng bàn giao:** ảnh before/after fullpage cùng viewport; ảnh từng section sau sửa; ảnh tech stack mở; ảnh popup desktop/mobile; checklist thao tác đã thử và các phần còn chưa đạt. Không gọi hoàn thành chỉ vì build thành công, có đủ section hoặc ảnh gen riêng trông đẹp.

Ưu tiên: phục hồi khả năng xem dự án (P0) và sửa cấu trúc cảnh/chuyển cảnh (P1), sau đó cân typography, logo, hover và các chi tiết (P2). Không cần dựng lại ý tưởng thương hiệu.

