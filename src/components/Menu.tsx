"use client";

import { useState, useEffect, useRef } from "react";

type MenuItem = { name: string; desc: string; price: string; tags: string[] };
type MenuData = Record<string, MenuItem[]>;

const MENU: MenuData = {
  "Small Plates": [
    { name: "BBQ Chicken Wings",      desc: "Crispy wings in smoky BBQ sauce",                       price: "£10.50", tags: ["GF"] },
    { name: "Spicy Chicken Wings",    desc: "Fiery buffalo-style wings",                              price: "£10.50", tags: ["GF"] },
    { name: "Falafel Balls",          desc: "Crisp falafel served with mint yoghurt",                 price: "£7.95",  tags: ["V","VE"] },
    { name: "Lamb Koftas",            desc: "Spiced koftas with cooling mint yoghurt",                price: "£7.95",  tags: ["GF"] },
    { name: "Crispy Whitebait",       desc: "Lightly dusted, served with garlic mayo",               price: "£6.95",  tags: [] },
    { name: "Cod Goujons",            desc: "Golden fried cod strips with tartare sauce",             price: "£8.95",  tags: [] },
    { name: "Halloumi Fries",         desc: "Crispy halloumi with sweet chilli sauce",               price: "£8.95",  tags: ["V"] },
    { name: "Tempura Prawns",         desc: "Light tempura batter, sweet chilli dip",                price: "£10.95", tags: [] },
  ],
  "Mains": [
    { name: "Battered Cod & Chips",   desc: "Classic beer-battered cod, mushy peas, tartare, lemon", price: "£12.95", tags: [] },
    { name: "Whitby Scampi",          desc: "Breaded scampi, chips, garden peas, lemon",             price: "£12.95", tags: [] },
    { name: "Steak & Ale Pie",        desc: "Slow-cooked pie, chips or mash, buttered veg, gravy",   price: "£12.95", tags: [] },
    { name: "Hunters Chicken",        desc: "Chicken, back bacon, cheese, BBQ sauce, chips & slaw",  price: "£11.95", tags: ["GF"] },
    { name: "Mushroom Rigatoni",      desc: "Creamy wild mushroom & spinach pasta",                  price: "£10.95", tags: ["V"] },
  ],
  "Grills": [
    { name: "8oz Sirloin Steak",      desc: "Grilled to order, herb butter, chips or mash, salad",   price: "£18.95", tags: ["GF"] },
    { name: "Butterflied Chicken",    desc: "Grilled tomato, mushrooms, chips or mash, herb butter",  price: "£13.95", tags: [] },
    { name: "Gammon Egg & Chips",     desc: "6oz gammon, fried egg, watercress shallot salad",       price: "£11.50", tags: ["GF"] },
  ],
  "Burgers": [
    { name: "Classic Beef Burger",    desc: "6oz patty, gem lettuce, beef tomato, fox sauce, slaw",   price: "£11.95", tags: [] },
    { name: "Fried Chicken Burger",   desc: "Crispy chicken, gem lettuce, tomato, fox sauce, slaw",  price: "£11.95", tags: [] },
    { name: "Kidney Bean Burger",     desc: "Plant-based patty, gem lettuce, tomato, fox sauce",     price: "£9.95",  tags: ["V","VE"] },
  ],
  "Pizzas": [
    { name: "Margarita",              desc: "Tomatoes, cheddar, mozzarella, herb oil",               price: "£9.75",  tags: ["V"] },
    { name: "Hawaiian",               desc: "Ham & pineapple on a classic tomato base",              price: "£10.95", tags: [] },
    { name: "Meat Feast",             desc: "Pepperoni, chicken, chilli beef and bacon",             price: "£11.25", tags: [] },
    { name: "Double Pepperoni",       desc: "Double pepperoni with extra mozzarella",                price: "£11.25", tags: [] },
    { name: "BBQ Chicken",            desc: "Chicken, bacon, red onion and BBQ sauce",               price: "£10.95", tags: [] },
    { name: "Florentine",             desc: "Spinach, cherry tomatoes, black olives, egg, garlic",   price: "£10.95", tags: ["V"] },
    { name: "Four Cheese",            desc: "Parmesan, cheddar, goats cheese, mozzarella",           price: "£10.50", tags: ["V"] },
  ],
  "Sandwiches": [
    { name: "Tuna Mayo & Cucumber",   desc: "Classic tuna mayo, dressed leaves, chips",              price: "£7.95",  tags: [] },
    { name: "Cheese & Pickle",        desc: "Mature cheddar, tangy pickle, dressed leaves, chips",   price: "£7.50",  tags: ["V"] },
    { name: "Chicken & Bacon Mayo",   desc: "Tender chicken, smoked bacon mayo, leaves, chips",      price: "£7.95",  tags: [] },
    { name: "Fried Chicken & Chilli", desc: "Crispy fried chicken, sweet chilli, leaves, chips",    price: "£7.95",  tags: [] },
    { name: "Mediterranean Veg",      desc: "Roasted veg & halloumi, dressed leaves, chips",        price: "£7.95",  tags: ["V"] },
  ],
};

