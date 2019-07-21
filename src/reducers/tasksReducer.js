// Reducer de las tareas

import {BRING_TASKS, LOADING_TASKS, ERROR_TASKS} from '../types/tasksTypes'

// Estado inicial
const INITIAL_STATE={
    tasks: {},
    loading_tasks: false,
    error_tasks: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case BRING_TASKS:
            return { ...state, 
                tasks: action.payload,
                loading_tasks: false,
                error_tasks: ''
            }        
        case LOADING_TASKS:
            return {...state, 
                loading_tasks: true
            }
        case ERROR_TASKS:
            return {...state, 
                error_tasks: action.payload,
                loading_tasks: false
            }
        default: return state
    }
}