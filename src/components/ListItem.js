import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToDoItems, editToDoItems, deleteToDoItems, markCompleteToDoItems } from '../actions/action'

function ListItem() {
    const param = useParams()
    const { index } = param
    let arr = useSelector(state => state.items[`${index}`]) //to fetch array of the particular todo list name
    const [item, setItem] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch()

    //event handlers below
    const handleCurrentInput = (e) => {
        setItem(e.target.value)
    }

    const handleAddItem = (e) => {
        if (arr === undefined) {
            arr = []
        }
        arr.push(item)
        dispatch(addToDoItems(index, arr))
        setItem('')
    }

    const handleDelete = (id) => {
        let truth = window.confirm('Do you want to delete it')
        if (truth) {
            dispatch(deleteToDoItems(index, id))
            setItem('')
        }
    }

    const handleEdit = (id) => {
        let updatedValue = prompt("Enter the updated value")
        setIsChecked(false)
        dispatch(editToDoItems(index, id, updatedValue))
        setItem('')
    }

    const handleCheck = (id) => {
        if (isChecked === false) {
            dispatch(markCompleteToDoItems(index, id, ' (completed)', false))
            setIsChecked(prev => !prev)
        } else {
            dispatch(markCompleteToDoItems(index, id, '', true))
        }
    }

    return (
        <>
            <Link to='/'><button>Back to Home</button></Link>
            <div className='nav'>
                <input type='text' onChange={handleCurrentInput} value={item} />
                <button onClick={handleAddItem}>Add</button>
            </div>
            <div>
                {arr ? arr.map((ele, id) => {
                    let currIndex = id
                    return (
                        <>
                            <h2>{ele}</h2>
                            <button onClick={() => handleDelete(currIndex)}>Delete</button>
                            <button onClick={() => handleEdit(currIndex)}>Edit</button>
                            <button onClick={() => handleCheck(currIndex)}>Check</button>
                        </>
                    )

                })
                    : null}
            </div>

        </>
    )
}

export default ListItem
