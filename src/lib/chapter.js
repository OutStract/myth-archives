import fs from "fs";
 
 const readChapter = fs.readFileSync("data/index.json");
 export const chapterParse = JSON.parse(readChapter);
