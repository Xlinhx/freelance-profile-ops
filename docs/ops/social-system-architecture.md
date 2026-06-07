# Kiến Trúc Hệ Thống Social Content

Ngày cập nhật: 2026-04-21 Asia/Saigon.

Mục tiêu của file này là chốt tư duy hệ thống cho workspace:

- tự động được phần nào
- phần nào không nên phụ thuộc
- agent nên hiểu context ra sao
- nếu phát triển thành web app hoặc SaaS thì nên đi theo wedge nào

## Luận Điểm Gốc

Không nên build một "social scheduler chung chung".

Thứ đáng build hơn là một `proof-to-client operating system`:

- nhận project thật
- đóng gói thành proof
- sinh content package theo từng nền tảng
- theo dõi publish, metric, lead
- cập nhật lại profile, case study, CV, offer

Tức là trọng tâm không phải "đăng bài", mà là `đồng bộ hệ ngữ cảnh giữa project, profile, content và lead`.

## Thực Tế API Từng Nền Tảng

### YouTube

- Có đường official khá rõ cho OAuth và upload.
- YouTube Data API dùng `OAuth 2.0` cho private user data; không hỗ trợ service account.
- Video upload qua `videos.insert` từ project API chưa verify sẽ bị khóa ở `private viewing mode` cho tới khi qua audit.
- Mặc định quota hàng ngày vẫn đủ cho version đầu nếu chỉ dùng cho chính bạn.

Ý nghĩa kiến trúc:

- Có thể dùng YouTube làm connector chính thức cho upload draft và sync metrics.
- Không nên thiết kế backend kiểu server-to-server với service account.

### TikTok

- Có official `Content Posting API`.
- Muốn direct post cần scope `video.publish`.
- App chưa audit thì content upload qua API cũng bị giới hạn ở `private viewing mode`.
- TikTok còn có posting cap theo creator trong cửa sổ 24 giờ.

Ý nghĩa kiến trúc:

- TikTok có thể là connector thật cho `upload-to-draft` hoặc `direct post`.
- Nhưng version đầu nên đi `draft-first`, không nên full-auto publish.

### LinkedIn

- LinkedIn có đường `Sign In with LinkedIn` theo `OpenID Connect` cho authentication.
- Posting cho member dùng `w_member_social`.
- Quyền đọc member posts/social/analytics bị restricted; tài liệu ghi `r_member_social` chỉ dành cho approved users.
- LinkedIn đã có `memberCreatorPostAnalytics` cho partner/community management flow.

Ý nghĩa kiến trúc:

- Dùng LinkedIn cho sign-in và lưu profile identity là hợp lý.
- Nhưng không nên đặt SaaS sống chết vào member posting/analytics nếu chưa có app approval thật.
- LinkedIn nên là connector "hỗ trợ mạnh khi được duyệt", không phải assumption cứng ở MVP.

### Upwork

- Upwork API có OAuth 2.0 và docs khá đầy đủ.
- Nhưng API key không mở toang: cần account đủ điều kiện, identity verification, payment method verified.
- Tài liệu nêu rõ không có sandbox cho third-party developers.
- Commercial use chỉ dành cho đối tác được cho phép trước.
- Daily request limit công bố là `40K requests`.

Ý nghĩa kiến trúc:

- Upwork không phải mảnh nên lấy làm trục phụ thuộc của một SaaS mở cho mọi người ở giai đoạn đầu.
- Hợp hơn cho internal tool hoặc personal operator sau khi account/app đã được chấp thuận.

### Facebook Personal Profile

- Về mặt sản phẩm, đây không nên là trục automation.
- Thực tế nên xem Facebook personal profile là kênh `manual-first`.
- Nếu cần API chính thức của Meta, hướng thực tế hơn là `Facebook Page` hoặc `Instagram professional account`, không phải profile cá nhân.

Đây là suy luận vận hành từ giới hạn platform và use case thực tế: đừng build core system dựa trên việc tự động post hay đọc sâu từ Facebook personal profile.

### GitHub

- GitHub là connector dễ nhất trong nhóm này.
- Có thể dùng để sync project, README, release note, issue, discussion, repo metadata.

Ý nghĩa kiến trúc:

- GitHub nên là nguồn proof kỹ thuật và automation phụ trợ, không phải social hub.

## Kết Luận Về Automation

Nên chia automation thành 4 tầng:

### Tầng 1: Chuẩn Bị

- ingest project
- lưu proof
- generate brief, script, storyboard, caption
- map content sang từng nền tảng

Tầng này nên tự động tối đa.

### Tầng 2: Đồng Bộ Ngữ Cảnh

- cập nhật profile pack
- cập nhật case study pack
- cập nhật CV bullet
- gắn project với niche, offer, CTA, target client

