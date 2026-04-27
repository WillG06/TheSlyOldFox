import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

import g1 from "@/assets/gallery/Bar.jpg";
import g2 from "@/assets/gallery/bar2.jpg";
import g3 from "@/assets/gallery/bar3.jpg";
import g4 from "@/assets/gallery/billing.jpg";
import g5 from "@/assets/gallery/breakfast.jpeg";
import g6 from "@/assets/gallery/building.jpg";
import g7 from "@/assets/gallery/burger.png";
import g8 from "@/assets/gallery/draught.jpg";
import g9 from "@/assets/gallery/drinks.jpg";
import g10 from "@/assets/gallery/food.jpg";
import g11 from "@/assets/gallery/food2.jpg";
import g12 from "@/assets/gallery/food3.jpg";
import g13 from "@/assets/gallery/foodNice.jpg";
import g14 from "@/assets/gallery/fox.jpg";
import g15 from "@/assets/gallery/glasses.jpg";
import g16 from "@/assets/gallery/hamburger.png";
import g17 from "@/assets/gallery/mainBAR.jpg";
import g18 from "@/assets/gallery/Pub.jpeg";
import g19 from "@/assets/gallery/roast.jpg";
import g20 from "@/assets/gallery/staff.jpg";
import g21 from "@/assets/gallery/wine.jpg";

// Each item: src, column-start (1-12), column-span, row-span, slight horizontal nudge for organic feel
type Tile = { src: string; col: string; span: string; row: string; offset?: string };
const tiles: Tile[] = [
  { src: g17, col: "md:col-start-1", span: "md:col-span-5", row: "md:row-span-2" },
  { src: g13, col: "md:col-start-7", span: "md:col-span-3", row: "md:row-span-2", offset: "md:translate-y-12" },
  { src: g6,  col: "md:col-start-10", span: "md:col-span-3", row: "md:row-span-1" },
  { src: g8,  col: "md:col-start-2", span: "md:col-span-3", row: "md:row-span-2", offset: "md:-translate-y-6" },
  { src: g19, col: "md:col-start-6", span: "md:col-span-4", row: "md:row-span-2", offset: "md:translate-y-20" },
  { src: g21, col: "md:col-start-10", span: "md:col-span-3", row: "md:row-span-2" },
  { src: g2,  col: "md:col-start-1", span: "md:col-span-4", row: "md:row-span-1", offset: "md:translate-y-8" },
  { src: g11, col: "md:col-start-5", span: "md:col-span-4", row: "md:row-span-2" },
  { src: g15, col: "md:col-start-9", span: "md:col-span-3", row: "md:row-span-1", offset: "md:-translate-y-4" },
  { src: g3,  col: "md:col-start-2", span: "md:col-span-3", row: "md:row-span-2", offset: "md:translate-y-10" },
  { src: g14, col: "md:col-start-6", span: "md:col-span-2", row: "md:row-span-1" },
  { src: g12, col: "md:col-start-8", span: "md:col-span-5", row: "md:row-span-2", offset: "md:translate-y-6" },
  { src: g9,  col: "md:col-start-1", span: "md:col-span-3", row: "md:row-span-1" },
  { src: g7,  col: "md:col-start-4", span: "md:col-span-4", row: "md:row-span-2", offset: "md:-translate-y-4" },
  { src: g10, col: "md:col-start-9", span: "md:col-span-4", row: "md:row-span-2", offset: "md:translate-y-12" },
  { src: g1,  col: "md:col-start-2", span: "md:col-span-4", row: "md:row-span-2" },
  { src: g20, col: "md:col-start-7", span: "md:col-span-3", row: "md:row-span-1", offset: "md:translate-y-6" },
  { src: g4,  col: "md:col-start-10", span: "md:col-span-3", row: "md:row-span-2", offset: "md:-translate-y-2" },
  { src: g5,  col: "md:col-start-1", span: "md:col-span-4", row: "md:row-span-1" },
  { src: g16, col: "md:col-start-5", span: "md:col-span-3", row: "md:row-span-2", offset: "md:translate-y-10" },
  { src: g18, col: "md:col-start-9", span: "md:col-span-4", row: "md:row-span-2" },
];

const Gallery = () => (
  <SiteLayout>
    <section className="relative pt-40 md:pt-48 pb-20">
      <div className="container-wide">
        <Reveal>
          <div className="eyebrow mb-8">Gallery</div>
          <h1 className="display-xl text-balance max-w-5xl">
            A pub worth <span className="italic-accent">photographing.</span>
          </h1>
          <p className="mt-8 max-w-xl text-foreground/75">
            Real moments from inside The Sly Old Fox — the bar, the kitchen and the people who make it ours.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-40">
      <div className="px-3 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[160px] gap-4 md:gap-6">
          {tiles.map((t, i) => (
            <ScatterTile key={i} tile={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

function ScatterTile({ tile, index }: { tile: Tile; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Alternate diagonal direction: even tiles drift toward top-left, odd toward bottom-right
  const speed = 100 + (index % 5) * 30;
  const toTopLeft = index % 2 === 0;
  const y = useTransform(scrollYProgress, [0, 1], toTopLeft ? [speed, -speed] : [-speed, speed]);
  const x = useTransform(scrollYProgress, [0, 1], toTopLeft ? [speed * 0.6, -speed * 0.6] : [-speed * 0.6, speed * 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, opacity, scale }}
      className={`relative overflow-hidden group h-full col-span-2 row-span-1 ${tile.col} ${tile.span} ${tile.row} ${tile.offset || ""}`}
    >
      <img
        src={tile.src}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
    </motion.div>
  );
}

export default Gallery;
