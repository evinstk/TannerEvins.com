import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Resume from './components/Resume'

export default <Route path="/" component={App}>
  <Route path="resume" component={Resume} />
</Route>
