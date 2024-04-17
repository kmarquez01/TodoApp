import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import axios from 'axios';
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import TodoContext from "./Components/TodoContext";
import "./styledelements.css";

function TodoApp({ handleSubmit }) {
    const { todos, setTodos } = useContext(TodoContext);
    const [date, setDate] = useState(new Date());

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
    //         .then((result) => {
    //             setTodos(result.data);
    //         });
    // }, []);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    useEffect(() => {
        if (!todos) return;
        const filteredTodos = todos.filter(todo => {
            const todoDate = new Date(todo.date);
            return (
                todoDate.getDate() === date.getDate() &&
                todoDate.getMonth() === date.getMonth() &&
                todoDate.getFullYear() === date.getFullYear()
            );
        });
        setFilteredTodos(filteredTodos);
    }, [date, todos]);

    const [filteredTodos, setFilteredTodos] = useState([]);

    const checkTodo = (todo) => {
        const todoIndex = todos.findIndex((task) => task.id === todo.id);
        const updatedTodos = [...todos];
        const updatedTodo = updatedTodos[todoIndex];
        updatedTodo.completed = !updatedTodo.completed;
        setTodos(updatedTodos);
    }

    const addItem = (todo) => {
        if (!todo.title) {
            return;
        }
        const revisedTodos = [...todos, todo];
        setTodos(revisedTodos);
        console.log(revisedTodos)
    }

    return (
        <div className="background">
            <div className="master-container">
                {/* <div className="container">
                    <Calendar onChange={handleDateChange} value={date} />
                </div> */}
                <div className="container">
                <Calendar onChange={handleDateChange} value={date} />
                    <div className="todo-list-main-container">
                        <h1 className="title">Todo List</h1>
                        <TodoForm todos = {todos} setTodos={setTodos} checkTodo={checkTodo} onSubmit={addItem} date={date} />
                        {filteredTodos ? <TodoList todos={filteredTodos} setTodos = {setTodos} checkTodo={checkTodo} addItem={addItem} onSubmit={handleSubmit} date={date}/> : <div>Hello</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;
