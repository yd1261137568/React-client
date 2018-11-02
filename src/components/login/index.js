import React, {Component} from 'react';
import {NavBar,WingBlank,Button,List, InputItem, WhiteSpace,} from 'antd-mobile';
import Logo from '../logo/logo.jsx';
import {reqLogin} from '../../api';


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
    const {username,password} = this.state;
    //发送ajax请求
    const data = await reqLogin({username,password});
    console.log("*********");
    console.log(data);

    if(data.data.code === 0){
      alert('登录成功')
    }else if(data.data.code === 1){
      alert('用户名或密码错误')
    }else if(data.data.code ===2){
      alert('您输入的不合法,请重新输入')
    }else if(data.data.code ===3){
      alert('网络不稳定，请重新试试~')
    }
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
