import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import teamReducer from './reducers/teamReducer'
import textReducer from './reducers/textReducer'

const combinedReducer = combineReducers({
  teams: teamReducer,
  texts: textReducer
})

const store = createStore(
  combinedReducer,
  applyMiddleware(thunk)
)

export default store