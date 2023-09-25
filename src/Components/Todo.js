import {useState} from "react"
import TodoForm from "./TodoForm"
function Todo({setTodos, todos, checkTodo, todo, input}){

    const [edit, setEdit] = useState({
        id: null,
        title: "",
        userId: 1,
        completed: false
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

    // const editItem = (id) => {


    // const todoIndex = todos.findIndex((task) => task.id === todo.id)

    
    // // console.log(todoIndex)
    // const updatedTodos = [...todos].map((todo) => {

    //     if(todo.id === id){
    //         todo.title = input
    //     }
    //     return todo
    // });

    // // const updatedTodo = updatedTodos[todoIndex]

    // // setTodos(updatedTodo)

    // // const updatedTodo = updatedTodos[todoIndex]


    // // console.log(updatedTodo)

    // // //setTodos(updatedTodo)


    // // console.log(updatedTodo)

    // // console.log(updatedTodos)
      
    // }




    // const editItem = (todoId, newValue) => {

    //     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    // }

    // const editItem = (event) => {

    //     event.preventDefault();

    //     // reviseTodo(edit.id, title)
        

    //     const todoIndex = todos.findIndex((task) => task.id === todo.id)

    //     setEdit(
    //             {id: todoIndex, 
    //              title: "test", 
    //              userId: todoIndex.userId, 
    //              completed: todoIndex.compelted})

    //     // const newTodo = todoIndex.title

    //     const updatedTodos = [...todos];

    //     const updatedTodo = updatedTodos[todoIndex];
    //     updatedTodo[todoIndex] = updatedTodos

    //     // updatedTodos = [...todos, newTodo]

    //     // setTodos(updatedTodos.filter((index) => index.id == todo.id));

    //     setTodos(prev => prev.map(item => (item.id === todo.id ? todo.title : item)))
        

    //     console.log(updatedTodos)
        
    // }

    if(edit.id){
        return <TodoForm edit = {edit} onClick = {submitUpdate} />
    }

         /* <button
            type = "submit"
            style = {todo.completed ? show: {display: 'none'}}
            onClick = {() => setEdit(
                {id: todo.id, 
                 title: todo.title, 
                 userId: todo.userId, 
                 completed: todo.compelted})}
            
            
            className = "garbage-can"
        
            >
            Edit
            </button>
            */


    return (
    <div>
    
        <div className = "todoItems">
            <input type = "checkbox" checked = {todo.completed} onChange = {() => checkTodo(todo)} />
            <p className = "task" style = {todo.completed ? done: null}>{todo.title}</p>
            
            <button
            style = {todo.completed ? show: {display: 'none'}}
            onClick = {removeItem}
            className = "garbage-can"
        
            >
            Delete
            </button>

            
            <button
            style = {todo.completed ? show: {display: 'none'}}
            //onClick = {() => handleEditChange(todo.id, todo.text)}
            onClick = {() => setEdit(
                {
                id: todo.id, 
                title: todo.title
                
                }
                )}
                            
            className = "garbage-can"
        
            >
            Edit
            </button>

            
            
        
                
         </div>

    </div>
    )
}

export default Todo