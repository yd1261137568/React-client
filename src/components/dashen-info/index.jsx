
import React, {Component} from 'react';
import {NavBar, InputItem, Button, TextareaItem} from 'antd-mobile';
import HeaderSelector from '../header-selector';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class DashenInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    updateUserInfo: PropTypes.func.isRequired
  };

  state = {
    header: '',
    info: '',
    post: '',
  };
  handleChange = (name,val) => {
    this.setState({
      [name]:val
    })
  };
  setHeader = header => {
    this.setState({
      header
    })
  };
  saveUserInfo = () => {
    this.props.updateUserInfo(this.state);
  };
  render() {
    const {meg, header} = this.props.user;
    if (header) {
      return <Redirect to='/dashen'/>
    }
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        {meg? <div className="err-meg">{meg}</div> : ''}
        <InputItem onChange={val => this.handleChange('post',val)}>求职岗位：</InputItem>
        <TextareaItem title="个人介绍:" rows={3} onChange={val => this.handleChange('info',val)} />
        <Button type="primary" onClick={this.saveUserInfo}>保存</Button>
      </div>
    );
  }
}
;
export default DashenInfo;
