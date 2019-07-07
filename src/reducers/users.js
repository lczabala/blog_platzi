// Reducer del Usuario

import {BRING_USERS, LOADING, ERROR} from '../types/usuariosTypes'

// Estado inicial
const INITIAL_STATE={
    users: [],
    loading: false,
    error: null
}

// Casos
// El estado por default es el initial state
// Se recibe dos parámetros, el state y el action
export default (state = INITIAL_STATE, action) => {
    // A partir del action que se recibe, se evalúa el tipo del mismo
    switch (action.type) {
        
        case BRING_USERS:
            // Para este caso, se retorna los usuruarios
            // Se destructura el estado para actualizar el valor de users y se retorna todo el estado
            return { ...state, 
                users: action.payload,
                loading: false
            }        
        case LOADING:
            return {...state, 
                loading: true
            }
        case ERROR:
            return {...state, 
                error: action.payload,
                loading: false
            }
        default: return state
    }
}