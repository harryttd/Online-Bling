import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { removeItem, updateQuantity } from '../action-creators/cart';

const mapState = ({ cart }) => ({ cartItems: cart });

const mapDispatch = { removeItem, updateQuantity };

export default connect(mapState, mapDispatch)(Cart);