Tầng này nên bán tự động, luôn có review.

### Tầng 3: Publish Connector

- YouTube upload draft
- TikTok upload draft
- LinkedIn draft/post nếu app đã được cấp quyền
- GitHub/CV deploy

Tầng này chỉ bật cho nền tảng nào có official path đủ ổn.

### Tầng 4: Public Auto-Execution

- auto publish hàng loạt
- auto reply
- auto update social profile
- auto outreach

Tầng này không nên là ưu tiên đầu.

## Agent Context Nên Tổ Chức Thế Nào

Đừng để agent "đọc từng nền tảng riêng lẻ". Nên có một `context graph` chung.

Mỗi project nên nối với:

- niche
- pain point
- target client
- offer angle
- proof assets
- publish artifacts
- platform state
- lead outcomes

Một object tối thiểu:

```json
{
  "projectId": "demo-001",
  "title": "AI grading cho giáo viên",
  "niche": "education",
  "painPoint": "chấm bài và phản hồi tốn thời gian",
  "offerAngle": "AI tool giảm thao tác thủ công",
  "proof": {
    "screenshots": [],
    "demoUrl": "",
    "repoUrl": "",
    "videoClips": []
  },
  "platforms": {
    "linkedin": { "status": "draft" },
    "tiktok": { "status": "idea" },
    "youtube": { "status": "published" },
    "facebook": { "status": "draft" },
    "upwork": { "status": "portfolio-candidate" }
  },
  "leadSignals": {
    "views": 0,
    "inboundMessages": 0,
    "qualifiedLeads": 0
  }
}
```

Khi đó agent không cần "nhớ từng nền tảng"; agent chỉ query context graph rồi render output theo connector rules.

## Kiến Trúc Web + MCP + CLI Agents

## Lớp 1: Source Of Truth

- `data/` + `projects/` + `assets/` trong repo
- sau này có thể sync sang SQLite/Postgres
- repo vẫn là canonical archive

Trong mode vận hành mới, repo không bắt buộc giữ toàn bộ raw asset làm việc. Repo giữ metadata, docs, context, code và selected proof; asset runtime lớn có thể nằm trên VPS.

## Lớp 2: Content Core API

Web app nên có backend riêng cho:

- project
- asset
- content package
- campaign
- platform account
- publish job
- metric sync
- lead event

## Lớp 3: Provider Connectors

Mỗi nền tảng là một adapter riêng:

- `youtubeConnector`
- `tiktokConnector`
- `linkedinConnector`
- `upworkConnector`
- `githubConnector`
- `manualConnector`

Rule quan trọng:

- không để business logic nằm trong connector
- connector chỉ lo auth, capability, publish, sync, rate limit, error mapping

## Lớp 4: Agent Layer

Agent layer không gọi social platform trực tiếp. Agent layer nên gọi content core.

Ví dụ:

1. agent lấy project context từ content core
2. agent tạo `content package`
3. human duyệt
4. content core tạo `publish job`
5. connector phù hợp thực thi

Như vậy web app có thể thay model, thay agent, thay workflow mà không phá provider layer.

## Lớp 5: MCP Gateway

MCP nên là cầu nối cho agent/operator, không phải backend business chính.

MCP phù hợp cho:

- đọc repo local
- screenshot qua Playwright
- deploy CV
- truy vấn DB nội bộ
- thao tác file asset

MCP không nên là nơi giữ logic publish pipeline chính của SaaS.

## Lớp 6: Worker + Queue

Nếu muốn scale thành system thật:

- render queue
- asset processing
- thumbnail generation
- publish jobs
- metric sync jobs
- nightly campaign analysis

Đây là chỗ VPS phát huy tác dụng rõ nhất. Trong mode hiện tại, runner nặng nên đặt trên VPS thay vì cố đẩy sang edge runtime.

## Web App Nên Có Những Module Gì

Version internal tool:

- `Projects`
- `Proof Library`
- `Content Packages`
- `Campaigns`
- `Platform Accounts`
- `Publish Queue`
- `Metrics`
- `Leads`
- `Agent Runs`

Version SaaS mới thêm:

- `Workspaces`
- `Members`
- `Billing`
- `Templates`
- `Connector Settings`
- `Audit Logs`

## Tính Tuỳ Chỉnh Cao Nên Đặt Ở Đâu

Không nên hard-code campaign trong prompt.

Nên tách:

- `brand profile`
- `campaign profile`
- `platform rules`
- `agent policy`

Ví dụ:

- brand profile: tone, service categories, proof standards
- campaign profile: mục tiêu tháng này, target client, offer angle
- platform rules: TikTok hook ngắn, LinkedIn formal hơn, Facebook local hơn
- agent policy: được tạo draft gì, được publish gì, cần approval ở bước nào

