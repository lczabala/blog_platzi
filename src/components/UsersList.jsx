import React from "react";
// Se requiere para conectar el compopnente con el reducer
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';

const UserList = props => {
  const ponerFilas = () =>
    props.users.map(user => (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          {user.address.street}, {user.address.city}
        </td>
        <td><Link to = {`/publications/${user.id}`}><i className="far fa-eye"></i></Link></td>
      </tr>
    ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      {/* Para mostrar el contenido de los datos, se hace un llamado a la función ponerFilas */}   
      <tbody>{ponerFilas()}</tbody>
    </table>
  );
};

//Con mapToStateToProps se selecciona el reducer a usar para obtener los datos
const mapToStateToProps = reducers => {
  return reducers.usersReducer;
};

// En este caso, el connet sólo hara uso del reducer para obtener los datos, no hará falta usar el action ya que los datos han sido cargados en el componente anterior
export default connect(mapToStateToProps)(UserList);
