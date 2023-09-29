import logo from './logo.svg';
import TodoList from "./Components/TodoList"
import TodoForm from "./Components/TodoForm"
import "./styledelements.css"
import React, { useState, useEffect } from "react";
import axios from 'axios';


function TodoApp(){
    const[todos, setTodos] = useState(null);



    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
             .then((result) => {
                setTodos(result.data)
                console.log(result.data)
        });
        
    }, [])


    const checkTodo = (todo) => {
        
         
        /*todos.map(todo => {
           if(todo.id === id){
               todo.completed = !todo.completed
           }
           return todo
       })
       setTodos(todoUpdated)
       console.log(todoUpdated) */

     
       
       const todoIndex = todos.findIndex((task) => task.id === todo.id)
       const updatedTodos = [...todos];

       const updatedTodo = updatedTodos[todoIndex];
       updatedTodo.completed =! updatedTodo.completed;
       updatedTodo[todoIndex] = updatedTodos
       setTodos(updatedTodos); 
       console.log(updatedTodo)
       
   }


   const addItem = (todo) => {

       
       if(!todo.title){
           return;
       }
       const revisedTodos = [...todos, todo]

       setTodos(revisedTodos)
       console.log(revisedTodos)
   }

    /*
    const deleteAll = (todo) => {
        event.preventDefault();
        const todoIndex = todos.findIndex((task) => task.id === todo.id)
        const updatedTodos = [...todos];

        const updatedTodo = updatedTodos[todoIndex];
        updatedTodo[todoIndex] = updatedTodos
        setTodos(updatedTodos.filter((index) => index.id !== todo.id)); 
        console.log(updatedTodos)
        console.log(todo)
    }

    */
  

    return(

        
        <div className = "background">
            <div className = "container">
                {todos ? <TodoList setTodos = {setTodos} todos = {todos} checkTodo = {checkTodo} addItem = {addItem}/> : <div>Hello</div> }
                <TodoForm todos = {todos} setTodos = {setTodos} checkTodo = {checkTodo} onSubmit = {addItem}/>
            </div>
        </div>
    
        /*
        <TodoContainer />

        */
    )
}

export default TodoApp