import React from 'react'

const Todos = ({todos, deleteTodo}) =>{

    const todoList = todos.length ? (
        todos.map( todo =>{
            return (
                <div className = "collection-item" key={todo.id}>
                    <span>{todo.content} <button className = "secondary-content btn-floating btn-small waves-effect waves-light red"onClick = {()=> {deleteTodo(todo.id)}}><i class="tiny material-icons">delete</i></button></span>
                    
                </div>
            )
        
        })
    ) : (
        <p className = "center"> No todo's </p>
    )
    return(
        <div className = "todos collection">
            {todoList}
        </div>
    )
}

export default Todos;