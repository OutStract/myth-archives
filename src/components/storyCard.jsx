import Link from "next/link";

function StoryCard ({story, synopsis, storyLink}) {
    
    return(
        <Link href={storyLink} className="story-link"><div className="story-card-container">
                <h2 className="story-card-title">{story}</h2>
                <p className="story-card-synop">{synopsis}</p>
                <div className="story-button" >
                    <div className="read-now-link">Start Reading</div>
                </div>
            </div>
        </Link>

    );

};

export default StoryCard