import React, { useContext } from 'react'
import { useState , useEffect} from "react";
import { AppContext } from '../UseContext/ParentContext';

const Counter2 = () => {
    const [currAge,setAge] = useState(17);
    const [currSib, setSib] = useState(1);

    const {isDark} = useContext(AppContext)

    const {mainCount} = useContext(AppContext)
    
    const IncAge = ()=>{
      setAge(currAge+1);
    }
  
    const IncSiblings = ()=>{
      setSib(currSib+1);
    }
    const decSiblings = () => {
        currSib!=0 ? 
        setSib(currSib - 1) : ""
    }
    useEffect(() => {    
        console.log("Component 2 Mounted");
      });

  return (
    <div style={{border : "1px dashed white" ,
    padding : "10px" , 
    margin : "20px" ,
    backgroundColor : `${isDark ? "black" : "white"}`,
       color : `${isDark ? "white" : "black"}`}}
    >
     <h1>C O U N T E R - 2</h1>
     <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>
      <h3>Main Count : {mainCount}</h3>
      <button onClick={IncAge}>Get Older</button>
      <button onClick={IncSiblings}>Get more Sib</button>
        <button onClick={decSiblings}> Decrease Siblings </button>
   </div>
  )
}

export default Counter2