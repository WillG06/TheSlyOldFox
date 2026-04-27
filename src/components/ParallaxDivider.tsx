"use client";
import { useEffect, useRef } from "react";

/**
 * ParallaxDivider — also switched to CSS background-image for sharper rendering.
 * Parallax shift reduced to ±50px range.
 */
export default function ParallaxDivider({
  image,
  alt = "The Sly Old Fox",
  quote,
  attribution,
  overlayStrength = 0.50,
  objectPosition = "center center",
}: {
  image: string;
  alt?: string;
  quote?: string;
  attribution?: string;
  overlayStrength?: number;
  objectPosition?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const fn = () => {
      if (!raf) raf = requestAnimationFrame(() => {
        if (!wrapRef.current || !bgRef.current) { raf = 0; return; }
        const { top, height } = wrapRef.current.getBoundingClientRect();
        const progress = (window.innerHeight - top) / (window.innerHeight + height);
        const shift = (progress - 0.5) * 100;
        bgRef.current.style.backgroundPositionY = `calc(center + ${shift}px)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: 380 }}>
      {/* CSS background for sharper upscaling */}
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
          filter:             "contrast(1.06) brightness(0.95)",
          willChange:         "background-position",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `rgba(11,17,24,${overlayStrength})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy/20 via-transparent to-navy/15" />

      {quote && (
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
          <div className="w-10 h-px bg-hazel mx-auto mb-8" />
          <blockquote
            className="font-serif italic text-cream max-w-3xl leading-[1.3]"
            style={{ fontSize: "clamp(1.4rem,3.5vw,2.6rem)" }}
          >
            "{quote}"
          </blockquote>
          {attribution && (
            <p className="font-sans text-[0.62rem] tracking-[0.26em] uppercase text-hazel mt-7">
              — {attribution}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
