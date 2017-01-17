import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { addToCart } from '../action-creators/cart';

// const mapState = ({ products }, ownProps) => {
//   console.log('PRODUCTS', products, ownProps);
//   const product = products.find(aProduct =>
//     aProduct.id === +ownProps.params.productId);
//   return { product };
// };

const mapState = ({ products }) => ({ product: products.selectedProduct });

const mapDispatch = { addToCart };

export default connect(mapState, mapDispatch)(SingleProduct);
