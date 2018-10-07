export const fetchProfileCategory = id =>
  $.ajax({
    method: "GET",
    url: `api/profile_categories/${id}`
  });

export const fetchAllProfileCategories = () =>
  $.ajax({
    method: "GET",
    url: `api/profile_categories`
  });

export const createProfileCategory = profile_category =>
  $.ajax({
    method: "POST",
    url: `api/profile_categories/`,
    data: { profile_category }
  });

export const deleteProfileCategory = id =>
  $.ajax({
    method: "DELETE",
    url: `api/profile_categories/${id}`
  });
