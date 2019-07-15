// Se definen las acciones que serán llavadas a cabo por el componente, y las cuaes serán llamadas
import axios from 'axios'
import { BRING_USERS, LOADING, ERROR } from '../types/usuariosTypes'
// Dispatch es el encargado de disparar la llamada y va a contactar el reducer para el cambio de estado
export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: LOADING      
    })

    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("entra aqui")
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: BRING_USERS,
            payload: data.data
        })
    } catch (e) {
        
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR,
            payload: e.message
        })
    }
}