# Storyboard EngPath Reset

Trạng thái: đã dựng thành composition `EngpathResetWalkthrough`, 10 scene, 45s.

| Scene | Frames | Purpose | Layout | Proof | Text chính | QA |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | 0-109 | Định vị EngPath là hệ thống học + AI | Landing crop + system badges | Landing thật | `Từ lớp học / đến AI feedback` | Pass |
| 02 | 110-229 | Cho thấy dashboard học sinh không rời rạc | Dashboard crop | Progress, XP, lịch học | `Tiến độ học / không bị rơi rớt` | Pass |
| 03 | 230-349 | Lộ trình học theo unit | Roadmap rail | Unit list lớp 11 | `Mỗi unit / là một bước học` | Pass |
| 04 | 350-479 | Unit gom các khu học tập | Unit overview | Skill cards | `Một unit / có đủ khu học tập` | Pass |
| 05 | 480-614 | Show breadth kỹ năng | Skill stack | Vocab, grammar, reading/listening | `Không chỉ một tab / mà là cả vòng luyện tập` | Pass có lưu ý dày |
| 06 | 615-764 | Hero action: gửi bài cho AI | Writing screen + cursor/ring | Essay + `AI Chấm bài` | `Viết bài xong / gửi AI chấm` | Pass |
| 07 | 765-939 | Hero payoff: feedback có rubric | AI result reader | Rubric, score, gợi ý sửa | `Feedback có rubric / và hướng sửa cụ thể` | Pass |
| 08 | 940-1089 | Hỏi tiếp sau feedback | Feedback context + chat dock | Chat follow-up thật | `Hỏi tiếp / sau feedback` | Pass sau fix layout |
| 09 | 1090-1219 | Kết quả tiến trình | Achievements crop | XP, level, leaderboard | `Học xong / có tiến trình nhìn thấy` | Pass |
| 10 | 1220-1349 | Tổng kết hệ thống | System collage | Roadmap, skills, AI feedback | `Roadmap / Skills / AI feedback` | Pass |

## Story checks

- Hero là scene 06-08, không phải dashboard.
- Không show teacher dashboard vì chưa login được teacher credential.
- Mỗi scene có một proof chính, copy ngắn và không che object cần đọc.
- Đã review cả frame giữa scene và 12 frame cuối từng scene từ MP4 render thật.
