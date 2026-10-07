import type { Locale } from "./locales";

export type UiCopy = {
  skipToContent: string;
  navAria: string;
  brandAria: string;
  nav: {
    about: string;
    approach: string;
    work: string;
    writing: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
  };
  home: {
    exploreTitle: string;
    aboutCard: string;
    approachCard: string;
    writingCard: string;
    contactCard: string;
    allWork: string;
    readAbout: string;
    affinitiesLabel: string;
  };
  approach: {
    label: string;
    title: string;
    lead: string;
    chartHint: string;
    closing: string;
    theses: readonly {
      tag: string;
      title: string;
      statement: string;
      body: string;
      quote?: string;
      quoteAttr?: string;
    }[];
  };
  pages: {
    workTitle: string;
    writingTitle: string;
    contactTitle: string;
  };
  hero: {
    meta: string;
    quote: string;
    quoteAuthor: string;
    quoteContext: string;
    quoteCite: string;
  };
  intro: {
    label: string;
  };
  work: {
    label: string;
    title: string;
    lead: string;
  };
  writing: {
    label: string;
    lead: string;
    readSubscribe: string;
    onThisSite: string;
    newsletterLabel: string;
    elsewhereLabel: string;
    continueReading: string;
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    toolkit: string;
    source: string;
  };
  essay: {
    back: string;
    onThisSite: string;
    morePrefix: string;
    moreSuffix: string;
    alsoOnPrefix: string;
    getInTouch: string;
    backHome: string;
  };
  langSwitch: {
    label: string;
    it: string;
    en: string;
  };
};

