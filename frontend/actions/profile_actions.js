import * as ProfilesAPIUtil from "../util/profiles_api_util";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES";

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const receiveCurrentProfile = profile => ({
  type: RECEIVE_CURRENT_PROFILE,
  profile
});

export const receiveAllProfiles = profiles => ({
  type: RECEIVE_ALL_PROFILES,
  profiles
});

export const createProfile = profile => dispatch =>
  ProfilesAPIUtil.createProfile(profile).then(profile => {
    dispatch(receiveProfile(profile));
  });

export const requestProfile = profile => dispatch =>
  ProfilesAPIUtil.fetchProfile(profile).then(profile =>
    dispatch(receiveProfile(profile))
  );

export const requestAllProfiles = () => dispatch =>
  ProfilesAPIUtil.fetchAllProfiles().then(profiles =>
    dispatch(receiveAllProfiles(profiles))
  );
