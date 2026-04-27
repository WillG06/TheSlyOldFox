"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TIMES = ["12:00","12:30","13:00","13:30","14:00","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"];
const OCCASIONS = ["No particular occasion","Birthday","Anniversary","Date Night","Work Function","Celebration","Pre-theatre","Post-theatre","Other"];

export default function BookPage() {
  const [form, setForm] = useState({ name:"",email:"",phone:"",date:"",time:"",guests:"2",occasion:"",notes:"" });
  const [state, setState] = useState<"idle"|"loading"|"done"|"error">("idle");
  const f = (id: keyof typeof form) => ({
    value: form[id],
    onChange: (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setForm({ ...form, [id]: e.target.value }),
  });
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setState("loading");
    try {
      const res = await fetch("/api/booking", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      setState(res.ok ? "done" : "error");
    } catch { setState("error"); }
  };

  return (
    <main>
      <Navigation />

      {/* Booking hero — warm candle-lit dining table, NOT a bar shot */}
      <div className="relative w-full flex items-end overflow-hidden" style={{ height: "50vh", minHeight: 340 }}>
        <div className="absolute inset-0">
          {/*
            BOOKING HERO — Warm table setting / intimate dining
            Completely different from all other page heroes
            Swap: replace with /images/your-dining-table.jpg
          */}
          <div className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url('/images/billing.jpg')` }} />
          <div className="absolute inset-0 bg-ink/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy/15 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 xl:px-16 pb-14">
          <div className="flex items-center gap-3 mb-5"><span className="rule" /><span className="section-label">Reservations</span></div>
          <h1 className="font-serif text-cream leading-none tracking-tight" style={{ fontSize: "clamp(3rem,8vw,7rem)" }}>
            Reserve <em className="text-hazel-gradient">a Table</em>
          </h1>
        </div>
      </div>

      <section className="bg-navy py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-serif text-cream leading-tight tracking-tight mb-5" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
                  We're ready to welcome you
                </h2>
                <p className="font-sans font-light text-slate leading-relaxed" style={{ fontSize: "var(--body-size)" }}>
                  Book online and we'll confirm within 24 hours. Prefer to call?{" "}
                  <a href="tel:01216225080" className="text-hazel hover:underline">0121 622 5080</a>
                </p>
              </div>
              <div>
                <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-5">Kitchen Hours</h4>
                <div className="space-y-2.5">
                  {[
                    { d:"Mon – Wed", t:"12:00 – 20:30" },
                    { d:"Thursday",  t:"12:00 – 21:30" },
                    { d:"Friday",    t:"12:00 – 22:30" },
                    { d:"Saturday",  t:"12:00 – 22:30" },
                    { d:"Sunday",    t:"12:00 – 19:30" },
                  ].map(r => (
                    <div key={r.d} className="flex justify-between border-b border-cream/7 pb-2.5">
                      <span className="font-sans text-cream-dim" style={{ fontSize: "var(--body-size)" }}>{r.d}</span>
                      <span className="font-sans text-slate" style={{ fontSize: "var(--body-size)" }}>{r.t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-burgundy/25 bg-burgundy/7 p-7">
                <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-4">Private Hire</h4>
                <p className="font-sans font-light text-cream-dim leading-relaxed" style={{ fontSize: "var(--body-size)" }}>
                  Parties from 10 to 150. Bespoke menus available.
                </p>
                <a href="tel:01216225080" className="font-sans text-[0.66rem] tracking-[0.16em] uppercase text-hazel mt-4 inline-block hover:underline">Enquire Now →</a>
              </div>
              <div>
                <h4 className="font-sans text-[0.58rem] tracking-[0.3em] uppercase text-hazel mb-4">Find Us</h4>
                <address className="font-serif text-cream text-xl not-italic leading-[1.7]">
                  54–56 Hurst Street<br />Birmingham<br />B5 4TD
                </address>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-ink border border-cream/7 p-8 md:p-12">
                {state === "done" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 border border-hazel/30 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-7 h-7 text-hazel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-cream text-2xl mb-3">Request Received</h3>
                    <p className="font-sans text-slate" style={{ fontSize: "var(--body-size)" }}>We'll confirm your table within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Name *</label>
                        <input required className="field" placeholder="Your full name" {...f("name")} />
                      </div>
                      <div>
                        <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Guests</label>
                        <select className="field" {...f("guests")}>
                          {Array.from({length:20},(_,i)=>i+1).map(n=>(
                            <option key={n} value={n}>{n} {n===1?"guest":"guests"}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Email *</label>
                      <input required type="email" className="field" placeholder="your@email.com" {...f("email")} />
                    </div>
                    <div>
                      <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Phone</label>
                      <input type="tel" className="field" placeholder="07..." {...f("phone")} />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Date *</label>
                        <input required type="date" className="field" {...f("date")} />
                      </div>
                      <div>
                        <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Time</label>
                        <select className="field" {...f("time")}>
                          <option value="">Select time</option>
                          {TIMES.map(t=><option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Occasion</label>
                      <select className="field" {...f("occasion")}>
                        {OCCASIONS.map(o=><option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-[0.58rem] tracking-[0.24em] uppercase text-hazel mb-2">Special Requests</label>
                      <textarea rows={4} className="field resize-none"
                        placeholder="Dietary requirements, high chairs, allergies, accessibility..." {...f("notes")} />
                    </div>
                    {state === "error" && (
                      <p className="font-sans text-red-400" style={{ fontSize: "var(--body-size)" }}>
                        Something went wrong — please call 0121 622 5080.
                      </p>
                    )}
                    <button type="submit" disabled={state==="loading"} className="btn btn-primary w-full justify-center">
                      {state==="loading" ? "Sending…" : "Request Booking"}
                    </button>
                    <p className="font-sans text-center text-slate" style={{ fontSize: "0.6rem", letterSpacing: "0.05em" }}>
                      We'll confirm within 24 hours. Your data is never shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
