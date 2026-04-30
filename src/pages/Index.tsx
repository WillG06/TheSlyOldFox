import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroExterior from "@/assets/hero-exterior.jpg";
import heroBar from "@/assets/hero-bar.jpg";
import heroFood from "@/assets/hero-food.jpg";
import seasonalKitchen from "@/assets/seasonal-kitchen.jpg";
import bgAmbience from "@/assets/bg-ambience.jpg";
import gBar from "@/assets/gallery/Bar.jpg";
import gBar2 from "@/assets/gallery/bar2.jpg";
import gBar3 from "@/assets/gallery/bar3.jpg";
import gMainBar from "@/assets/gallery/mainBAR.jpg";
import gRoast from "@/assets/gallery/roast.jpg";
import gWine from "@/assets/gallery/wine.jpg";
import gDraught from "@/assets/gallery/draught.jpg";
import gDrinks from "@/assets/gallery/drinks.jpg";
import gFood from "@/assets/gallery/foodNice.jpg";
import gFood2 from "@/assets/gallery/food2.jpg";
import gFood3 from "@/assets/gallery/food3.jpg";
import gBuilding from "@/assets/gallery/building.jpg";
import gGlasses from "@/assets/gallery/glasses.jpg";
import gStaff from "@/assets/gallery/staff.jpg";

