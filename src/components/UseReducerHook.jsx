import { useReducer } from "react"
export default function UseReducerHook(){
    const initial = {count:0}

    function reducer(state,action){
        switch(action.type){
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count: state.count -1}
            case 'reset':
                return {count:0}
            // default:
            //     return state
        }
    }
    const [state,dispatch] = useReducer(reducer,initial)
    return (<>
    <div>Count Value : {state.count}</div>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </>)
}

// "When would you use useReducer over useState?"
// Complex state logic, multiple related state values, state depends on previous state

// "What's the difference between useReducer and Redux?"
// useReducer is local to component, Redux is global app state

// "What is a reducer function?"
// Pure function that takes current state + action, returns new state

// "Can you use useReducer with useContext?"
// Yes, for global state management without Redux

// Key Points:
// Reducer must be pure function (no side effects)
// Always return new state object, don't mutate
// Action objects usually have type property
// Good for complex state logic and multiple state values

// Quick Rule: If you have more than 2-3 related useState calls, consider useReducer!

// How it Works
// State: Current data (like { count: 0 })
// Action: Instruction object (like { type: 'increment' })
// Reducer: Function that takes state + action, returns new state
// Dispatch: Function to send actions to reducer