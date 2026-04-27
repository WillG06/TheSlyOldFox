"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Item = { name: string; desc: string; price: string; tags: string[] };
type Category = { label: string; items: Item[] };

const FOOD: Category[] = [
  { label: "Small Plates", items: [
    { name: "BBQ Chicken Wings",     desc: "Smoky BBQ sauce",                          price: "£10.50", tags: ["GF"] },
    { name: "Spicy Chicken Wings",   desc: "Buffalo-style hot sauce",                  price: "£10.50", tags: ["GF"] },
    { name: "Falafel Balls",         desc: "Served with mint yoghurt",                  price: "£7.95",  tags: ["V","VE"] },
    { name: "Lamb Koftas",           desc: "Spiced, served with mint yoghurt",          price: "£7.95",  tags: ["GF"] },
    { name: "Crispy Whitebait",      desc: "With garlic mayo",                          price: "£6.95",  tags: [] },
    { name: "Cod Goujons",           desc: "With tartare sauce",                        price: "£8.95",  tags: [] },
    { name: "Halloumi Fries",        desc: "With sweet chilli sauce",                   price: "£8.95",  tags: ["V"] },
    { name: "Tempura Prawns",        desc: "With sweet chilli dip",                     price: "£10.95", tags: [] },
  ]},
  { label: "Mains", items: [
    { name: "Battered Cod & Chips",  desc: "Mushy peas, tartare sauce, lemon",         price: "£12.95", tags: [] },
    { name: "Whitby Scampi",         desc: "Chips, garden peas, lemon",                price: "£12.95", tags: [] },
    { name: "Steak & Ale Pie",       desc: "Chips or mash, buttered veg, gravy",       price: "£12.95", tags: [] },
    { name: "Hunters Chicken",       desc: "Bacon, cheese, BBQ sauce, chips & slaw",   price: "£11.95", tags: ["GF"] },
    { name: "Mushroom Rigatoni",     desc: "Creamy wild mushroom & spinach",            price: "£10.95", tags: ["V"] },
  ]},
  { label: "Grills", items: [
    { name: "8oz Sirloin Steak",     desc: "Herb butter, chips or mash, watercress",   price: "£18.95", tags: ["GF"] },
    { name: "Butterflied Chicken",   desc: "Grilled tomato, mushrooms, herb butter",    price: "£13.95", tags: [] },
    { name: "Gammon Egg & Chips",    desc: "6oz gammon, fried egg, watercress",         price: "£11.50", tags: ["GF"] },
  ]},
  { label: "Burgers", items: [
    { name: "Classic Beef Burger",   desc: "6oz patty, gem lettuce, fox sauce, slaw",  price: "£11.95", tags: [] },
    { name: "Fried Chicken Burger",  desc: "Crispy chicken, gem lettuce, fox sauce",   price: "£11.95", tags: [] },
    { name: "Kidney Bean Burger",    desc: "Plant-based, gem lettuce, fox sauce",       price: "£9.95",  tags: ["V","VE"] },
  ]},
  { label: "Pizzas", items: [
    { name: "Margarita",             desc: "Tomatoes, cheddar, mozzarella, herb oil",  price: "£9.75",  tags: ["V"] },
    { name: "Hawaiian",              desc: "Ham & pineapple",                           price: "£10.95", tags: [] },
    { name: "Meat Feast",            desc: "Pepperoni, chicken, chilli beef, bacon",    price: "£11.25", tags: [] },
    { name: "Double Pepperoni",      desc: "Extra mozzarella",                         price: "£11.25", tags: [] },
    { name: "BBQ Chicken",           desc: "Chicken, bacon, red onion, BBQ sauce",     price: "£10.95", tags: [] },
    { name: "Florentine",            desc: "Spinach, cherry tomatoes, olives, egg",    price: "£10.95", tags: ["V"] },
    { name: "Four Cheese",           desc: "Parmesan, cheddar, goats cheese, mozz",    price: "£10.50", tags: ["V"] },
  ]},
  { label: "Sandwiches", items: [
    { name: "Tuna Mayo & Cucumber",  desc: "Dressed leaves, chips",                   price: "£7.95",  tags: [] },
    { name: "Cheese & Pickle",       desc: "Mature cheddar, dressed leaves, chips",   price: "£7.50",  tags: ["V"] },
    { name: "Chicken & Bacon Mayo",  desc: "Tender chicken, smoked bacon, chips",     price: "£7.95",  tags: [] },
    { name: "Fried Chicken & Chilli",desc: "Sweet chilli, dressed leaves, chips",     price: "£7.95",  tags: [] },
    { name: "Mediterranean Veg",     desc: "Roasted veg & halloumi, chips",           price: "£7.95",  tags: ["V"] },
  ]},
];

