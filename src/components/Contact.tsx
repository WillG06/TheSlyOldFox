"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const HOURS = [
  { day: "Monday",    hours: "11:00 – 21:00" },
  { day: "Tuesday",   hours: "11:00 – 21:00" },
  { day: "Wednesday", hours: "11:00 – 21:00" },
  { day: "Thursday",  hours: "11:00 – 22:00" },
  { day: "Friday",    hours: "11:00 – 23:00" },
  { day: "Saturday",  hours: "11:00 – 23:00" },
  { day: "Sunday",    hours: "12:00 – 21:00" },
];

const FEATURES = [
  "Cask ales on tap",
  "17+ hand-selected craft gins",
  "Pizza Mondays — any pizza £6",
  "Live music every Thursday",
  "Sunday roasts 12pm – 6pm",
  "In Birmingham's theatre quarter",
  "Private hire available",
  "Dog friendly",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).querySelectorAll<HTMLElement>(".reveal, .word-reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 70));
        }
      });
    }, { threshold: 0.06 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const today = typeof window !== "undefined"
    ? new Date().toLocaleDateString("en-GB", { weekday: "long" }) : "";

  return (
    <section id="contact" ref={ref} className="bg-ink py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
        <div className="reveal flex items-center gap-3 mb-20">
          <span className="rule" /><span className="section-label">Find Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:gap-24">

          {/* Info column */}
          <div className="space-y-12">
            <div className="reveal">
              <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-4">Address</h4>
              <address className="font-serif text-cream text-xl not-italic leading-[1.75]">
                54–56 Hurst Street<br />Birmingham<br />B5 4TD
              </address>
              <a href="https://maps.google.com/?q=The+Sly+Old+Fox+Birmingham"
                target="_blank" rel="noopener noreferrer"
                className="nav-link font-sans text-[0.68rem] tracking-[0.14em] uppercase text-hazel mt-4 inline-block">
                Get Directions →
              </a>
            </div>

            <div className="reveal d1">
              <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-4">Telephone</h4>
              <a href="tel:01216225080"
                className="font-serif text-cream text-xl hover:text-hazel transition-colors duration-300">
                0121 622 5080
              </a>
            </div>

            <div className="reveal d2">
              <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-5">Opening Hours</h4>
              <div className="space-y-2.5">
                {HOURS.map(row => {
                  const isToday = today === row.day;
                  return (
                    <div key={row.day}
                      className={`flex justify-between pb-2.5 border-b ${
                        isToday ? "border-burgundy/35" : "border-cream/7"
                      }`}>
                      <span className={`font-sans text-sm ${
                        isToday ? "text-hazel font-medium" : "text-cream-dim"
                      }`}>
                        {row.day}{isToday ? " · today" : ""}
                      </span>
                      <span className="font-sans text-sm text-slate">{row.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2">
            <div
              className="word-reveal font-serif text-cream leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(2rem,4vw,3.6rem)" }}
            >
              {"Come and see what all the fuss is about".split(" ").map((w, i) => (
                <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                  <span className={["fuss", "about"].includes(w) ? "text-hazel-gradient italic" : ""}>{w}</span>
                </span>
              ))}
            </div>

            <p className="reveal font-sans font-light text-cream-dim leading-relaxed mb-10 max-w-lg text-base">
              Whether you have a general enquiry, want to discuss a private event or
              just want to know if we're showing the match — give us a call or
              drop us a message on our booking page.
            </p>

            <div className="reveal d2 flex flex-wrap gap-4 mb-14">
              <Link href="/book"          className="btn btn-primary">Reserve a Table</Link>
              <a    href="tel:01216225080" className="btn btn-outline">0121 622 5080</a>
            </div>

            {/* Clean feature list — no emojis */}
            <div className="reveal d3">
              <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-6">
                What we offer
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {FEATURES.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 py-3 border-b border-cream/7 group"
                    style={{
                      transitionDelay: `${i * 40}ms`,
                    }}
                  >
                    {/* Thin hazel bullet line */}
                    <span className="w-4 h-px bg-hazel/50 flex-none group-hover:bg-hazel transition-colors duration-300" />
                    <span className="font-sans text-[0.85rem] text-cream-dim group-hover:text-cream transition-colors duration-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
