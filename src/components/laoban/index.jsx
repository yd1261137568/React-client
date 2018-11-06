import React, {Component} from 'react';
import UserList from '../user-list';
import PropTypes from 'prop-types';

class Laoban extends Component {
  static propTypes = {
    userList:PropTypes.array.isRequired,
    getUserList:PropTypes.func.isRequired
  };
  componentDidMount () {
    //发送ajax请求
    this.props.getUserList('dashen');
  }
  render() {
    const {userList} = this.props;
    return (
      <div>
        {
          userList.map((item,index) => <UserList key={index} item={item} />)
        }
      </div>
    );
  }
}
;
export default Laoban;
