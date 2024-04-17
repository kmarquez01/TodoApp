import Todo from "./Todo"

function TodoList ({ todos, setTodos, checkTodo, addTodo, removeItem, editItem, date}) {
    
    const todoItems = Array.isArray(todos) ? todos : [];

    return (
        <div className = "todoList">         
            <div className = "todo-items-container">
            {todos.map((todo) => (
                
                <Todo setTodos = {setTodos} 
                todos = {todos} 
                removeItem = {removeItem}
                checkTodo = {checkTodo} 
                todo = {todo}
                key = {todo.id} 
                editItem = {editItem}
                date = {date}
                
                 />
                
            ))}
            </div>
        </div>
        
    );
};

export default TodoList
