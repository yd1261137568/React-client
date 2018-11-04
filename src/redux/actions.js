//同步的行为

import {AUTH_SUCCESS,ERR_MEG,UPDATA_USER,RESET_USER,UPDATA_USER_LIST,RESET_USER_LIST} from './action-types';
import {reqLogin,reqRegister,reqUpdateUserInfo,reqGetUserInfo,reqGetUserList} from '../api';


export const authSuccess = user => ({type:AUTH_SUCCESS,data:user});
export const errMeg = meg => ({type:ERR_MEG,data:meg});

export const updateUser = user => ({type:UPDATA_USER,data:user});
export const resetUser = meg => ({type:RESET_USER,data:meg});

//更新用户列表
export const updateUserList = userlist => ({type:UPDATA_USER_LIST,data:userlist});
export const resetUserList = meg => ({type:RESET_USER_LIST,data:meg});



//处理注册的异步行为
export const register = data => {
  //表单验证  同步方式
  const {username, password, rePassword, type} = data;
  if (!username) {
    return errMeg({username, password, meg: '请输入用户名'});
  } else if (!password) {
    return errMeg({username, password, meg: '请输入密码'});
  } else if (password !== rePassword) {
    return errMeg({username, password, meg: '两次密码输入不一致，请重新输入'});
  } else if (!type) {
    return errMeg({username, password, meg: '请选择账号类型'});
  }
  return dispatch => {
    //发送ajax请求
    reqRegister(data)
      .then(res => {
        //请求成功（并不能判断注册是否成功，所以还需要判断）
        const result = res.data;
        if(result.code === 0){
          //注册成功
          dispatch(authSuccess(result.data))
        }else{
          //注册失败
          dispatch(errMeg({username:data.username,type:data.type,meg:result.meg}))
        }

    })
      .catch(err => {
        //请求失败
      dispatch(errMeg({meg:'网络不稳定，请重新刷新',username:data.username,type:data.type}))
      })
  }
};
//处理登录的异步行为
export const login = data => {
  const {username,password} = data;
  if(!username){
    return errMeg({meg:'请输入用户名'})
  }else if(!password){
    return errMeg({meg:'请输入密码'})
  }
  return dispatch => {
    reqLogin(data)
      .then(res => {
        const result = res.data;
        if(result.code === 0){
          dispatch(authSuccess(result.data));
        }else{
          dispatch(errMeg({meg:result.meg}))
        }
      })
      .catch(err => {
        dispatch(errMeg({meg:'网络不稳定，请重新刷新'}))
      })
  }
}

//更新用户数据的异步的action
export const updateUserInfo = data => {
  //表单验证  同步方式
  const {header, post, info, company,salary,type} = data;
  if (!header){
    return resetUser({meg: '请选择头像'});
  }else if (!post) {
      return resetUser({ meg: type === 'laoban' ? '请填写招聘职位' : '请输入求职岗位'});
  }else if(!info) {
    return resetUser({ meg: type === 'laoban' ? '请填写招聘职位' : '请输入个人介绍'});
  }

  if(type === 'laoban') {
    if(!company){
      return resetUser({ meg: '请输入公司名称'});
    }else if(!salary){
      return resetUser({meg: '请输入您的期望薪资'});
    }
  }
  return dispatch => {
    //发送ajax请求
    reqUpdateUserInfo(data)
      .then(res => {
        //请求成功（并不能判断注册是否成功，所以还需要判断）
        const result = res.data;
        if(result.code === 0){
          //注册成功
          dispatch(updateUser(result.data))
        }else{
          //注册失败
          dispatch(resetUser({meg:result.meg}))
        }

      })
      .catch(err => {
        //请求失败
        dispatch(resetUser({meg:'网络不稳定，请重新刷新'}))
      })
  }
}

//获取用户列表数据的异步action
export const getUserList = type => {
  return dispatch => {
    //发送ajax请求
    reqGetUserList(type)
      .then(res => {
        const result = res.data;
        if(result.code === 0){
          dispatch(updateUserList(result.data))
        }else{
          dispatch(resetUserList({meg:result.meg}))
        }
      })
      .catch(err => {
        dispatch(resetUserList({meg:'网络不稳定，请重新刷新'}))
      })
  }
};