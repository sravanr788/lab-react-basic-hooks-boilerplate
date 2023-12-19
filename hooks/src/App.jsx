import { useContext,useState} from 'react'
import './App.css'
import  Counter1 from './components/UseState/Counter1'
import Counter2 from './components/UseState/Counter2'
import Counter3 from './components/UseState/Counter3'
import Counter4 from './components/UseState/Counter4'
import Effect from './components/UseEffect/Effect'
import ParentContext, { AppContext } from './components/UseContext/ParentContext'
import Task from './components/Task/Task'

function App() {
  const [show , setShow] = useState(false)

  const {isDark,setisDark} = useContext(AppContext) 
  return (
    <>
    <button onClick={()=>{setShow(!show)}}>C H A N G E </button>

    <button onClick={()=>{setisDark(!isDark)}}>{isDark ? "LIGHT THEME" : "DARK  THEME"}</button>

    {show ? (
    <>
     <Counter1 />
     <Counter2 />
     <Counter3 />
     <Counter4 />
     </> )
     : (
      <>
     <Effect /> 
     <ParentContext />
     <Task />
     </>)}
    </>
  )
}

export default App
