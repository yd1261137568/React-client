
import {createStore, applyMiddleware} from 'redux';
import xxx from './reducers';
import thunk from 'redux-thunk';
export default createStore(
  xxx,
  combineReducers(applyMiddleware(thunk))
);
