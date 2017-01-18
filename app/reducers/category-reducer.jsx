import { RECEIVE_ROOT_CATEGORIES, RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../action-types';

const initialState = {
  rootList: [],
  fullList: [],
  selectedCategory: {}
};

export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_ROOT_CATEGORIES:
      newState.rootList = action.rootCategories;
      break;

    case RECEIVE_ALL_CATEGORIES:
      newState.fullList = action.allCategories;
      break;

    case RECEIVE_CATEGORY:
      newState.selectedCategory = action.selectedCategory;
      break;

    default:
    return state;

  }

  return newState;
};
