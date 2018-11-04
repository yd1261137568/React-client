import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import {List,Result,WhiteSpace,Button,Modal} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };


  logout = () => {
    Modal.alert('删除', '您确定要删除吗？', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => {
        //清楚id
        Cookie.remove('userid');
        this.props.history.replace('/login');
      } },
    ])
  }
  render() {
    // const {user} = this.props;
    return (
      <div>
        <Result
          // img={<img src={require(`../../assets/images/${user.header}.png`)} style={{width:50}} alt="header"/>}
          // img={<img src={require(`../../assets/images/${user.header}.png`)} style={{width: 50}} alt="header"/>}
          // title={}
          // message={}
        />
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
             <Brief>职位：{}</Brief>
             <Brief>简介：{}</Brief>
             <Brief> 薪资：{}</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <Button type="warning" onClick={this.logout}>退出登录</Button>
      </div>
    );
  }
}
;
export default Personal;
