import { axiosInstance, handleAPIRequest } from "./axiosInstance";

export const getBannerAPI = () =>
  handleAPIRequest(() => axiosInstance.get(`/api/banners/`));

export const getTestimonialsAPI = () =>
  handleAPIRequest(() => axiosInstance.get(`/api/testimonials/`));

export const createArtWorkAPI = (data) =>
  handleAPIRequest(() => axiosInstance.post(`/api/artwork-requests/`, data));

export const createMembershipRequestAPI = (data) =>
  handleAPIRequest(() => axiosInstance.post(`/api/membership-requests/`, data));
