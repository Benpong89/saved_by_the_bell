import * as ProfileCategoriesAPIUtil from "../util/profile_categories_api_util";
export const RECEIVE_PROFILE_CATEGORY = "RECEIVE_PROFILE_CATEGORY";
export const RECEIVE_ALL_PROFILE_CATEGORIES = "RECEIVE_ALL_PROFILE_CATEGORIES";
export const REMOVE_PROFILE_CATEGORY = "REMOVE_PROFILE_CATEGORY";

export const receiveProfileCategory = profile_category => ({
  type: RECEIVE_PROFILE_CATEGORY,
  profile_category
});

export const receiveAllProfileCategories = profile_categories => ({
  type: RECEIVE_ALL_PROFILE_CATEGORIES,
  profile_categories
});

export const removeProfileCategory = id => ({
  type: REMOVE_PROFILE_CATEGORY,
  id
});

export const createProfileCategory = profile_category => dispatch =>
  ProfileCategoriesAPIUtil.createProfileCategory(profile_category).then(
    profile_category => {
      dispatch(receiveProfileCategory(profile_category));
    }
  );

export const requestProfileCategory = profile_category => dispatch =>
  ProfileCategoriesAPIUtil.fetchProfileCategory(profile_category).then(
    profile_category => dispatch(receiveProfileCategory(profile_category))
  );

export const requestAllProfileCategories = () => dispatch =>
  ProfileCategoriesAPIUtil.fetchAllProfileCategories().then(
    profile_categories =>
      dispatch(receiveAllProfileCategories(profile_categories))
  );

export const deleteProfileCategory = id => dispatch =>
  ProfileCategoriesAPIUtil.deleteProfileCategory(id).then(profile_category =>
    dispatch(removeProfileCategory(id))
  );
