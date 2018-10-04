export const fetchCategory = id =>
  $.ajax({
    method: "GET",
    url: `api/categories/${id}`
  });

export const fetchAllCategories = () =>
  $.ajax({
    method: "GET",
    url: `api/categories`
  });

export const createCategory = category =>
  $.ajax({
    method: "POST",
    url: `api/categories/`,
    data: { category }
  });
