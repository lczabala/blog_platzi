import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../actions/usersActions";
import * as userPublicationsActions from "../actions/publicationsAction";

import Loader from "./Loader";
import Error from "./NotFound";
import "./styles/UserPublications.css"

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
    if (!('publications_key' in this.props.usersReducer.users[key])) {      
      console.log("Buscar publicaciones")
      await userPublications(key);
    }
  }

  renderUsers = () => {
    // Destructuramos this.props para trabajar directamente con el reducer de usuarios y con el Key
    const {
      usersReducer,
      match: {
        params: { key }
      }
    } = this.props;
    // Para hacer el llamado del Loader, se evalúa si en el reducer hay usuarios o si el loadgin esta en true
    // if (!this.props.usersReducer.users.length || usersReducer.loading) {
    //   return <Loader />;
    // }
    // Se evalúa si hay errores, de forma que pueda ser mostrado en pantalla. De no haber, se muestra la data a ser cargada
    // if (usersReducer.error) {
    //   return (
    //     <div>
    //       <Error mensaje={usersReducer.error} />
    //     </div>
    //   );
    // }

    // Se pinta el nombre del usuario
    const nombre = usersReducer.users[key].name;
    return <h1 className="userName">Usuario {nombre}</h1>;
  };

  renderPublications = () =>{
    console.log("entre en renderPublications")
    const {
      usersReducer,
      usersReducer: {users},

      userPublicationsReducer,
      userPublicationsReducer: {publications},

      match: {
        params: { key }
      }
    } = this.props;

    if (!users.length) {
      return
    }
    if (usersReducer.error) {
      return 
    }
    // if (userPublicationsReducer.loading){
    //   return <Loader/>
    // }
    // if (userPublicationsReducer.error){
    //   return (
    //     <div>
    //       <Error mensaje={userPublicationsReducer.error} />
    //     </div>
    //   );
    // }
    if (!publications.length) {
      return
    }
    if (!('publications_key' in users[key])){
      return
    }

    const { publications_key } = users[key];
    console.log(publications_key)
    return publications[publications_key].map(
      publication => (
        <div className="card cardPublication" key={publication.id}>
          <div class="card-body">
            <h5 class="card-title">{publication.title}</h5>
            <p class="card-text">{publication.body}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      )
    );
  }

  render() {
    console.log(this.props);

    
    if (this.props.userPublicationsReducer.loading || !this.props.usersReducer.users.length || this.props.usersReducer.loading){
      return <Loader/>
    }

    if (this.props.usersReducer.error) {
      return (
        <div>
          <Error mensaje={this.props.usersReducer.error} />
        </div>
      );
    }

    if (this.props.userPublicationsReducer.error){
      return (
        <div>
          <Error mensaje={this.props.userPublicationsReducer.error} />
        </div>
      );
    }

    return (
      <div className="container">   
        <div className="row">
          {this.renderUsers()}
          {this.renderPublications()}
        </div>       
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
