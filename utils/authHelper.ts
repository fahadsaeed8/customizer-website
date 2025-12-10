import { destroyCookie } from "nookies";
import { toast } from "react-toastify";

export const handleLogout = () => {
  destroyCookie(null, "token", {
    path: "/",
    // domain: ".esycles.com",
  });
  destroyCookie(null, "token", { path: "/" });

  toast.success("Logged out successfully!");

  setTimeout(() => {
    window.location.href = "/auth/login";
  }, 1000);
};
