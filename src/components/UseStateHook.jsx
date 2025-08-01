// use state is used to manage the data in functional components
// if state value changes entire component will be re-renders
// when component loads :
//  On the first render:
//         React calls the component function
//         When useState(initialValue) is encountered, React creates an internal 'hook slot'
//         React stores the initial value in this slot
//         Returns an array: [currentValue, setterFunction]
//  On subsequent renders (after state updates):
//         React calls the component function again
//         When useState(initialValue) is encountered, React ignores the initial value
//         Instead, it reads the current value from its internal hook slot
//         Returns [updatedValue, setterFunction]

// All React state updates are asynchronous, including:
// setState(newValue)
// setState((prev) => newValue)
import { useState } from "react"
export default function UseStateHook(){
    const [count,setCount] = useState(0)
    const handleDecrement=()=>{
      setCount((prev)=>prev-1)
    }
    const handleIncrement=()=>{
      setCount((prev)=>prev+1)
    }
    return (
        <>
           <button onClick={handleDecrement}>Decrement</button> Count Value : {count} 
           <button onClick={handleIncrement}>Increment</button>
        </>
    )
}