// Reducer del Usuario
// Estado inicial
const INITIAL_STATE={
    users: []
}

// Casos
// El estado por default es el initial state
export default (state = INITIAL_STATE, action) => {
    // A partir del action que se recibe, se evalúa el tipo del mismo
    switch (action.type) {
        
        case 'bring_users':
            return { ...state, users: action.payload }

        default: return state
    }
}