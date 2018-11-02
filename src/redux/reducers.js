
import {AUTH_SUCCESS,ERR_MEG} from './action-types';
import {combineReducers} from 'redux';
import {getRedirectPath} from '../utils'

const initUserState = {
  username:'',
  type:'',
  meg:'',
  redirectTo:''
};
function user(preState = initUserState,action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {username:action.data.username,type:action.data.type,meg:'',redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case ERR_MEG :
      return {...action.data}
    default:
      return preState;
  }
}
export default combineReducers({
  user
});


