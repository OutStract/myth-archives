import fs from "fs";

 
 const readChapter = fs.readFileSync("data/index.json");
 export const chapterParse = JSON.parse(readChapter);

//Filter chapter with slug
export const chapterSort = (slug) => {
   const filter = chapterParse.filter(ch => ch.slug === slug);
   const sort = filter.sort();
   return sort
}

//Get current index and make prev and next index
export const index = (sort, chapterId) => {
    const index = sort.findIndex(ind => ind.id === chapterId);
    return Number(index)
}

export const next = (index, chapterSort) => {
    const nextCh = chapterSort [index + 1]
    if(nextCh === undefined) { 
        return false
    } else {return nextCh.id};
    
}

export const prev = (index, chapterSort) => {
    const prevCh = chapterSort [index - 1]
    if(prevCh === undefined) { 
        return false
    } else {return prevCh.id};
}
