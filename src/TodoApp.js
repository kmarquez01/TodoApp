import logo from './logo.svg';
import TodoList from "./Components/TodoList"
import TodoForm from "./Components/TodoForm"
import "./styledelements.css"
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from 'axios';


function TodoApp(todo){
    const[todos, setTodos] = useState(null);
    const[date, setDate] = useState(new Date())

    const [hiddenAPI, sethiddenAPI] = useState(true)

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
    const hideAPI = (event) => {
        event.preventDefault();
        
        // const todoIndex = todos.findIndex((task) => task.id === todo.id)
        //         const updatedTodos = [...todos];

        //         const updatedTodo = updatedTodos[todoIndex];
        //         updatedTodo[todoIndex] = updatedTodos

        axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
             .then((result) => {
                setTodos([...todos].filter((index) => (index.id < 20 && index.id < 1)))
                console.log(result.data)
        });
        // todos.length = 0
        sethiddenAPI(false)
        console.log(todos)

        
 
    }

    const revealAPI = (event) => {
        event.preventDefault();
        axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
             .then((result) => {
                const newArray = [...todos]
                setTodos(result.data.concat(newArray))
                // setTodos(result.data)
                console.log(result.data)
        });
        sethiddenAPI(true)
        console.log(todos)

    }

    return(

        
        <div className = "background">

            <div className = "master-container">
                
            
                <div className = "container">
                    <Calendar onChange={setDate} value={date}/>

                </div>

                <div className = "container">
                    <h1 className = "title">Todo List</h1>

                    <div className = "buttoncontainer">

                        <button className = "showmore" onClick = {hiddenAPI === true ? hideAPI : revealAPI}>Hide/Show API</button>
                    </div>
                    <TodoForm todos = {todos} setTodos = {setTodos} checkTodo = {checkTodo} onSubmit = {addItem}/>
                    {todos ? <TodoList setTodos = {setTodos} todos = {todos} checkTodo = {checkTodo} addItem = {addItem}/> : <div>Hello</div> }
                
                </div>

            </div>
        </div>
    
        /*
        <TodoContainer />

        */
    )
}

export default TodoApp