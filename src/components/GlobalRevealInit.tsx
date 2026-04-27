"use client";

import { useEffect } from "react";

/**
 * GlobalRevealInit
 * ─────────────────
 * Attaches a single IntersectionObserver at the document level that watches
 * ALL .reveal elements and adds the "visible" class when they enter the
 * viewport. Mounted once in the root layout via <GlobalRevealInit />.
 *
 * Individual section components also set up their own observers for
 * fine-grained delay control — this acts as a global fallback.
 */
export default function GlobalRevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all .reveal elements that aren't already visible
    document
      .querySelectorAll<HTMLElement>(".reveal:not(.visible)")
      .forEach((el) => io.observe(el));

    // Re-query after a tick in case components mount late
    const t = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.visible)")
        .forEach((el) => io.observe(el));
    }, 200);

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return null;
}
