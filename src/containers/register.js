
import {connect} from 'react-redux';
// import user from '../redux/reducers';
import {register} from '../redux/actions';
import Register from '../components/register';
export default connect(
  state => ({user:state.user}),
  {register}
)(Register);
