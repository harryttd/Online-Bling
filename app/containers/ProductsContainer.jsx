import { connect } from 'react-redux';
import Products from '../components/Products';

const mapState = ({ products, categories }) => {
  console.log("categories time", categories)
  return { products: products.list, category: categories.selectedCategory }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Products);
