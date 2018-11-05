import React, {Component} from 'react';
import UserList from '../user-list';
import PropTypes from 'prop-types';

class Dashen extends Component {
  static propTypes = {
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  };
  componentDidMount () {
    //发送ajax请求
    this.props.getUserList('laoban');
  }
  render() {
    const {userList} = this.props;
    return (
      <div>
        {
          // userList.map((item,index) => <UserList key={index} item={item} />)
        }
      </div>
    );
  }
}

export default Dashen;
