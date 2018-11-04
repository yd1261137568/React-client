import {connect} from 'react-redux';

import Personal from '../components/personal';
// import {getUserList} from '../redux/actions';
export default connect(
  state => ({user:state.user}),
  {}
)(Personal);
