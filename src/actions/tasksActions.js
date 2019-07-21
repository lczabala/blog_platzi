import axios from 'axios'
import {BRING_TASKS, LOADING_TASKS, ERROR_TASKS} from '../types/tasksTypes'

export const allTasks = () => async (dispatch) => {

    dispatch({
        type: LOADING_TASKS      
    })

    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
        
        const tasks = {}

        data.data.map((t) =>(
            tasks[t.userId] = {
                ...tasks[t.userId],
                [t.id]:  {
                    ...t
                }
            }
        ))

        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: BRING_TASKS,
            payload: tasks
        })
    } catch (e) {
        
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_TASKS,
            payload: e.message
        })
    }
}