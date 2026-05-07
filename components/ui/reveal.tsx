"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  ...props
}: RevealProps<T>) {
  const Component = motion(as ?? "div") as ElementType<MotionProps>;

  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
