import axios from 'axios'
import {BRING_TASKS, LOADING_TASKS, ERROR_TASKS} from '../types/tasksTypes'
import { async } from 'q';

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

export const editTask = (editTask) => async(dispatch) =>{
    dispatch({
        type:LOADING_TASKS
    })

    try{
        //Con put se especifica el id del registo y todo el objeto a editar
        const data = await axios.put(`https://jsonplaceholder.typicode.com/todos/${editTask.id}`, editTask)
        
        dispatch({
            type:'editTask'
        })
        
    }catch(e){
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_TASKS,
            payload: e.message
        })
    }
}

export const completedTask = (userId, taskId) => (dispatch, getState) =>{
    console.log("entra")
    const {tasks} = getState().tasksReducer

    const selectedTask = tasks[userId][taskId]

    const updatedTasks = {
        ...tasks
    }
    updatedTasks[userId] = {
        ...tasks[userId]
    }
    updatedTasks[userId][taskId] = {
        ...tasks[userId][taskId],
        completed: !selectedTask.completed
    }

    dispatch({
        type: 'completedTasks',
        payload: updatedTasks
    })
}

export const deleteTask = (taskId) => async(dispatch) =>{
    dispatch({
        type:LOADING_TASKS
    })

    try{
        const data = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
        dispatch({
            type:BRING_TASKS,
            payload:{}
        })
        console.log(data)
        
    }catch(e){
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_TASKS,
            payload: e.message
        })
    }
}