import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Menu.css'

const Menu = () => {

    return (
      <nav className="nav">
        <Link className="nav-link active" to="/">
          Users
        </Link>
        <Link className="nav-link" to="/tasks">
          Tasks
        </Link>
        <Link className="nav-link" to="/others">
          Others
        </Link>        
      </nav>
    );

}

export default Menu;