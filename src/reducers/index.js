// Contará con todos los reducer que serán enviados a la aplicación
// Para ello, es necesario importar el CombineReducer
import {combineReducers} from 'redux'
// Se importa el reducer relacionado a los usuarios
import usersReducer from './users'

// Se exportan todos los reducers necesarios
export default combineReducers({
    // Toda la aplicación tendría acceso a usuarios
    usersReducer
})