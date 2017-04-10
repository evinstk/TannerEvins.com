import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

const entities = (state = {
    languages: {},
    software: {}
}, action) => state

const rootReducer = combineReducers({
    entities,
    routing
})

export default rootReducer
