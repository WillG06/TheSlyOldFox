import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StickyReveal from "@/components/StickyReveal";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import ParallaxDivider from "@/components/ParallaxDivider";
import Contact from "@/components/Contact";
import SiteMap from "@/components/Map";
import Footer from "@/components/Footer";

/*
  HOMEPAGE IMAGE ASSIGNMENTS
  ─────────────────────────────────────────────────────────────────
  Hero                 → hero.jpg     (drop file in /public/images/)
  StickyReveal 1       → hq-bar-1.jpg (copper bar, sunflowers, pendant lights)
  StickyReveal 2       → hq-bar-2.jpg (bar taps + Sly Old Fox sign)
  Parallax quote strip → draught.jpg  (beer taps close-up)
  ─────────────────────────────────────────────────────────────────
*/
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      {/* New high-quality bar photo — copper counter, sunflowers, pendant lights */}
      <StickyReveal
        image="/images/hq-bar-1.jpg"
        alt="The Sly Old Fox — copper bar with sunflowers"
        objectPosition="center 45%"
      >
        <About />
      </StickyReveal>

      <Gallery />

      {/* Second new bar photo — taps and Sly Old Fox branding sign */}
      <StickyReveal
        image="/images/hq-bar-2.jpg"
        alt="The Sly Old Fox — bar taps and branding"
        objectPosition="center 40%"
      >
        <Events />
      </StickyReveal>

      <ParallaxDivider
        image="/images/draught.jpg"
        alt="Cask ales on draught at The Sly Old Fox"
        objectPosition="center 50%"
        quote="Absolutely beautiful food. You can tell every meal is freshly made to order."
        attribution="James K · Google Review"
        overlayStrength={0.45}
      />

      <Contact />
      <SiteMap />
      <Footer />
    </main>
  );
}
