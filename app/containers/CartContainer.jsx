import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapState = ({ cart }) => ({ cartItems: cart });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Cart);
