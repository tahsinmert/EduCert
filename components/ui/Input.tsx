import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full relative group">
        {label && (
          <label className="block text-xs font-sans uppercase tracking-widest text-muted mb-2 transition-colors group-focus-within:text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 border border-border bg-white font-sans",
            "focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/10",
            "transition-all duration-300",
            "placeholder:text-muted",
            "hover:border-foreground/50",
            error && "border-red-600 focus:border-red-600 focus:ring-red-600/10 shake",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 font-sans animate-in slide-in-from-top-1 duration-200">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

