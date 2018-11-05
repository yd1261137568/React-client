import React, {Component} from 'react';
import {NavBar,WingBlank,Button,List, InputItem, WhiteSpace,} from 'antd-mobile';
import Logo from '../logo';
// import {reqLogin} from '../../api';
import {Redirect} from 'react-router-dom';


class Login extends Component {
  state = {
    username:'',
    password:''
  };
  handleChange = (name,val) => {
    //更新状态
    this.setState({
      [name] :val
    })
  };
  handleLogin = async () => {
    //发送ajax请求
    this.props.login(this.state);
  };
  goRegister = () => {
    //跳转到登录路由，编程式导航
    this.props.history.replace('/register');  //替换浏览历史记录
  };
  render() {
   const {meg, redirectTo} = this.props.user;
   if(redirectTo){
     //编程式导航的写法
     // this.props.history.replace(redirectTo);
     //路由链接跳转
     return <Redirect to={redirectTo} />
   }
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        {meg ? <p className='err-msg'>{meg}</p> : ''}
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名:</InputItem>
              <WhiteSpace />
              <InputItem placeholder="请输入密码" type="password" onChange={val => this.handleChange('password', val)}>密码:</InputItem>
              <WhiteSpace />
              <Button type="primary" onClick={this.handleLogin}>登录</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    );
  }
};
export default Login;
