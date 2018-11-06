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
    console.log(this.props);
    const {username, header, post, info, salary, company, _id} = this.props.item;

    return (
    <WingBlank>
      <div>
        <WhiteSpace/>
        <Card>
          <Header
            thumb={require(`../../assets/images/${header}.png`)}
            extra={username}
          />
          <Body>
          <div>职位: {post}</div>
          {company ? <div>公司: {company}</div> : ''}
          {salary ? <div>月薪: {salary}</div> : ''}
          <div>描述: {info}</div>
          </Body>
        </Card>
      </div>
    </WingBlank>


      // <WingBlank>
      //   <WhiteSpace />
      //   <Card>
      //     <Header
      //       thumb={require(`../../assets/images/${header}.png`)}
      //       extra={username}
      //     />
      //     <Body>
      //     <div>This is content of `Card`</div>
      //     </Body>
      //     <Card.Footer content="footer content" extra={<div>extra footer content</div>}/>
      //   </Card>
      //   <WhiteSpace size="lg"/>
      // </WingBlank>
    );
  }
}
export default UserList;


