import { connect } from 'react-redux';
import Routes from '../routes';
import { getProducts, getProductById } from '../action-creators/products';
import { getCart } from '../action-creators/cart';
// import { retrieveLoggedInUser } from '../action-creators/auth';

const mapState = null;

const mapDispatch = dispatch => ({
  onAppEnter: () => {
    // dispatch(retrieveLoggedInUser());
    dispatch(getCart());
    dispatch(getProducts());
  },
  onProductEnter: (nextRouterState) =>
  dispatch(getProductById(nextRouterState.params.productId))
});

export default connect(mapState, mapDispatch)(Routes);
