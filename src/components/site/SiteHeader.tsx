import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/food-and-drink", label: "Food & Drink" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between gap-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="text-[0.55rem] tracking-[0.4em] text-accent uppercase">The</span>
          <span className="font-display text-2xl md:text-[1.65rem] tracking-tight">
            Sly Old <span className="italic-accent">Fox</span>
          </span>
          <span className="text-[0.55rem] tracking-[0.35em] text-muted-foreground uppercase mt-0.5">Est. 1891</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[0.72rem] tracking-[0.25em] uppercase transition-colors link-underline",
                  isActive ? "text-accent" : "text-foreground/85 hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground text-[0.7rem] tracking-[0.3em] uppercase px-6 py-3.5 transition-all duration-300 hover:shadow-glow"
          >
            Book a Table
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-xl",
          open ? "max-h-[80vh] border-t border-border/60" : "max-h-0"
        )}
      >
        <nav className="container-wide py-8 flex flex-col gap-5">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-display text-3xl tracking-tight",
                  isActive ? "text-accent italic" : "text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