const rowA = [gMainBar, gFood, gWine, gBuilding, gDraught, gBar2, gFood3];
const rowB = [gBar, gRoast, gGlasses, gStaff, gFood2, gDrinks, gBar3];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  // Scale UP as you scroll past — image grows toward camera
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <SiteLayout>
      {/* Fixed background ambience — sections scroll over it */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bgAmbience})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden z-10">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <img src={heroExterior} alt="The Sly Old Fox at dusk" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>

        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-10 h-full flex flex-col">
          <div className="flex-1 container-wide flex flex-col justify-end pb-10 md:pb-14">
            <Reveal delay={0.4}>
              <div className="eyebrow mb-8">Birmingham · Since 1891</div>
            </Reveal>
            <Reveal delay={0.55}>
              <h1 className="display-xl text-balance max-w-5xl">
                Cunning by nature.<br />
                <span className="italic-accent">Central by design.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.75}>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link to="/contact" className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-glow text-primary-foreground text-[0.7rem] tracking-[0.3em] uppercase px-8 py-4 transition-all duration-500 hover:shadow-glow">
                  Reserve a Table <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/food-and-drink" className="group inline-flex items-center gap-3 border border-foreground/30 hover:border-accent hover:text-accent text-[0.7rem] tracking-[0.3em] uppercase px-8 py-4 transition-all duration-500">
                  View the Menu
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1} className="border-t border-foreground/15">
            <div className="container-wide grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/15">
              {[
                { label: "Hurst Street, B5 4TD", icon: MapPin },
                { label: "Open today · 11–21", icon: Clock },
                { label: "4.1 ★ · 767 reviews", icon: Star },
                { label: "Theatre Quarter", icon: null },
              ].map((s, i) => (
                <div key={i} className="px-6 py-5 flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-foreground/85">
                  {s.icon && <s.icon size={14} className="text-accent" />}
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </motion.div>
      </section>

      {/* INTRO / OUR STORY — tinted so ambience peeks through */}
      <section className="relative py-32 md:py-44 overflow-hidden z-20 bg-background/92">

        <div className="container-wide grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="eyebrow mb-8">Our Story</div>
              <h2 className="display-lg text-balance">
                A corner of Birmingham that time has <span className="italic-accent">polished,</span> not forgotten.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 space-y-5 text-foreground/80 max-w-xl leading-relaxed">
                <p>Nestled on Hurst Street since 1891, The Sly Old Fox has outlasted empires, survived two world wars and watched Birmingham transform around it — all while keeping the same welcome at the door.</p>
                <p>Today we're a proper public house in the fullest sense: locally sourced seasonal food, an exceptional range of cask ales and craft gins, and live nights that bring the neighbourhood together.</p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <Link to="/about" className="mt-12 inline-flex items-center gap-3 text-accent text-[0.7rem] tracking-[0.3em] uppercase link-underline">
                Read the full story <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          {/* SWAPPED: bar interior is main, beer taps is the inset */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <Reveal y={50}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={gMainBar} alt="Inside the pub at the bar" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.2} y={30}>
              <div className="absolute -bottom-10 -left-6 md:-left-12 w-44 md:w-56 aspect-[3/4] overflow-hidden border-8 border-background shadow-elegant hidden sm:block">
                <img src={heroBar} alt="Polished brass beer taps" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FULL-BLEED PARALLAX QUOTE */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden z-10">
        <motion.img
          src={heroFood}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative h-full container-narrow flex items-center justify-center text-center">
          <Reveal>
            <p className="font-display italic text-3xl md:text-5xl lg:text-6xl text-balance leading-tight max-w-4xl">
              "Absolutely beautiful food. You can tell the meals are freshly made — and the staff always welcome you with a chat."
            </p>
            <div className="mt-10 eyebrow justify-center">— James Kelly · Local Guide</div>
          </Reveal>
        </div>
      </section>

      {/* OFFERINGS GRID — overlaps quote section, tinted so ambience peeks through */}
      <section className="py-32 md:py-44 -mt-24 md:-mt-32 relative z-20 bg-background/92">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <Reveal>
              <div className="eyebrow mb-6">What We Do</div>
              <h2 className="display-lg max-w-2xl text-balance">From cask to <span className="italic-accent">candlelight.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/food-and-drink" className="text-accent text-[0.7rem] tracking-[0.3em] uppercase link-underline inline-flex items-center gap-3">
                Explore the menu <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: seasonalKitchen, title: "Seasonal Kitchen", text: "Locally sourced plates from Sunday roasts to weekday classics." },
              { img: gDraught, title: "17+ Craft Gins", text: "A curated cellar of cask ales and hand-picked spirits." },
              { img: gBuilding, title: "Live Nights", text: "Live music every Thursday, sport on the screens, and Pizza Mondays." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1} y={40}>
                <div className="group relative overflow-hidden bg-card hover-lift">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="font-display text-3xl mb-2">{c.title}</h3>
                    <p className="text-sm text-foreground/80 max-w-xs">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — TWO ROW MARQUEE — light tint over ambience */}
      <section className="relative py-24 overflow-hidden z-10 bg-background/55">
        <div className="container-wide mb-14 flex justify-between items-end">
          <Reveal>
            <div className="eyebrow mb-6">Gallery</div>
            <h2 className="display-lg">A pub worth <span className="italic-accent">photographing.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/gallery" className="text-accent text-[0.7rem] tracking-[0.3em] uppercase link-underline hidden md:inline-flex items-center gap-3">
              See more <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-5">
          <MarqueeRow images={rowA} direction="left" />
          <MarqueeRow images={rowB} direction="right" />
        </div>
      </section>

      {/* CTA — light tint over fixed ambience */}
      <section className="relative py-32 md:py-44 border-t border-border/60 z-10 bg-background/65">
        <div className="container-narrow text-center">
          <Reveal>
            <div className="eyebrow justify-center mb-8">Reservations</div>
            <h2 className="display-lg text-balance">Come and see what all the <span className="italic-accent">fuss</span> is about.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-foreground/75 max-w-xl mx-auto">
              Whether it's a quiet pint, a Sunday roast or a private hire for 50, we'd love to have you. Book online or give us a call.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-primary hover:bg-primary-glow text-primary-foreground text-[0.7rem] tracking-[0.3em] uppercase px-8 py-4 transition-all hover:shadow-glow">
                Reserve a Table
              </Link>
              <a href="tel:01216225080" className="border border-foreground/30 hover:border-accent hover:text-accent text-[0.7rem] tracking-[0.3em] uppercase px-8 py-4 transition-all">
                0121 622 5080
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

function MarqueeRow({ images, direction }: { images: string[]; direction: "left" | "right" }) {
  const loop = [...images, ...images];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-5 w-max animate-marquee"
        style={{
          animationDuration: "60s",
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {loop.map((src, i) => (
          <div key={i} className="relative w-[320px] md:w-[420px] aspect-[4/3] overflow-hidden shrink-0 group">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
