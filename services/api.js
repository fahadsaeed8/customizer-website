import { axiosInstance, handleAPIRequest } from "./axiosInstance";

export const getBannerAPI = () =>
  handleAPIRequest(() => axiosInstance.get(`/api/banners/`));

export const getTestimonialsAPI = () =>
  handleAPIRequest(() => axiosInstance.get(`/api/testimonials/`));

export const createArtWorkAPI = (data) =>
  handleAPIRequest(() => axiosInstance.post(`/api/artwork-requests/`, data));

export const createMembershipRequestAPI = (data) =>
  handleAPIRequest(() => axiosInstance.post(`/api/membership-requests/`, data));

// get products api
export const getAllProductsAPI = () =>
  handleAPIRequest(() => axiosInstance.get(`api/shirts/`));

export const getSingleProductAPI = (id) =>
  handleAPIRequest(() => axiosInstance.get(`api/shirts/${id}`));

// get categories api
export const getCategoriesAPI = () =>
  handleAPIRequest(() => axiosInstance.get(`/api/categories/`));

// get subcategories api
export const getSubCategoryAPI = (limit = 100, offset = 0) =>
  handleAPIRequest(() =>
    axiosInstance.get(`/api/subcategories/?limit=${limit}&offset=${offset}`)
  );

// get customizers by category id api
export const getCategoryCustomizersAPI = (categoryId) =>
  handleAPIRequest(() =>
    axiosInstance.get(`/api/customizers/category/${categoryId}/`)
  );

// verify subcategory password api
export const verifySubcategoryPasswordAPI = (subcategoryId, password) =>
  handleAPIRequest(() =>
    axiosInstance.post(`/api/subcategories/${subcategoryId}/verify-password/`, {
      password,
    })
  );

// get single subcategory by id api
export const getSubcategoryByIdAPI = (subcategoryId) =>
  handleAPIRequest(() =>
    axiosInstance.get(`/api/subcategories/${subcategoryId}/`)
  );
