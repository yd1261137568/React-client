import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {List,Result,WhiteSpace,Button,Modal} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    resetUser: PropTypes.func.isRequired
  };


  logout = () => {
    Modal.alert('删除', '您确定要删除吗？', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => {
        //清除id
        Cookies.remove('userid');
        this.props.resetUser({});
        this.props.history.replace('/login');
      } },
    ])
  };

  render() {
    const {user} = this.props;
    console.log(this.props);
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/${user.header}.png`)} style={{width:50}} alt="header"/>}
          title={user.username}
           message={user.company}
        />
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
             <Brief>职位：{user.post}</Brief>
             <Brief>简介：{user.info}</Brief>
             <Brief> 薪资：{user.salary}</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <Button type="warning" onClick={this.logout}>退出登录</Button>
      </div>
    );
  }
}

export default Personal;
