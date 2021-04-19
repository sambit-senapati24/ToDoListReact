import React from 'react'
import TodoName from './TodoName'

function DisplayTodoNames({names}) {
    return (
        <div className='dashboard'>
            <TodoName names={names}/>
        </div>
    )
}

export default DisplayTodoNames
