 import { chapterParse } from "@/lib/chapter";
// import { Html } from "next/document";
 const fs = require("fs");
 import { remark } from "remark";
 import remarkHtml from "remark-html";
 import Link from "next/link";
 
 
 async function ChapterPage({ params }) {
    const { chapterId, story } = await params

    //Match the object with the url id
    const chapterFile = chapterParse.find(chapterParse => chapterParse.id === chapterId);


    //take the file name and find that file in the 
    const chapterRead = fs.readFileSync(`chapters/${chapterFile.file}`, "utf-8");
    const chapterClean = chapterRead.replace(/\{\{[\s\S]*?\}\}|^\s*\/\/.*$/gm, "")
    const processed = await remark()
    .use(remarkHtml)
    .process(chapterClean);  

    const contentHtml = processed.toString();


    return (
        <>
        <div className="reader-body">
        <h1 className="chapter-reader-title"><Link href={`/${story}`} className="reader-story-link" >{story.charAt(0).toUpperCase() + story.slice(1)}</Link>: Chapter {chapterFile.chapter} - {chapterFile.title}</h1>
        <div className="underline"></div>
        <div className="chapter-content" dangerouslySetInnerHTML={{__html:contentHtml}}/>
        </div>
        </>


        
    );
}

export default ChapterPage