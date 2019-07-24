// Reducer de las tareas

import {BRING_TASKS, LOADING_TASKS, ERROR_TASKS, CHANGEUSERID_TASK, CHANGETITLE_TASK} from '../types/tasksTypes'

// Estado inicial
const INITIAL_STATE={
    tasks: {},
    loading_tasks: false,
    error_tasks: null,
    userId: '',
    title: ''
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
        case CHANGEUSERID_TASK:
            return {
                ...state,
                userId: action.payload
            }
        case CHANGETITLE_TASK:
            return {
                ...state,
                title: action.payload
            }
        case 'newTask':
            return {
                ...state,
                tasks:{},
                loading_tasks: false,
                error_tasks: ''
            }
        default: return state
    }
}