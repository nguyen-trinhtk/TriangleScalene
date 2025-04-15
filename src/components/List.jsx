const List = () => {
    var articleListComponent = []
    const articleList = [0, 1]
    articleList.map(() =>
    {
        articleListComponent.push(
        <>
        <div class='border-1 p-5 -mt-px'>
            <div class='secondary-color-two'>
                SECTION
            </div>
                Title
                <br/>
                Author | Date 
        </div>
        </>
            )
    }
    )
    return (
    <div class='list'>
            {articleListComponent}
    </div>
    )
}

export default List


