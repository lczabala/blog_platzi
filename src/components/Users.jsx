import React, {Component} from 'react'
// Se requiere para conectar el compunente con el reducer
import {connect} from 'react-redux'
// Se importa el action con todas las acciones a usar
// import * as ----> importar todo como...
import * as usersActions from '../actions/usersActions'

import Loader from './Loader'
import Error from './NotFound'


class Users extends Component {
  
  componentDidMount(){  
    // Se hace el llamado a los datos que se mostrarán, los cuales están en el action
    // En el actión está el llamado al api que devuelve los datos de los usuarios
    this.props.traerTodos()
  }

  ponerFilas = () =>
    this.props.users.map(user => (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
        {user.address.street}, {user.address.city}
        </td>
      </tr>
    ));

  render() {
    // Se evalúa el estado del loading para que este sea mostrado o no en función a la carga de la data
    if (this.props.loading){
      return (       
        <Loader/>        
      );
    }

    console.log(this.props.error)
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            {/* Para mostrar el contenido de los datos, se hace un llamado a la función ponerFilas */}
            <tbody>{this.ponerFilas()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Se mapea el estado a props
// Por default se reciben todos los reducers
// **TRORIA** Para usar connect(), es necesario definir una función especial llamada mapStateToProps que indiqua cómo 
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