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

export const editToDoItems = (index, id, payload) => {
    return {
        type : 'EDIT_ITEM',
        index : index,
        id : id,
        payload: payload
    }
}

export const deleteToDoItems = (index, id) => {
    return {
        type : 'DELETE_ITEM',
        index : index,
        id : id,
    }
}

export const markCompleteToDoItems = (index, id, payload, truth) => {
    return {
        type : 'MARK_COMPLETE',
        index : index,
        id : id,
        payload: payload,
        truth : truth,
    }
}