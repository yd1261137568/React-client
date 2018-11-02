
import React, {Component} from 'react';
import {NavBar, InputItem, Button, TextareaItem} from 'antd-mobile';

class DashenInfo extends Component {
  render() {
    return (
      <div>
        <NavBar>大神信息完善</NavBar>

        <InputItem>求职岗位：</InputItem>
        <TextareaItem>个人介绍：</TextareaItem>
        <Button type="primary">保存</Button>
      </div>
    );
  }
}
;
export default DashenInfo;
