import React, {Component} from 'react';
import {NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Radio} from 'antd-mobile';
import Logo from '../logo/logo.jsx';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

const Item = List.Item;

class Register extends Component{
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };


  state = {
    username:'',
    password:'',
    rePassword:'',
    type:'boss'
  };
  handleChange = (name,val) => {
    //更新
    this.setState({
      [name]:val
    })
  };
  register = async () => {
    //获取表单数据
    const {username, rePassword, password, type} = this.state;
    this.props.register({username,rePassword,password,type})
   /* console.log(username, rePassword, password, type);
    //判断密码和确认密码是否一致
    if (password === rePassword) {
      //发送ajax请求
      const data = await reqRegister({username, password, type});
      console.log('***********');
      console.log(data);
    } else {
      //提示两次密码输入不一致
      alert('两次密码输入不一致');
    }*/

  };

  goLogin = () => {
    //跳转到登录路由，编程式导航
    this.props.history.replace('/login');  //替换浏览历史记录
  };


  render(){
      const {type} = this.state;
      const {meg, redirectTo} = this.props.user;
      if(redirectTo){
        return <Redirect to={redirectTo} />
      }
        return (
          <div>
            <NavBar>硅 谷 直 聘</NavBar>
            <Logo />
            <WingBlank>
              {meg? <p className="err-meg">{meg}</p> : ''}
              <form>
                <List>
                  <WhiteSpace />
                  <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
                  <WhiteSpace />
                  <InputItem
                    placeholder="请输入密码"
                    type="password"
                    onChange={val => this.handleChange('password', val)}
                  >密码：</InputItem>
                  <WhiteSpace />
                  <InputItem
                    placeholder="请输入确认密码"
                    type="password"
                    onChange={val => this.handleChange('rePassword', val)}>确认密码：</InputItem>
                  <WhiteSpace />
                  <Item>
                    用户类型： &nbsp;&nbsp;
                    <Radio
                      className="my-radio"
                      checked={type === 'dashen'}
                      onClick={() => this.handleChange('type', 'dashen')}
                    >大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Radio
                      className="my-radio"
                      checked={type === 'laoban'}
                      onClick={() => this.handleChange('type', 'laoban')}
                    >老板</Radio>
                  </Item>
                  <WhiteSpace />
                  <Button type="primary" onClick={this.register}>注 册</Button>
                  <WhiteSpace />
                  <Button onClick={this.goLogin}>已有账户</Button>
                </List>
              </form>
            </WingBlank>
          </div>
        );
    }
};
export default Register;

