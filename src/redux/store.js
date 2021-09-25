import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import loginReducer from "./reducers/loginReducer"
import transactionsReducer from "./reducers/transactionReducer"

const rootReducer = combineReducers({
  loginReducer,
  transactionsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
