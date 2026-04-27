"use client";
import { useEffect, useRef, useState } from "react";

/*
  GALLERY — All 20 real Sly Old Fox images, no stock photos.
  Quality-tiered:
    Row 1 (height 310px) — highest quality / largest files first
    Row 2 (height 215px) — remaining images

  Quality tier ranking by file size:
    burger.png     1.3MB  ← best quality
    hamburger.png  944KB
    drinks.jpg     610KB
    breakfast.jpg  349KB
    bar.jpg        187KB
    glasses.jpg    154KB
    draught.jpg    148KB
    bar2.jpg       133KB
    bar3.jpg       125KB
    mainbar.jpg    120KB
    building.jpg   119KB
    food.jpg       112KB
    fox.jpg        105KB
    roast.jpg      100KB
    staff.jpg       98KB
    food2.jpg       78KB
    wine.jpg        75KB
    billing.jpg     57KB
    foodnice.jpg    46KB
    food3.jpg       37KB
*/

// Row 1 — 10 best quality images (displayed at full 310px height)
const ROW1 = [
  { src: "/images/mainbar.jpg",   label: "The Bar" },
  { src: "/images/bar.jpg",       label: "The Fox" },
  { src: "/images/drinks.jpg",    label: "Drinks" },
  { src: "/images/glasses.jpg",   label: "Cocktails" },
  { src: "/images/draught.jpg",   label: "Cask Ales" },
  { src: "/images/burger.png",    label: "Burgers" },
  { src: "/images/breakfast.jpg", label: "The Kitchen" },
  { src: "/images/bar2.jpg",      label: "Interior" },
  { src: "/images/roast.jpg",     label: "Sunday Roast" },
  { src: "/images/food.jpg",      label: "Kitchen" },
];

// Row 2 — remaining 10 images (displayed at 215px height — smaller imperfections less visible)
const ROW2 = [
  { src: "/images/bar3.jpg",      label: "The Bar" },
  { src: "/images/building.jpg",  label: "The Building" },
  { src: "/images/hamburger.png", label: "Burgers" },
  { src: "/images/food2.jpg",     label: "Food" },
  { src: "/images/fox.jpg",       label: "The Fox" },
  { src: "/images/staff.jpg",     label: "Our Team" },
  { src: "/images/wine.jpg",      label: "Wine" },
  { src: "/images/billing.jpg",   label: "The Fox" },
  { src: "/images/foodnice.jpg",  label: "Dishes" },
  { src: "/images/food3.jpg",     label: "Food" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).querySelectorAll<HTMLElement>(".reveal,.word-reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
        }
      });
    }, { threshold: 0.07 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Duplicate each row for seamless infinite scroll
  const row1Loop = [...ROW1, ...ROW1];
  const row2Loop = [...ROW2, ...ROW2];

  return (
    <section id="gallery" ref={sectionRef} className="bg-ink py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16 mb-12 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="rule" /><span className="section-label">Gallery</span>
            </div>
            <div className="word-reveal font-serif text-cream leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem,4.5vw,3.8rem)" }}>
              {"A pub worth photographing".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                  <span className={w === "photographing" ? "text-hazel-gradient italic" : ""}>{w}</span>
                </span>
              ))}
            </div>
          </div>
          <p className="reveal d2 font-sans font-light text-slate text-sm max-w-xs leading-relaxed hidden md:block">
            Hover to pause · All images are from The Sly Old Fox
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left, high quality images at larger size */}
      <div className="relative w-full mb-3 overflow-hidden"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--ink), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--ink), transparent)" }} />
        <div className="flex gap-3" style={{
          width: "max-content",
          animation: "carouselScroll 55s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}>
          {row1Loop.map((img, i) => <CarouselCell key={`r1-${i}`} {...img} height={310} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right, remaining images at smaller size */}
      <div className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--ink), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--ink), transparent)" }} />
        <div className="flex gap-3" style={{
          width: "max-content",
          animation: "carouselScroll 72s linear infinite reverse",
          animationPlayState: paused ? "paused" : "running",
        }}>
          {row2Loop.map((img, i) => <CarouselCell key={`r2-${i}`} {...img} height={215} />)}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16 mt-12 reveal">
        <div className="flex items-center gap-6">
          <span className="font-sans text-slate text-sm">Share your visit</span>
          <span className="font-sans text-[0.62rem] tracking-[0.22em] uppercase text-hazel">@theslyoldfox</span>
        </div>
      </div>
    </section>
  );
}

function CarouselCell({ src, label, height }: { src: string; label: string; height: number }) {
  const w = Math.round(height * 1.45);
  return (
    <div className="relative flex-none overflow-hidden group cursor-default" style={{ width: w, height }}>
      <img src={src} alt={label} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: "linear-gradient(to top, rgba(11,17,24,0.72) 0%, transparent 55%)" }} />
      <span className="absolute bottom-3 left-3 font-sans text-[0.56rem] tracking-[0.24em] uppercase text-hazel-light
        opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
        {label}
      </span>
    </div>
  );
}
