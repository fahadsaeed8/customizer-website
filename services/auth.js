import { axiosInstance, handleAPIRequest } from "./axiosInstance";

export const getProfileAPI = () =>
  handleAPIRequest(axiosInstance.get, "api/profile");

export const loginAPI = (data) => {
  return handleAPIRequest(axiosInstance.post, "/api/Login/", data);
};

// export const signupAPI = (data) =>
//   handleAPIRequest(axiosInstance.post, "api/signup", data);

// export const verifyEmailAPI = (data) =>
//   handleAPIRequest(axiosInstance.post, "api/verify-otp", data);

// export const forgotPasswordAPI = (data) =>
//   handleAPIRequest(axiosInstance.post, "api/reset-password", data);

// export const resendOTPAPI = (data) =>
//   handleAPIRequest(axiosInstance.post, "api/resend-otp", data);
