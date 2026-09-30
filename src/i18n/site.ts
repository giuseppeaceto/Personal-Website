import type { Locale } from "./locales";

export type WorkItem = {
  year: string;
  title: string;
  role: string;
  fact: string;
  summary: string;
  href?: string;
};

export type SiteContent = {
  name: string;
  title: string;
  description: string;
  location: string;
  tagline: string;
  links: {
    github: string;
    mastodon: string;
    relatronica: string;
    weltform: string;
    soundcloud: string;
    substack: string;
    toolkit: string;
    sfscon: string;
    behance: string;
    cern: string;
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
};

const sharedLinks = {
  github: "https://github.com/giuseppeaceto",
  mastodon: "https://mastodon.social/@giuseppeaceto",
  relatronica: "https://relatronica.com",
  weltform: "https://www.weltform.com",
  soundcloud: "https://soundcloud.com/giuseppe-aceto",
  substack: "https://giuseppeaceto.substack.com",
  toolkit:
    "https://cds.cern.ch/record/2930771/files/CERN-OPEN-2025-003.pdf",
  sfscon: "https://www.sfscon.it/speakers/giuseppe-aceto/",
  behance: "https://www.behance.net/giuseppe-aceto",
  cern: "https://cds.cern.ch/record/2930771",
} as const;

const sites: Record<Locale, SiteContent> = {
  it: {
    name: "Giuseppe Aceto",
    title: "Giuseppe Aceto — Design come responsabilità",
    description:
      "Giuseppe Aceto pratica il design come responsabilità: design critico e pratiche aperte perché conoscenza, creatività e pensiero restino praticabili. Con Welt Form e Relatronica costruisce strumenti, laboratori e scrittura.",
    location: "Milano / Zurigo",
    tagline: "Perché conoscenza, creatività e pensiero restino praticabili.",
    links: sharedLinks,
    about: {
      title: "Capacità da tenere vive",
      lead: "Il centro è lo sviluppo umano: conoscenza, creatività, pensiero critico. Li tratto come capacità da esercitare, non come valori da dichiarare. La tecnologia è il terreno su cui, oggi, quelle capacità vengono disegnate.",
      paragraphs: [
        "Al CERN ho pubblicato strumenti aperti per pensare la tecnologia in modo critico. Relatronica è un laboratorio di design speculativo. Welt Form è il progetto di infrastruttura sulla verifica, lì dove un sistema automatico rischia di chiudere una domanda prima che una persona possa farla.",
        "Il suono resta nella pratica quando serve: strumenti, performance, ascolto. Un modo di conoscere che passa dal corpo, non solo dal linguaggio.",
        "Il software libero è la condizione pratica. Ciò che non si può leggere non si può capire, e ciò che non si può capire non si può fare proprio. Lavoro con laboratori, istituzioni e comunità che vogliono queste capacità dentro il progetto, fin dall'inizio.",
        "Lavoro in tre modalità: consulenza e design per chi vuole portare verifica e apertura dentro un prodotto o un servizio; ricerca e workshop con istituzioni e laboratori; interventi pubblici — talk, testi, strumenti — per allargare la conversazione oltre gli addetti ai lavori.",
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
        title: "Welt Form",
        role: "Fondatore · Infrastruttura",
        fact: "Progetto di infrastruttura per verificare ciò che le macchine producono prima che diventi decisione.",
        summary:
          "Non un singolo strumento: Dubitor apre la contestazione su decisioni e giustificazioni; altre linee (Vektor, Roundel, Probe) stressano stime, stabilità e futuri degli agenti.",
        href: "https://www.weltform.com/it",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "Autore · CERN OPEN",
        fact: "Documento aperto pubblicato al CERN nel 2025: un PDF di esercizi e casi pratici per allenare, in gruppo, il pensiero critico sulla tecnologia, pensato per essere ripreso e adattato.",
        summary:
          "Esercizi e provocazioni per pensare la tecnologia insieme, in pubblico. Un documento aperto del CERN: un allenamento del pensiero critico, da prendere e da rifare.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        fact: "Intervento di quindici minuti a SFSCON 2025, a Bolzano, su come il software libero renda un sistema leggibile e quindi governabile da chi lo usa.",
        summary:
          "La responsabilità entra nel primo disegno: il software libero tiene il sistema leggibile, così chi lo usa può capirlo e governarlo insieme.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Fondatore · Design speculativo",
        fact: "Laboratorio di design speculativo fondato in Svizzera nel 2024 da designer e ricercatori incontratisi al CERN; tra gli esiti pubblici, 404human, Segno e Substrato.",
        summary:
          "Immaginazione e critica, in pubblico, tra discipline che il lavoro di prodotto tiene separate: un luogo per capire cosa la tecnologia fa alle capacità umane.",
        href: "https://relatronica.com",
      },
      {
        year: "in corso",
        title: "Topographic Granulator",
        role: "Strumento · Sintesi",
        fact: "Strumento di sintesi granulare per trattare dati territoriali come materiale sonoro.",
        summary:
          "Uno strumento granulare che tratta il territorio come materia di sintesi. Un modo di conoscere un luogo attraverso il suono, costruendo lo strumento con cui lo si fa.",
        href: "https://github.com/giuseppeaceto/Topographic-Granulator",
      },
      {
        year: "2019",
        title: "Enfant Prodige / Vector",
        role: "Performance · Suono e AI",
        fact: "Performance dal vivo del 2019: un dialogo in tempo reale tra danza, computer e intelligenza artificiale, con musica e sound design di Giuseppe Aceto.",
        summary:
          "Danza, computazione e intelligenza artificiale, dal vivo. Ciò che un corpo sa e ciò che un calcolo produce, nello stesso tempo.",
        href: "https://www.behance.net/gallery/87454449/Vector",
      },
    ],
  },
  en: {
    name: "Giuseppe Aceto",
    title: "Giuseppe Aceto — Design as responsibility",
    description:
      "Giuseppe Aceto practices design as responsibility: critical design and open practices so knowledge, creativity, and thought stay practicable. With Welt Form and Relatronica he builds tools, laboratories, and writing.",
    location: "Milan / Zurich",
    tagline: "So knowledge, creativity, and thought stay practicable.",
    links: sharedLinks,
    about: {
      title: "Capacities worth keeping alive",
      lead: "The center is human development: knowledge, creativity, critical thought. I treat them as capacities to practice, not values to declare. Technology is the ground on which, today, those capacities are designed.",
      paragraphs: [
        "At CERN I published open tools for thinking critically about technology. Relatronica is a laboratory for speculative design. Welt Form is the infrastructure project on verification, where an automated system risks closing a question before a person can ask it.",
        "Sound stays in the practice when it is useful: instruments, performance, listening. A way of knowing that passes through the body, not only through language.",
        "Free software is the practical condition. What you cannot read, you cannot understand, and what you cannot understand, you cannot make your own. I work with laboratories, institutions, and communities that want these capacities inside the work from the beginning.",
        "I work in three modes: consulting and design for those who want verification and openness inside a product or a service; research and workshops with institutions and laboratories; public interventions — talks, texts, tools — to widen the conversation beyond specialists.",
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
        title: "Welt Form",
        role: "Founder · Infrastructure",
        fact: "An infrastructure project for verifying what machines produce before it becomes a decision.",
        summary:
          "Not a single tool: Dubitor opens contestation on decisions and justifications; other lines (Vektor, Roundel, Probe) stress estimates, stability, and agent futures.",
        href: "https://www.weltform.com/en",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "Author · CERN OPEN",
        fact: "An open document published at CERN in 2025: a PDF of exercises and practical cases for training critical thought about technology in a group, meant to be taken up and adapted.",
        summary:
          "Exercises and provocations for thinking about technology together, in public. An open CERN document: practice for critical thought, to be taken and remade.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        fact: "A fifteen-minute talk at SFSCON 2025 in Bolzano, on how free software makes a system readable, and therefore governable by the people who use it.",
        summary:
          "Responsibility enters with the first design: free software keeps the system readable, so the people who use it can understand it and govern it together.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Founder · Speculative design",
        fact: "A speculative-design laboratory founded in Switzerland in 2024 by designers and researchers who met at CERN; public outcomes include 404human, Segno, and Substrato.",
        summary:
          "Imagination and critique, in public, across disciplines that product work keeps apart: a place to understand what technology does to human capacities.",
        href: "https://relatronica.com",
      },
      {
        year: "ongoing",
        title: "Topographic Granulator",
        role: "Instrument · Synthesis",
        fact: "A granular synthesis instrument for treating territorial data as sound material.",
        summary:
          "A granular instrument that treats terrain as material for synthesis. A way of knowing a place through sound, by building the instrument that makes it possible.",
        href: "https://github.com/giuseppeaceto/Topographic-Granulator",
      },
      {
        year: "2019",
        title: "Enfant Prodige / Vector",
        role: "Performance · Sound & AI",
        fact: "A live performance from 2019: a real-time dialogue between dance, computer, and artificial intelligence, with music and sound design by Giuseppe Aceto.",
        summary:
          "Dance, computation, and artificial intelligence, live. What a body knows and what a calculation produces, in the same time.",
        href: "https://www.behance.net/gallery/87454449/Vector",
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
    return clean === "/" ? "/en/" : `/en${clean}/`;
  }
  return clean === "/" ? "/" : `${clean}/`;
}

