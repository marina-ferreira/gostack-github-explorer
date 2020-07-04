import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from 'pages/Dashboard'
import Repository from 'pages/Repository'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repositories/:repositoryName+" component={Repository} />
    </Switch>
  )
}

export default Routes
