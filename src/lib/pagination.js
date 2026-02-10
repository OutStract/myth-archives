import {chapterParse} from './chapter.js';



export const nextPage = (slug, chapterId) => {
    const chapterFilter = chapterParse.filter(ch => ch.slug === slug);
    const chapterSort = chapterFilter.sort();
    const findIndex = chapterSort.findIndex(ind => ind.id === chapterId);
    const nextIndex = findIndex + 1;
    const nextChapter = chapterSort[nextIndex];
    if (nextChapter === undefined) {
        return chapterSort[findIndex].id;
    } else {
        const nextChId = nextChapter.id;
        return nextChId;
    }
    
}

export const backPage = (slug, chapterId) => {
    const chapterFilter = chapterParse.filter(ch => ch.slug === slug);
    const chapterSort = chapterFilter.sort();
    const findIndex = chapterSort.findIndex(ind => ind.id === chapterId);
    const backIndex = findIndex - 1;
    const backChapter = chapterSort[backIndex];
    if (backChapter === undefined) {
        return chapterSort[findIndex].id;
    } else {
    const backChId = backChapter.id;
    return Number(backChId);
    }
}






