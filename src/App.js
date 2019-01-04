import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './login/index.js';
import { Signup } from './signup/index.js';
import { Home } from './home/index.js'
import { Map } from './home/map'
import { Typography } from './home/typography'
import { User } from './home/user'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/user/login'} component={Login} />
          <Route path={'/user/signup'} component={Signup} />
          <Route path={'/home/dashboard'} component={Home} />
          <Route path={'/home/map'} component={Map} />
          <Route path={'/home/typography'} component={Typography} />
          <Route path={'/home/user'} component={User} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App