const NavigationBar = ({pageNames}) => {
    var pageButtons = []
    pageButtons = pageNames.map((pageName)=>{
        return (
            <>
            {pageName}
            </>
        )
    })
    return (<div>{pageButtons}</div>);
}

export default NavigationBar 