import * as ProfilesAPIUtil from "../util/profiles_api_util";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES";
export const REMOVE_PROFILE = "REMOVE_PROFILE";

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const receiveAllProfiles = profiles => ({
  type: RECEIVE_ALL_PROFILES,
  profiles
});

export const removeProfile = id => ({
  type: REMOVE_PROFILE,
  id
});

export const createProfile = profile => dispatch =>
  ProfilesAPIUtil.createProfile(profile).then(profile =>
    dispatch(receiveProfile(profile))
  );

export const requestProfile = id => dispatch =>
  ProfilesAPIUtil.fetchProfile(id).then(profile =>
    dispatch(receiveProfile(profile))
  );

export const requestAllProfiles = () => dispatch =>
  ProfilesAPIUtil.fetchAllProfiles().then(profiles =>
    dispatch(receiveAllProfiles(profiles))
  );

export const updateProfile = id => dispatch =>
  ProfilesAPIUtil.updateProfile(id).then(profile =>
    dispatch(receiveProfile(profile))
  );

export const deleteProfile = id => dispatch =>
  ProfilesAPIUtil.deleteProfile(id).then(profile =>
    dispatch(removeProfile(id))
  );
