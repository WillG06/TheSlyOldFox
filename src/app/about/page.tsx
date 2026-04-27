"use client";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParallaxDivider from "@/components/ParallaxDivider";
import Link from "next/link";

const TIMELINE = [
  { year: "1891", title: "The doors open",           body: "The Sly Old Fox first opens on Hurst Street during the height of Birmingham's industrial golden age. A working pub serving nearby factories and theatres." },
  { year: "1920s", title: "Prohibition era trade",   body: "While America went dry, Birmingham's pubs flourished. The Fox became a focal point for the city's jazz scene, welcoming performers from the nearby theatres." },
  { year: "1960s", title: "The great refurbishment", body: "Major interior work introduces the distinctive herringbone parquet floor and the iconic copper-topped bar that remain beloved features today." },
  { year: "1980s", title: "A community anchor",      body: "As Birmingham reinvented itself post-industrial, The Fox became a sanctuary for artists, writers and creatives drawn to the Hurst Street neighbourhood." },
  { year: "2010s", title: "Craft gin revolution",    body: "A growing passion for artisan spirits sees the gin collection expand to over 17 hand-selected bottles. The cocktail programme launches to acclaim." },
  { year: "Today", title: "Still standing",          body: "Over 130 years since it first opened, The Sly Old Fox continues to serve Birmingham with seasonal menus, live music, and the same welcome at the door." },
];

const VALUES = [
  { title: "Locally sourced",    body: "We work with Birmingham and West Midlands producers wherever possible. Our seasonal menu changes with what's fresh and what's excellent." },
  { title: "Freshly made",       body: "Nothing microwaved. Everything made to order by our kitchen team. You can taste the difference — our guests certainly do." },
  { title: "Community first",    body: "We sponsor local events, host charity nights, and keep our doors open to everyone. The Fox belongs to Birmingham." },
  { title: "Proper hospitality", body: "Not a chain. Not a franchise. A pub run by people who care about every pint poured and every plate served." },
];

