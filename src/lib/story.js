 const fs = require("fs");
 
 const readStory = fs.readFileSync("data/storyIndex.json");
 export const storyParse = JSON.parse(readStory);

 export const mainData = storyParse.filter(storyParse => storyParse.line === 'main');
 

 export const sideData = storyParse.filter(storyParse => storyParse.line === 'side');


