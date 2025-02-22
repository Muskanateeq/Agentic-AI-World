import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/app/utils";

const buttonStyles = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  ghost: "hover:bg-gray-100 text-gray-800",
  link: "text-blue-500 underline hover:text-blue-600",
  gradient: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90",
  transparent: "bg-transparent border border-purple-600 text-white hover:bg-purple-600/20",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles;
  size?: keyof typeof buttonSizes;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium", buttonStyles[variant], buttonSizes[size], className)} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
