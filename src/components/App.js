import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu'
import User from './users/Users'


const App = () => {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Route exact path='/' component={User}/>
    </BrowserRouter>
  )
}

export default App;
