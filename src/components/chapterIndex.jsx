import Link from "next/link";

function ChapterIndex ({chapter, title, chapterId, slug}) {
    
    return(
            <Link href={`/${slug}/chapter/${chapterId}`} className="chapter-link">Chapter {chapter}:{title}</Link>

    );

};

export default ChapterIndex