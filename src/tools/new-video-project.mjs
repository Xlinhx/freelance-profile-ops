import fs from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(currentFilePath), "..", "..");
const templateDir = path.join(repoRoot, "projects", "_template");
const presetsDir = path.join(repoRoot, "projects", "_presets");

const args = process.argv.slice(2);

const parseArgs = (argv) => {
  const options = {};

  for (const arg of argv) {
    if (!arg.startsWith("--")) continue;
    const [key, value = ""] = arg.slice(2).split("=");
    options[key] = value;
  }

  return options;
};

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

const ensureDir = async (dir) => {
  await fs.mkdir(dir, {recursive: true});
};

const copyDir = async (from, to, filterFn = () => true) => {
  await ensureDir(to);
  const entries = await fs.readdir(from, {withFileTypes: true});

  for (const entry of entries) {
    if (!filterFn(entry.name)) continue;

    const sourcePath = path.join(from, entry.name);
    const targetPath = path.join(to, entry.name);

    if (entry.isDirectory()) {
      await copyDir(sourcePath, targetPath, filterFn);
      continue;
    }

    await fs.copyFile(sourcePath, targetPath);
  }
};

const deepMerge = (base, patch) => {
  if (Array.isArray(base) || Array.isArray(patch)) {
    return patch;
  }

  if (
    typeof base !== "object" ||
    base === null ||
    typeof patch !== "object" ||
    patch === null
  ) {
    return patch;
  }

  const merged = {...base};

  for (const [key, value] of Object.entries(patch)) {
    if (!(key in merged)) {
      merged[key] = value;
      continue;
    }

    merged[key] = deepMerge(merged[key], value);
  }

  return merged;
};

const replaceTokens = async (filePath, replacements) => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    let next = content;

    for (const [token, value] of Object.entries(replacements)) {
      next = next.split(token).join(value);
    }

    if (next !== content) {
      await fs.writeFile(filePath, next, "utf8");
    }
  } catch {
    // Ignore binary files or unreadable files in this bootstrap.
  }
};

const walkFiles = async (dir) => {
  const output = [];
  const entries = await fs.readdir(dir, {withFileTypes: true});

  for (const entry of entries) {
    const target = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      output.push(...(await walkFiles(target)));
      continue;
    }

    output.push(target);
  }

  return output;
};

const main = async () => {
  const options = parseArgs(args);
  const id = options.id?.trim();
  const preset = options.preset?.trim() || "generic";
  const title = options.title?.trim() || id;
  const platform = options.platform?.trim() || "tiktok,reels,shorts";
  const duration = options.duration?.trim() || "25-40 giây";
  const owner = options.owner?.trim() || "TBD";

  if (!id) {
    console.error("Thiếu --id. Ví dụ: npm.cmd run project:new -- --id=demo-002-education-ai --preset=education");
    process.exit(1);
  }

  const safeId = slugify(id);
  const projectDir = path.join(repoRoot, "projects", safeId);

  try {
    await fs.access(projectDir);
    console.error(`Project đã tồn tại: ${projectDir}`);
    process.exit(1);
  } catch {
    // expected
  }

  const presetDir = path.join(presetsDir, preset);

  await ensureDir(projectDir);
  await copyDir(templateDir, projectDir);

  const projectJsonPath = path.join(projectDir, "project.json");

  try {
    await fs.access(presetDir);
    await copyDir(presetDir, projectDir, (name) => name !== "README.md" && name !== "project.json");

    const presetProjectJsonPath = path.join(presetDir, "project.json");
    try {
      const [baseJsonRaw, presetJsonRaw] = await Promise.all([
        fs.readFile(projectJsonPath, "utf8"),
        fs.readFile(presetProjectJsonPath, "utf8"),
      ]);

      const mergedProjectJson = deepMerge(
        JSON.parse(baseJsonRaw),
        JSON.parse(presetJsonRaw),
      );

      await fs.writeFile(projectJsonPath, `${JSON.stringify(mergedProjectJson, null, 2)}\n`, "utf8");
    } catch {
      // Preset may not define project.json. Safe to skip.
    }
  } catch {
    if (preset !== "generic") {
      console.error(`Không tìm thấy preset: ${preset}`);
      process.exit(1);
    }
  }

  await ensureDir(path.join(projectDir, "assets"));
  await ensureDir(path.join(projectDir, "notes"));
  await ensureDir(path.join(projectDir, "renders"));

  const replacements = {
    "{{PROJECT_ID}}": safeId,
    "{{PROJECT_TITLE}}": title || safeId,
    "{{PROJECT_PLATFORM}}": platform,
    "{{PROJECT_DURATION}}": duration,
    "{{PROJECT_OWNER}}": owner,
    "{{PROJECT_PRESET}}": preset,
  };

  const files = await walkFiles(projectDir);
  for (const file of files) {
    await replaceTokens(file, replacements);
  }

  console.log(`Đã tạo project mới tại: ${projectDir}`);
  console.log(`Preset: ${preset}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
