import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-3xl font-medium leading-snug focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-primary text-white hover-primary",
    dark: "bg-dark text-white hover-secondary",
    outline:
      "border border-main text-secondary transition duration-300 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-1.5 text-base",
    lg: "px-5 py-2 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// view all
type ViewAllButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ViewAllButton({ className, ...props }: ViewAllButtonProps) {
  const styles =
    "bg-green hover-green text-sm text-secondary font-semibold rounded-full px-4 py-2 transition duration-300";

  return (
    <button className={clsx(styles, className)} {...props}>
      View all
    </button>
  );
}
