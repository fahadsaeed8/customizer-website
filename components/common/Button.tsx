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
      ? "bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-700 hover:to-blue-950 text-white hover:opacity-90"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-900 hover:text-white hover:border-transparent";

  return (
    <button className={` ${variantStyles} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
