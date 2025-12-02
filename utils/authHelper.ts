// utils/authHelpers.ts
import { store } from "src/redux/store";
import { logout } from "src/redux/slices/authSlice";
import { destroyCookie } from "nookies";
import { toast } from "react-toastify";

export const handleLogout = () => {
  store.dispatch(logout());

  destroyCookie(null, "token", {
    path: "/",
    domain: ".esycles.com",
  });
  destroyCookie(null, "token", { path: "/" });

  localStorage.removeItem("persist:root");

  toast.success("Logged out successfully!");

  setTimeout(() => {
    window.location.href = "/login";
  }, 1000);
};
