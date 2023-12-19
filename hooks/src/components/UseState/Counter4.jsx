import React, { useState , useEffect, useContext} from 'react'
import { AppContext } from '../UseContext/ParentContext'

const Counter4 = () => {
    const [age,setAge] = useState(17)
    const [sib,setSib] = useState(1)
    const {isDark} = useContext(AppContext)
    const{mainCount,setMainCount} = useContext(AppContext)

    useEffect(() => {    
        return ()=>{
            console.log("Component 4 Unmounted");
        }
      },[]);
    return (
        <div style={{border : "1px dashed white" ,
        padding : "10px" , 
        margin : "20px" ,
        backgroundColor : `${isDark ? "black" : "white"}`,
        color : `${isDark ? "white" : "black"}`}}
        >
         <h1>C O U N T E R - 4</h1>
         <h3>My Current Age is {age}</h3>
      <h4>My siblings {sib}</h4>

      <button onClick={()=>setAge(currAge=>currAge+1)}>Get Older</button>
      <button onClick={()=>setSib(currSib=>currSib+1)}>Get more Sibs</button>
      <button onClick={()=>{setAge(0) 
        setSib(0)}}>Reset</button>
        <button onClick={()=>{setMainCount(mainCount+1000)}}>Increase MainCount</button>
       </div>
      )
}

export default Counter4