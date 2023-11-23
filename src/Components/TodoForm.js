import React, {useState, useRef} from "react"
import TodoList from "./TodoList"
import Todo from "./Todo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faX} from "@fortawesome/free-solid-svg-icons"

function TodoForm(props){
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const inputRef = useRef(null)

    const [error, setError] = useState(false)

    const [state, setState] = useState(false)

    const handleClick = event => {
        event.preventDefault();

        inputRef.current.focus()
    
        props.onClick({

            
                userId: 1,
                id: Math.random() * 1000,
                title: input,
                completed: false
            
                
            
        })



        // if(props.edit.value == ""){
            
        //         setError(true)
        //         console.log("test")
           
        // }
    

        setInput("")
        
    }

    const handleClick1 = event => {
        event.preventDefault();


    
        props.onClick({

            
                userId: 1,
                id: Math.random(),
                title: "",
                completed: false
            
                
            
        })



        // if(props.edit.value == ""){
            
        //         setError(true)
        //         console.log("test")
           
        // }
    

        setInput("")
        
    }



    const handleSubmit = event => {
        event.preventDefault();

        {props.edit ? 

        props.onClick({
            
                userId: 1,
                id: Math.random(),
                title: input,
                completed: false
                
            
        })
       
        : 
        
        props.onSubmit({
            
            userId: 1,
            id: Math.random(),
            title: input,
            completed: false
            
        
    })
        
    }
        
 

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
                ref = {inputRef}
                type = "text"
                placeholder = "Enter item"
                value = {input}
                name = "title"
                className = "enterField"
                onChange = {handleInput}
                />
                

                <FontAwesomeIcon icon={faX} className = "editButtonYes" 

                name = "no"
                type ="submit" 
                onClick =  {handleClick1}
                >
        
                </FontAwesomeIcon>
                
                <FontAwesomeIcon icon={faCheck} className = "editButtonNo" 
                name = "yes"
                type ="submit" 
                onClick = {handleClick}>

                </FontAwesomeIcon>

                {/* {error?
            <label>Invalid input</label>: "test"} */}
                
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