export const site = {
  name: "Giuseppe Aceto",
  title: "Giuseppe Aceto — Designer & AI Ethicist",
  description:
    "Designer, philosopher, and AI ethicist working at the intersection of speculative design, sound, free software, and responsible AI. Formerly at CERN; founder of Relatronica.",
  email: "iam.giuseppeaceto@gmail.com",
  location: "Milan / Zurich",
  tagline: "Ethics as practice, not afterthought.",
  links: {
    github: "https://github.com/giuseppeaceto",
    relatronica: "https://relatronica.com",
    soundcloud: "https://soundcloud.com/giuseppe-aceto",
    substack: "https://giuseppeaceto.substack.com",
    toolkit:
      "https://cds.cern.ch/record/2930771/files/CERN-OPEN-2025-003.pdf",
  },
  writing: {
    title: "Debug dei Desideri",
    summary:
      "A newsletter on digital sovereignty — who governs desire today, and who has the power to rewrite it.",
    href: "https://giuseppeaceto.substack.com",
    recent: [
      {
        title: "La filosofia in busta paga",
        note: "When Silicon Valley hires philosophers — and whether they matter.",
      },
      {
        title: "Make people addicted",
        note: "Addiction as architecture.",
      },
    ],
  },
} as const;

export type WorkItem = {
  year: string;
  title: string;
  role: string;
  summary: string;
  href?: string;
};

export const work: WorkItem[] = [
  {
    year: "2025",
    title: "Toolbox for Ethical Futures",
    role: "Author · CERN OPEN",
    summary:
      "A practical toolkit of exercises, frameworks, and provocations for thinking critically about technology and its ethical implications — open and free to adapt.",
    href: "https://cds.cern.ch/record/2930771",
  },
  {
    year: "2025",
    title: "Responsible by Design",
    role: "Talk · SFSCON",
    summary:
      "Why AI ethics must be embedded from the start — and how free software principles can ground accountability, auditability, and community governance.",
    href: "https://www.sfscon.it/talks/responsible-by-design/",
  },
  {
    year: "2025",
    title: "AI Ethics — Aligning Technology with Human Values",
    role: "Workshop · CERN",
    summary:
      "An informal, hands-on workshop on frameworks, explainability, fairness, and real-world ethical dilemmas in AI systems.",
    href: "https://indico.cern.ch/event/1542453/",
  },
  {
    year: "2024",
    title: "Relatronica",
    role: "Founder · Speculative design lab",
    summary:
      "An experimental initiative exploring human–machine relations through speculative and critical design, public engagement, and interdisciplinary collaboration.",
    href: "https://relatronica.com",
  },
  {
    year: "ongoing",
    title: "Topographic Granulator",
    role: "Instrument · Sound design",
    summary:
      "An experimental granular instrument that treats terrain and topography as material for synthesis — building tools as a way to think through machine listening.",
    href: "https://github.com/giuseppeaceto/Topographic-Granulator",
  },
  {
    year: "2019",
    title: "Enfant Prodige / Vector",
    role: "Performance · Sound & AI",
    summary:
      "A live sound performance exploring human–machine interaction through real-time dialogue between dance, computation, and artificial intelligence — under the Call Me Vector project.",
    href: "https://www.behance.net/gallery/87454449/Vector",
  },
];
