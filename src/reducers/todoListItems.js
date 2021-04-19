const todoListItems = (state = {}, action) => {
    switch(action.type) {
        case 'SHOW_ITEM' :
            return {...state, [`${action.id}`] : action.payload};
        default:
            return state;
    }
}

export default todoListItems;