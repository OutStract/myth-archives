
import {chapterParse} from '@/lib/chapter.js';
import ChapterIndex from '@/components/chapterIndex'

async function storyPage({ params }) {
    const { story } = await params
    console.log(chapterParse, Array.isArray(chapterParse));

    const chapterGroup = chapterParse.filter(chapterParse => chapterParse.slug === story);
    console.log(chapterGroup, Array.isArray(chapterGroup));

    return (
        <>
        <h1>{story.charAt(0).toUpperCase() + story.slice(1)}</h1>
        <h2>Chapters</h2>

        {chapterGroup.map(ch => (
            <ChapterIndex 
            key = {ch.id}
            chapter = {ch.chapter}
            title = {ch.title}
            chapterId = {ch.id}
            slug = {ch.slug}
            />
        ))}
        </>
    );
}

export default storyPage