export const ui: Record<Locale, UiCopy> = {
  it: {
    skipToContent: "Vai al contenuto",
    navAria: "Principale",
    brandAria: "Giuseppe Aceto — home",
    nav: {
      about: "Chi sono",
      approach: "Approccio",
      work: "Lavoro",
      writing: "Scrittura",
      contact: "Contatti",
      menuOpen: "Menu",
      menuClose: "Chiudi",
    },
    home: {
      exploreTitle: "Esplora",
      aboutCard: "Percorso, radici italiane del design radicale.",
      approachCard: "Tre tesi: provocare, verificare, rendere leggibile.",
      writingCard: "Essay e newsletter Debug dei Desideri.",
      contactCard: "Talk, workshop, ricerca, consulenza.",
      allWork: "Tutti i lavori",
      readAbout: "Leggi tutto",
      affinitiesLabel: "Affinità",
    },
    approach: {
      label: "Approccio",
      title: "Tre tesi",
      lead: "Non una sequenza da seguire: tre posizioni che si sovrappongono nel lavoro. Clicca una fase per approfondire.",
      chartHint: "Timeline · seleziona una fase",
      closing:
        "Relatronica, Welt Form e la Toolbox al CERN nascono da queste tre posizioni, non da una roadmap di prodotto.",
      theses: [
        {
          tag: "Provocare",
          title: "Design critico",
          statement:
            "Il design non deve solo risolvere. Può mettere in scena ciò che preferiamo non vedere.",
          body: "Dal design radicale italiano a Dunne e Raby: oggetti e scenari che commentano consumo, tecnologia e abitudini. Non vendono un futuro migliore — lo rendono discutibile. Relatronica lavora in questo registro.",
          quote:
            "Il design può servire a porre domande taglienti e a far pensare, invece di offrire soluzioni pronte.",
          quoteAttr: "Dunne & Raby · Speculative Everything",
        },
        {
          tag: "Verificare",
          title: "Infrastruttura",
          statement:
            "Un modello sicuro di sé non ha ancora dimostrato nulla.",
          body: "Tra ciò che una macchina produce e ciò che diventa decisione serve uno spazio di contestazione: prove, obiezioni, traccia. Welt Form è costruito lì — sulla verifica, non sulla confidenza dell’interfaccia.",
          quote:
            "L’etica comincia dove una certezza si può rifiutare.",
          quoteAttr: "Dal saggio · La confidenza non è verifica",
        },
        {
          tag: "Rendere leggibile",
          title: "Software libero",
          statement:
            "Ciò che non si può leggere non si può contestare.",
          body: "Apertura del codice, strumenti pubblicati, documenti riprendibili: non è un optional etico. È la condizione perché qualcuno, fuori dal team, possa capire e intervenire. Per questo la Toolbox for Ethical Futures è OPEN al CERN.",
        },
      ],
    },
    pages: {
      workTitle: "Lavori selezionati",
      writingTitle: "Scrittura",
      contactTitle: "Contatti",
    },
    hero: {
      meta: "Design critico · pratiche aperte",
      quote:
        "Il design può servire a porre domande taglienti e a far pensare, invece di offrire soluzioni pronte.",
      quoteAuthor: "Anthony Dunne & Fiona Raby",
      quoteContext: "Speculative Everything, MIT Press, 2013",
      quoteCite: "https://mitpress.mit.edu/9780262019842/speculative-everything/",
    },
    intro: {
      label: "Chi sono",
    },
    work: {
      label: "Lavori",
      title: "Selezionati",
      lead: "Infrastruttura, design speculativo, formazione. Quattro pezzi che tengono insieme il resto.",
    },
    writing: {
      label: "Scrittura",
      lead: "Saggi sul sito, newsletter su Substack. Stesso filo: desiderio, verifica, sovranità digitale.",
      readSubscribe: "Leggi e iscriviti",
      onThisSite: "Su questo sito",
      newsletterLabel: "Newsletter",
      elsewhereLabel: "Su Substack",
      continueReading: "Leggi l'essay",
    },
    contact: {
      label: "Contatti",
      title: "Scrivimi",
      lead: "Talk, workshop, ricerca e consulenza. Lavoro con laboratori, istituzioni e team su verifica, speculazione e software libero.",
      toolkit: "Toolkit (PDF)",
      source: "Codice sorgente (AGPL-3.0)",
    },
    essay: {
      back: "← Scrittura",
      onThisSite: "Note",
      morePrefix: "Altri testi in",
      moreSuffix: "su Substack.",
      alsoOnPrefix: "Pubblicato anche su",
      getInTouch: "Scrivimi",
      backHome: "Torna alla home",
    },
    langSwitch: {
      label: "Lingua",
      it: "IT",
      en: "EN",
    },
  },
  en: {
    skipToContent: "Skip to content",
    navAria: "Primary",
    brandAria: "Giuseppe Aceto — home",
    nav: {
      about: "About",
      approach: "Approach",
      work: "Work",
      writing: "Writing",
      contact: "Contact",
      menuOpen: "Menu",
      menuClose: "Close",
    },
    home: {
      exploreTitle: "Explore",
      aboutCard: "Background and Italy's radical-design roots.",
      approachCard: "Three theses: provoke, verify, make readable.",
      writingCard: "Essays and the Debug dei Desideri newsletter.",
      contactCard: "Talks, workshops, research, consulting.",
      allWork: "All work",
      readAbout: "Read more",
      affinitiesLabel: "Affinities",
    },
    approach: {
      label: "Approach",
      title: "Three theses",
      lead: "Not a sequence to follow: three overlapping positions in the work. Click a phase to go deeper.",
      chartHint: "Timeline · select a phase",
      closing:
        "Relatronica, Welt Form, and the CERN Toolbox come from these three positions — not from a product roadmap.",
      theses: [
        {
          tag: "Provoke",
          title: "Critical design",
          statement:
            "Design does not only have to solve. It can stage what we would rather not see.",
          body: "From Italian radical design to Dunne and Raby: objects and scenarios that comment on consumption, technology, and habit. They do not sell a better future — they make it contestable. Relatronica works in that register.",
          quote:
            "Design can be used to pose incisive questions and encourage thinking, rather than provide ready-made solutions.",
          quoteAttr: "Dunne & Raby · Speculative Everything",
        },
        {
          tag: "Verify",
          title: "Infrastructure",
          statement:
            "A model sure of itself has not yet proved anything.",
          body: "Between what a machine produces and what becomes a decision, there must be room for contestation: evidence, objection, a trace. Welt Form is built there — on verification, not on the confidence of the interface.",
          quote: "Ethics begins where a certainty can be refused.",
          quoteAttr: "From the essay · Confidence is not verification",
        },
        {
          tag: "Make readable",
          title: "Free software",
          statement:
            "What you cannot read, you cannot contest.",
          body: "Open source, published tools, documents others can remake: this is not an ethical optional. It is the condition for someone outside the team to understand and intervene. That is why the Toolbox for Ethical Futures is OPEN at CERN.",
        },
      ],
    },
    pages: {
      workTitle: "Selected work",
      writingTitle: "Writing",
      contactTitle: "Contact",
    },
    hero: {
      meta: "Critical design · open practices",
      quote:
        "Design can be used to pose incisive questions and encourage thinking, rather than provide ready-made solutions.",
      quoteAuthor: "Anthony Dunne & Fiona Raby",
      quoteContext: "Speculative Everything, MIT Press, 2013",
      quoteCite: "https://mitpress.mit.edu/9780262019842/speculative-everything/",
    },
    intro: {
      label: "About",
    },
    work: {
      label: "Work",
      title: "Selected",
      lead: "Infrastructure, speculative design, training. Four pieces that hold the rest together.",
    },
    writing: {
      label: "Writing",
      lead: "Essays on this site, a newsletter on Substack. Same thread: desire, verification, digital sovereignty.",
      readSubscribe: "Read & subscribe",
      onThisSite: "On this site",
      newsletterLabel: "Newsletter",
      elsewhereLabel: "On Substack",
      continueReading: "Read the essay",
    },
    contact: {
      label: "Contact",
      title: "Get in touch",
      lead: "Talks, workshops, research, and consulting. I work with laboratories, institutions, and teams on verification, speculation, and free software.",
      toolkit: "Toolkit (PDF)",
      source: "Source (AGPL-3.0)",
    },
    essay: {
      back: "← Writing",
      onThisSite: "Notes",
      morePrefix: "More writing in",
      moreSuffix: "on Substack.",
      alsoOnPrefix: "Also published on",
      getInTouch: "Get in touch",
      backHome: "Back to home",
    },
    langSwitch: {
      label: "Language",
      it: "IT",
      en: "EN",
    },
  },
};

export function getUi(locale: Locale): UiCopy {
  return ui[locale];
}
