"use client";

import Image from "next/image";
import { useTheme } from "@/app/hooks/useTheme";
import { useHydration } from "@/app/hooks/useHydration";

interface SlashLogoProps {
  /**
   * Width in pixels.
   * "mark" variant is 1:1. "horizontal" is ~4:1.
   */
  size?: number;
  /**
   * "mark"       → just the L icon (default — navbar, footer, favicon)
   * "horizontal" → full lockup with wordmark
   */
  variant?: "mark" | "horizontal";
  /**
   * Force a specific color regardless of theme.
   * Omit to auto-switch: orange on light, white on dark.
   */
  color?: "orange" | "white" | "black";
  className?: string;
}

/**
 * Lassenware brand mark.
 * Auto-switches between orange (light) and white (dark) unless color is forced.
 *
 * Requires these files in /public/brand/:
 *   lassenware-mark-orange.svg
 *   lassenware-mark-white.svg
 *   lassenware-mark-black.svg
 *   lassenware-horizontal-orange.svg
 *   lassenware-horizontal-white.svg
 *   lassenware-horizontal-black.svg
 */
export default function SlashLogo({
  size = 32,
  variant = "mark",
  color,
  className = "",
}: SlashLogoProps) {
  const { theme } = useTheme();
  const hydrated = useHydration();

  const resolvedColor: "orange" | "white" | "black" =
    color ?? (hydrated && theme === "dark" ? "white" : "orange");

  const src = `/brand/lassenware-${variant}-${resolvedColor}.svg`;
  const width = variant === "horizontal" ? size * 4 : size;

  return (
    <Image
      src={src}
      alt="Lassenware"
      width={width}
      height={size}
      className={className}
      priority
    />
  );
}