import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
// import 


const mapState = () => ({ message: 'Checkout' });

const mapDispatch = { checkout };

export default connect(mapState, mapDispatch)(Checkout);
