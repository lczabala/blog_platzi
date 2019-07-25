import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Se importan los componentes a ser usados tanto a ser renerizados como los que se referenciaran para su acceso por las rutas
import Menu from './Menu'
import User from './Users'
import Task from './Tasks/IndexTasks'
import NewTask from './Tasks/NewTask'
import UserPublications from './UserPublications'

const App = () => {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Switch>
        {/* Se definen las rutas que serán usadas en la palicación */}
        <Route exact path='/' component={User} />
        <Route exact path='/tasks' component={Task} />
        <Route exact path='/tasks/newtask' component={NewTask} />
        <Route exact path='/tasks/newtask/:userId/:taskId' component={NewTask} />
        <Route exact path='/publications/:key' component={UserPublications} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
