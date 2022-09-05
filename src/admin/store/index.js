import { createStore, combineReducers } from 'redux';
import adminHomeReducer from './reducer';

const reducer = combineReducers({
  adminHome: adminHomeReducer
})

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;