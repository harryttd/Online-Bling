import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { removeReview, addReview, getReview }from 'APP/app/action-creators/reviewActionCreator';

const mapState = ({ products }) => ({ 
	product: products.selectedProduct,
	reviews: products.selectedProduct.product_reviews 
});

const mapDispatch = { removeReview, addReview, getReview };

export default connect(mapState, mapDispatch)(SingleProduct);
