import { connect } from 'react-redux';
import SingleReview from 'APP/app/components/SingleReview';

const mapState = ({ reviews }) => ({ selectedReview: reviews.selectedReview });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleReview);
