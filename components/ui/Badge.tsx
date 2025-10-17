import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success";
  pulse?: boolean;
}

export function Badge({
  children,
  variant = "default",
  pulse = false,
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: "border-border text-muted",
    primary: "border-foreground text-foreground",
    success: "border-green-600 text-green-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 border text-xs font-medium font-sans uppercase tracking-wider transition-all duration-300",
        variants[variant],
        pulse && "animate-pulse hover:animate-none",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

