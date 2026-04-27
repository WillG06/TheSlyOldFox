"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).querySelectorAll<HTMLElement>(".reveal,.word-reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 90));
        }
      });
    }, { threshold: 0.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-navy py-28 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
        <div className="reveal flex items-center gap-3 mb-20">
          <span className="rule" /><span className="section-label">Our Story</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-28 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="word-reveal font-serif text-cream leading-[1.08] tracking-tight mb-10"
              style={{ fontSize: "clamp(2rem,4vw,3.6rem)" }}>
              {"A corner of Birmingham that time has polished, not forgotten".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                  <span className={w === "polished," ? "text-hazel-gradient italic" : ""}>{w}</span>
                </span>
              ))}
            </div>
            <div className="space-y-5 font-sans font-light text-cream-dim" style={{ lineHeight: "1.85", fontSize: "var(--body-size)" }}>
              <p className="reveal d1">
                Nestled on Hurst Street since 1891, The Sly Old Fox has outlasted empires,
                survived two world wars and watched Birmingham transform around it —
                all while keeping the same welcome at the door.
              </p>
              <p className="reveal d2">
                Today we are a proper public house in the fullest sense — locally sourced
                seasonal food, an exceptional range of cask ales and craft gins, and live
                events that bring the neighbourhood together.
              </p>
              <p className="reveal d3">
                Set in Birmingham's theatre quarter, we attract an eclectic crowd:
                post-show diners, regulars on a Sunday, celebrations and first dates alike.
              </p>
            </div>
            <div className="reveal d4 mt-12 pt-12 border-t border-cream/8 grid grid-cols-2 gap-8">
              {[
                { val: "130", unit: "yrs", label: "Serving Birmingham" },
                { val: "17+", label: "Hand-Selected Gins" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-serif text-hazel leading-none mb-1" style={{ fontSize: "clamp(2.8rem,5vw,4rem)" }}>
                    {s.val}<span className="text-hazel/35 text-xl">{("unit" in s) ? s.unit : ""}</span>
                  </div>
                  <div className="font-sans text-[0.58rem] tracking-[0.22em] uppercase text-slate">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 relative">
            {/* drinks.jpg: 625x960 portrait — perfect for this portrait slot, highest quality drink image */}
            <div className="reveal from-right overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/images/drinks.jpg"
                alt="The Sly Old Fox — drinks selection"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent pointer-events-none" />
            </div>
            {/* 1891 badge */}
            <div className="reveal d3 absolute -bottom-5 -left-5 md:-left-8 bg-ink border border-hazel/15 p-7 md:p-9">
              <div className="font-serif text-hazel/20 leading-none select-none" style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>1891</div>
              <div className="font-sans text-[0.52rem] tracking-[0.24em] uppercase text-slate mt-1">Est. Birmingham</div>
            </div>
            {/* glasses.jpg: close-up drinks accent — different from main portrait */}
            <div className="reveal d2 absolute -top-6 -right-3 md:-right-6 w-32 h-32 md:w-44 md:h-44 overflow-hidden border-[3px] border-navy">
              <img
                src="/images/glasses.jpg"
                alt="The Sly Old Fox — craft drinks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
