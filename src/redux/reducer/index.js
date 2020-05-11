import { combineReducers } from 'redux'
import personalData from './personalData.js'
import message from './message'
const rootReducer = combineReducers({
    personalData,
    message
})
export default rootReducer