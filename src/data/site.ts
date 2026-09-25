export const site = {
  name: "Giuseppe Aceto",
  title: "Giuseppe Aceto — Designer & AI Ethicist",
  description:
    "Designer, philosopher, and AI ethicist. Founder of WELT FORM and Relatronica — speculative design, verification infrastructure, sound, and free software for responsible AI.",
  email: "iam.giuseppeaceto@gmail.com",
  location: "Milan / Zurich",
  tagline: "I don't trust machines that can't be contested.",
  links: {
    github: "https://github.com/giuseppeaceto",
    relatronica: "https://relatronica.com",
    weltform: "https://www.weltform.com",
    soundcloud: "https://soundcloud.com/giuseppe-aceto",
    substack: "https://giuseppeaceto.substack.com",
    toolkit:
      "https://cds.cern.ch/record/2930771/files/CERN-OPEN-2025-003.pdf",
  },
  about: {
    title: "Not a bolted-on conscience",
    lead: "Most AI ethics arrives too late: a slide deck after the model ships. I work earlier — on the infrastructures, instruments, and stories that decide what gets to count as true.",
    paragraphs: [
      "At CERN I published open tools for thinking critically about technology. With Relatronica I run a lab for speculative and critical design. With WELT FORM I build verification so machine outputs can be challenged before they harden into decisions.",
      "Sound is not a hobby bolted onto the CV. Granular instruments, performance with dance and computation, field recording — ways to ask how humans and machines listen to each other, and who gets to set the tempo.",
      "Free software is a precondition, not a vibe: if you cannot audit the system, you cannot hold it accountable. I work with labs, institutions, and communities that want responsibility designed in.",
    ],
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
  essay: {
    slug: "confidence-is-not-verification",
    title: "Confidence is not verification",
    date: "2025",
    dek: "A model that is sure of itself is not the same as a claim that has been tested. Ethics starts where certainty can be refused.",
    href: "/writing/confidence-is-not-verification",
    body: [
      "We have trained a generation of systems to speak with confidence. The interface rewards fluency. The demo rewards speed. The dashboard rewards a green number. Somewhere in that chain, a quiet substitution happens: certainty stands in for truth.",
      "Verification is slower, uglier, and less photogenic. It asks who can contest an output, on what grounds, with what evidence, and before which decision locks in. Confidence lives inside the model. Verification lives in the social world around it — in logs, rights to challenge, and rooms where a refusal still counts.",
      "This is why I care about infrastructure more than slogans. A principle on a slide cannot interrupt a pipeline. A contestation layer can. Free software matters here for the same reason: opacity is not a neutral default; it is a political choice about who gets to look.",
      "Philosophers hired into product teams are not useless — but they are not enough. If the only job of critique is to bless a roadmap already funded, then philosophy has been paid to arrive late. The interesting work is earlier: shaping what can be claimed, what must be shown, and what remains undecided.",
      "Desire enters the same way. Platforms do not merely serve wants; they author them. \"Debug dei Desideri\" is my name for that work — reading addiction as architecture, and sovereignty as the capacity to refuse a rewrite of what you want.",
      "I design, write, build instruments, and run labs because no single register is enough. Ethics that cannot be practiced is décor. Practice that cannot be contested is just another confident machine.",
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

/** Institutional & infrastructure work — credibility, not the whole self. */
export const work: WorkItem[] = [
  {
    year: "ongoing",
    title: "WELT FORM",
    role: "Founder · Verification infrastructure",
    summary:
      "Tools to verify what machines produce before it becomes a decision. Confidence is not verification — Dubitor is a structured layer for contesting AI-backed choices.",
    href: "https://www.weltform.com",
  },
  {
    year: "2025",
    title: "Toolbox for Ethical Futures",
    role: "Author · CERN OPEN",
    summary:
      "Exercises, frameworks, and provocations for thinking critically about technology — open, free, meant to be adapted rather than admired.",
    href: "https://cds.cern.ch/record/2930771",
  },
  {
    year: "2025",
    title: "Responsible by Design",
    role: "Talk · SFSCON",
    summary:
      "Why AI ethics must be embedded from the start — and how free software grounds accountability, auditability, and community governance.",
    href: "https://www.sfscon.it/talks/responsible-by-design/",
  },
  {
    year: "2024",
    title: "Relatronica",
    role: "Founder · Speculative design lab",
    summary:
      "An experimental lab on human–machine relations: speculative design, public engagement, and collaboration across disciplines that usually do not share a room.",
    href: "https://relatronica.com",
  },
];

/** Sound, instruments, performance — the odd half of the practice. */
export const sound: WorkItem[] = [
  {
    year: "ongoing",
    title: "Topographic Granulator",
    role: "Instrument · Sound design",
    summary:
      "A granular instrument that treats terrain as synthesis material — building tools as a way to think through machine listening.",
    href: "https://github.com/giuseppeaceto/Topographic-Granulator",
  },
  {
    year: "2019",
    title: "Enfant Prodige / Vector",
    role: "Performance · Sound & AI",
    summary:
      "Live dialogue between dance, computation, and AI — human–machine interaction heard and felt in the room, not only argued on a panel.",
    href: "https://www.behance.net/gallery/87454449/Vector",
  },
  {
    year: "ongoing",
    title: "Listening practice",
    role: "Production · Field recording",
    summary:
      "Composition and field recording as research: how systems shape attention, and how sound can make those shapes audible.",
    href: "https://soundcloud.com/giuseppe-aceto",
  },
];