const TAG_STYLE: Record<string, string> = {
  V:  "text-sage   border-sage/40",
  VE: "text-sage-light border-sage/50",
  GF: "text-copper-light border-copper/40",
};
const TAG_FULL: Record<string, string> = {
  V: "Vegetarian", VE: "Vegan", GF: "Gluten Free",
};

export default function Menu() {
  const [active, setActive] = useState("Small Plates");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement)
              .querySelectorAll<HTMLElement>(".reveal")
              .forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 70));
          }
        });
      },
      { threshold: 0.06 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const items = MENU[active] ?? [];

  return (
    <section id="menu" ref={ref} className="bg-void py-28 md:py-44">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 xl:px-16">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 md:mb-20">
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <span className="divider" />
              <span className="section-label">The Menu</span>
            </div>
            <h2
              className="reveal font-serif text-cream font-normal leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}
            >
              Seasonal dishes,{" "}
              <em className="text-copper">made fresh</em> daily
            </h2>
          </div>
          <div className="lg:flex lg:items-end">
            <p className="reveal delay-1 font-sans font-light text-cream-dim leading-[1.75] text-base">
              Locally sourced produce. British classics alongside world-inspired
              dishes. All made to order — never microwaved. Dietary requirements?
              Just ask your server or call ahead.
            </p>
          </div>
        </div>

        {/* ── Category tabs ────────────────────────────────── */}
        <div className="reveal flex overflow-x-auto no-scrollbar border-b border-cream/8 mb-14 -mx-6 px-6 md:mx-0 md:px-0">
          {Object.keys(MENU).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                flex-none font-sans text-[0.7rem] uppercase tracking-[0.14em] px-5 pb-4 pt-1 border-b-2
                transition-all duration-300 whitespace-nowrap
                ${active === cat
                  ? "text-copper border-copper"
                  : "text-muted border-transparent hover:text-cream-dim"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Items grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {items.map((item) => (
            <div key={item.name} className="menu-row py-5 pr-4 cursor-default">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <h3 className="font-sans text-cream font-medium text-[0.95rem]">
                      {item.name}
                    </h3>
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`font-sans text-[0.56rem] tracking-wide border px-1.5 py-0.5 ${TAG_STYLE[t]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="font-sans font-light text-muted text-[0.85rem] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="font-serif text-copper text-lg font-normal whitespace-nowrap flex-none">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Key ──────────────────────────────────────────── */}
        <div className="reveal mt-10 pt-8 border-t border-cream/8 flex flex-wrap items-center gap-6">
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.18em] text-muted">
            Dietary info:
          </span>
          {Object.entries(TAG_STYLE).map(([t, cls]) => (
            <div key={t} className="flex items-center gap-2">
              <span className={`font-sans text-[0.56rem] border px-1.5 py-0.5 ${cls}`}>{t}</span>
              <span className="font-sans text-[0.68rem] text-muted">{TAG_FULL[t]}</span>
            </div>
          ))}
          <span className="font-sans text-[0.62rem] text-muted ml-auto hidden md:block">
            Full allergen info available on request
          </span>
        </div>
      </div>
    </section>
  );
}