export default function AboutPage() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).querySelectorAll<HTMLElement>(".reveal,.word-reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
        }
      });
    }, { threshold: 0.07 });
    document.querySelectorAll<HTMLElement>("[data-s]").forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Navigation />

      {/* About hero — exterior shot / full pub façade, different from interior used on homepage */}
      <div className="relative w-full flex items-end overflow-hidden" style={{ height: "58vh", minHeight: 420 }}>
        <div className="absolute inset-0">
          {/*
            ABOUT PAGE HERO — Pub exterior or wide street-level shot
            Different from every other page's hero
            Swap: replace with /images/pub-exterior.jpg
          */}
          <div className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url('/images/building.jpg')` }} />
          <div className="absolute inset-0 bg-ink/58" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy/18 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 xl:px-16 pb-16">
          <div className="flex items-center gap-3 mb-6"><span className="rule" /><span className="section-label">Our Story</span></div>
          <h1 className="font-serif text-cream leading-[0.92] tracking-tight" style={{ fontSize: "clamp(3.2rem,9vw,8.5rem)" }}>
            About <em className="text-hazel-gradient">The Fox</em>
          </h1>
        </div>
      </div>

      {/* Opening statement */}
      <section data-s className="bg-navy py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center">
            <div>
              <div className="word-reveal font-serif text-cream leading-[1.08] tracking-tight mb-10" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
                {"A corner of Birmingham that time has polished, not forgotten".split(" ").map((w, i) => (
                  <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                    <span className={w === "polished," ? "text-hazel-gradient italic" : ""}>{w}</span>
                  </span>
                ))}
              </div>
              <div className="space-y-5 font-sans font-light text-cream-dim" style={{ lineHeight: "1.85", fontSize: "var(--body-size)" }}>
                <p className="reveal d1">
                  Nestled on Hurst Street since 1891, The Sly Old Fox has outlasted empires,
                  survived two world wars, and watched Birmingham transform around it — all
                  while keeping the same welcome at the door.
                </p>
                <p className="reveal d2">
                  We are not a chain. We are not a franchise. We are a proper Birmingham pub,
                  run by people who love this city and the people in it.
                </p>
              </div>
            </div>

            {/*
              About page split image — real pub photo #1 (bar shelf, bottle display)
              Different to the hero above (which is an exterior/atmospheric shot)
            */}
            <div className="reveal from-right relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src="/images/bar3.jpg" alt="The Sly Old Fox — copper bar and bottle shelf"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent pointer-events-none" />
              <div className="absolute -bottom-5 -left-5 bg-ink border border-hazel/15 p-7">
                <div className="font-serif text-hazel/20 leading-none select-none" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>1891</div>
                <div className="font-sans text-[0.52rem] tracking-[0.24em] uppercase text-slate mt-1">Est. Birmingham</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax — pub at night / stained glass window detail, unique to this page */}
      <ParallaxDivider
        image="/images/staff.jpg"
        alt="Warm pub interior detail — replace with actual Sly Old Fox photograph"
        quote="The staff are lovely, friendly and will always have a chat with you."
        attribution="James K · Google Review"
        overlayStrength={0.48}
      />

      {/* Timeline */}
      <section data-s className="bg-ink py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="reveal flex items-center gap-3 mb-6"><span className="rule" /><span className="section-label">History</span></div>
          <div className="word-reveal font-serif text-cream leading-tight tracking-tight mb-20" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            {"Over 130 years of Birmingham history".split(" ").map((w, i) => (
              <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                <span className={["130","years"].includes(w) ? "text-hazel-gradient" : ""}>{w}</span>
              </span>
            ))}
          </div>
          <div className="relative">
            <div className="absolute left-[106px] top-0 bottom-0 w-px bg-cream/7 hidden md:block" />
            <div className="space-y-0">
              {TIMELINE.map((entry, i) => (
                <div key={entry.year}
                  className="reveal grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10 py-10 border-b border-cream/7 group"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex md:flex-col items-baseline md:items-start gap-3 md:gap-1 pt-1">
                    <span className="font-serif text-hazel text-2xl leading-none">{entry.year}</span>
                    <div className="hidden md:block w-3 h-px bg-hazel/40 mt-3" />
                  </div>
                  <div className="md:pl-8">
                    <h3 className="font-serif text-cream text-xl mb-3 group-hover:text-hazel transition-colors duration-300">{entry.title}</h3>
                    <p className="font-sans font-light text-slate leading-relaxed" style={{ fontSize: "var(--body-size)" }}>{entry.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section data-s className="bg-navy py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="reveal flex items-center gap-3 mb-6"><span className="rule" /><span className="section-label">What We Stand For</span></div>
          <div className="word-reveal font-serif text-cream leading-tight tracking-tight mb-16" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            {"Principles we don't compromise on".split(" ").map((w, i) => (
              <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                <span className={["compromise","on"].includes(w) ? "text-hazel-gradient italic" : ""}>{w}</span>
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {VALUES.map((v, i) => (
              <div key={v.title}
                className="reveal border border-cream/7 p-9 hover:border-hazel/20 hover:bg-hazel/3 transition-all duration-400 group"
                style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="w-8 h-px bg-hazel mb-6 group-hover:w-12 transition-all duration-400" />
                <h3 className="font-serif text-cream text-xl mb-3">{v.title}</h3>
                <p className="font-sans font-light text-slate leading-relaxed" style={{ fontSize: "var(--body-size)" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-s className="bg-ink py-20 md:py-28 border-t border-cream/5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16 text-center">
          <div className="word-reveal font-serif text-cream leading-tight tracking-tight mb-6 mx-auto" style={{ fontSize: "clamp(2rem,4.5vw,3.8rem)", maxWidth: "700px" }}>
            {"Ready to experience it for yourself?".split(" ").map((w, i) => (
              <span key={i} className="word" style={{ marginRight: "0.22em" }}><span>{w}</span></span>
            ))}
          </div>
          <p className="reveal font-sans font-light text-cream-dim mb-10 max-w-md mx-auto" style={{ fontSize: "var(--body-size)" }}>
            Come and see what 130 years of hospitality looks like.
          </p>
          <div className="reveal d2 flex flex-wrap gap-4 justify-center">
            <Link href="/book" className="btn btn-primary">Reserve a Table</Link>
            <Link href="/#contact" className="btn btn-outline">Find Us</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
