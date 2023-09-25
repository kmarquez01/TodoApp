import React, {useState} from "react"

import TodoList from "./TodoList"

import Todo from "./Todo"

function TodoForm(props){
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const handleClick = event => {
        event.preventDefault();

        props.onClick({
            
                userId: 1,
                id: Math.random(),
                title: input,
                completed: false
                
                
            
        })
        
 

        setInput("")

        

        
    }


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

            {props.edit ? (
            
            <>

            <div className = "todo-edit-container">
                <input 
                type = "text"
                placeholder = "Enter item"
                value = {input}
                name = "title"
                className = "enterField"
                onChange = {handleInput}
                />
                
                <button className = "editButton" type ="submit" onClick = {handleClick}>Edit Item</button>
            </div>
            </>

            ) : (

            <>
            
            <div className = "todo-add-container">
            
                <input 
                    type = "text"
                    placeholder = "Enter item"
                    value = {input}
                    name = "title"
                    className = "enterAddField"
                    onChange = {handleInput}
                
                
                
                />
                
                <button className = "sendButton" type ="submit" >Add Item</button>
                </div>
            </>
            
            )}
            </form>
        </div>
    )
}

export default TodoForm