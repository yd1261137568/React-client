import React, {Component} from 'react';
import logo from './logo.png';
import './logo.less'
class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logo} className="mylogo" alt=""/>
      </div>
    );
  }
}
;
export default Logo;

