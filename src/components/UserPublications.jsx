import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../actions/usersActions";
import * as userPublicationsActions from "../actions/publicationsAction";

import Loader from "./Loader";
import Error from "./NotFound";

class UserPublications extends Component {
  async componentDidMount() {
    //Para el caso en que no se tenga los datos del estado, se evalua si éstos estan, de ser así, se hace la consulta por medio action
    if (!this.props.usersReducer.users.length) {
      await this.props.traerTodos();
    }

    // Se manda a llamar las publicaciones para un usuario en especifico
    if (!this.props.userPublicationsReducer.publications.length) {
      this.props.userPublications(this.props.match.params.key)
    }
  }

  render() {
    console.log(this.props)
    if (this.props.userPublicationsReducer.loading) {
      return <Loader />;
    }

    // Se evalúa si hay errores, de forma que pueda ser mostrado en pantalla. De no haber, se muestra la data a ser cargada
    if (this.props.userPublicationsReducer.error) {
      return (
        <div>
          <Error mensaje={this.props.error} />
        </div>
      );
    }

    return (
      <div>
        {/* <h1>Publicaiones de {this.props.users[this.props.match.params.key].name} </h1> */}
        {this.props.match.params.key}
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
