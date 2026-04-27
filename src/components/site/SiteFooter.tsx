import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative bg-background border-t border-border/60 mt-0">
      <div className="container-wide pt-24 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex flex-col leading-none mb-6">
              <span className="text-[0.55rem] tracking-[0.4em] text-accent uppercase">The</span>
              <span className="font-display text-3xl">
                Sly Old <span className="italic-accent">Fox</span>
              </span>
              <span className="text-[0.55rem] tracking-[0.35em] text-muted-foreground uppercase mt-1">Est. 1891 · Birmingham</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              A corner of Birmingham's theatre quarter that time has polished, not forgotten. Locally sourced food, exceptional cask ales and live nights worth remembering.
            </p>
            <div className="flex gap-3 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 grid place-items-center border border-border/80 hover:border-accent hover:text-accent transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div className="lg:col-span-3">
            <div className="eyebrow mb-6">Visit</div>
            <ul className="space-y-4 text-sm text-foreground/85">
              <li className="flex gap-3"><MapPin size={15} className="mt-1 text-accent shrink-0" /><span>54–56 Hurst Street<br />Birmingham B5 4TD</span></li>
              <li className="flex gap-3"><Phone size={15} className="mt-1 text-accent shrink-0" /><a href="tel:01216225080" className="link-underline">0121 622 5080</a></li>
              <li className="flex gap-3"><Mail size={15} className="mt-1 text-accent shrink-0" /><a href="mailto:hello@theslyoldfox.co.uk" className="link-underline">hello@theslyoldfox.co.uk</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <div className="eyebrow mb-6">Hours</div>
            <ul className="space-y-2.5 text-sm">
              {[
                ["Mon – Wed", "11:00 – 21:00"],
                ["Thursday", "11:00 – 22:00"],
                ["Fri – Sat", "11:00 – 23:00"],
                ["Sunday", "12:00 – 21:00"],
              ].map(([d, h]) => (
                <li key={d} className="flex justify-between gap-4 text-foreground/80">
                  <span>{d}</span><span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <div className="eyebrow mb-6">Explore</div>
            <ul className="space-y-3 text-sm">
              {[
                ["/food-and-drink", "Food & Drink"],
                ["/events", "Events & Live Nights"],
                ["/gallery", "Gallery"],
                ["/about", "Our Story"],
                ["/contact", "Reserve a Table"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-foreground/80 hover:text-accent link-underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/60 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Sly Old Fox. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Allergens</a>
          </div>
          <p className="tracking-[0.2em] uppercase text-[0.65rem]">Pour with pride · Drink responsibly</p>
        </div>
      </div>
    </footer>
  );
}
