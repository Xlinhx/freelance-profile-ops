# Capture Map

## Quy ước

- `type`: screenshot / recording / hybrid
- `plane`: native UI / editorial overlay / hybrid
- `status`: keep / recapture / optional

| Scene | Role | Tab / Route | Action thật cần quay | Type | Plane | Status | Hero hay Support | Rủi ro nếu capture sai |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | buyer view | homepage | full shot sạch, hero area, capability area | screenshot | native UI | keep / có thể recapture | support | hook vẫn dễ loạn nếu nền không đủ sạch |
| 02 | giáo viên | dashboard / classes / library / bank | breadth overview của teacher suite | screenshot | hybrid | recapture chọn lọc | support | card nhỏ + crop sai làm breadth thành loạn |
| 03 | giáo viên -> học sinh | create exam / student dashboard | click tạo bằng AI, state sau khi giao bài | hybrid | hybrid | recapture | primary proof | nếu click / state không rõ sẽ mất logic |
| 04 | học sinh | exam room | full shot sạch, không scroll filler | recording / screenshot | native UI | keep / recapture nhẹ | secondary proof | viewer không hiểu luồng làm bài |
| 05 | học sinh | chat nhân vật | full shot sạch + state hỏi + state trả lời + input controls | hybrid | hybrid | recapture bắt buộc | primary proof | scene hiện tại quá nhiều vùng đọc |
| 06 | học sinh | đa vũ trụ | full shot sạch + root state + branch state + storyline list | hybrid | hybrid | recapture bắt buộc | primary proof | scene hiện tại breadth và detail chồng nhau |
| 07 | giáo viên / học sinh | results / ai review / profile | proof chính + proof phụ | screenshot | hybrid | recapture chọn lọc | secondary proof | proof stack hiện tại vẫn kiểu collage |
| 08 | buyer view | homepage / overall system | overview panel hoặc system map | screenshot | editorial overlay | keep / optional | outcome | outro có thể lại thành tổng kết chung chung |

## Checklist Capture

- đã có full-context shot cho mỗi flow lớn
- đã có click / hover / type thật ở scene 03
- đã có state trước / sau rõ cho chat và multiverse
- không lộ browser chrome / URL
- asset đủ sạch để không phải crop cứu
