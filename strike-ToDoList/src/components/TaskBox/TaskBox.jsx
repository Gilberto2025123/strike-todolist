import { useState } from "react"
import ResetButton from "../ResetButton/ResetButton"

const TaskBox = () => {

const [addtext, setAddText] = useState([])

const newListItems = (e) => {

    setAddText([...addtext, e.target.value])

}

const resetText = () => {
    setAddText([])
}

const deleteText = (counter) => {
    const filteredArr = addtext.filter((text)=> {
        return text != addtext[counter]
    })
        setAddText(filteredArr)
}

  

const [checked, setChecked] = useState(false);



    return (
    
<div>
    <ResetButton onClick={resetText} /> 
     <input placeholder={`Add your task here...`} className="taskinput" onBlur={newListItems} />
     <button className ="blackcross" handleInput="" img src="" alt=""> + </button>

      {addtext && addtext.map((text, counter) => {
            return <span> <p type="checkbox" checked={checked} onChange={() => setChecked(!checked)}
>{text}</p> <button onClick={() => deleteText(counter)}>Delete</button></span>
       })}
     
 </div> 
     
    )
}


export default TaskBox