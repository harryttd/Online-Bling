import { connect } from 'react-redux';
import Products from '../components/Products';
import store from '../store';
console.log('getstate', store.getState());

const mapState = state => ({ products: state.products.list });

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Products);
