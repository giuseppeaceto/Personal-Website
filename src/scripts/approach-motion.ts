import gsap from "gsap";

export function initApproachChart(root: ParentNode = document) {
  const chart = root.querySelector<HTMLElement>("[data-approach-chart]");
  if (!chart) return;

  const tabs = [
    ...chart.querySelectorAll<HTMLButtonElement>("[data-phase-tab]"),
  ];
  const panels = [
    ...chart.querySelectorAll<HTMLElement>("[data-phase-panel]"),
  ];
  if (!tabs.length || tabs.length !== panels.length) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const select = (index: number) => {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach((panel, i) => {
      const active = i === index;
      gsap.killTweensOf(panel);
      panel.hidden = !active;
      if (!active) {
        gsap.set(panel, { clearProps: "opacity,visibility,transform" });
        return;
      }
      if (!reduceMotion) {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
        );
      }
    });
  };

  // Ensure only first is focusable in tablist
  tabs.forEach((tab, i) => {
    tab.tabIndex = i === 0 ? 0 : -1;
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Number(tab.dataset.phaseTab);
      if (Number.isFinite(index)) select(index);
    });

    tab.addEventListener("keydown", (event) => {
      const current = Number(tab.dataset.phaseTab);
      if (!Number.isFinite(current)) return;

      let next = current;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        next = (current + 1) % tabs.length;
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        next = (current - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        next = 0;
      } else if (event.key === "End") {
        next = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      select(next);
      tabs[next]?.focus();
    });
  });
}
