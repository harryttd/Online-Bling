import { connect } from 'react-redux';
import Signup from '../components/Signup';

const mapState = () => ({ message: 'Sign up' });

const mapDispatch = { signup: signupAndGoToUser };

export default connect(mapState, mapDispatch)(Signup);
