import { combineReducers } from 'redux'
import ContactReducer from './ContactReducer'



//Mapping With combineReducers
export default combineReducers({
    myContacts: ContactReducer
})