// lib/axiosInstance.js
import axios from "axios";
import { parseCookies } from "nookies";

// list of endpoints jahan token nahi bhejna
const skipAuthEndpoints = ["/Login", "/register", "/reset-password"];

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      // agar current endpoint skipAuth list me ho → token add na kare
      if (skipAuthEndpoints.some((path) => config.url?.includes(path))) {
        return config;
      }

      // get token from cookies or localStorage
      const cookies = parseCookies();
      let token = cookies.token;

      if (!token && typeof window !== "undefined") {
        token = localStorage.getItem("token");
      }

      // add Authorization header
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }

      return config;
    } catch (err) {
      console.error("Error in request interceptor:", err);
      return Promise.reject(err);
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    // optional: handle 401 globally
    // if (status === 401 && typeof window !== "undefined") {
    //   window.location.href = "/auth/login";
    // }

    return Promise.reject(error);
  }
);

export const handleAPIRequest = async (requestFunc, endpoint, requestData) => {
  try {
    const { data } = await requestFunc(endpoint, requestData);
    return data;
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || error.message || "Unknown error";
    console.error(`API Error (${endpoint}):`, errorMessage);
    throw error;
  }
};
