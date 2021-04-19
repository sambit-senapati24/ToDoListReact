import React from 'react'
import {Link} from 'react-router-dom'
function TodoName({ names }) {
    return (
        <>
            {names.map((name,index) => <div className='todoname'><Link to={`${index}`}>{name}</Link></div>)}
        </>
    )
}

export default TodoName
