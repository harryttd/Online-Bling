import { connect } from 'react-redux';
import Routes from '../routes';
import { getProducts, getProductById } from '../action-creators/products';
import { loadRootCategories } from '../action-creators/categories';
// import { retrieveLoggedInUser } from '../action-creators/auth';

const mapState = null;

const mapDispatch = dispatch => ({
  onAppEnter: () => {
    // dispatch(retrieveLoggedInUser());
    dispatch(getProducts());
    dispatch(loadRootCategories());
  },
  onProductEnter: (nextRouterState) =>
  dispatch(getProductById(nextRouterState.params.productId))
});

export default connect(mapState, mapDispatch)(Routes);
