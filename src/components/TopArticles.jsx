import List from './List.jsx'; 

const TopArticle = () => {
    return(
        <>
        <div className="grid grid-cols-4 gap-1 m-1 divide-x-1">
            <div className="col">
            <List showImage={true} articleList={["SPORTS", "OPINION"]}/>
            </div>
            <div className="col-span-2">
            <List showImage={true} showDescription={true} isHeader={true} articleList={["NEWS"]}/>
            </div>
            <div className="col">
            <List showSection={true} articleList={["SPORTS", "OPINION"]}/>
            </div>
        </div>
        </>
    )
}

export default TopArticle