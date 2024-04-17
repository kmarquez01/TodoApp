import { useState, useEffect, useRef } from "react";
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


function Todo({
    setTodos,
    todos,
    checkTodo,
    todo,
    date
}) {
        const done = {
        fontStyle: "normal",
        textDecoration: "line-through"
    }
    const show = {
        display: 'block',
        width: '50px',
        height: '20px'
    }
    const [edit, setEdit] = useState(false);

    const editInputRef = useRef(null);

    useEffect(() => {
        if (edit) {
            editInputRef.current.focus();
        }
    }, [edit]);

    const handleEditClick = () => {
        setEdit(true);
    };

    const removeItem = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    };
    

    if(edit){
        return <TodoForm 
        edit = {todo} 
        setEdit={setEdit}
        setTodos={setTodos}
        todos={todos}
        date={date} 
        inputRef={editInputRef}
        />
    }

    return (
        <div className="todoHolder">
            <div className="todoItems">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => checkTodo(todo)}
                />
                <p className="task" style = {todo.completed ? done: null}>{todo.title}</p>
                <FontAwesomeIcon
                    icon={faEdit}
                    style = {todo.id ? show: {display: 'none'}}
                    onClick={handleEditClick}
                    className="garbage-can"
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    style = {todo.completed ? show: {display: 'none'}}
                    onClick={removeItem}
                    className="garbage-can"
                />
            </div>
        </div>
    );
}

export default Todo;
