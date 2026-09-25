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
    title: "Giuseppe Aceto — Designer e AI Ethicist",
    description:
      "Designer, filosofo e AI ethicist. Fondatore di WELT FORM e Relatronica — design speculativo, infrastrutture di verifica, suono e free software per un'AI responsabile.",
    email: "iam.giuseppeaceto@gmail.com",
    location: "Milano / Zurigo",
    tagline: "Non mi fido delle macchine che non si possono contestare.",
    links: sharedLinks,
    about: {
      title: "Non una coscienza applicata dopo",
      lead: "Troppa AI ethics arriva in ritardo: una slide dopo che il modello è già in produzione. Io lavoro prima — sulle infrastrutture, gli strumenti e le storie che decidono cosa conta come vero.",
      paragraphs: [
        "Al CERN ho pubblicato strumenti aperti per pensare criticamente la tecnologia. Con Relatronica porto avanti un lab di design speculativo e critico. Con WELT FORM costruisco verifica, così gli output delle macchine si possano contestare prima che diventino decisioni.",
        "Il suono non è un hobby appiccicato al CV. Strumenti granulari, performance con danza e computazione, field recording — modi per chiedere come umani e macchine si ascoltano, e chi decide il tempo.",
        "Il free software è una precondizione, non un'atmosfera: se non puoi auditare il sistema, non puoi renderlo responsabile. Lavoro con lab, istituzioni e comunità che vogliono la responsabilità progettata dentro.",
      ],
    },
    writing: {
      title: "Debug dei Desideri",
      summary:
        "Una newsletter sulla sovranità digitale — chi governa il desiderio oggi, e chi ha il potere di riscriverlo.",
      href: "https://giuseppeaceto.substack.com",
      recent: [
        {
          title: "La filosofia in busta paga",
          note: "Quando la Silicon Valley assume filosofi — e se questo conti davvero.",
        },
        {
          title: "Make people addicted",
          note: "La dipendenza come architettura.",
        },
      ],
    },
    essay: {
      slug: "confidence-is-not-verification",
      title: "La confidenza non è verifica",
      date: "2025",
      dek: "Un modello sicuro di sé non è la stessa cosa di un'affermazione messa alla prova. L'etica comincia dove la certezza si può rifiutare.",
      body: [
        "Abbiamo allenato una generazione di sistemi a parlare con confidenza. L'interfaccia premia la fluenza. La demo premia la velocità. La dashboard premia un numero verde. Da qualche parte in quella catena avviene una sostituzione silenziosa: la certezza prende il posto della verità.",
        "La verifica è più lenta, più brutta, meno fotogenica. Chiede chi può contestare un output, su quali basi, con quali prove, e prima di quale decisione che si chiude. La confidenza vive dentro il modello. La verifica vive nel mondo sociale intorno — nei log, nel diritto di contestare, e nelle stanze in cui un rifiuto conta ancora.",
        "Per questo mi interessa l'infrastruttura più degli slogan. Un principio su una slide non interrompe una pipeline. Uno strato di contestazione sì. Il free software conta qui per lo stesso motivo: l'opacità non è un default neutro; è una scelta politica su chi può guardare.",
        "I filosofi assunti nei team di prodotto non sono inutili — ma non bastano. Se l'unico compito della critica è benedire una roadmap già finanziata, allora la filosofia è stata pagata per arrivare in ritardo. Il lavoro interessante è prima: modellare cosa si può affermare, cosa deve essere mostrato, e cosa resta indecidibile.",
        "Il desiderio entra allo stesso modo. Le piattaforme non si limitano a servire i bisogni; li autorizzano. \"Debug dei Desideri\" è il nome che do a questo lavoro — leggere la dipendenza come architettura, e la sovranità come capacità di rifiutare una riscrittura di ciò che vuoi.",
        "Progetto, scrivo, costruisco strumenti e porto avanti lab perché nessun registro da solo basta. Un'etica che non si può praticare è arredo. Una pratica che non si può contestare è solo un'altra macchina confidente.",
      ],
    },
    work: [
      {
        year: "in corso",
        title: "WELT FORM",
        role: "Fondatore · Infrastruttura di verifica",
        summary:
          "Strumenti per verificare ciò che le macchine producono prima che diventi una decisione. La confidenza non è verifica — Dubitor è uno strato strutturato per contestare scelte basate sull'AI.",
        href: "https://www.weltform.com",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "Autore · CERN OPEN",
        summary:
          "Esercizi, framework e provocazioni per pensare criticamente la tecnologia — aperti, liberi, pensati per essere adattati più che ammirati.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        summary:
          "Perché l'etica dell'AI va incorporata dall'inizio — e come il free software fonda accountability, auditabilità e governance di comunità.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Fondatore · Lab di design speculativo",
        summary:
          "Un lab sperimentale sulle relazioni umano–macchina: design speculativo, engagement pubblico e collaborazione tra discipline che di solito non condividono una stanza.",
        href: "https://relatronica.com",
      },
    ],
    sound: [
      {
        year: "in corso",
        title: "Topographic Granulator",
        role: "Strumento · Sound design",
        summary:
          "Uno strumento granulare che tratta il terreno come materiale di sintesi — costruire tool come modo per pensare l'ascolto macchina.",
        href: "https://github.com/giuseppeaceto/Topographic-Granulator",
      },
      {
        year: "2019",
        title: "Enfant Prodige / Vector",
        role: "Performance · Suono e AI",
        summary:
          "Dialogo live tra danza, computazione e AI — interazione umano–macchina ascoltata e sentita nella stanza, non solo argomentata in un panel.",
        href: "https://www.behance.net/gallery/87454449/Vector",
      },
      {
        year: "in corso",
        title: "Pratica di ascolto",
        role: "Produzione · Field recording",
        summary:
          "Composizione e field recording come ricerca: come i sistemi modellano l'attenzione, e come il suono può rendere udibili quelle forme.",
        href: "https://soundcloud.com/giuseppe-aceto",
      },
    ],
  },
  en: {
    name: "Giuseppe Aceto",
    title: "Giuseppe Aceto — Designer & AI Ethicist",
    description:
      "Designer, philosopher, and AI ethicist. Founder of WELT FORM and Relatronica — speculative design, verification infrastructure, sound, and free software for responsible AI.",
    email: "iam.giuseppeaceto@gmail.com",
    location: "Milan / Zurich",
    tagline: "I don't trust machines that can't be contested.",
    links: sharedLinks,
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
      body: [
        "We have trained a generation of systems to speak with confidence. The interface rewards fluency. The demo rewards speed. The dashboard rewards a green number. Somewhere in that chain, a quiet substitution happens: certainty stands in for truth.",
        "Verification is slower, uglier, and less photogenic. It asks who can contest an output, on what grounds, with what evidence, and before which decision locks in. Confidence lives inside the model. Verification lives in the social world around it — in logs, rights to challenge, and rooms where a refusal still counts.",
        "This is why I care about infrastructure more than slogans. A principle on a slide cannot interrupt a pipeline. A contestation layer can. Free software matters here for the same reason: opacity is not a neutral default; it is a political choice about who gets to look.",
        "Philosophers hired into product teams are not useless — but they are not enough. If the only job of critique is to bless a roadmap already funded, then philosophy has been paid to arrive late. The interesting work is earlier: shaping what can be claimed, what must be shown, and what remains undecided.",
        "Desire enters the same way. Platforms do not merely serve wants; they author them. \"Debug dei Desideri\" is my name for that work — reading addiction as architecture, and sovereignty as the capacity to refuse a rewrite of what you want.",
        "I design, write, build instruments, and run labs because no single register is enough. Ethics that cannot be practiced is décor. Practice that cannot be contested is just another confident machine.",
      ],
    },
    work: [
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
    ],
    sound: [
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

