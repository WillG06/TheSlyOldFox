import { useState } from "react";
import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Backend skeleton — endpoint not wired yet.
    try {
      // await fetch('/api/book', { method: 'POST', body: JSON.stringify(data) });
      console.info("[booking submitted]", data);
      await new Promise(r => setTimeout(r, 700));
      toast.success("Thank you — we'll confirm your booking within 24 hours.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. Please call us on 0121 622 5080.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="relative pt-40 md:pt-48 pb-16">
        <div className="container-wide">
          <Reveal>
            <div className="eyebrow mb-8">Reservations</div>
            <h1 className="display-xl text-balance max-w-5xl">
              Reserve <span className="italic-accent">a table.</span>
            </h1>
            <p className="mt-8 max-w-xl text-foreground/75">
              Book online and we'll confirm within 24 hours. Prefer to chat? Call us on{" "}
              <a href="tel:01216225080" className="text-accent link-underline">0121 622 5080</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          {/* Info */}
          <div className="lg:col-span-4 space-y-12">
            <Reveal>
              <div className="eyebrow mb-5">Address</div>
              <p className="font-display text-2xl leading-snug">
                54–56 Hurst Street<br />Birmingham<br />B5 4TD
              </p>
              <a href="https://maps.google.com/?q=The+Sly+Old+Fox+Birmingham" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.3em] uppercase text-accent link-underline">
                Get directions →
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="eyebrow mb-5">Telephone</div>
              <a href="tel:01216225080" className="font-display text-2xl link-underline">0121 622 5080</a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="eyebrow mb-5">Email</div>
              <a href="mailto:hello@theslyoldfox.co.uk" className="font-display text-2xl link-underline break-all">hello@theslyoldfox.co.uk</a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="eyebrow mb-5">Opening Hours</div>
              <ul className="space-y-2 text-sm">
                {[
                  ["Monday", "11:00 – 21:00"],
                  ["Tuesday", "11:00 – 21:00"],
                  ["Wednesday", "11:00 – 21:00"],
                  ["Thursday", "11:00 – 22:00"],
                  ["Friday", "11:00 – 23:00"],
                  ["Saturday", "11:00 – 23:00"],
                  ["Sunday", "12:00 – 21:00"],
                ].map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-6 py-2 border-b border-border/60">
                    <span className="text-foreground/85">{d}</span>
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal>
              <form onSubmit={handleBooking} className="bg-card p-8 md:p-12 border border-border/70 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required />
                  <SelectField label="Guests" name="guests" options={["1 guest", "2 guests", "3 guests", "4 guests", "5 guests", "6 guests", "7+ guests"]} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="07…" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Date" name="date" type="date" required />
                  <SelectField label="Time" name="time" options={["12:00", "12:30", "13:00", "13:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]} />
                </div>
                <SelectField label="Occasion" name="occasion" options={["No particular occasion", "Birthday", "Anniversary", "Date night", "Business", "Other"]} />
                <Field label="Special requests" name="message" textarea placeholder="Allergies, accessibility needs, table preference…" />

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground max-w-sm">By booking you agree to our cancellation policy. We'll email confirmation within 24 hours.</p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-primary hover:bg-primary-glow text-primary-foreground text-[0.7rem] tracking-[0.3em] uppercase px-8 py-4 transition-all hover:shadow-glow disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Reserve a Table"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width map with atmospheric fog overlay */}
      <section className="relative">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-card border-t border-border/60 overflow-hidden">
          <iframe
            title="The Sly Old Fox map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.256974031408!2d-1.8995330233216412!3d52.47448277204924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc89ebc5b7d9%3A0xc3b4312b726754f0!2sThe%20Sly%20Old%20Fox!5e0!3m2!1sen!2suk!4v1776760498389!5m2!1sen!2suk"
            width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.5) contrast(1.05) brightness(0.8)" }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Fog layers — pointer-events none so map stays interactive */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/50 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(var(--background)/0.55)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='2' seed='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.7  0 0 0 0 0.78  0 0 0 0 0.85  0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E\")",
            mixBlendMode: "screen",
          }} />
        </div>
      </section>
    </SiteLayout>
  );
};

function Field({ label, name, type = "text", required, placeholder, textarea }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-3">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={4} className="w-full bg-background border border-border focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors" />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className="w-full bg-background border border-border focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors" />
      )}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-3">{label}</span>
      <select name={name} className="w-full bg-background border border-border focus:border-accent outline-none px-4 py-3 text-foreground transition-colors appearance-none">
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

export default Contact;
