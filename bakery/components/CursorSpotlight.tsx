"use client";
import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = e.clientX + "px";
      spotRef.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "400px",
        height: "400px",
        background:
          "radial-gradient(circle, rgba(217,119,6,0.12) 0%, rgba(217,119,6,0.04) 40%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.08s ease, top 0.08s ease",
      }}
      aria-hidden="true"
    />
  );
}
