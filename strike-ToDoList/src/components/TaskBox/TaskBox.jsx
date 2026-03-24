
import { useState } from "react"

const TaskBox = () => {

const [ input, setInput] = useState(true)

const [ addinputbox, setAddInputbox ] = useState(true)

const handleInputItems = (input) => {
  return( <input defaultChecked /> &&  setInput(true))
  
   
 

}

    return (
     <> 
<div>
     <input defaultValue={`Add your task here...`} className="taskinput" {...addinputbox ? input: handleInputItems }/>
     <button className ="blackcross" handleInput={handleInputItems} img src="" alt=""> + </button>  
     
 </div> 
     </>
    )
} 

export default TaskBox