import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { displayToDoItems } from '../actions/action'

function ListItem() {
    const param = useParams()
    const { index } = param
    let arr = useSelector(state => state.items[`${index}`])
    console.log(arr)
    const [item, setItem] = useState('')
    const dispatch = useDispatch()

    const handleCurrentInput = (e) => {
        setItem(e.target.value)
    }

    const handleAddItem = (e) => {
        if (arr === undefined) {
            arr = []
        }
        arr.push(item)
        dispatch(displayToDoItems(index, arr))
        setItem('')
    }

    const handleDelete = (id) => {
        let truth =  window.confirm('Do you want to delete it')
        if(truth) {
            arr.splice(id, 1)
            console.log(id)
            dispatch(displayToDoItems(index, arr))
            setItem('')
        }
    }

    const handleEdit = (id) => {
        let updatedValue = prompt("Enter the updated value")
        arr[0] = updatedValue
        dispatch(displayToDoItems(index, arr))
        setItem('')
    }
    return (
        <>
            <Link to='/'><button>Back to Home</button></Link>
            <div className='nav'>
                <input type='text' onChange={handleCurrentInput} value={item} />
                <button onClick={handleAddItem}>Add</button>
            </div>
            <div>
            {arr ? arr.map((ele, index) => {
                return (
                    <>
                        <h2>{ele}</h2>
                        <button onClick={(id) => handleDelete(index)}>Delete</button>
                        <button onClick = {(id) => handleEdit(index)}>Edit</button>
                        <button>Check</button>
                    </>
                )

            })
                : null}
            </div>

        </>
    )
}

export default ListItem
