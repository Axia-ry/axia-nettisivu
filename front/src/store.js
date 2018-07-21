import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
})

const store = createStore(
  combinedReducer,
  applyMiddleware(thunk)
)

export default store