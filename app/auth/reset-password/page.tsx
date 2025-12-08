"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check if OTP was verified
    const otpVerified = sessionStorage.getItem("otpVerified");
    if (!otpVerified) {
      router.push("/auth/forgot-password");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.password.trim()) {
      setError("New password is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      setError("Password must contain uppercase, lowercase, and numbers");
      return false;
    }
    if (!formData.confirmPassword.trim()) {
      setError("Confirm password is required");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const email = sessionStorage.getItem("resetEmail");

      // Replace with your actual API call
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // Clear session storage
        sessionStorage.removeItem("resetEmail");
        sessionStorage.removeItem("otpVerified");
        // Redirect to login after 2 seconds
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Password</h1>
        <p className="text-gray-600">Enter your new password</p>
      </div>

      {success ? (
        <div className="text-center space-y-4">
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
            ✓ Password reset successfully! Redirecting to login...
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              At least 8 characters with uppercase, lowercase, and numbers
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xs"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      )}

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Remember your password?{" "}
          <Link href="/auth/login" className="text-red-500 hover:text-red-600 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
