"use client";
import Link from "next/link";

const YEAR = new Date().getFullYear();
const NAV = [
  { label: "Home",        href: "/" },
  { label: "Food & Drink",href: "/menu" },
  { label: "Events",      href: "/#events" },
  { label: "Gallery",     href: "/#gallery" },
  { label: "About",       href: "/#about" },
  { label: "Book a Table",href: "/book" },
];
const SOCIALS = [
  { name: "Instagram", href: "#", path: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></> },
  { name: "Facebook",  href: "#", path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="currentColor" stroke="none"/> },
  { name: "Twitter/X", href: "#", path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" stroke="none"/> },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/6">
      {/* Main grid */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand */}
          <div>
            <div className="mb-7">
              <span className="block font-sans text-[0.5rem] tracking-[0.32em] uppercase text-hazel/60 mb-1">The</span>
              <span className="block font-serif text-[1.5rem] text-cream font-normal leading-none tracking-tight">Sly Old Fox</span>
              <span className="block font-sans text-[0.48rem] tracking-[0.24em] uppercase text-slate mt-1">Est. 1891</span>
            </div>
            <p className="font-sans font-light text-slate text-sm leading-[1.8] mb-7">
              Birmingham's most storied public house. Fine cask ales, seasonal
              British food and live events on Hurst Street since 1891.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name}
                  className="w-9 h-9 border border-cream/10 flex items-center justify-center text-slate hover:text-hazel hover:border-hazel/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">{s.path}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-hazel mb-6">Navigate</h5>
            <ul className="space-y-3.5">
              {NAV.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="nav-link font-sans text-[0.875rem] text-cream-dim hover:text-cream transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h5 className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-hazel mb-6">Visit Us</h5>
            <address className="not-italic font-sans text-[0.875rem] text-cream-dim leading-relaxed mb-5 space-y-0.5">
              <p>54–56 Hurst Street</p><p>Birmingham, B5 4TD</p>
            </address>
            <a href="tel:01216225080" className="nav-link font-sans text-[0.875rem] text-cream-dim hover:text-cream transition-colors duration-300 block mb-6">
              0121 622 5080
            </a>
            <h6 className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-hazel mb-4">Hours</h6>
            <div className="font-sans text-[0.78rem] text-slate space-y-1">
              <p>Mon – Wed · 11:00 – 21:00</p>
              <p>Thursday · 11:00 – 22:00</p>
              <p>Fri – Sat · 11:00 – 23:00</p>
              <p>Sunday · 12:00 – 21:00</p>
            </div>
          </div>

          {/* Newsletter + rating */}
          <div>
            <h5 className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-hazel mb-6">Stay Updated</h5>
            <p className="font-sans font-light text-slate text-sm leading-relaxed mb-6">
              New events, seasonal menus and special offers — straight to your inbox.
            </p>
            <form onSubmit={e => e.preventDefault()} className="space-y-3">
              <input type="email" placeholder="your@email.com" className="field" />
              <button type="submit" className="btn btn-hazel w-full justify-center text-[0.65rem]">Subscribe</button>
            </form>
            <div className="mt-9 pt-8 border-t border-cream/6 flex items-center gap-4">
              <div className="font-serif text-hazel text-4xl leading-none">4.1</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(4)].map((_,i)=><span key={i} className="text-hazel text-sm">★</span>)}
                  <span className="text-hazel/25 text-sm">★</span>
                </div>
                <div className="font-sans text-[0.58rem] tracking-wide uppercase text-slate">767 Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[0.6rem] text-slate">
            © {YEAR} The Sly Old Fox · 54–56 Hurst Street, Birmingham B5 4TD
          </p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms & Conditions","Accessibility"].map(l => (
              <a key={l} href="#" className="font-sans text-[0.6rem] text-slate hover:text-cream-dim transition-colors duration-300 whitespace-nowrap">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
