import { connect } from 'react-redux';
import Products from '../components/Products';

const mapState = ({ products }) => ({ products: products.list });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Products);