const DRINKS: Category[] = [
  { label: "Cask Ales", items: [
    { name: "Doom Bar",          desc: "Sharp's Brewery · Cornwall · 4.0% ABV",    price: "£5.50",       tags: [] },
    { name: "Tribute",           desc: "St Austell Brewery · Cornwall · 4.2% ABV", price: "£5.50",       tags: [] },
    { name: "Old Speckled Hen",  desc: "Morland Brewery · Suffolk · 5.0% ABV",     price: "£5.80",       tags: [] },
    { name: "Guest Ale",         desc: "Rotating seasonal — ask at the bar",        price: "From £5.20",  tags: [] },
  ]},
  { label: "Craft Gins", items: [
    { name: "Hendrick's",        desc: "Rose & cucumber · Scotland · 41.4%",       price: "£7.50",  tags: [] },
    { name: "Tanqueray 10",      desc: "Fresh citrus · Scotland · 47.3%",          price: "£7.50",  tags: [] },
    { name: "Monkey 47",         desc: "47 botanicals · Black Forest · 47%",       price: "£8.50",  tags: [] },
    { name: "Whitley Neill",     desc: "Multiple flavours · 43%",                  price: "£7.00",  tags: [] },
    { name: "Sipsmith",          desc: "London Dry · 41.6%",                       price: "£7.00",  tags: [] },
    { name: "Lakes Elderflower", desc: "English Lakes · 40%",                      price: "£7.50",  tags: [] },
    { name: "+ 11 more",         desc: "Ask your bartender for the full selection", price: "",       tags: [] },
  ]},
  { label: "Wines", items: [
    { name: "House White",       desc: "Pinot Grigio · Italy",                     price: "£5.50 / £21", tags: [] },
    { name: "House Rosé",        desc: "Provence · France",                        price: "£5.50 / £21", tags: [] },
    { name: "House Red",         desc: "Merlot · Chile",                           price: "£5.50 / £21", tags: [] },
    { name: "Sauvignon Blanc",   desc: "Marlborough · New Zealand",                price: "£6.50 / £25", tags: [] },
    { name: "Malbec",            desc: "Mendoza · Argentina",                      price: "£6.50 / £25", tags: [] },
    { name: "Prosecco",          desc: "Veneto · Italy · glass or bottle",         price: "£6.50 / £28", tags: [] },
  ]},
  { label: "Cocktails", items: [
    { name: "Fox's Old Fashioned",  desc: "Bulleit bourbon, orange bitters, sugar",   price: "£9.50", tags: [] },
    { name: "Hurst Street Sour",    desc: "Whisky, fresh lemon, egg white",           price: "£9.50", tags: [] },
    { name: "Gin Garden",           desc: "Hendrick's, elderflower, cucumber, tonic", price: "£9.00", tags: [] },
    { name: "Aperol Spritz",        desc: "Aperol, Prosecco, soda, orange",           price: "£8.50", tags: [] },
    { name: "Espresso Martini",     desc: "Vodka, Kahlúa, fresh espresso",            price: "£9.50", tags: [] },
    { name: "Virgin Fox",           desc: "Elderflower, cucumber, mint, soda",        price: "£5.00", tags: [] },
  ]},
  { label: "Soft & Hot", items: [
    { name: "Cold Brew Coffee",      desc: "Smooth, slow-steeped",          price: "£3.50", tags: [] },
    { name: "Flat White / Latte",    desc: "Full or oat milk",              price: "£3.50", tags: [] },
    { name: "English Breakfast Tea", desc: "Loose leaf, pot for one",      price: "£2.80", tags: [] },
    { name: "Soft Drinks",           desc: "Coke, Diet Coke, lemonade",    price: "£3.00", tags: [] },
    { name: "Fresh Juices",          desc: "Orange, apple, cranberry",     price: "£3.50", tags: [] },
  ]},
];

const TAG_CLS: Record<string,string> = {
  V: "text-mist border-mist/40", VE: "text-mist border-mist/50", GF: "text-hazel border-hazel/40",
};

