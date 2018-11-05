
import {combineReducers} from 'redux';
import {AUTH_SUCCESS,ERR_MEG,UPDATA_USER,RESET_USER, UPDATA_USER_LIST, RESET_USER_LIST} from './action-types';

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
      return {
        ...action.data,
        meg:'',
        redirectTo: getRedirectPath(action.data.type, action.data.header)
      };
    case ERR_MEG :
      return action.data;
    case UPDATA_USER :
      return action.data;
    case RESET_USER :
      return action.data;
    default:
      return preState;
  }
}
const initUserListState = [];
function userList(preState = initUserListState,action) {
  switch (action.type){
    case UPDATA_USER_LIST :
      return action.data;
    case RESET_USER_LIST :
      return action.data;
    default:
      return preState;
  }
}

export default combineReducers({
  user,
  userList
});

