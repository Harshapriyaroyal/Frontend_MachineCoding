import { useContext } from "react"
import { UserNameContext } from "./UseContextHooks"

export default function ChildC(){
   const {name,setName} = useContext(UserNameContext)
   return (<>
    Child C   {name}
    </>)
}