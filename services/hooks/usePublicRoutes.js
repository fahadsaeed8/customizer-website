"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useQuery } from "@tanstack/react-query";
import { getProfileAPI } from "../auth";

export const usePublicRoute = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    const cookies = parseCookies({});
    setToken(cookies.token || null);
    setIsTokenChecked(true);
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAPI,
    enabled: !!token && isTokenChecked,
    retry: false,
  });

  useEffect(() => {
    if (!isTokenChecked) return;
    if (!token) return;
    if (isLoading || isError) return;

    const role = data?.response?.data?.user_profile?.role;

    if (role === "user") {
      router.replace("/");
    }
  }, [token, data, isLoading, isError, isTokenChecked, router]);
};
