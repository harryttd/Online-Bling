import { connect } from 'react-redux';
import Products from '../components/Products';

const mapState = state => ({ products: state.products.list });

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Products);
