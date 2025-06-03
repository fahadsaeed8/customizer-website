import React from "react";

interface ButtonProps {
  label: string;
  variant?: "gradient" | "outline";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "outline",
  className = "",
  onClick,
}) => {
  const variantStyles =
    variant === "gradient"
      ? "bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 hover:opacity-90 transition text-white"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-gray-500 hover:via-gray-800 hover:to-gray-200 hover:text-white hover:border-transparent";

  return (
    <button className={` ${variantStyles} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
