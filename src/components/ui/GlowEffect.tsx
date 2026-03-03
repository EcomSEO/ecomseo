"use client";

import { motion } from "framer-motion";

interface GlowEffectProps {
  color?: string;
  duration?: number;
  blurRadius?: number;
  borderRadius?: number;
  backgroundColor?: string;
  overlayBorderColor?: string;
  overlayMargin?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function GlowEffect({
  color = "rgb(123, 45, 233)",
  duration = 6,
  blurRadius = 2,
  borderRadius = 24,
  backgroundColor = "rgba(13, 13, 13, 0.8)",
  overlayBorderColor = "rgba(255, 255, 255, 0.12)",
  overlayMargin = 1,
  children,
  className,
}: GlowEffectProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: `${borderRadius}px`,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "-450%",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1000%",
          background: `conic-gradient(transparent 200deg, ${color})`,
          borderRadius: `${borderRadius}px`,
          zIndex: 1,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: `${overlayMargin}px`,
          left: `${overlayMargin}px`,
          right: `${overlayMargin}px`,
          bottom: `${overlayMargin}px`,
          backdropFilter: `blur(${blurRadius}px)`,
          backgroundColor,
          border: `1px solid ${overlayBorderColor}`,
          borderRadius: `${Math.max(0, borderRadius - overlayMargin)}px`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
