import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initApproachTheses(root: ParentNode = document) {
  const theses = root.querySelectorAll<HTMLElement>("[data-thesis]");
  if (!theses.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    theses.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  theses.forEach((thesis) => {
    gsap.from(thesis, {
      autoAlpha: 0,
      y: 36,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: thesis,
        start: "top 85%",
        once: true,
      },
    });

    const statement = thesis.querySelector(".thesis__statement");
    if (statement) {
      gsap.from(statement, {
        autoAlpha: 0,
        y: 16,
        duration: 0.7,
        delay: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: thesis,
          start: "top 82%",
          once: true,
        },
      });
    }
  });
}
