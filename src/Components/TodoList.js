import Todo from "./Todo"

import TodoForm from "./TodoForm"

import {useEffect, useState} from "react"

import axios from "axios"



function TodoList ({ todos, setTodos, checkTodo, addTodo, removeItem, editItem, handleEditChange}) {

    const [hiddenAPI, sethiddenAPI] = useState(true)

 

    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }

    // const hideAPI = (event) => {
    //     event.preventDefault();
    //     todos.length = 0
    //     sethiddenAPI(false)
    //     console.log(todos)

        
 
    // }

    // const revealAPI = (event) => {
    //     event.preventDefault();
    //     axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
    //          .then((result) => {
    //             setTodos(result.data)
    //             console.log(result.data)
    //     });
    //     sethiddenAPI(true)
    //     console.log(todos)

    // }

    // const reviseTodo = (todoId, newValue) => {
    //     if(!newValue.title){
    //         return;
    //     }
    //    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    // }


    return (
        <div className = "todoList">
         {/* <form className = "todoList"> */}
            
            <div className = "todo-items-container">
            {todos.map((todo) => (
                
                <Todo setTodos = {setTodos} 
                todos = {todos} 
                removeItem = {removeItem}
                checkTodo = {checkTodo} 
                todo = {todo}
                key = {todo.id} 
                editItem = {editItem}
                
                
                 />
                
            ))}

            </div>


        {/* </form> */}
        </div>
        
    );
};

export default TodoList