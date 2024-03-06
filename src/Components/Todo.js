import {useState, useRef} from "react"
import TodoForm from "./TodoForm"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash, faEdit, faCirclePlus} from "@fortawesome/free-solid-svg-icons"

function Todo({setTodos, todos, checkTodo, todo, inputRef}){

    

    const [edit, setEdit] = useState({
        id: null,
        title: "",
        // subtitle: "",
        userId: 1,
        completed: false,
 
    })
    


    const editItem = (todoId, newTitle) => {
        if (!newTitle.title || /^\s*$/.test(newTitle.title)) {
          return;
        }

    const updatedTodos = [...todos].map((todo) => (todo.id === todoId ? newTitle: todo))
    
    // {

    //     if(todo.id === todoId){
    //         todo.title = input
    //     }
    //     return todo
    // });

    console.log(updatedTodos)
    
        // setTodos(prev => prev.map(item => (item.id === todoId ? newTitle : item)));

    setTodos(updatedTodos)
      };



    const submitUpdate = title => {
        
        editItem(edit.id, title)
        setEdit({
            id: null,
            title: ''
        })
        
    }
    

    const done = {
        fontStyle: "normal",
        textDecoration: "line-through"
    }
    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }

    const removeItem = (event) => {
        event.preventDefault();
        const todoIndex = todos.findIndex((task) => task.id === todo.id)
        const updatedTodos = [...todos];

        const updatedTodo = updatedTodos[todoIndex];
        updatedTodo[todoIndex] = updatedTodos
        setTodos(updatedTodos.filter((index) => index.id !== todo.id)); 
        console.log(updatedTodos)
        console.log(todo)
    }


    function todoInputClick() {
        // inputRef.current.focus()
        
        setEdit(
            {
            id: todo.id, 
            title: todo.title
            
            }
            )
            
    }
    if(edit.id){
        return <TodoForm edit = {edit} onClick = {submitUpdate} />
    }

    return (
    <div className = "todoHolder">
    
        <div className = "todoItems">
            <input type = "checkbox" checked = {todo.completed} onChange = {() => checkTodo(todo)} />
            <p className = "task" style = {todo.completed ? done: null}>{todo.title}</p>
            
            <FontAwesomeIcon icon= {faEdit}
            style = {todo.id ? show: {display: 'none'}}
            //onClick = {() => handleEditChange(todo.id, todo.text)}
            onClick = {
                todoInputClick
            }
                            
            className = "garbage-can"
        
            >
            
            </FontAwesomeIcon>

            <FontAwesomeIcon icon={faTrash}
            style = {todo.completed ? show: {display: 'none'}}
            onClick = {removeItem}
            className = "garbage-can"
            >
            </FontAwesomeIcon>

            
            
        
                
         </div>
         {/* <div className = "todoItems-sub">
            <FontAwesomeIcon icon= {faCirclePlus}
                style = {todo.id ? show: {display: 'none'}}
                //onClick = {() => handleEditChange(todo.id, todo.text)}
                onClick = {() => setEdit(
                    {
                    id: todo.id, 
                    subtitle: todo.subtitle
                    
                    }
                    )}
                                
                className = "garbage-can"
            
                >
            
            </FontAwesomeIcon>
            <p className = "task" style = {todo.completed ? done: null}>{todo.completed ? todo.subtitle : "Add Subtask"}</p>
         </div> */}
    </div>
    )
}

export default Todo