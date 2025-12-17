"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { loginAPI } from "@/services/auth";
import { setCookie } from "nookies";
import { setCredentials, setRedirectPath } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePublicRoute } from "@/services/hooks/usePublicRoutes";

type formDataType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  usePublicRoute();
  const redirectPath = useSelector((state: any) => state.auth.redirectPath);
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { mutate, isPending } = useMutation<any, any, formDataType>({
    mutationFn: (data) => loginAPI(data),
    onSuccess: (res) => {
      console.log("response login", res);
      const token = res?.response?.access_token;
      const user = res?.response?.data;

      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        // secure: true,
        // sameSite: "lax",
      });

      dispatch(setCredentials({ user, token }));

      if (redirectPath) {
        router.push(redirectPath);
        dispatch(setRedirectPath(null));
      } else {
        router.push("/");
      }

      toast.success(res?.response?.message);
    },
    onError: (err: any) => {
      console.log("loginerr", err);
      const message = err?.response?.data?.response?.message;
      toast.error(message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (!formData.password.trim()) {
      toast.error("Password is required");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    mutate(formData);
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* FORGOT PASSWORD */}
        <div className="text-right">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-red-500 hover:text-red-600 font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
        >
          {isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* SIGNUP LINK */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-red-500 hover:text-red-600 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
