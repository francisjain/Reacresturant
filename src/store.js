import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from './reducers/restaurantReducer'

const reducers = combineReducers({
    restaurantReducer: restaurantListReducer
})
const inintialState = {}
const middleware = [thunk]

const store = createStore(reducers, inintialState, applyMiddleware(...middleware))

export default store