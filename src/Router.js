/**
 * @author wangjl2
 * @date 2021/9/29 2:48 下午
 */
import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Login from './pages/login'
import Home from './pages/home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
    name: 'Login',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
  },
]

const BasicRoute = () => {
  return (
    <HashRouter>
      <Switch>
        {renderRoutes(routes)}
        <Redirect to={'/login'} />
      </Switch>
    </HashRouter>
  )
}

export default BasicRoute

// <HashRouter>
// <Switch>
// <Route path="/login" component={Login} />
// <Route path="/home" component={Home} />
// <Route exact path="/" component={Login} />
// <Redirect to={'/login'} />
// </Switch>
// </HashRouter>
