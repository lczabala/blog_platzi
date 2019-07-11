import axios from 'axios'

import { BRING_PUBLICATIONS, LOADING_PUBLICATIONS, ERROR_PUBLICATIONS } from '../types/publicationsTypes'

export const allPublications = () => async (dispatch) => {

    dispatch({
        type: LOADING_PUBLICATIONS      
    })

    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: BRING_PUBLICATIONS,
            payload: data.data
        })
    } catch (e) {        
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_PUBLICATIONS,
            payload: e.message
        })
    }
}

// Se creará una acción para traer las publicaciones por usuario
// getState recibe el estado actual
export const userPublications = (key) => async(dispatch, getState) =>{
    // Se estado se estrae los usuarios del reducer de usuarios, de forma que se pueda obtener el id del usuario que se está consultando
    const { users } = getState().usersReducer
    const user_id = users[key].id

    try {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: BRING_PUBLICATIONS,
            payload: data.data
        })
    } catch (e) {        
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_PUBLICATIONS,
            payload: e.message
        })
    }
}