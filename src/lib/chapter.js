 const fs = require("fs");
 
 const readChapter = fs.readFileSync("data/index.json");
 export const chapterParse = JSON.parse(readChapter);