function MenuSection({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState(categories[0].label);
  const items = categories.find(c => c.label === active)?.items ?? [];
  return (
    <div>
      <div className="flex overflow-x-auto no-scrollbar border-b border-cream/7 mb-12 -mx-6 px-6 md:mx-0 md:px-0">
        {categories.map(c => (
          <button key={c.label} onClick={() => setActive(c.label)}
            className={`flex-none font-sans font-normal text-[0.65rem] tracking-[0.18em] uppercase px-5 pb-4 pt-1 border-b-[1.5px] transition-all duration-300 whitespace-nowrap ${
              active === c.label ? "text-hazel border-hazel" : "text-slate border-transparent hover:text-cream-dim"}`}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {items.map(item => (
          <div key={item.name} className="menu-row">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <span className="font-sans text-cream font-normal" style={{ fontSize: "0.88rem" }}>{item.name}</span>
                  {item.tags.map(t => (
                    <span key={t} className={`font-sans text-[0.5rem] tracking-wide border px-1.5 py-0.5 ${TAG_CLS[t] ?? ""}`}>{t}</span>
                  ))}
                </div>
                <p className="font-sans font-light text-slate leading-relaxed" style={{ fontSize: "0.78rem" }}>{item.desc}</p>
              </div>
              {item.price && <span className="font-serif text-hazel text-lg font-normal whitespace-nowrap flex-none">{item.price}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).querySelectorAll<HTMLElement>(".reveal,.word-reveal")
            .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll<HTMLElement>("[data-s]").forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Navigation />

      {/* Menu page hero — food close-up, NOT an interior bar shot */}
      <div className="relative w-full flex items-end overflow-hidden" style={{ height: "52vh", minHeight: 380 }}>
        <div className="absolute inset-0">
          {/*
            MENU HERO — A plated food shot; warm, minimal, appetising
            Swap: replace with /images/your-food-hero.jpg
          */}
          <div className="absolute inset-0 bg-cover bg-center animate-ken-burns"
            style={{ backgroundImage: `url('/images/glasses.jpg')`,  objectPosition: "20% 10%" }} />
          <div className="absolute inset-0 bg-ink/62" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-10 xl:px-16 pb-14">
          <div className="reveal visible flex items-center gap-3 mb-5">
            <span className="rule" /><span className="section-label">The Menu</span>
          </div>
          <h1 className="font-serif text-cream leading-none tracking-tight" style={{ fontSize: "clamp(3rem,8vw,7rem)" }}>
            Food <span className="text-hazel-gradient italic">&amp; Drink</span>
          </h1>
        </div>
      </div>

      {/* Food */}
      <section data-s className="bg-navy py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-3">
              <div className="reveal flex items-center gap-3 mb-6"><span className="rule" /><span className="section-label">The Kitchen</span></div>
              <div className="word-reveal font-serif text-cream leading-tight tracking-tight" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
                {"Seasonal dishes made fresh daily".split(" ").map((w, i) => (
                  <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                    <span className={["fresh","daily"].includes(w) ? "text-hazel-gradient italic" : ""}>{w}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-end">
              <p className="reveal d2 font-sans font-light text-slate leading-relaxed" style={{ fontSize: "var(--body-size)" }}>
                All made to order. Locally sourced where possible.
              </p>
            </div>
          </div>
          <MenuSection categories={FOOD} />
        </div>
      </section>

      {/* Drinks divider — cocktail / spirits image, unique to this page */}
      <div className="relative w-full overflow-hidden" style={{ height: 200 }}>
        {/*
          DRINKS DIVIDER — Spirits/cocktail image, different from food hero above
          Swap: replace with /images/your-cocktail.jpg
        */}
        <img
          src="/images/bar3.jpg"
          alt="Cocktails at The Sly Old Fox"
          className="w-full h-full object-cover"
          style={{ objectPosition: "40% 50%" }}
        />
        <div className="absolute inset-0 bg-ink/68" />
        
      </div>

      {/* Drinks */}
      <section data-s className="bg-ink py-24 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-3">
              <div className="reveal flex items-center gap-3 mb-6"><span className="rule" /><span className="section-label">The Bar</span></div>
              <div className="word-reveal font-serif text-cream leading-tight tracking-tight" style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)" }}>
                {"Fine ales, craft gins and cocktails".split(" ").map((w, i) => (
                  <span key={i} className="word" style={{ marginRight: "0.22em" }}>
                    <span className={["craft","gins"].includes(w) ? "text-hazel-gradient italic" : ""}>{w}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-end">
              <p className="reveal d2 font-sans font-light text-slate leading-relaxed" style={{ fontSize: "var(--body-size)" }}>
                17+ hand-selected gins. Rotating guest ale. Seasonal cocktails.
              </p>
            </div>
          </div>
          <MenuSection categories={DRINKS} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
