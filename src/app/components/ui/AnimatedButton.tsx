"use client";

import { motion } from "framer-motion";
import { type AnchorHTMLAttributes } from "react";

interface AnimatedButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export default function AnimatedButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} inline-flex items-center gap-2 ${className}`}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.a>)}
    >
      {children}
    </motion.a>
  );
}