Khi đó web app có thể cho đổi chiến dịch mà không phải sửa model logic.

## Nếu Muốn Thành SaaS

Đừng bán:

- AI caption tool
- social scheduler chung chung
- profile optimizer chung chung

Những chỗ đó đã rất đông người.

Nên bán:

- hệ thống biến project thật thành `profile + case study + content + lead workflow`

Wedge hợp lý nhất:

- technical freelancers
- automation/AI consultants
- web agencies nhỏ

Pain của họ rõ hơn marketer nói chung:

- có project nhưng không biết đóng gói thành proof
- profile rời rạc
- content không nối được với case study
- không biết project nào kéo được khách

## Cạnh Tranh Hiện Tại

### Buffer

- mạnh về publish/schedule đa nền tảng
- đã có AI assistant
- nhưng không đi sâu vào proof-to-client workflow

### Metricool

- mạnh về analytics + planner + social management
- phù hợp social operator/agency
- không chuyên cho freelancer kỹ thuật muốn đóng gói project proof

### Taplio

- mạnh về LinkedIn growth, AI content, analytics
- nhưng thiên về growth trên LinkedIn hơn là hệ thống proof đa nền tảng

### Postiz

- open-source, mạnh ở scheduling/social ops
- gần hơn với tầng execution
- nhưng vẫn không phải "project proof -> client acquisition OS"

## Chỗ Có Thể Thắng

Không cạnh tranh trực diện với Buffer/Metricool/Taplio/Postiz.

Thay vào đó, đứng ở lớp phía trên:

- intake project proof
- generate platform-specific packages
- map content sang offer
- track lead quality theo từng project/content
- update lại profile/CV/case study

Nói ngắn:

`các tool kia quản lý bài đăng`

`mình quản lý ngữ cảnh kinh doanh của người làm dịch vụ kỹ thuật`

## Kiến Trúc Linh Hoạt Nhất

Nếu muốn vừa làm nội bộ, vừa để mở đường thành SaaS:

### Giai đoạn 1: VPS-first Internal Tool

- repo là source of truth cho metadata, context, code
- VPS là nơi chạy app, runner và asset working folder
- Codex CLI hoặc worker là operator
- publish phần lớn vẫn manual hoặc draft-first

### Giai đoạn 2: Hybrid

- web app có auth
- DB riêng
- worker queue
- YouTube/TikTok/GitHub connector thật
- LinkedIn/Upwork để ở chế độ selective

### Giai đoạn 3: SaaS

- workspace multi-tenant
- campaign templates
- connector marketplace
- agent run history
- billing
- optional self-host / enterprise mode

## Quy Tắc Không Được Phá

- không để token social nằm rải rác trong prompt hoặc file text thường
- không cho agent full publish power mặc định
- không lấy browser automation làm xương sống nếu có official API
- không để profile cá nhân Facebook thành dependency cứng
- không để dữ liệu project proof bị tách khỏi content outcome

## Hướng Đi Thực Dụng Nhất Cho Workspace Này

Trong ngắn hạn:

1. giữ repo làm backbone cho metadata và context
2. build web control panel nội bộ trên VPS
3. dùng VPS asset folder cho raw asset, screenshot batch, renders
4. dùng connectors thật cho YouTube, TikTok, GitHub khi cần
5. để LinkedIn/Upwork ở mode thận trọng vì approval/API restriction
6. dùng agent để hiểu context và generate package, không cho agent tự publish toàn quyền

Trong dài hạn:

- sản phẩm có thể thành SaaS
- nhưng nên productize từ nội bộ dùng thật
- không nên bắt đầu bằng multi-platform posting SaaS
- nên bắt đầu bằng `technical freelancer proof OS`

## Nguồn Tham Chiếu Chính

- YouTube OAuth: `https://developers.google.com/youtube/v3/guides/authentication`
- YouTube upload restriction: `https://developers.google.com/youtube/v3/revision_history`
- TikTok Content Posting API: `https://developers.tiktok.com/doc/content-posting-api-get-started/`
- TikTok sharing guidelines: `https://developers.tiktok.com/doc/content-sharing-guidelines/`
- LinkedIn Posts API: `https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api`
- LinkedIn recent API changes: `https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes`
- LinkedIn OIDC sign-in: `https://www.linkedin.com/developers/news/featured-updates/openid-connect-authentication`
- Upwork API key request: `https://support.upwork.com/hc/en-us/articles/115015857647-How-to-request-an-API-key-from-Upwork`
- Upwork GraphQL API docs: `https://www.upwork.com/developer/documentation/graphql/api/docs/index.html`
- Buffer: `https://buffer.com/`
- Metricool: `https://metricool.com/social-media-analytics-tool/`
- Taplio: `https://taplio.com/`
- Postiz: `https://postiz.com/`
