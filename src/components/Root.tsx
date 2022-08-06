import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Banner from './Banner'

const Root = () => (
  <BrowserRouter>
    <Banner />
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Root
