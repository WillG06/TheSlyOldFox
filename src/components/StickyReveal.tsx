"use client";
import { useEffect, useRef } from "react";

/**
 * StickyReveal
 * ─────────────
 * Uses CSS background-image (not <img>) — browsers upscale CSS backgrounds
 * with better filtering than <img> object-fit:cover, reducing blur on
 * lower-resolution source photos.
 *
 * Parallax shift reduced to ±40px (was 70px) to avoid motion blur.
 * Scale removed from transform entirely — was compounding blur.
 */
export default function StickyReveal({
  image,
  alt = "The Sly Old Fox",
  height = "100vh",
  objectPosition = "center center",
  children,
}: {
  image: string;
  alt?: string;
  height?: string;
  objectPosition?: string;
  children: React.ReactNode;
}) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const bgRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const fn = () => {
      if (!raf) raf = requestAnimationFrame(() => {
        if (!wrapRef.current || !bgRef.current) { raf = 0; return; }
        const { top } = wrapRef.current.getBoundingClientRect();
        // Gentle parallax only — no scale transform
        const shift = Math.max(-60, Math.min(60, -top * 0.18));
        bgRef.current.style.backgroundPositionY = `calc(${objectPosition.split(" ")[1] ?? "center"} + ${shift}px)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [objectPosition]);

  return (
    <div className="panel-stack">
      {/* Sticky image zone — CSS background-image for sharper rendering */}
      <div ref={wrapRef} className="panel-image" style={{ height }}>
        <div
          ref={bgRef}
          className="absolute inset-0"
          role="img"
          aria-label={alt}
          style={{
            backgroundImage:    `url('${image}')`,
            backgroundSize:     "cover",
            backgroundPosition: objectPosition,
            backgroundRepeat:   "no-repeat",
            // Slight sharpening via contrast — helps with upscaled images
            filter: "contrast(1.06) brightness(0.96)",
            willChange: "background-position",
          }}
        />
        {/* Lighter overlay so image content is clearly visible */}
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60" />
      </div>

      {/* Solid panel scrolls over with deep shadow */}
      <div
        className="panel-solid"
        style={{ boxShadow: "0 -56px 100px rgba(11,17,24,0.97)" }}
      >
        {children}
      </div>
    </div>
  );
}
