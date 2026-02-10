import {mainData, sideData} from '@/lib/story.js'
import StoryCard from '@/components/storyCard'


function home() {
    console.log(mainData, Array.isArray(mainData))
    console.log(sideData)
    
    return(
        <>
        <h1>Welcome</h1>

        <h2>Main Line</h2>
        {mainData.map (story => (
            <StoryCard 
            key={story.id}
            story = {story.story}
            synopsis = {story.synopsis}
            storyLink= {story.slug}
            />
        ))}

        <h2>Side Line</h2>

        {sideData.map (story => (
            <StoryCard 
            key={story.id}
            story = {story.story}
            synopsis = {story.synopsis}
            storyLink= {story.slug}
            />
        ))}
        
        </>
    )
}

export default home
