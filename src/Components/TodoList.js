import Todo from "./Todo"

import TodoForm from "./TodoForm"

import {useEffect, useState} from "react"

import axios from "axios"



function TodoList ({ todos, setTodos, checkTodo, addTodo, removeItem, editItem}) {

 

    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }


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
