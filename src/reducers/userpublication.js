// Reducer del Usuario

import { BRING_PUBLICATIONS, LOADING_PUBLICATIONS, ERROR_PUBLICATIONS } from '../types/publicationsTypes'

// Estado inicial
const INITIAL_STATE={
    publications: [],
    loading: false,
    error: null
}

// Casos
// El estado por default es el initial state
// Se recibe dos parámetros, el state y el action
export default (state = INITIAL_STATE, action) => {
    // A partir del action que se recibe, se evalúa el tipo del mismo
    switch (action.type) {
        case BRING_PUBLICATIONS:
            // Para este caso, se retorna los usuruarios
            // Se destructura el estado para actualizar el valor de users y se retorna todo el estado
            return { ...state, 
                publications: action.payload,
                loading: false,
                error: ''
            }        
        case LOADING_PUBLICATIONS:
            return {...state, 
                loading: true
            }
        case ERROR_PUBLICATIONS:
            return {...state, 
                error: action.payload,
                loading: false
            }       
        default: return state
    }
}