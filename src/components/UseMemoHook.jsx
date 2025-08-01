// useMemo is a React hook that helps optimize performance by memoizing (caching) expensive calculations.

// When would you use useMemo?"
        // Expensive calculations, large data transformations, preventing unnecessary object creation

// What useMemo does
    // useMemo runs a calculation only when its dependencies change, and 
    // returns the cached result on subsequent renders 
    // if dependencies haven't changed. This prevents unnecessary recalculations.

//useMemo memoizes values, useCallback memoizes functions

// What happens if you omit the dependency array?
    // It recalculates on every render (defeats the purpose)

import { useState, useMemo } from "react"
export default function UseMemoHook() {
    const [count, setCount] = useState(0)
    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }
    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    const handleChange=useMemo(()=>{
        for(let i=0;i<100000000;i++){}
        return count * 2
    },[count])

    return (
        <>
            <button onClick={handleDecrement}>Decrement</button> Count Value : {count}
            <button onClick={handleIncrement}>Increment</button>

            <p>{handleChange}</p>
        </>
    )
}