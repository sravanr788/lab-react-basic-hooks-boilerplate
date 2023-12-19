import React, { useContext, useState } from 'react'
import { AppContext } from '../UseContext/ParentContext'

const Counter3 = () => {
    const [data , setData] = useState({age:17, siblings:3})
    const {isDark} = useContext(AppContext)

    const {decreaseCount} = useContext(AppContext)
function handleAge () {
    setData({...data , age : data.age + 1})
}   

const handleSibling = () => {
    setData({...data , siblings : data.siblings + 1})
}

const handleData = (key)=>{
  
    setData({
      ...data,[key]:data[key]+1
    })
  }
  return (
    <div style={{border : "1px dashed white" ,
    padding : "10px" , 
    margin : "20px",
    backgroundColor : `${isDark ? "black" : "white"}`,
    color : `${isDark ? "white" : "black"}`}}
    >
     <h1>C O U N T E R - 3</h1>
     <h2>My Age : {data.age}</h2>
     <h3>Siblings : {data.siblings}</h3>
     <button onClick={()=>{
        handleData("age")
     }}>Get Older</button>
      <button onClick={()=>{
        handleData("siblings")
      }}>Get more Sib</button>

    <button onClick={decreaseCount}>Decrease Maincount </button>
   </div>
  )
}

export default Counter3