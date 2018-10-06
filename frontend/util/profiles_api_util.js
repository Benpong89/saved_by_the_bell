export const fetchProfile = id =>
  $.ajax({
    method: "GET",
    url: `api/profiles/${id}`
  });

export const fetchAllProfiles = () =>
  $.ajax({
    method: "GET",
    url: `api/profiles`
  });

export const createProfile = profile =>
  $.ajax({
    method: "POST",
    url: `api/profiles/`,
    data: { profile }
  });

export const updateProfile = profile => {
  return $.ajax({
    method: "PATCH",
    url: `api/profiles/${profile.id}`,
    data: { profile }
  });
};

export const deleteProfile = id =>
  $.ajax({
    method: "DELETE",
    url: `api/profiles/${id}`
  });
