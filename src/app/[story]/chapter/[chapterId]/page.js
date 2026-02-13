 import { chapterParse, chapterSort, index, next, prev } from "@/lib/chapter";
 import fs from "fs";
 import { remark } from "remark";
 import remarkHtml from "remark-html";
 import Link from "next/link";
 import { nextPage, backPage } from "@/lib/pagination";
 import {upperCase} from "@/lib/utilities"
 
 
 async function ChapterPage({ params }) {
    const { chapterId, story } = await params


    //Match the object with the url id
    const chapterFile = chapterParse.find(chapterParse => chapterParse.id === chapterId);
    //Read the file
    const chapterRead = fs.readFileSync(`chapters/${chapterFile.file}`, "utf-8");
    //Remove metadata and comments
    const chapterClean = chapterRead.replace(/\{\{[\s\S]*?\}\}|^\s*\/\/.*$/gm, "");
    //Convert it into html
    const processed = await remark()
    .use(remarkHtml)
    .process(chapterClean);  
    const contentHtml = processed.toString();

    const sort = chapterSort(story);
    const chIndex = index(sort,chapterId);
    const nextPg = next(chIndex,sort);
    const prevPg = prev(chIndex,sort);


    return (
        <>
        <div className="reader-body">
            <h1 className="chapter-reader-title"><Link href={`/${story}`} className="reader-story-link" >{upperCase(story)}</Link>: Chapter {chapterFile.chapter} - {chapterFile.title}</h1>
            <div className="underline"></div>
            <div className="pagination">
                {nextPg && (<div className="next-page"><Link className="nav-link" href={`/${story}/chapter/${nextPg}`}>Next</Link></div>)}
                {prevPg && (<div className="back-page"><Link className="nav-link" href={`/${story}/chapter/${prevPg}`}>Previous</Link></div>)}
            </div>
            <div className="chapter-content" dangerouslySetInnerHTML={{__html:contentHtml}}/>
            <div className="pagination">
                {nextPg && (<div className="next-page"><Link className="nav-link" href={`/${story}/chapter/${nextPg}`}>Next</Link></div>)}
                {prevPg && (<div className="back-page"><Link className="nav-link" href={`/${story}/chapter/${prevPg}`}>Previous</Link></div>)}
            </div>
            
        </div>
        </>
        
    );
}

export default ChapterPage