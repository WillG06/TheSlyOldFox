"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

/* SVG icons — no emojis */
const IconPizza = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 20h20L12 2z"/><path d="M12 2v18"/><path d="M7 14h10"/>
    <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const IconMusic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
  </svg>
);
const IconVinyl = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const IconDome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14C3 9 7.03 5 12 5s9 4 9 9v1H3v-1z"/><path d="M3 19h18"/><path d="M12 5V3"/>
  </svg>
);

const EVENTS = [
  { day: "Every Monday",    title: "Pizza Monday",  desc: "Any pizza for £6 all day, every Monday until 8pm.",                      time: "All day · until 8pm",  Icon: IconPizza },
  { day: "Every Thursday",  title: "Live Music",    desc: "Local artists and bands bring Birmingham's musical soul to Hurst Street.", time: "From 8pm",             Icon: IconMusic },
  { day: "Every Friday",    title: "DJ Night",      desc: "Resident DJs spinning classics and contemporary cuts in the main bar.",    time: "From 9pm",             Icon: IconVinyl },
  { day: "Every Sunday",    title: "Sunday Roast",  desc: "Slow-roasted meats, all the trimmings, proper Yorkshire puddings.",       time: "12pm – 6pm",           Icon: IconDome  },
];

export default function Events() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).querySelectorAll<HTMLElement>(".reveal,.word-reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
        }
      });
    }, { threshold: 0.07 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="events" ref={ref} className="bg-navy py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">

        <div className="reveal flex items-center gap-3 mb-20">
          <span className="rule" /><span className="section-label">What's On</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32">
          {/* Events list */}
          <div>
            <div className="word-reveal font-serif text-cream leading-tight tracking-tight mb-14" style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}>
              {"Something happening every night".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                  <span className={w === "every" || w === "night" ? "text-hazel-gradient" : ""}>{w}</span>
                </span>
              ))}
            </div>

            <div>
              {EVENTS.map((ev, i) => (
                <div
                  key={ev.title}
                  className="reveal group flex gap-5 py-8 border-b border-cream/7 cursor-default"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="ev-icon">
                    <ev.Icon />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-hazel">{ev.day}</span>
                      <span className="font-sans text-[0.62rem] text-slate whitespace-nowrap">{ev.time}</span>
                    </div>
                    <h3 className="font-serif text-cream text-[1.35rem] font-normal mb-1.5">{ev.title}</h3>
                    <p className="font-sans font-light text-slate text-sm leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Private hire */}
            <div className="reveal d5 mt-10 p-6 border border-burgundy/25 bg-burgundy/8">
              <p className="font-sans text-[0.82rem] text-cream-dim leading-relaxed">
                <span className="text-hazel font-medium">Private hire available.</span>{" "}
                The Sly Old Fox accommodates private events, corporate bookings and
                celebrations. Contact us to discuss your requirements.
              </p>
            </div>
          </div>

          {/* CTA panel */}
          <div className="flex flex-col justify-center">
            <div className="bg-ink border border-cream/7 p-10 md:p-14">
              <div className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-hazel mb-5">Make it a night</div>
              <h3 className="font-serif text-cream leading-tight tracking-tight mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
                Ready to join us?
              </h3>
              <p className="font-sans font-light text-cream-dim text-sm leading-relaxed mb-10">
                Reserve your table for any evening. Whether it's Pizza Monday, a
                live music Thursday or a lazy Sunday roast — we'll have your
                seats ready.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/book" className="btn btn-primary w-full justify-center">Reserve a Table</Link>
                <Link href="tel:01216225080" className="btn btn-outline w-full justify-center">
                  Call 0121 622 5080
                </Link>
              </div>

              {/* Decorative rating */}
              <div className="mt-10 pt-8 border-t border-cream/7 flex items-center gap-4">
                <div className="font-serif text-hazel text-4xl leading-none">4.1</div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(4)].map((_,i) => <span key={i} className="text-hazel text-sm">★</span>)}
                    <span className="text-hazel/30 text-sm">★</span>
                  </div>
                  <div className="font-sans text-[0.58rem] tracking-wide uppercase text-slate">767 Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
