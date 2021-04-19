import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function ListItem({ items, setItems }) {
    const param = useParams()
    const { index } = param
    const item = items[`${index}`]
    const [addItem, setAddItem] = useState('')
    const handleAddInput = (e) => {
        setAddItem(e.target.value)
    }
    const handleAddItem = (e) => {
        //setItems(prev => [...prev, prev[`${index}`])
    }
    return (
        <>
            <Link to='/'><button>Back to Home</button></Link>
            <div className='nav'>
            <input type = 'text' onChange = {handleAddInput} value={addItem}/>
            <button onClick={handleAddItem}>Add</button>
            </div>
            <ul>
                {item ? item.map((ele, index) => {
                    return (
                        <>
                        <li>{ele}</li>
                        <button>Delete</button>
                        </>
                    )
                })
                    : null}
            </ul>
        </>
    )
}

export default ListItem