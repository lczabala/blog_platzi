import React from "react";
// Se requiere para conectar el compopnente con el reducer
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';

const UserList = props => {
  const ponerFilas = () =>
    props.users.map((user,key) => (
      // Se recibe por parámetro los usuarios del arreglo y la llave del arreglo (la posición que ocupa cada usuario en el arreglo)
      // El key del tr estará representado por el id del suario (id que trae desde el api usado)
      <tr key={user.id}>
        {/* Se imprime el valor de key, haciendo referencia a la posición de cada usuario en el arreglo, no está relacionado al id de éste */}
        <th scope="row">{key}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          {user.address.street}, {user.address.city}
        </td>
        <td>
          {/* La ruta a ser usada será publications + el id del usuario */}
          <Link to = {`/publications/${key}`}>
            <i className="far fa-eye"></i>
          </Link>
        </td>
        
      </tr>
    ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
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
