import { connect } from 'react-redux';
import { Products } from '../components/Products';

const mapState = (state) => ({ albums: state.albums.list });

const mapDispatch = dispatch => {};

export default connect(mapState, mapDispatch)(Products);
