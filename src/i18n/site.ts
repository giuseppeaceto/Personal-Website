import type { Locale } from "./locales";

export type WorkItem = {
  year: string;
  title: string;
  role: string;
  summary: string;
  href?: string;
};

export type SiteContent = {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  tagline: string;
  links: {
    github: string;
    relatronica: string;
    weltform: string;
    soundcloud: string;
    substack: string;
    toolkit: string;
  };
  about: {
    title: string;
    lead: string;
    paragraphs: readonly string[];
  };
  writing: {
    title: string;
    summary: string;
    href: string;
    recent: readonly { title: string; note: string }[];
  };
  essay: {
    slug: string;
    title: string;
    date: string;
    dek: string;
    body: readonly string[];
  };
  work: readonly WorkItem[];
  sound: readonly WorkItem[];
};

const sharedLinks = {
  github: "https://github.com/giuseppeaceto",
  relatronica: "https://relatronica.com",
  weltform: "https://www.weltform.com",
  soundcloud: "https://soundcloud.com/giuseppe-aceto",
  substack: "https://giuseppeaceto.substack.com",
  toolkit:
    "https://cds.cern.ch/record/2930771/files/CERN-OPEN-2025-003.pdf",
} as const;

const sites: Record<Locale, SiteContent> = {
  it: {
    name: "Giuseppe Aceto",
    title: "Giuseppe Aceto — Designer e filosofo",
    description:
      "Giuseppe Aceto, designer e filosofo tra Milano e Zurigo. Con WELT FORM e Relatronica lavora a strumenti, laboratori e scrittura perché conoscenza, creatività e pensiero critico restino capacità vive.",
    email: "iam.giuseppeaceto@gmail.com",
    location: "Milano / Zurigo",
    tagline: "Progetto perché resti possibile sapere, creare e pensare.",
    links: sharedLinks,
    about: {
      title: "Capacità da tenere vive",
      lead: "Il centro è lo sviluppo umano: conoscenza, creatività, pensiero critico. Li tratto come capacità da esercitare, non come valori da dichiarare. La tecnologia è il terreno su cui, oggi, quelle capacità vengono disegnate.",
      paragraphs: [
        "Al CERN ho pubblicato strumenti aperti per pensare la tecnologia in modo critico. Relatronica è un laboratorio di design speculativo. WELT FORM costruisce verifica, lì dove un sistema automatico rischia di chiudere una domanda prima che una persona possa farla.",
        "Il suono è l'altra metà della pratica. Strumenti granulari, performance con danza e computazione, field recording: conoscenza che passa dal corpo e dall'ascolto.",
        "Il software libero è la condizione pratica. Ciò che non si può leggere non si può capire, e ciò che non si può capire non si può fare proprio. Lavoro con laboratori, istituzioni e comunità che vogliono queste capacità dentro il progetto, fin dall'inizio.",
      ],
    },
    writing: {
      title: "Debug dei Desideri",
      summary:
        "Newsletter sulla sovranità digitale: desiderio, attenzione, la capacità di volere.",
      href: "https://giuseppeaceto.substack.com",
      recent: [
        {
          title: "La filosofia in busta paga",
          note: "La Silicon Valley assume filosofi. La domanda è per chi lavorino.",
        },
        {
          title: "Make people addicted",
          note: "La dipendenza è un progetto, non un incidente.",
        },
      ],
    },
    essay: {
      slug: "confidence-is-not-verification",
      title: "La confidenza non è verifica",
      date: "2025",
      dek: "Un modello sicuro di sé non ha ancora dimostrato nulla. L'etica comincia dove una certezza si può rifiutare.",
      body: [
        "Abbiamo allenato una generazione di sistemi a parlare con sicurezza. L'interfaccia premia la scorrevolezza, la demo la velocità, la dashboard un numero verde. In quella catena la certezza prende il posto della verità, e quasi nessuno se ne accorge.",
        "La verifica è lenta, e non fa bella figura. Chiede chi può contestare un output, su quali basi, con quali prove, e prima di quale decisione. La confidenza resta nel modello. La verifica sta fuori: nei registri, nel diritto di obiezione, nelle stanze in cui un rifiuto ha ancora peso.",
        "Per questo mi interessa l'infrastruttura. Un principio su una slide non ferma una pipeline. Uno strato di contestazione può farlo. Il software libero conta per la stessa ragione: l'opacità è una scelta su chi ha il diritto di guardare.",
        "I filosofi nei team di prodotto possono essere utili, e spesso arrivano quando la roadmap è già finanziata. Allora la critica benedice. Il lavoro che mi interessa è anteriore: stabilire cosa si può affermare, cosa va mostrato, cosa deve restare indeciso.",
        "Il desiderio segue la stessa logica. Le piattaforme non si limitano a servire ciò che vogliamo: lo scrivono. Debug dei Desideri è il nome di questa lettura — la dipendenza come architettura, la sovranità come capacità di rifiutare una riscrittura del proprio volere.",
        "Progetto, scrivo, costruisco strumenti e tengo dei laboratori perché un solo registro non basta. Un'etica impraticabile è arredo. Una pratica che nessuno può contestare è soltanto un'altra macchina sicura di sé.",
      ],
    },
    work: [
      {
        year: "in corso",
        title: "WELT FORM",
        role: "Fondatore · Verifica",
        summary:
          "Strumenti per verificare ciò che le macchine producono. Dubitor tiene aperta la contestazione: prove, dissenso, una scelta che non si chiude da sola.",
        href: "https://www.weltform.com",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "Autore · CERN OPEN",
        summary:
          "Esercizi e provocazioni per pensare la tecnologia insieme, in pubblico. Un documento aperto del CERN: un allenamento del pensiero critico, da prendere e da rifare.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        summary:
          "Intervento a SFSCON. La responsabilità entra nel primo disegno: il software libero tiene il sistema leggibile, così chi lo usa può capirlo e governarlo insieme.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Fondatore · Design speculativo",
        summary:
          "Laboratorio di design speculativo. Immaginazione e critica, in pubblico, tra discipline che il lavoro di prodotto tiene separate: un luogo per capire cosa la tecnologia fa alle capacità umane.",
        href: "https://relatronica.com",
      },
    ],
    sound: [
      {
        year: "in corso",
        title: "Topographic Granulator",
        role: "Strumento · Sintesi",
        summary:
          "Uno strumento granulare che tratta il territorio come materia di sintesi. Un modo di conoscere un luogo attraverso il suono, costruendo lo strumento con cui lo si fa.",
        href: "https://github.com/giuseppeaceto/Topographic-Granulator",
      },
      {
        year: "2019",
        title: "Enfant Prodige / Vector",
        role: "Performance · Suono e AI",
        summary:
          "Danza, computazione e intelligenza artificiale, dal vivo. Ciò che un corpo sa e ciò che un calcolo produce, nello stesso tempo.",
        href: "https://www.behance.net/gallery/87454449/Vector",
      },
      {
        year: "in corso",
        title: "Pratica di ascolto",
        role: "Produzione · Field recording",
        summary:
          "Composizione e field recording come ricerca sull'attenzione. Ascoltare è già una forma di conoscenza, e il suono la rende praticabile.",
        href: "https://soundcloud.com/giuseppe-aceto",
      },
    ],
  },
  en: {
    name: "Giuseppe Aceto",
    title: "Giuseppe Aceto — Designer and philosopher",
    description:
      "Giuseppe Aceto, designer and philosopher between Milan and Zurich. With WELT FORM and Relatronica he builds tools, laboratories, and writing so that knowledge, creativity, and critical thought stay living capacities.",
    email: "iam.giuseppeaceto@gmail.com",
    location: "Milan / Zurich",
    tagline: "I design so that knowing, making, and thinking stay possible.",
    links: sharedLinks,
    about: {
      title: "Capacities worth keeping alive",
      lead: "The center is human development: knowledge, creativity, critical thought. I treat them as capacities to practice, not values to declare. Technology is the ground on which, today, those capacities are designed.",
      paragraphs: [
        "At CERN I published open tools for thinking critically about technology. Relatronica is a laboratory for speculative design. WELT FORM builds verification, where an automated system risks closing a question before a person can ask it.",
        "Sound is the other half of the practice. Granular instruments, performance with dance and computation, field recording: knowledge that passes through the body and through listening.",
        "Free software is the practical condition. What you cannot read, you cannot understand, and what you cannot understand, you cannot make your own. I work with laboratories, institutions, and communities that want these capacities inside the work from the beginning.",
      ],
    },
    writing: {
      title: "Debug dei Desideri",
      summary:
        "A newsletter on digital sovereignty: desire, attention, and the capacity to want.",
      href: "https://giuseppeaceto.substack.com",
      recent: [
        {
          title: "La filosofia in busta paga",
          note: "Silicon Valley is hiring philosophers. The question is who they work for.",
        },
        {
          title: "Make people addicted",
          note: "Addiction is a design, not an accident.",
        },
      ],
    },
    essay: {
      slug: "confidence-is-not-verification",
      title: "Confidence is not verification",
      date: "2025",
      dek: "A model sure of itself has not yet proved anything. Ethics begins where a certainty can be refused.",
      body: [
        "We have trained a generation of systems to speak with certainty. The interface rewards fluency, the demo rewards speed, the dashboard rewards a green number. Along that chain, certainty takes the place of truth, and almost no one notices.",
        "Verification is slow, and it will not flatter the demo. It asks who may contest an output, on what grounds, with what evidence, and before which decision. Confidence stays inside the model. Verification stands outside it: in the logs, in the right to object, in the rooms where a refusal still carries weight.",
        "This is why infrastructure matters to me. A principle on a slide does not stop a pipeline. A layer of contestation can. Free software matters for the same reason: opacity is a choice about who is allowed to look.",
        "Philosophers inside product teams can be useful, and they often arrive once the roadmap is already funded. Then critique blesses. The work I care about comes earlier: deciding what may be claimed, what must be shown, and what has to remain undecided.",
        "Desire follows the same logic. Platforms do not merely serve what we want; they write it. Debug dei Desideri is my name for that reading — addiction as architecture, sovereignty as the capacity to refuse a rewrite of one's own wanting.",
        "I design, write, build instruments, and keep laboratories because one register is never enough. Ethics that cannot be practiced is décor. A practice no one can contest is only another machine sure of itself.",
      ],
    },
    work: [
      {
        year: "ongoing",
        title: "WELT FORM",
        role: "Founder · Verification",
        summary:
          "Tools for verifying what machines produce. Dubitor holds the contest open: evidence, dissent, a choice that does not close by itself.",
        href: "https://www.weltform.com",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "Author · CERN OPEN",
        summary:
          "Exercises and provocations for thinking about technology together, in public. An open CERN document: practice for critical thought, to be taken and remade.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        summary:
          "A talk at SFSCON. Responsibility enters with the first design: free software keeps the system readable, so the people who use it can understand it and govern it together.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Founder · Speculative design",
        summary:
          "A laboratory for speculative design. Imagination and critique, in public, across disciplines that product work keeps apart: a place to understand what technology does to human capacities.",
        href: "https://relatronica.com",
      },
    ],
    sound: [
      {
        year: "ongoing",
        title: "Topographic Granulator",
        role: "Instrument · Synthesis",
        summary:
          "A granular instrument that treats terrain as material for synthesis. A way of knowing a place through sound, by building the instrument that makes it possible.",
        href: "https://github.com/giuseppeaceto/Topographic-Granulator",
      },
      {
        year: "2019",
        title: "Enfant Prodige / Vector",
        role: "Performance · Sound & AI",
        summary:
          "Dance, computation, and artificial intelligence, live. What a body knows and what a calculation produces, in the same time.",
        href: "https://www.behance.net/gallery/87454449/Vector",
      },
      {
        year: "ongoing",
        title: "Listening practice",
        role: "Production · Field recording",
        summary:
          "Composition and field recording as research into attention. Listening is already a form of knowledge, and sound makes it something you can practice.",
        href: "https://soundcloud.com/giuseppe-aceto",
      },
    ],
  },
};

export function getSite(locale: Locale): SiteContent {
  return sites[locale];
}

export function essayPath(locale: Locale, slug: string): string {
  return locale === "it"
    ? `/writing/${slug}`
    : `/en/writing/${slug}`;
}

export function homePath(locale: Locale): string {
  return locale === "it" ? "/" : "/en/";
}

export function sectionHref(locale: Locale, hash: string): string {
  return locale === "it" ? `/#${hash}` : `/en/#${hash}`;
}

export function localizedPath(pathname: string, target: Locale): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const clean = bare === "/" ? "/" : bare.replace(/\/$/, "");
  if (target === "en") {
    return clean === "/" ? "/en/" : `/en${clean}`;
  }
  return clean === "/" ? "/" : clean;
}

