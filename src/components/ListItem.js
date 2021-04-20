import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToDoItems, editToDoItems, deleteToDoItems, markCompleteToDoItems } from '../actions/action'

function ListItem() {
    const param = useParams()
    const { index } = param
    let arr = useSelector(state => state.items[`${index}`])
    const [item, setItem] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch()

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
            arr.splice(id, 1)
            dispatch(deleteToDoItems(index, arr))
            setItem('')
        }
    }

    const handleEdit = (id) => {
        let updatedValue = prompt("Enter the updated value")
        arr[id] = updatedValue
        dispatch(editToDoItems(index, arr))
        setItem('')
    }

    const handleCheck = (id) => {
        if (isChecked === false) {
            arr[`${id}`] = arr[`${id}`] + '(completed)'
        } else {
            arr[`${id}`] = arr[`${id}`].replace('(completed)', '')
        }
        dispatch(markCompleteToDoItems(index, arr))
        setIsChecked(prev => !prev)
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
                    return (
                        <>
                            <h2>{ele}</h2>
                            <button onClick={(id) => handleDelete(id)}>Delete</button>
                            <button onClick={(id) => handleEdit(id)}>Edit</button>
                            <button onClick={(id) => handleCheck(id)}>Check</button>
                        </>
                    )

                })
                    : null}
            </div>

        </>
    )
}

export default ListItem
