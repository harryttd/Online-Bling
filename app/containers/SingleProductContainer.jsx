import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { addToCart } from '../action-creators/cart';
import { removeReview, addReview, getReview }from 'APP/app/action-creators/reviewActionCreator';

const mapState = ({ products }) => ({
	product: products.selectedProduct,
	reviews: products.selectedProduct.product_reviews
});

const mapDispatch = { removeReview, addReview, getReview, addToCart };

export default connect(mapState, mapDispatch)(SingleProduct);
