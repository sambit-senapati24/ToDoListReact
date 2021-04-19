import todoListNames from './todoListNames'
import todoListItems from './todoListItems'
import {combineReducers} from 'redux'

const reducers = combineReducers({
    names : todoListNames,
    items : todoListItems,
})

export default reducers