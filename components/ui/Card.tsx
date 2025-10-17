import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-border overflow-hidden",
        hover && "transition-colors hover:border-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

