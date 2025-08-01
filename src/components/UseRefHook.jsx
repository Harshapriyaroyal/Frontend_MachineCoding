// useRef is a React hook that creates a mutable reference that persists 
// across renders without causing re-renders when changed. 
// Think of it as a "box" where you can store values.


// if we use useState everytime on change of value component will be re-rendered 
// but if we use useref if will just update the value but component will not be re-rendered
// Just for accessing the DOM element we can use this useref
// Just for comparison, not display and if we Don't need to show timer ID on screen  we can use useref


// Use useState when:
// You want to show the value on screen
// Changing it should update the UI

// Use useRef when:
// You want to "remember" something
// You don't need to show it on screen
// You want to control DOM elements (focus, scroll, etc.)

// useRef gives you DIRECT access to DOM elements
// With useRef, you can:

// Read DOM properties
// Call DOM methods
// Manipulate DOM directly

// When you change DOM directly with useRef, React doesn't know about it, so it won't trigger re-renders. This is both powerful and dangerous!
// What You CAN Do with useRef:

// ✅ Call DOM methods:
// element.focus()
// element.blur()
// element.click()
// element.scrollIntoView()

// ✅ Read/Write DOM properties:
// element.value
// element.innerHTML
// element.style.color
// element.offsetWidth
import { useRef } from 'react';
export default function UseRefHook() {
  // Create a "sticky note" to remember the input box
  const inputBox = useRef(null);
  
  const clickMe = () => {
    // Tell the input box to focus
    inputBox.current.focus();
    console.log(inputBox.current.value)
  };
  const count = useRef(0)

  const handleIncrement=()=>{
       count.current = count.current + 1  //component will not be re-rendered so no one notifies the diff
       console.log(count.current)   // console value will be printed
  }
  return (
    <><br/><br/>
      <input ref={inputBox} type="text" placeholder="Type here" /><br/><br/><br/>
      
      <button onClick={clickMe}>Click to Focus Input</button><br/><br/><br/>
      {count.current}<br/> 
      {/* won't update on UI screen */}
      <button onClick={()=>handleIncrement()}>Increment</button>
    </>
  );
}