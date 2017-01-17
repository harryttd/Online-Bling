import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { removeItem } from '../action-creators/cart';

const mapState = ({ cart }) => ({ cartItems: cart });

const mapDispatch = { removeItem: removeItem };

export default connect(mapState, mapDispatch)(Cart);
