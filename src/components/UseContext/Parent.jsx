
import { useState } from "react";
import ChildA from "./ChildA";
import { UserNameContext } from "./UseContextHooks";

export default function Parent() {
    const [name,setName] = useState("harsha Priya")
    return <>
        <UserNameContext.Provider value={{name,setName}}>
            Parent<br />
            {/* if we have to pass props from parent to child C or child B it should go through the Child A - child b -Child C in this order as we called this as props drilling */}
            {/* to avoid this props drilling we can useContext */}
            <ChildA />
        </UserNameContext.Provider>

    </>
}