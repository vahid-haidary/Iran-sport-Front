import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"


function Showing({children}) {

    const location = useLocation();

    const [show,setShow] = useState(false)

    useEffect(()=>{

        if(location.pathname === "/login"){
            setShow(false)
        }else{
            setShow(true)
        }
    },[location])


  return (
    <div>{show && children}</div>
  )
}

export default Showing