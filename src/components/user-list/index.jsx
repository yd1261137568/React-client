import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';

const Header = Card.Header;
const Body = Card.Body;
class UserList extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const {username, header} = this.props.item;
    return (
      <WingBlank>
        <WhiteSpace />
        <Card>
          <Header
            thumb={require(`../../assets/images/${header}.png`)}
            extra={username}
          />
          <Body>
          <div>This is content of `Card`</div>
          </Body>
          <Card.Footer content="footer content" extra={<div>extra footer content</div>}/>
        </Card>
        <WhiteSpace size="lg"/>
      </WingBlank>
    );
  }
}
export default UserList;


