import fs from "fs";
import path from "path";

//point to the path
const indexPath = path.join("data", "index.json");

//Read the JSON file
const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));


//Generate Id and file name
const files = fs.readdirSync("./chapters").filter(f => f.endsWith(".md"));
let maxId = 0;

for (const file of files) {
    const content = fs.readFileSync(`chapters/${file}`, "utf-8");
    const match = content.match(/id:\s*(\d+)/);
    if (match) {
        maxId = Math.max(maxId, Number(match[1]));
    }
}

const id = maxId + 1;
const fileName = String(id).padStart(6,"0") + ".md";

//Make Markdown file meta
const content = `{{
id: ${id}, 
story: "", 
chapter: "", 
title: "", 
pov: "", 
type: "",
line: "",
slug: "",
year: "" 
}}

//Write from here 
`;

fs.writeFileSync(path.join("chapters", fileName), content);
