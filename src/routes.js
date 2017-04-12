import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import Resume from './containers/Resume'

export default <Route path="/" component={App}>
    <Route path="resume" component={Resume} />
</Route>
