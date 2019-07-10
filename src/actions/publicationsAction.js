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