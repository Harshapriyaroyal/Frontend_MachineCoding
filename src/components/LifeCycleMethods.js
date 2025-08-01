// Mounting Phase
// componentDidMount() - Called after the component is mounted to the DOM. Used for initial data fetching, setting up subscriptions, or DOM manipulation.
// constructor() - Called when the component is first created. Used for initializing state and binding methods.

// Updating Phase
// componentDidUpdate(prevProps, prevState) - Called after the component updates due to prop or state changes. Used for side effects based on changes.
// shouldComponentUpdate(nextProps, nextState) - Determines if the component should re-render. Returns a boolean value.
// getSnapshotBeforeUpdate(prevProps, prevState) - Called right before DOM updates. Rarely used, but helpful for capturing scroll position or other DOM info.

// Unmounting Phase
// componentWillUnmount() - Called just before the component is removed from the DOM. 
//                          Used for cleanup like removing event listeners or canceling network requests.

// componentDidCatch is a lifecycle method in React class components that's 
// specifically designed for error handling. It's part of what's called an "Error Boundary" 
// - a special type of component that catches JavaScript errors anywhere in the child component tree.

componentDidCatch(error, errorInfo)
// Parameters:
// error - The actual error that was thrown
// errorInfo - An object containing information about which component threw the error

// useEffect Hook 
//  -> mostly it will replicate the life cycle methods

// componentDidMount equivalent
useEffect(() => {
  // Code runs after component mounts
}, []); // Empty dependency array

// componentDidUpdate equivalent
useEffect(() => {
  // Code runs after every update
}); // No dependency array

// componentDidUpdate with specific dependencies
useEffect(() => {
  // Code runs when specific values change
}, [prop1, state1]); // Dependency array with specific values

// componentWillUnmount equivalent
useEffect(() => {
  return () => {
    // Cleanup code (runs before component unmounts)
  };
}, []);


// useState Hook 
// ---> replaces constructor for state initialization
    // Class component
// constructor(props) {
//   super(props);
//   this.state = { count: 0 };
// }

// Functional component
const [count, setCount] = useState(0);

// react.memo will replace shouldComponentUpdate
// if prop values are not changes component will not be re-rendered


// Hooks are functions that:

// Start with the word "use" (like useState, useEffect)
// Let you use React features without writing class components
// Can only be called at the top level of functional components or other custom hooks
// Allow you to reuse stateful logic between components


