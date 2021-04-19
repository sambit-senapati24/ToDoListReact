export const addTodoListNames = (payload) => {
    return {
        type : 'ADD_NAME',
        payload: payload
    }
}

export const displayToDoItems = (id, payload) => {
    return {
        type : 'SHOW_ITEM',
        id : id,
        payload: payload
    }
}