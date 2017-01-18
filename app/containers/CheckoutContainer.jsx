import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { confirmCheckout } from '../action-creators/checkout';

const mapState = ({ auth, cart }) => ({ auth, cart });

const mapDispatch = { confirmCheckout };

export default connect(mapState, mapDispatch)(Checkout);
