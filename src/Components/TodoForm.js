import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

function TodoForm({ edit, setEdit, setTodos, todos, date, inputRef }) {
    const [title, setTitle] = useState(edit ? edit.title : "");

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (edit) {
            const updatedTodos = todos.map((item) =>
                item.id === edit.id ? { ...item, title } : item
            );
            setTodos(updatedTodos);
            setEdit(false);
        } else {
            setTodos([
                ...todos,
                {
                    userId: 1,
                    id: Math.random(),
                    title,
                    completed: false,
                    date
                }
            ]);
        }
        setTitle("");
    };

    const handleCancel = () => {
        setEdit(false);
        setTitle("");
    };

    return (
        <div className = "todo-form-container">

                  <form className = "todo-form" onSubmit = {handleSubmit}>
        
                    {edit ? (
                    
                    
                    <>
        
                    
                    <div className = "todo-edit-container">
                        <input
                        
                        type = "text"
                        placeholder = "Enter item"
                        value = {title}
                        name = "title"
                        className = "enterField"
                        onChange = {handleChange}
                        ref={inputRef}
                        />
                        
        
                        <FontAwesomeIcon icon={faX} className = "editButtonNo" 
        
                        name = "no"
                        type ="submit" 
                        onClick =  {handleCancel}
                        >
                
                        </FontAwesomeIcon>
                        
                        <FontAwesomeIcon icon={faCheck} className = "editButtonYes" 
                        name = "yes"
                        type ="submit" 
                        onClick = {handleSubmit}>
        
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
                            value = {title}
                            name = "title"
                            className = "enterAddField"
                            onChange = {handleChange}
                        
                        
                        />
                        
                        <button className = "sendButton" type ="submit" >Add</button>
                        </div>
                    </>
                    
                    )}
                    </form>
                </div>
    );
}

export default TodoForm;
