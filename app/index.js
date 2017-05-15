
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import AlumniAppContainer from './containers/AlumniAppContainer'
import ListContainer from './containers/ListContainer'
import ProjectListContainer from './containers/ProjectListContainer'
import List from './components/DetailsCard'
import ProjectInfoContainer from './containers/ProjectInfoContainer'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={AlumniAppContainer}>
      <Route path='/' component={ListContainer} />
      <Route path='/projects' component={ProjectListContainer} />
      <Route path='/projects/:id' component={ProjectInfoContainer} />
    </Route>
  </Router>

), document.getElementById('app'))
