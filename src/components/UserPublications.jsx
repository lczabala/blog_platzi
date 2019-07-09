import React, {Component} from 'react'

class UserPublications extends Component {
  render() {
    console.log("hola");
    return (
      <div>
        hola
        {this.props.match.paramns.user.id}
      </div>
    );
  }
}

export default UserPublications