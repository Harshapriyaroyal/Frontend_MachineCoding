import { useState, useEffect } from "react"
const Pagination = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchData()
    }, [page])

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const jsonData = await response.json()
        setData(jsonData?.products)
    }

    const handlePagination = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }
    return (
        <>
            {data?.length > 0 && <div className="products">
                {(data?.slice((page - 1) * 10, page * 10))?.map((item) => {
                    return (
                        <div key={item?.id}><h3>{item?.title}</h3>
                            <img src={item?.thumbnail} />
                        </div>
                    )
                })}
            </div>}

            {data?.length > 0 && <div className="pagination">
                <span className={page == 1 ? "pagination_disable" : ""} onClick={() => setPage(page - 1)}>◀️</span>
                {
                    [...Array(data.length / 10)].map((_, i) => {
                        return <span className={page === i + 1 ? "page_selected" : ""} key={i + 1} onClick={() => handlePagination(i + 1)}>{i + 1}</span>
                    })
                }
                <span className={page == data.length / 10 ? "pagination_disable" : ""} onClick={() => setPage(page + 1)}>▶️</span>
            </div>}
        </>
    )
}

export default Pagination