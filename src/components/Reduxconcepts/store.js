
// Store
// The single source of truth that holds the entire application state.
// Create store

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Store methods:
// store.getState()     // Get current state
// store.dispatch(action) // Send action
// store.subscribe(listener) // Listen to changes

// Key Points:
// Only ONE store per application
// State is read-only
// Contains the complete state tree

// Actions
// Plain JavaScript objects that describe what happened.
// Action Type Constants
// const ADD_TODO = 'ADD_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';
// const DELETE_TODO = 'DELETE_TODO';

// Action Objects
// const action = {
//   type: 'ADD_TODO',           // Required: describes the action
//   payload: {                  // Optional: data needed for the action
//     id: 1,
//     text: 'Learn Redux',
//     completed: false
//   }
// };

// // Action Creators (functions that return actions)
// const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: {
//     id: Date.now(),
//     text,
//     completed: false
//   }
// });

// const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: id
// });

// Usage
// store.dispatch(addTodo('Learn Redux'));

// direct dispatch
// store.dispatch({ type: 'ADD_TODO', payload: { text: 'Learn Redux' } });


// Key Points:
// Must have a type property (string)
// payload carries the data
// Action creators are pure functions
// Actions are the only way to change state

//  Reducers
// Pure functions that specify how the state changes in response to actions.

// Reducer Rules:
// Pure Functions: Same input always produces same output
// No Mutations: Never modify existing state
// No Side Effects: No API calls, routing, etc.
// Return New State: Always return new objects/arrays


// ┌─────────────────────────────────────────────────────────┐
// │                    Redux Data Flow                      │
// ├─────────────────────────────────────────────────────────┤
// │                                                         │
// │  UI Component  ──dispatch──>  Action  ──>  Reducer     │
// │       ↑                                      │          │
// │       │                                      ↓          │
// │   Re-render  <──  UI Update  <──  Store State Change   │
// │                                                         │
// └─────────────────────────────────────────────────────────┘

// Step-by-Step Flow:

// User interacts with UI (clicks button, types, etc.)
// Component dispatches an action
// Store calls the reducer with current state and action
// Reducer returns new state
// Store saves the new state
// UI re-renders with updated state


// store.js

// first we need to create slice which has initialstate, actions and reducers

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [{
            name:'harshaaaaaaaaa',
            id:1,
            completed:false
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleTodo:(state,action) =>{
           let filteredTodos =  state.todos.find((item)=>item.id==action.payload)
           filteredTodos.completed = !filteredTodos.completed
        },
        deleteTodo(state,action){
           state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
})

// first we need to export actions

export const {addTodo,toggleTodo,deleteTodo} = todoSlice.actions
export const store = configureStore({
    reducer:todoSlice.reducer
})