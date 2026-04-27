import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroExterior from "@/assets/hero-exterior.jpg";
import gFox from "@/assets/gallery/fox.jpg";
import gStaff from "@/assets/gallery/staff.jpg";
import gMainBar from "@/assets/gallery/mainBAR.jpg";

const About = () => (
  <SiteLayout>
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img src={heroExterior} alt="The Sly Old Fox exterior" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-background/65" />
      <div className="relative h-full container-wide flex flex-col justify-end pb-20">
        <Reveal>
          <div className="eyebrow mb-8">Our Story</div>
          <h1 className="display-xl text-balance">
            About <span className="italic-accent">The Fox.</span>
          </h1>
        </Reveal>
      </div>
    </section>

    <section className="py-28 md:py-36">
      <div className="container-wide grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="display-lg text-balance">A corner of Birmingham that time has <span className="italic-accent">polished,</span> not forgotten.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-foreground/80 leading-relaxed">
          <Reveal>
            <p>Nestled on Hurst Street since 1891, The Sly Old Fox has outlasted empires, survived two world wars and watched Birmingham transform around it — all while keeping the same welcome at the door.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>The stained glass, the carved wood, the colourful tiling — they tell a story most modern bars can only borrow. We've simply restored what was already here, and added a kitchen and cellar worthy of it.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Today we're a proper public house in the fullest sense: locally sourced seasonal food, an exceptional range of cask ales and craft gins, and live events that bring the neighbourhood together.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>Set in Birmingham's theatre quarter, we attract an eclectic crowd — post-show diners, regulars on a Sunday, celebrations and first dates alike.</p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="py-28 md:py-36 bg-card border-y border-border/60">
      <div className="container-wide grid md:grid-cols-3 gap-12">
        {[
          ["Heritage", "133 years on the same Birmingham corner."],
          ["Provenance", "Locally sourced ingredients, named suppliers, honest cooking."],
          ["Welcome", "Dog-friendly, theatre-friendly, and always good for a chat."],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-display italic text-7xl md:text-8xl text-accent/80 mb-4">0{i + 1}</div>
              <h3 className="font-display text-3xl mb-3">{t}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Image trio */}
    <section className="py-28 md:py-36">
      <div className="container-wide grid md:grid-cols-3 gap-6">
        {[gMainBar, gStaff, gFox].map((src, i) => (
          <Reveal key={i} delay={i * 0.08} y={50}>
            <div className="aspect-[3/4] overflow-hidden">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.4s]" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default About;
