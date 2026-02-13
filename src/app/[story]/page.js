
import {chapterParse} from '@/lib/chapter.js';
import {storyParse} from '@/lib/story.js'
import ChapterIndex from '@/components/chapterIndex'


async function storyPage({ params }) {
    const { story } = await params

    const chapterGroup = chapterParse.filter(chapterParse => chapterParse.slug === story);

    const storySyno = storyParse.find(syno => syno.slug === story);


    return (
        <>
        <div className='story-page-body'> 
            <div>
                <h1 className='story-page-title'>{story.charAt(0).toUpperCase() + story.slice(1)} </h1>
                <div className="underline"></div>
            </div>
        
        <p className='story-syno'>{storySyno.synopsis}</p>

        <div className='chapter-index'>
        <h2 className='index-heading'>Chapters</h2>
        <div  className='chapter-link-box'>
            {chapterGroup.map(ch => (
                <ChapterIndex 
                key = {ch.id}
                chapter = {ch.chapter}
                title = {ch.title}
                chapterId = {ch.id}
                slug = {ch.slug}
                />
            ))}
        </div>
        

        </div>

        </div>
        </>
    );
}

export default storyPage