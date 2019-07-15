import React, {Component} from 'react'
// Se requiere para conectar el compunente con el reducer
import {connect} from 'react-redux'
// Se importa el action con todas las acciones a usar
// import * as ----> importar todo como...
import * as usersActions from '../actions/usersActions'

import Loader from './Loader'
import Error from './NotFound'
import UserList from './UsersList'


class Users extends Component {
  
  componentDidMount(){  
    // Se hace el llamado a los datos que se mostrarán, los cuales están en el action
    // En el actión está el llamado al api que devuelve los datos de los usuarios
    if (!this.props.users.length) {
			this.props.traerTodos();
		}    
  }
  
  render() {
    // Se evalúa el estado del loading para que este sea mostrado o no en función a la carga de la data
    if (this.props.loading){
      return (       
        <Loader/>        
      );
    }

    // Se evalúa si hay errores, de forma que pueda ser mostrado en pantalla. De no haber, se muestra la data a ser cargada
    if (this.props.error){
      return (       
        <div>
          <Error mensaje={this.props.error}/>
        </div>  
      );
    }

    return (
      <div className="container">
        <div className="row">
          <h1>Usuarios</h1>
          {/* En el componente UsersList, los datos serán obtenidos por medio del reducer, por tanto, no se le envía ningun prop con estos datos */}
          <UserList/>
        </div>
        {/* <a href="https://wa.me/584124358375?text=Me%20gustaría%20saber%20el%20precio%20de%20la%20noche">Envíanos un mensaje de WhatsApp</a> */}
      </div>
    );
  }
}

// Se mapea el estado a props
// Por default se reciben todos los reducers
// **TEORIA** Para usar connect(), es necesario definir una función especial llamada mapStateToProps que indica cómo 
// transformar el estado actual del store Redux en los props que desea pasar a un componente de presentación
const mapStateToProps = (reducers) =>{
  // Se selecciona el reducer ligado a los usuarios
  return reducers.usersReducer
}

// Para conertar, connect recibe dos parámetos, 
//  1- todos los reducers que se quiere pasar al componente
//  2- el action que se quiere usar
// con mapStateToProps se selecciona el reducer deseado para este caso
export default connect(mapStateToProps, usersActions)(Users)