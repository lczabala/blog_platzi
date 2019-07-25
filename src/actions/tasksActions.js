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

export const changeUserID_Task = (userId) => (dispatch)=>{
    dispatch({
        type:'changeUserID_Task',
        payload: userId
    })
}

export const changeTitle_Task = (titleTask) => (dispatch)=>{   
    console.log("entra", titleTask) 
    dispatch({
        type:'changeTitle_Task',
        payload: titleTask
    })    
}

export const saveNewTask = (newTask) => async (dispatch)=>{
    dispatch({
        type:LOADING_TASKS
    })

    try{
        const data = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
        
        dispatch({
            type:'newTask'
        })
        
    }catch(e){
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_TASKS,
            payload: e.message
        })
    }
}

export const editTask = (editTask) => (dispatch) =>{
    console.log(editTask)
}