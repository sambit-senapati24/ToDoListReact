const todoListItems = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, [`${action.id}`]: action.payload };
        case 'EDIT_ITEM':
            return { ...state, [`${action.id}`]: action.payload };
        case 'DELETE_ITEM':
            return { ...state, [`${action.id}`]: action.payload };
        case 'MARK_COMPLETE':
            return { ...state, [`${action.id}`]: action.payload };
        default:
            return state;
    }
}

export default todoListItems;