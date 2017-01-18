import axios from 'axios';
import { RECEIVE_ROOT_CATEGORIES, RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../action-types';

///////////// ACTIONS: ACTION CREATORS ///////////////////
export const receiveRootCategories = rootCategories => ({
    type: RECEIVE_ROOT_CATEGORIES,
    rootCategories
});

export const receiveAllCategories = allCategories => ({
    type: RECEIVE_ALL_CATEGORIES,
    allCategories
});

export const receiveSingleCategory = selectedCategory => ({
    type: RECEIVE_CATEGORY,
    selectedCategory
});


//////////////////// ACTIONS: AYSNC THUNK CALLS //////////////////

export const loadRootCategories = function ()  {

	return function(dispatch) {

		axios.get('/api/category/rootcategories')
		.then(res => res.data)
		.then(rootCategories => dispatch(receiveRootCategories(rootCategories)))
		.catch(err => console.error(err))
	}
}

export const loadAllCategories = function ()  {

	return function(dispatch) {

		axios.get('/api/category')
		.then(res => res.data)
		.then(allCategories => dispatch(receiveAllCategories(allCategories)))
		.catch(err => console.error(err))
	}
}

export const loadSingleCategory = function (categoryName)  {

  return function(dispatch) {

  if (!categoryName) return dispatch(receiveSingleCategory({}))

  axios.get(`/api/category/singlecategory/${categoryName}`)
  .then(res => res.data)
  .then(selectedCategory => dispatch(receiveSingleCategory(selectedCategory)))
  .catch(err => console.error(err))
  }
}
