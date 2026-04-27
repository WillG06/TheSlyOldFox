import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import gBar from "@/assets/gallery/Bar.jpg";
import gStaff from "@/assets/gallery/staff.jpg";
import gBuilding from "@/assets/gallery/building.jpg";

const weekly = [
  ["Mon", "Pizza Night", "Any pizza on the menu — just £6 all evening."],
  ["Thu", "Live Music", "Local acts and resident favourites from 8pm."],
  ["Sun", "Sunday Roasts", "Hand-carved roasts served 12 – 6pm."],
];

const upcoming = [
  { date: "Fri · 3 May", time: "8pm – late", title: "Acoustic Sessions: Tom Bowen", text: "Soulful covers and originals from Birmingham's own.", tag: "Live Music" },
  { date: "Sat · 18 May", time: "From 2pm", title: "Theatre Quarter Gin Festival", text: "12 guest distilleries, masterclasses and a tasting flight included.", tag: "Festival" },
  { date: "Thu · 6 Jun", time: "Sign-up 7pm", title: "Open Mic Night", text: "Bring your instrument — all welcome on the floor.", tag: "Open Mic" },
  { date: "Sun · 23 Jun", time: "12 – 6pm", title: "Father's Day Roast", text: "Three courses, £32pp. Reservations recommended.", tag: "Sunday Roast" },
];

const Events = () => (
  <SiteLayout>
    {/* HERO */}
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img src={gBar} alt="A live night at The Sly Old Fox" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-background/65" />
      <div className="relative h-full container-wide flex flex-col justify-end pb-20">
        <Reveal>
          <div className="eyebrow mb-8">What's On</div>
          <h1 className="display-xl text-balance">
            Nights at <span className="italic-accent">the Fox.</span>
          </h1>
        </Reveal>
      </div>
    </section>

    {/* INTRO */}
    <section className="py-28 md:py-36">
      <div className="container-wide grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="display-lg text-balance">A pub that <span className="italic-accent">earns</span> its evenings.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-foreground/80 leading-relaxed">
          <Reveal>
            <p>From quiet Thursday acoustic sets to packed match days and a Sunday roast that fills the dining room — there is always something happening on Hurst Street.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>Our weekly programme is the heartbeat of the Fox: built slowly, around the regulars who made it, and the local musicians and chefs who keep coming back.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>For something larger — a birthday, a wrap party, a private dinner — the whole pub is yours to book, with bespoke menus from our kitchen and the run of two heritage floors.</p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* WEEKLY — pillar grid, mirrors About */}
    <section className="py-28 md:py-36 bg-card border-y border-border/60">
      <div className="container-wide grid md:grid-cols-3 gap-12">
        {weekly.map(([day, title, text], i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-display italic text-7xl md:text-8xl text-accent/80 mb-4">0{i + 1}</div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mb-3">{day}</div>
              <h3 className="font-display text-3xl mb-3">{title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* UPCOMING — quiet diary */}
    <section className="py-28 md:py-36">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow mb-6">Upcoming</div>
            <h2 className="display-lg text-balance">The <span className="italic-accent">diary.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="text-foreground/75 leading-relaxed">
              A handful of nights to put in the calendar. Reservations are free and the best way to guarantee a seat near the stage.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border/60">
          {upcoming.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <article className="group grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-border/60 items-start">
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar size={14} />
                    <span className="text-[0.7rem] tracking-[0.3em] uppercase">{e.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={12} />
                    <span className="text-[0.65rem] tracking-[0.25em] uppercase">{e.time}</span>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <span className="inline-block text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground border border-border/60 px-3 py-1 mb-4">{e.tag}</span>
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors">{e.title}</h3>
                  <p className="mt-3 text-foreground/75 max-w-2xl leading-relaxed">{e.text}</p>
                </div>
                <div className="lg:col-span-2 flex lg:justify-end items-center">
                  <Link to="/contact" className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase text-foreground/70 hover:text-accent transition-colors">
                    Reserve <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* IMAGE TRIO — mirrors About */}
    <section className="py-28 md:py-36">
      <div className="container-wide grid md:grid-cols-3 gap-6">
        {[gStaff, gBuilding, gBar].map((src, i) => (
          <Reveal key={i} delay={i * 0.08} y={50}>
            <div className="aspect-[3/4] overflow-hidden">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PRIVATE HIRE — calm closer */}
    <section className="py-28 md:py-36 bg-card border-t border-border/60">
      <div className="container-wide grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="eyebrow mb-6">Private Hire</div>
            <h2 className="display-lg text-balance">Your night, <span className="italic-accent">our pub.</span></h2>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-foreground/80 leading-relaxed">
          <Reveal>
            <p>Parties from 10 to 150 — bespoke menus, dedicated staff and the full character of a Victorian Birmingham institution.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>Drop us a line and we'll build the night around you.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="group inline-flex items-center gap-3 text-accent text-[0.7rem] tracking-[0.3em] uppercase link-underline">
              Enquire about private hire <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Events;
