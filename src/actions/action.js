export const addTodoListNames = (payload) => {
    return {
        type : 'ADD_NAME',
        payload: payload
    }
}

export const addToDoItems = (id, payload) => {
    return {
        type : 'ADD_ITEM',
        id : id,
        payload: payload
    }
}

export const editToDoItems = (id, payload) => {
    return {
        type : 'EDIT_ITEM',
        id : id,
        payload: payload
    }
}

export const deleteToDoItems = (id, payload) => {
    return {
        type : 'DELETE_ITEM',
        id : id,
        payload: payload
    }
}

export const markCompleteToDoItems = (id, payload) => {
    return {
        type : 'MARK_COMPLETE',
        id : id,
        payload: payload
    }
}