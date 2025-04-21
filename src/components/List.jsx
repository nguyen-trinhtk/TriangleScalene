const List = ({showSection, showImage, showDescription, isHeader, articleList, isRow}) => {
    var articleListComponent = []
    const titleTextHeader = isHeader ? 'text-[40px]' : '';

    articleList.map((index) =>
    {
        const sectionName = showSection ? `${index}` : ``
        const image = showImage ? <img src="src\assets\drexel-campus-bridge.jpg" alt="Image goes here"/> : <></>
        const description = showDescription ? `This is a beautifully written description. It's non-existent, just like Drexel's financial management.` : ``

        articleListComponent.push(
        <>
        <div className="border-b-1 p-5 -mt-px">
            {image}  
            <div className='secondary-color-two'>
                {sectionName}
            </div>
            <div className={titleTextHeader}>Title</div>
            <div className="text-sm">Author | Date</div>
            {description}
        </div>
        </>
            )
    }
    )

    if (isRow){
        return(
            <>
            <div className="grid grid-cols-4 gap-1 m-1 divide-x-1">
                {articleListComponent}
            </div>
            </>
        )
    }

    return articleListComponent
}

export default List


