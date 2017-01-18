import { connect } from 'react-redux';
import Routes from '../routes';
import { getProducts, getProductById } from '../action-creators/products';
import { loadRootCategories } from '../action-creators/categories';
import { getCart } from '../action-creators/cart';
import { fetchAllOrders } from '../action-creators/orderActionCreator';
// import { retrieveLoggedInUser } from '../action-creators/auth';

const mapState = null;

const mapDispatch = (dispatch, ownProps) => ({
  onAppEnter: () => {
    // dispatch(retrieveLoggedInUser());
    dispatch(getCart());
    dispatch(getProducts());
    dispatch(loadRootCategories());    
  },
  onProductEnter: (nextRouterState) => dispatch(getProductById(nextRouterState.params.productId)),
  onCartEnter: (nextRouterState) => dispatch(getCart()),
  onOrderEnter: (nextRouterState) => dispatch(fetchAllOrders())
});

export default connect(mapState, mapDispatch)(Routes);
