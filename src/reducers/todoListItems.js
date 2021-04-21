let arr;
const todoListItems = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, [`${action.id}`]: action.payload };
        case 'EDIT_ITEM':
            arr = state[action.index]
            arr[action.id] = action.payload;
            return { ...state, [`${action.index}`]: arr};
        case 'DELETE_ITEM':
            arr = state[action.index]
            arr.splice(action.id, 1)
            return { ...state, [`${action.index}`]: arr};
        case 'MARK_COMPLETE':
            arr = state[action.index]
            if(action.truth) {
                arr[action.id] = arr[action.id].replace(' (completed)', '')
            } else {
                arr[action.id] += action.payload;
            }
            return { ...state, [`${action.index}`]: arr };
        default:
            return state;
    }
}

export default todoListItems;