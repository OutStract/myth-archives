 async function ChapterPage({ params }) {
    const { story } = await params

    return (
        <h1>{story}:[Chapter number]</h1>
    );
}

export default ChapterPage