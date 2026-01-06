"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { verifySubcategoryPasswordAPI } from "@/services/api";
import { toast } from "react-toastify";

interface SubcategoryPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  subcategoryId: number;
  subcategoryName: string;
  redirectLink: string;
  onPasswordVerify?: (password: string) => Promise<void>;
}

const SubcategoryPasswordModal: React.FC<SubcategoryPasswordModalProps> = ({
  isOpen,
  onClose,
  subcategoryId,
  subcategoryName,
  redirectLink,
  onPasswordVerify,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setLoading(true);
    try {
      // Use custom handler if provided, otherwise use default
      if (onPasswordVerify) {
        await onPasswordVerify(password);
        setPassword("");
        // Don't close modal here, let parent handle it
      } else {
        const response = await verifySubcategoryPasswordAPI(subcategoryId, password);
        
        if (response?.response?.is_valid === true) {
          // Store verified subcategory ID in sessionStorage
          const verifiedSubcategories = JSON.parse(
            sessionStorage.getItem("verifiedSubcategories") || "[]"
          );
          if (!verifiedSubcategories.includes(subcategoryId)) {
            verifiedSubcategories.push(subcategoryId);
            sessionStorage.setItem("verifiedSubcategories", JSON.stringify(verifiedSubcategories));
          }
          
          toast.success("Password verified successfully!");
          onClose();
          setPassword("");
          router.push(redirectLink);
        } else {
          setError(response?.response?.message || "Invalid password");
        }
      }
    } catch (err: any) {
      const errorMessage =
        err?.response?.data?.response?.message ||
        err?.message ||
        "Failed to verify password";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Password Required
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          This subcategory <strong>{subcategoryName}</strong> is password protected. Please enter the password to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent pr-10"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg transition"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubcategoryPasswordModal;

