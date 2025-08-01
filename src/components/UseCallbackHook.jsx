// useCallback is a React hook that memoizes functions to prevent unnecessary 
// re-creations on every render

// What useCallback does
	// useCallback returns a memoized version of a function that only changes 
	// when its dependencies change. This prevents child components from 
	// re-rendering unnecessarily when they receive the same function as a prop.

// Function Identity: In JavaScript, 
	// functions are recreated on every render, causing === comparisons to fail. 
	// useCallback maintains the same function reference.
	// Dependencies Array: The function is recreated only when dependency values change.

// "When would you use useCallback?"
	// When passing functions as props to prevent child re-renders, or as dependencies in useEffect

// What happens without the dependency array?
	// Function recreates on every render (defeats the purpose)
	
// "How does it help performance?"
	// Prevents unnecessary re-renders of child components that depend on function 

import { useCallback } from "react";
export default function UseCallbackHook() {

	const memoizedCallback = useCallback(() => {
		// function logic
	}, [dependencies]);

	return (<> use callback memoizes the function and re-renders when function dependecies changes
	</>)
}
