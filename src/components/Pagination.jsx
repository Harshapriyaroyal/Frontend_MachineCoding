import { useEffect, useState } from "react"

export default function Pagination() {

    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const fetchProductsList = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const data = await response.json()
        setProducts(data?.products)
    }
    useEffect(() => {
        fetchProductsList()
    }, [])

    const handlePageSelector = (selectedPage) =>{
        if(selectedPage>=1 && selectedPage<=products.length/10 && selectedPage!==page){
            setPage(selectedPage)
        }
    }
    return (
        <>
            {products.length > 0 && <div className="products">
                {products.slice(page * 10 - 10, page * 10).map((item) => {
                    return <div className="products__single">
                        <img src={item.thumbnail} />
                        {item.title}
                    </div>
                })}
            </div>}
            {
                products.length > 0 && <div className="pagination">
                    <span onClick={()=>setPage(page-1)} className={page>1 ?"":"pagination_disable"}>◀️</span>
                    {
                        [...Array(products.length / 10)].map((_, i) => {
                            return <span onClick={()=>handlePageSelector(i+1)} className={page==i+1?"page_selected":""}>{i + 1}</span>
                        })
                    }
                    <span onClick={()=>setPage(page+1)} className={page < products.length/10 ?"":"pagination_disable"}>▶️</span>
                </div>
            }

        </>
    )
}

// if it is server side we will render default page count and based on total page count we will call the API