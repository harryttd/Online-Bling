import React from 'react';
import { connect } from 'react-redux';
import ReviewList from 'APP/app/components/ReviewList';

const mapState = ({ reviews }) => ({ reviews: reviews.list });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(ReviewList);