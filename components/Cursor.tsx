"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      if (dot.current)  dot.current.style.transform  = `translate(${x - 5}px, ${y - 5}px)`;
      if (ring.current) ring.current.style.transform = `translate(${x - 17}px, ${y - 17}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
