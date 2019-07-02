import {combineReducers} from 'redux'
import usersReducer from './users'

export default combineReducers({
    // Toda la aplicación tendría acceso a usuarios
    usersReducer
})