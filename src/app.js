import Root from './containers/Root'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import defaultState from './store/defaultState'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore(defaultState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)
