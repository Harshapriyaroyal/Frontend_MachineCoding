// redux is a state management library that helps you manage application state in centralized, predictable way

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo,deleteTodo,toggleTodo } from "./store"
// Key Characteristics:
    // Predictable: Same actions always produce same results
    // Centralized: All state lives in one place (store)
    // Debuggable: Easy to track state changes
    // Flexible: Works with any UI framework
    
// Problems Redux Solves:
    // Prop Drilling: Passing data through multiple components
    // State Sharing: Multiple components need the same data
    // State Updates: Complex state logic scattered across components

// TodoList.js
export default function ReduxHandsOn() {
    const [inputValue,setInputValue] = useState('')
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (<>
    {todos.map((item)=>(
        <>
        <input id={item.id} key={item.id} type="checkbox" checked={item.completed}
        onChange={()=>dispatch(toggleTodo(item.id))}/>
        <span>{item.name}</span>
        <button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button><br/>
        </>

    ))}
    <br/>
    <input onChange={(e)=>setInputValue(e.target.value)}/>
    <button onClick={()=>dispatch(addTodo({id:new Date().getTime(),name:inputValue,completed:true}))}>Add Todo</button>
    </>)
}
