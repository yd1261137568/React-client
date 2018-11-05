import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {NavBar} from 'antd-mobile';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Dashen from '../../containers/dashen';
import Laoban from '../../containers/laoban';
import Message from '../../containers/message';
import Personal from '../../containers/personal';

import NavFooter from '../../components/nav-footer';

class Main extends Component {
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ];

  render() {
    const {navList} = this;
    //获取当前路由路径
    const {pathname} = this.props.location;
    //当前路由路径对应显示的nav对象
    const currentNav = navList.find(nav => pathname === nav.path);
    return (
      <div>
        {currentNav ? <NavBar>{currentNav.title}</NavBar> : ''}
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>
          <Route path="/dashen" component={Dashen}/>
          <Route path="/laoban" component={Laoban}/>
          <Route path="/message" component={Message}/>
          <Route path="/personal" component={Personal}/>
        </Switch>
        {currentNav ? <NavFooter navList={navList}/> : ''}
      </div>
    );
  }
};

export default Main;
