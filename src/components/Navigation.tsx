"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home",       href: "/" },
  { label: "Food & Drink", href: "/menu" },
  { label: "Events",     href: "/#events" },
  { label: "Gallery",    href: "/#gallery" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [atTop, setAtTop]         = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ink/96 backdrop-blur-md border-b border-white/5 py-0"
            : "bg-transparent py-2"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16 flex items-center justify-between h-[76px] md:h-[88px]">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none select-none">
            <span className="font-sans text-[0.5rem] tracking-[0.35em] uppercase text-hazel/60 mb-0.5">The</span>
            <span className="font-serif text-[1.45rem] font-normal text-cream tracking-tight group-hover:text-hazel transition-colors duration-400 leading-none">
              Sly Old Fox
            </span>
            <span className="font-sans text-[0.48rem] tracking-[0.28em] uppercase text-slate mt-0.5">Est. 1891</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`nav-link font-sans text-[0.68rem] tracking-[0.12em] uppercase font-normal transition-colors duration-300 ${
                  pathname === l.href ? "text-hazel active" : "text-cream-dim hover:text-cream"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/book" className="btn btn-primary hidden md:inline-flex text-[0.65rem] py-3 px-6">
            Book a Table
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden flex flex-col gap-[5px] w-8 h-8 justify-center">
            <span className={`h-px bg-cream transition-all duration-400 origin-center ${open ? "rotate-45 translate-y-[7px] w-full" : "w-full"}`} />
            <span className={`h-px bg-cream transition-all duration-300 w-full ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`h-px bg-cream transition-all duration-400 origin-center ${open ? "-rotate-45 -translate-y-[7px] w-full" : "w-4/5"}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col justify-center items-center bg-ink transition-all duration-600 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-burgundy/60 to-transparent" />
        <nav className="flex flex-col items-center gap-6">
          {LINKS.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-[2.6rem] text-cream hover:text-hazel transition-colors duration-300"
              style={{ transitionDelay: open ? `${i * 50 + 60}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/book" onClick={() => setOpen(false)} className="btn btn-primary mt-10">
          Reserve a Table
        </Link>
        <span className="absolute bottom-8 font-sans text-[0.58rem] tracking-[0.24em] uppercase text-slate">
          54–56 Hurst Street, Birmingham
        </span>
      </div>
    </>
  );
}
