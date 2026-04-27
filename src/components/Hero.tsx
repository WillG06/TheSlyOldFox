"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STATS = [
  { value: "130", unit: "+", label: "Years of History" },
  { value: "4.1", unit: "★", label: "Google Rating" },
  { value: "17",  unit: "+", label: "Craft Gins" },
  { value: "1891",unit: "",  label: "Established" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [130, 4.1, 17, 1891];

  useEffect(() => {
    let raf = 0;
    const fn = () => {
      if (!raf) raf = requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.48}px)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const dur = 2600, start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCounts(targets.map(t => parseFloat((t * e).toFixed(t === 4.1 ? 1 : 0))));
      if (p < 1) requestAnimationFrame(tick);
    };
    const t = setTimeout(() => requestAnimationFrame(tick), 900);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="absolute will-change-transform" style={{ inset: "-6% 0" }}>
          {/* HERO — mainbar.jpg: widest, highest-quality bar interior shot */}
          <div
            className="absolute inset-0 animate-ken-burns bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/hero.jpg')` }}
          />
        </div>
        <div className="absolute inset-0 bg-ink/58" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="absolute left-1/2 -translate-x-px top-0 h-28 w-px bg-gradient-to-b from-hazel/30 to-transparent hidden lg:block" />

      <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 md:pb-14">
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-10 xl:px-16">
          <div className="reveal visible flex items-center gap-3 mb-7">
            <span className="rule" /><span className="section-label">Birmingham · Hurst Street · Est. 1891</span>
          </div>
          <div className="word-reveal visible mb-10 max-w-4xl leading-[0.92] tracking-tight font-serif"
            style={{ fontSize: "clamp(3.6rem,10vw,9rem)" }}>
            {"A Public House Worth Staying In".split(" ").map((w, i) => (
              <span key={i} className="word" style={{ marginRight: "0.2em" }}>
                <span className={i > 2 ? "text-hazel-gradient" : "text-cream"}>{w}</span>
              </span>
            ))}
          </div>
          <p className="reveal visible font-sans font-light text-cream-dim leading-relaxed mb-10 max-w-md d2"
            style={{ fontSize: "clamp(0.82rem,1.4vw,0.95rem)", letterSpacing: "0.02em" }}>
            Fine cask ales, seasonal British cooking and live events on Hurst Street.
            Birmingham's most storied public house, welcoming guests since 1891.
          </p>
          <div className="reveal visible flex flex-wrap gap-4 d3">
            <Link href="/book" className="btn btn-primary">Reserve a Table</Link>
            <Link href="/menu" className="btn btn-outline">Explore the Menu</Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/6 bg-navy/75 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6">
            {STATS.map((s, i) => (
              <div key={s.label} className="py-5 px-5 md:px-8">
                <div className="font-serif text-hazel leading-none mb-1" style={{ fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
                  {counts[i]}{s.unit}
                </div>
                <div className="font-sans text-[0.58rem] tracking-[0.22em] uppercase text-slate">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-7 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <span className="font-sans text-[0.52rem] tracking-[0.3em] uppercase text-slate" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-hazel/50 to-transparent" />
      </div>
    </section>
  );
}
