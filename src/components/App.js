import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import User from './Users'
import Task from './Tasks'

const App = () => {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Switch>
        <Route exact path='/' component={User} />
        <Route exact path='/tasks' component={Task} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
