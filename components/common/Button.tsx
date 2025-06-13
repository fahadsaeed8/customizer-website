import React from "react";

interface ButtonProps {
  label: string;
  variant?: "gradient" | "outline";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "outline",
  className = "",
  onClick,
  style = {},
}) => {
  const baseStyles =
    "px-10 py-2 rounded-full font-bold text-[16px] tracking-[0.2px] transition-all duration-300 ease-out";

  const variantStyles =
    variant === "gradient"
      ? "bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 text-white hover:opacity-90 shadow-md"
      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-gray-400";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
