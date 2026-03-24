
import { useState } from "react"

const TaskBox = () => {

const [ input, setInput] = useState(true)

const handleInput = (input) => {
  return(  
    setInput(true)

 )

}

    return (
     <> 
<div>
     <input defaultValue={`Add your task here...`} className="taskinput"/>
     <button className ="blackcross" handleInput={handleInput} img src="" alt=""> + </button>  
     
 </div> 
     </>
    )
} 

export default TaskBox