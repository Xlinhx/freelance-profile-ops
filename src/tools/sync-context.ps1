param()

$ErrorActionPreference = "Stop";

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot);
$generatedDir = Join-Path $repoRoot "docs/agent/generated";
$contentIndexPath = Join-Path $repoRoot "data/content-index.json";
$platformsPath = Join-Path $repoRoot "data/platforms.json";

New-Item -ItemType Directory -Force -Path $generatedDir | Out-Null;

$contentIndex = Get-Content -Raw -Encoding utf8 -Path $contentIndexPath | ConvertFrom-Json;
$platformData = Get-Content -Raw -Encoding utf8 -Path $platformsPath | ConvertFrom-Json;
$generatedAt = (Get-Date).ToString("yyyy-MM-ddTHH:mm:sszzz");

function Get-ProofState {
  param([object]$item)
  $hasProjectPath = -not [string]::IsNullOrWhiteSpace($item.projectPath);
  $hasScriptPath = -not [string]::IsNullOrWhiteSpace($item.scriptPath);
  $hasPublishLink = $false;
  if ($null -ne $item.publishLinks) {
    foreach ($prop in $item.publishLinks.PSObject.Properties) {
      if (-not [string]::IsNullOrWhiteSpace([string]$prop.Value)) {
        $hasPublishLink = $true;
        break;
      }
    }
  }
  if (($hasProjectPath -or $hasScriptPath) -and $hasPublishLink) { return "ready"; }
  if ($hasPublishLink) { return "publish-only"; }
  if ($hasProjectPath -or $hasScriptPath) { return "drafting"; }
  return "metadata-only";
}

$projectCatalog = [ordered]@{
  generatedAt = $generatedAt;
  sourceFiles = @("data/content-index.json");
  items = @();
};

$workQueueLines = @(
  "# Work Queue",
  "",
  "Tự sinh từ ``data/content-index.json`` và ``data/platforms.json``.",
  "",
  "Ngày sync: ``$generatedAt``",
  "",
  "## Content Items Cần Quyết Định",
  ""
);

$decisionItems = @();
$reuseItems = @();

foreach ($item in $contentIndex.items) {
  $hasPublishLink = $false;
  if ($null -ne $item.publishLinks) {
    foreach ($prop in $item.publishLinks.PSObject.Properties) {
      if (-not [string]::IsNullOrWhiteSpace([string]$prop.Value)) {
        $hasPublishLink = $true;
        break;
      }
    }
  }
  $projectCatalog.items += [ordered]@{
    id = $item.id;
    title = $item.title;
    status = $item.status;
    visibility = $item.visibility;
    platforms = @($item.platforms);
    targetClient = $item.targetClient;
    painPoint = $item.painPoint;
    offerAngle = $item.offerAngle;
    proofState = Get-ProofState -item $item;
    projectPath = $item.projectPath;
    scriptPath = $item.scriptPath;
    hasPublishLink = $hasPublishLink;
    nextAction = $item.nextAction;
  };
  if ($item.status -eq "idea" -or -not $hasPublishLink) {
    $decisionItems += "- ``$($item.id)``: $($item.nextAction)";
  } elseif ($hasPublishLink) {
    $reuseItems += "- ``$($item.id)``: $($item.nextAction)";
  }
}

if ($decisionItems.Count -eq 0) { $workQueueLines += "- chưa có"; }
else { $workQueueLines += $decisionItems; }

$workQueueLines += @("", "## Content Items Có Thể Tái Sử Dụng Ngay", "");

if ($reuseItems.Count -eq 0) { $workQueueLines += "- chưa có"; }
else { $workQueueLines += $reuseItems; }

$workQueueLines += @("", "## Platform Priorities", "");

foreach ($platform in $platformData.platforms) {
  $workQueueLines += "- ``$($platform.id)``: $($platform.currentPublicState)";
}

$platformSnapshot = [ordered]@{
  generatedAt = $generatedAt;
  sourceFiles = @("data/platforms.json");
  approvedDecisions = $platformData.approvedDecisions;
  platforms = @();
};

foreach ($platform in $platformData.platforms) {
  $platformSnapshot.platforms += [ordered]@{
    id = $platform.id;
    role = $platform.role;
    automationFeasibility = $platform.automationFeasibility;
    preferredAutomation = $platform.preferredAutomation;
    currentPublicState = $platform.currentPublicState;
  };
}

$syncStatus = [ordered]@{
  generatedAt = $generatedAt;
  sources = @("data/content-index.json", "data/platforms.json");
  outputs = @("docs/agent/generated/project-catalog.json", "docs/agent/generated/platform-snapshot.json", "docs/agent/generated/work-queue.md");
};

$projectCatalog | ConvertTo-Json -Depth 10 | Set-Content -Path (Join-Path $generatedDir "project-catalog.json") -Encoding utf8;
$platformSnapshot | ConvertTo-Json -Depth 10 | Set-Content -Path (Join-Path $generatedDir "platform-snapshot.json") -Encoding utf8;
$workQueueLines -join "`r`n" | Set-Content -Path (Join-Path $generatedDir "work-queue.md") -Encoding utf8;
$syncStatus | ConvertTo-Json -Depth 10 | Set-Content -Path (Join-Path $generatedDir "sync-status.json") -Encoding utf8;
