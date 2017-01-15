import { connect } from 'react-redux';
import Products from '../components/Products';

const mapState = state => ({ products: state.products });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Products);
