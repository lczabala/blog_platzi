import axios from 'axios'

import { BRING_PUBLICATIONS, LOADING_PUBLICATIONS, ERROR_PUBLICATIONS, LOADING_COMMENTS, ERROR_COMMENTS } from '../types/publicationsTypes'
import {BRING_USERS} from '../types/usuariosTypes'
import { async } from 'q';

// export const allPublications = () => async (dispatch) => {

//     dispatch({
//         type: LOADING_PUBLICATIONS      
//     })

//     try {
//         const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
//         dispatch({
//             // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
//             type: BRING_PUBLICATIONS,
//             payload: data.data
//         })
//     } catch (e) {        
//         dispatch({
//             // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
//             type: ERROR_PUBLICATIONS,
//             payload: e.message
//         })
//     }
// }

// Se creará una acción para traer las publicaciones por usuario
// getState recibe el estado actual
export const userPublications = (key) => async(dispatch, getState) =>{
    // Se estado se estrae los usuarios del reducer de usuarios, de forma que se pueda obtener el id del usuario que se está consultando
    const { users } = getState().usersReducer
    // Se destructura para obtener el Reducer de publicaiones actual del estado
    const { publications } = getState().userPublicationsReducer  
    // Se toma el id del usuario en función al key que se recibe. Destacar que este Key es el indice del arreglo 
    const user_id = users[key].id

    dispatch({
        type: LOADING_PUBLICATIONS      
    })

    try {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

        // A las publicaciones que son traidas, se le asigna un arreglo vacío para lo comentarios y una variable booleana para indicar si la publicación está o no abierta
        const new_publications = data.data.map(publications => ({
            ...publications,
            comments: [],
            open: false
        }))

        // Es necesario mantener las publicaciones actualizadas a medida que se vayan obteniendo las publicaciones de nuevo usuarios
        // La forma de actualizarlos es directamente sobre publicacions, la cual tiene las publicaciones actuales, con data.data se anexa las nueva publicaciones
        const updated_publications =[
            ...publications,
            new_publications
        ]
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: BRING_PUBLICATIONS,
            // Al reducer es necesario mandar las nuevas publicaciones (mas las que ya estaban agregadas)
            payload: updated_publications
        })
        // De forma que se pueda asociar las publicaciones con sus respectivos usuarios,s e tomará el publications_key
        // Este será asignado al reducer de usuarios para indicar que a este usuario le pertenece la key "x" del arreglo de publicaciones
        const publications_key = updated_publications.length - 1
        const updated_users = [...users]
        
        updated_users[key] = {
            ...users[key],
            publications_key
        }

        dispatch({
            type: BRING_USERS,
            payload: updated_users
        })
    } catch (e) {        
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_PUBLICATIONS,
            payload: e.message
        })
    }
}

export const openClosePublications = (key, comment_key) => (dispatch, getState) => {
    const {publications} = getState().userPublicationsReducer
    // Se identifica qué publicación fue la seleccionada
    const publicacionSelected = publications[key][comment_key]
  
    const openPublicacionUptadeted = {
        ...publicacionSelected,
        open: !publicacionSelected.open
    }
    
    const publicacionsUpdated = [...publications]
   
    publicacionsUpdated[key] = [
        ...publications[key]
    ]
    
    publicacionsUpdated[key][comment_key] = openPublicacionUptadeted
    dispatch({        
        type: BRING_PUBLICATIONS,
        payload: publicacionsUpdated
    })
}

export const bringComments = (key, comment_key) => async(dispatch, getState) =>{
    dispatch({
        type: LOADING_COMMENTS      
    })
    try{
        const {publications} = getState().userPublicationsReducer
        // Se identifica qué publicación fue la seleccionada
        const publicationSelected = publications[key][comment_key]
        const data = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${publicationSelected.id}`)

        const openPublicationUptadeted = {
            ...publicationSelected,
            comments: data.data
        }
        const publicationsUpdated = [...publications]
   
        publicationsUpdated[key] = [
            ...publications[key]
        ]        
        publicationsUpdated[key][comment_key] = openPublicationUptadeted
        dispatch({        
            type: BRING_PUBLICATIONS,
            payload: publicationsUpdated
        })
        console.log(publicationsUpdated)
    }catch (e) {   
        console.log("disparo error", e)     
        dispatch({
            // El type sera el caso a evaluar a la hora de llamar al reducer de usuarios
            type: ERROR_COMMENTS,
            payload: e.message
        })
    }
}