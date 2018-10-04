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
