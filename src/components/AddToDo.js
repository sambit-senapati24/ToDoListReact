import React, { useState } from 'react'
import DisplayTodoNames from './DisplayTodoNames'

function AddToDo({names, setNames}) {
    const [todoListName, setTodoListName] = useState(null);
    const handleOnChange = (e) => {
        setTodoListName(e.target.value)
    }
    const handleOnClick = () => {
        setNames((prevNames) => [...prevNames, todoListName])
        setTodoListName('')
    }
    return (
        <>
            <div className='nav'>
                <input className = 'input' type='text' placeholder='Type the name of a new todo list' value={todoListName} onChange={handleOnChange} />
                <button className='toDoListButton' onClick={handleOnClick}>Create a Todo List</button>
            </div>
            <DisplayTodoNames names={names} />
        </>
    )
}

export default AddToDo
