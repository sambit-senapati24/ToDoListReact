import React, { useState } from 'react'
import DisplayTodoNames from './DisplayTodoNames'
import { useSelector, useDispatch } from 'react-redux'
import {addTodoListNames} from '../actions/action'

function AddToDo() {

    const [listNames, setListNames] = useState(null);

    const handleOnChange = (e) => {
        setListNames(e.target.value)
    }

    const handleOnClick = () => {
        dispatch(addTodoListNames(listNames))
        setListNames('')
    }

    const dispatch = useDispatch()
    const names = useSelector(state => state.names)

    return (
        <>
            <div className='nav'>
                <input className = 'input' 
                        type='text' placeholder='Type the name of a new todo list' 
                        value={listNames} 
                        onChange={handleOnChange} />
                <button className='toDoListButton' onClick={handleOnClick}>Create a Todo List</button>
            </div>
            <DisplayTodoNames names={names} />
        </>
    )
}

export default AddToDo
