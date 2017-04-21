import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'

const Root = props => (
  <Provider store={props.store}>
    <Router history={props.history} routes={routes} />
  </Provider>
)

export default Root
