import * as CategoriesAPIUtil from "../util/categories_api_util";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_ALL_CATEGORYIES = "RECEIVE_ALL_CATEGORYIES";
export const RECEIVE_CURRENT_CATEGORY = "RECEIVE_CURRENT_CATEGORY";

export const receiveCategory = ({ category }) => ({
  type: RECEIVE_CATEGORY,
  category
});

export const receiveCurrentCategory = category => ({
  type: RECEIVE_CURRENT_CATEGORY,
  category
});

export const receiveAllCategories = categories => ({
  type: RECEIVE_ALL_CATEGORIES,
  categories
});

export const requestCurrentCategory = id => dispatch =>
  CategoriesAPIUtil.fetchCategory(id).then(currentCategoryId =>
    dispatch(receiveCurrentCategory(currentCategoryId))
  );

export const createCategory = category => dispatch =>
  CategoriesAPIUtil.createCategory(category).then(category =>
    dispatch(receiveCategory(category))
  );

export const requestCategory = category => dispatch =>
  CategoriesAPIUtil.fetchCategory(category).then(category =>
    dispatch(receiveCategory(category))
  );

export const requestAllCategories = () => dispatch =>
  CategoriesAPIUtil.fetchAllCategories().then(categories =>
    dispatch(receiveAllCategories(categories))
  );
