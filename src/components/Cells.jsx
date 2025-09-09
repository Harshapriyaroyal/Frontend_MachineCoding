import { useState } from "react"

const Cells = () => {
    const config = [
        [1, 1, 1], [1, 0, 1], [1, 1, 1]
    ]

    const [order, setOrder] = useState([])

    const ActivateCell = (val, index) => {
        if (!val) return
        const newOrder = [...order, index]
        setOrder(newOrder)
        if (newOrder?.length === config.flat(1).filter(Boolean).length) {
            deActivateCells()
        }

        console.log(order)
    }

    const deActivateCells = () => {
        const timer = setInterval(() => {
            setOrder((originalOrder) => {
                const newOrder = originalOrder.slice()
                newOrder.pop()
                if (newOrder.length == 0) {
                    clearInterval(timer)
                }
                return newOrder
            })
        }, 500)
    }

    return (
        <div className="cells-container">
            <div className="grid-templates">
                {
                    config.flat(1)?.map((value, index) => {
                        return (
                            <div className={value ? "grid-cell" : ""} key={index} onClick={() => ActivateCell(value, index)}
                                style={{ backgroundColor: order?.includes(index) ? "green" : "" }}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cells