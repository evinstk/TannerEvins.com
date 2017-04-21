import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const entities = (state = {
  languages: {},
  software: {}
}, action) => state

// serverError is preloaded if occurred
const serverError = (state = null) => state

const rootReducer = combineReducers({
  entities,
  serverError,
  routing
})

export default rootReducer
