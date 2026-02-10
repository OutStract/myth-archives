import {mainData, sideData} from '@/lib/story.js'
import StoryCard from '@/components/storyCard'
import Underline from '@/components/Underline'


function home() {

    console.log(mainData);
    
    return(
        <>
            <h1 className='welcome'>Welcome to the archives</h1>
            <div className='home-body'>
            <div className='story-line'>
            <h2 className='line'>Main Line</h2>
            <div className="underline"></div>
            </div>

            <div className='card-group'>

                {mainData.map (story => (
                    <StoryCard 
                    key={story.id}
                    story = {story.story}
                    synopsis = {story.synopsis}
                    storyLink= {story.slug}
                    />
                ))}

            </div>

        <div className='story-line'>
        <h2 className='line'>Side Line</h2>
        <div className="underline"></div>
        </div>

        <div className='card-group'>
            {sideData.map (story => (
                <StoryCard 
                key={story.id}
                story = {story.story}
                synopsis = {story.synopsis}
                storyLink= {story.slug}
                />
            ))}
        </div>


        </div>
        
        </>
    )
}

export default home
