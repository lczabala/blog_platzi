import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import * as usersActions from '../actions/usersActions'


class Users extends Component {
  // Como se tiene conectado el reducer de usuarios, no hace falta inicilizar el estado en el constructor
  // constructor(){
  //     super()
  //     this.state={
  //       users: []
  //     }
  //   }

  componentDidMount(){
    // const data = await axios.get('https://jsonplaceholder.typicode.com/users')

    // this.setState({
    //   users: data.data
    // })
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
    console.log(this.props)
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
            <tbody>{this.ponerFilas()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

// Se mapea el estado a props
const mapStateToProps = (reducers) =>{
  // Se selecciona el reducer ligado a los usuarios
  return reducers.usersReducer
}

// connect recibe dos parámetos, 
//  1- el reducer que se quiere pasar al componente
//  2- el action que se quiere usar
// con mapStateToProps se selecciona el reducer deseado para este caso
export default connect(mapStateToProps, usersActions)(Users)