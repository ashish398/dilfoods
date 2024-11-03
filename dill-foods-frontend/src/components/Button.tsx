import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "danger" | "success";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  const baseClasses = "mt-4 text-white p-2 rounded";
  const primaryClasses =
    "bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800";
  const dangerClasses =
    "bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800";
  const successClasses =
    "bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800";

  const variantClasses =
    variant === "danger"
      ? dangerClasses
      : variant === "success"
      ? successClasses
      : primaryClasses;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
