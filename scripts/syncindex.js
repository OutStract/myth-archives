const fs = require("fs");
const path = require("path");

const CHAPTER_DIR = "./chapters";
const INDEX_FILE = "data/index.json";

const files = fs.readdirSync(CHAPTER_DIR).filter(f => f.endsWith(".md"));

const index = [];

for (const file of files) {
    const filePath = path.join(CHAPTER_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const match = content.match(/\{\{([\s\S]*?)\}\}/);
    if (!match) continue;

    const meta = {};
    match[1].split("\n").forEach(line => {
        const clean = line.replace(/[,]/g,"").trim();
        if (!clean) return;

        const [key, value] = clean.split(":").map(s => s.trim());
        meta[key] = value.replace(/^"|"$/g,"");
    });

    meta.file = file;
    index.push(meta);
}

fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));