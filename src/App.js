import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './login/index.js';
import { Signup } from './signup/index.js';
import { Home } from './home/index.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/user/login'} component={Login} />
          <Route path={'/user/signup'} component={Signup} />
          <Route path={'/home'} component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App