import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../actions/usersActions";
import * as userPublicationsActions from "../actions/publicationsAction";

import Loader from "./Loader";
import Error from "./NotFound";

class UserPublications extends Component {
  async componentDidMount() {
    // Se realiza una destructuración de this.props para que sea mas corto el uso de las variables
    const {
      traerTodos,
      userPublications,
      match: {
        params: { key }
      }
    } = this.props;

    //Para el caso en que no se tenga los datos del estado, se evalua si éstos estan, de ser así, se hace la consulta por medio action
    if (!this.props.usersReducer.users.length) {
      await traerTodos();
    }
    // Se manda a llamar las publicaciones para un usuario en especifico
    // if (!this.props.userPublicationsReducer.publications.length) {
    //   this.props.userPublications(this.props.match.params.key)
    // }

    // Evalua si publications_key está en this.props.usersReducer.users[this.props.match.params.key])
    if (!('publications_key'.indexOf(this.props.usersReducer.users[key]))) {
      console.log("entra", key, this.props.usersReducer);
      await userPublications(key);
    }
  }

  renderUsers = () => {
    const {
      usersReducer,
      match: {
        params: { key }
      }
    } = this.props;
    if (!this.props.usersReducer.users.length || usersReducer.loading) {
      return <Loader />;
    }
    // Se evalúa si hay errores, de forma que pueda ser mostrado en pantalla. De no haber, se muestra la data a ser cargada
    if (usersReducer.error) {
      return (
        <div>
          <Error mensaje={usersReducer.error} />
        </div>
      );
    }
    const nombre = usersReducer.users[key].name;
    return <h1>Usuario {nombre}</h1>;
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapToStateToPros = ({ usersReducer, userPublicationsReducer }) => {
  return {
    usersReducer,
    userPublicationsReducer
  };
};

// Se crea un objeto con los actions que serán usados en el componente
const mapToDispatchToPros = {
  ...usersActions,
  ...userPublicationsActions
};

export default connect(
  mapToStateToPros,
  mapToDispatchToPros
)(UserPublications);
