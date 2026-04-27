import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroFood from "@/assets/hero-food.jpg";
import gRoast from "@/assets/gallery/roast.jpg";
import gWine from "@/assets/gallery/wine.jpg";
import gDraught from "@/assets/gallery/draught.jpg";
import gBurger from "@/assets/gallery/burger.png";
import gHamburger from "@/assets/gallery/hamburger.png";

const sections = [
  {
    eyebrow: "From the Kitchen", title: "Small plates & starters",
    items: [
      ["Pan-seared scallops", "Pea purée, smoked pancetta, lemon brown butter", "11"],
      ["Fish goujons", "Hand-cut hake, tartare sauce, charred lemon", "8"],
      ["Heritage tomato salad", "Burrata, basil oil, sourdough crisp", "9"],
      ["Soup of the day", "Warm focaccia, salted Welsh butter", "7"],
    ],
  },
  {
    eyebrow: "Mains", title: "From the grill & oven",
    items: [
      ["The Sly Old Burger", "Aged beef patty, smoked cheddar, bacon jam, hand-cut chips", "16"],
      ["Beer-battered haddock", "Triple-cooked chips, mushy peas, house tartare", "17"],
      ["Slow-braised short rib", "Creamed mash, roasted shallots, red wine jus", "22"],
      ["Wild mushroom rigatoni", "Garlic cream, aged parmesan, truffle oil", "15"],
    ],
  },
  {
    eyebrow: "Sundays", title: "The Sunday roast, done right",
    items: [
      ["28-day aged sirloin", "Hand-carved, served pink", "21"],
      ["Roast chicken supreme", "Herb-rubbed, pan jus", "18"],
      ["Slow-roast pork belly", "Crackling, apple sauce", "19"],
      ["Roasted root vegetable wellington (v)", "Cashew cream, gravy", "17"],
    ],
    note: "All roasts served with goose-fat potatoes, seasonal veg, Yorkshire pudding & rich gravy. 12pm – 6pm.",
  },
];

const drinks = [
  { name: "Cask Ales", text: "Sharp's Doom Bar, Tribute, HPA, Proper Job and a rotating guest." },
  { name: "Craft Gins", text: "17+ hand-picked gins served with bespoke garnishes." },
  { name: "Wines", text: "Old & new world by the glass, carafe or bottle." },
  { name: "Cocktails", text: "Classics done right and a short signature list." },
];

const FoodAndDrink = () => (
  <SiteLayout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      <img src={heroFood} alt="Honest cooking at The Sly Old Fox" className="absolute inset-0 h-full w-full object-cover scale-105 animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/55" />
      <div className="relative h-full container-wide flex flex-col justify-end pb-20">
        <Reveal>
          <div className="eyebrow mb-8">Food & Drink</div>
          <h1 className="display-xl text-balance max-w-4xl">
            Honest cooking, <span className="italic-accent">extraordinary</span> drinks.
          </h1>
        </Reveal>
      </div>
    </section>

    {/* Menu sections */}
    <section className="py-28 md:py-36">
      <div className="container-narrow space-y-28">
        {sections.map((s, i) => (
          <Reveal key={s.title}>
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="eyebrow mb-6">{s.eyebrow}</div>
                <h2 className="display-lg text-balance">{s.title}</h2>
                {s.note && <p className="mt-6 text-sm text-muted-foreground italic max-w-xs">{s.note}</p>}
              </div>
              <div className="lg:col-span-8">
                <ul className="divide-y divide-border/70">
                  {s.items.map(([name, desc, price]) => (
                    <li key={name} className="py-6 flex items-baseline gap-6 group">
                      <div className="flex-1">
                        <h3 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors">{name}</h3>
                        <p className="text-sm text-muted-foreground mt-1.5">{desc}</p>
                      </div>
                      <span className="font-display text-2xl text-accent">£{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Drinks block — burger as faded background */}
    <section className="relative py-28 md:py-36 border-t border-border/60 overflow-hidden">
      {/* Burger background, faded out toward the bottom */}
      <div aria-hidden className="absolute inset-0 z-0">
        <img src={gHamburger} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.75) 45%, hsl(var(--background) / 0.98) 85%, hsl(var(--background)) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 container-wide">
        <Reveal>
          <div className="eyebrow mb-6">The Bar</div>
          <h2 className="display-lg max-w-3xl text-balance">A cellar curated with <span className="italic-accent">care.</span></h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/70 border border-border/70">
          {drinks.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <div className="bg-background p-10 h-full hover:bg-card transition-colors">
                <div className="text-accent text-[0.65rem] tracking-[0.3em] uppercase mb-5">0{i + 1}</div>
                <h3 className="font-display text-3xl mb-3">{d.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Visual strip */}
    <section className="grid grid-cols-2 md:grid-cols-4">
      {[gRoast, gWine, gDraught, gBurger].map((src, i) => (
        <div key={i} className="aspect-square overflow-hidden group">
          <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110" />
        </div>
      ))}
    </section>
  </SiteLayout>
);

export default FoodAndDrink;
