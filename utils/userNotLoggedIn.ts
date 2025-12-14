import { setRedirectPath } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export const useUserNotLoggedIn = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const checkUser = (link: string) => {
    if (!isAuthenticated) {
      dispatch(setRedirectPath(link));
      router.push("/auth/login");
      return false;
    }

    return true;
  };

  return { checkUser };
};
