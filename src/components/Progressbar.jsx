import { useEffect, useState } from "react"

const Progressbar = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((val) => (val < 100 ? val + 1 : val));
        }, 100);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <h3 className="header">Progress bar with React</h3>
            <div className="percentage-bar">
                <div className="progress-fill" style={{ width: `${value}%` }}>
                    <span className="progress-value">{value}%</span>
                </div>

            </div>
        </>
    )
}
export default Progressbar
