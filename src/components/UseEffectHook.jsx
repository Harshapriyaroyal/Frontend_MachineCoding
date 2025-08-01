// useEffect is a React Hook that lets you perform side effects in functional components. 
// It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components.
// React to state/prop changes - Run code when dependencies change

// Side effects are operations that affect something outside the component scope:
// API calls
// DOM manipulation
// Timers (setTimeout, setInterval)
// Subscriptions (WebSocket, event listeners)
// Logging
// Updating document title

// useState ALWAYS executes before useEffect
// useState: Executes synchronously during component rendering
// useEffect: Executes asynchronously AFTER the component has rendered and DOM is updated
import { useState, useEffect } from "react"
export default function UseEffectHook() {
    const [count, setCount] = useState(0)
    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }
    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    // No Dependency Array (Runs on Every Render):
    useEffect(() => {
        console.log("Runs after every render");
    });

    // Empty Dependency Array (Runs Once):
    useEffect(() => {
        console.log("Runs only once after initial render");
    }, []);

    // With Dependencies (Runs When Dependencies Change):
    useEffect(() => {
        console.log("Runs when count changes");
    }, [count]);

    return (
        <>
            <button onClick={handleDecrement}>Decrement</button> Count Value : {count}
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

// Step-by-Step Execution Order:
// Initial Render:
// Component function called
// useState hook executed - State initialized
// useEffect hook registered - Effect scheduled (not executed yet)
// Component renders - JSX returned and DOM updated
// useEffect callback runs - After DOM is updated

// When State Updates (e.g., setCount called):

// Component function called again
// useState hook executed - Returns updated state
// useEffect hook registered again - New effect scheduled
// Component re-renders - JSX returned and DOM updated
// Cleanup function runs (if dependency changed)
// New useEffect callback runs