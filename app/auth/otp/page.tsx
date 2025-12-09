"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OTPPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(interval);
    } else if (timer === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timer, canResend]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    // Move to next input if digit is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    setError("");
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const validateForm = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
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
      const otpValue = otp.join("");

      // Replace with your actual API call
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpValue }),
      });

      if (response.ok) {
        // Store verification token for reset password page
        sessionStorage.setItem("otpVerified", "true");
        router.push("/auth/reset-password");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setCanResend(false);
    setTimer(60);
    setError("");

    try {
      const email = sessionStorage.getItem("resetEmail");
      await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
        <p className="text-gray-600">
          Enter the 6-digit code sent to your email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-2 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="0"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <div className="mt-6 text-center space-y-3">
        <p className="text-gray-600 text-sm">
          Didn't receive the code?{" "}
          {canResend ? (
            <button
              onClick={handleResendOtp}
              className="text-red-500 hover:text-red-600 font-semibold cursor-pointer"
            >
              Resend
            </button>
          ) : (
            <span className="text-gray-500">
              Resend in {timer}s
            </span>
          )}
        </p>

        <p className="text-gray-600 text-sm">
          <Link href="/auth/forgot-password" className="text-red-500 hover:text-red-600 font-semibold">
            Change email?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OTPPage;
