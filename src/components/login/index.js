import React, {Component} from 'react';
import {NavBar,WingBlank,Button,List, InputItem, WhiteSpace,} from 'antd-mobile';
import Logo from '../logo/logo.jsx';
import {reqLogin} from '../../api';


import Register from '../register';
class Login extends Component {

  handleChange = (name,val) => {
    //更新状态
    this.setState({
      [name] :val
    })
  }
  handleLogin = async () => {
    const {username,password} = this.state;
    //发送ajax请求
    const data = await reqLogin({username,password});
    console.log("*********");
    console.log(data);
  };
  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名:</InputItem>
              <WhiteSpace />
              <InputItem placeholder="请输入密码" onChange={val => this.handleChange('password', val)}>密码:</InputItem>
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
