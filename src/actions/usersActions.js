// dispatch es el encargado de disparar la llamada y va a contactar el reducer para el cambio de estado
export const traerTodos = () => (dispatch) =>{
    dispatch({
        // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
        type: 'bring_users',
        payload: [1,2,3]
    })
}

