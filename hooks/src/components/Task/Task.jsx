import React, { useEffect, useState } from 'react'

const Task = () => {
    const [like, setlikes] = useState(0)
    const [toggle, setToggle] = useState(true)
    const [content, setContent] = useState({first :0 , state : false})

    useEffect(() => {    
        content.first == 1 ?
        alert("Content button Clicked") : ""
    },[content]);

    return (
        <div style={{
            margin : "20px"
        }}>
            <button onClick={() => {
                setToggle(!toggle)
            }}>Toggle</button>
            <div style={{
                width: "90vw",
                marginLeft: "-70px",
                backgroundColor: `${toggle ? "black" : "antiquewhite"}`,
                color: `${toggle ? "white" : "black"}`
            }}>
                <p>{content.state ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat id eius ullam! Veniam neque inventore at sequi, doloribus maiores alias quis, cum et ab ut tempora hic molestias praesentium delectus!" : ""}</p>
                <button onClick={()=>{setContent({first :1 , state : !content.state})}}>Content</button>
                <h4>{like}</h4>
                <button onClick={() => {
                    setlikes(like + 1)
                }}>Like</button>
            </div>
        </div>
    )
}

export default Task