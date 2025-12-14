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
