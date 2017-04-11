import Root from './containers/Root'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)
