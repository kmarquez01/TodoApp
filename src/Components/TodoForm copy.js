import React, {useState} from "react"

import TodoList from "./TodoList"

function TodoForm(props){
    const [input, setInput] = useState("")

    const handleSubmit = event => {
        event.preventDefault();


        props.onSubmit({
            
                userId: 1,
                id: Math.random(),
                title: input,
                completed: false
                
            
        })
 

        setInput("")
    }

    const handleInput = event => {
        setInput(event.target.value)
    }

   

    

    return(
        <div className = "todo-form-container">

            <form className = "todo-form" onSubmit = {handleSubmit}>
            
                <input 
                    type = "text"
                    placeholder = "Enter item"
                    value = {input}
                    name = "title"
                    className = "enterField"
                    onChange = {handleInput}
                
                
                
                />
                <button className = "sendButton" type ="submit">Add Item</button>
            </form>
        </div>
    )
}

export default TodoForm