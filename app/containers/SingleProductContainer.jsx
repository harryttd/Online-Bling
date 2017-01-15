import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';

const mapState = (state) => ({ product: state.products });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleProduct);
