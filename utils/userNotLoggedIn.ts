import { setRedirectPath } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export const UserNotLoggedIn = ({ link }: any) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const router = useRouter();

  if (!isAuthenticated) {
    dispatch(setRedirectPath(link));

    router.push("/auth/login");
    return;
  }

  router.push("/sell-my-ride");
};
