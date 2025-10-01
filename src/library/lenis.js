import Lenis from "@studio-freight/lenis";

let lenis = null;
let rafId = null;

export function initLenis(options = {}) {
  if (lenis) return lenis; // دوباره initialize نشه

  lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1.2,
    smoothTouch: true,
    touchMultiplier: 2,
    infinite: false,
    ...options, // اگه خواستی override کنی
  });

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  // anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");

      if (targetId === "#" || targetId === "") {
        // ✅ بره بالای صفحه
        lenis.scrollTo(0);
      } else {
        // ✅ بره به سکشن مورد نظر
        lenis.scrollTo(targetId);
      }
    });
  });

  return lenis;
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    cancelAnimationFrame(rafId);
    lenis = null;
  }
}

export function getLenis() {
  return lenis;
}
