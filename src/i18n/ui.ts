import type { Locale } from "./locales";
import { lnk, rich, txt, type RichParagraph } from "./rich-text";

const links = {
  dunneRaby: "http://www.dunneandraby.co.uk/",
  rca: "https://www.rca.ac.uk/",
  foucault: "https://plato.stanford.edu/entries/foucault/",
  techSelf: "https://plato.stanford.edu/entries/foucault/#TechSelf",
  jonasIt: "https://it.wikipedia.org/wiki/Hans_Jonas",
  jonasEn: "https://en.wikipedia.org/wiki/Hans_Jonas",
  responsibilityIt: "https://it.wikipedia.org/wiki/Il_principio_responsabilit%C3%A0",
  responsibilityEn:
    "https://press.uchicago.edu/ucp/books/book/chicago/I/bo5953283.html",
  relatronica: "https://relatronica.com",
  weltform: "https://www.weltform.com",
  cern: "https://cds.cern.ch/record/2930771",
  freeSwIt: "https://www.gnu.org/philosophy/free-sw.it.html",
  freeSwEn: "https://www.gnu.org/philosophy/free-sw.html",
  radicalIt: "/about/#tradition",
  radicalEn: "/en/about/#tradition",
} as const;

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
    affinitiesLabel: string;
    mastLead: string;
    mastApproach: string;
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
      body: RichParagraph;
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
      aboutCard: "Formazione umanistica, design digitale, radici nel radicale italiano.",
      approachCard: "Tre tesi: provocare, verificare, rendere leggibile.",
      writingCard: "Essay e newsletter Debug dei Desideri.",
      contactCard: "Talk, workshop, ricerca, consulenza.",
      allWork: "Tutti i lavori",
      affinitiesLabel: "Affinità",
      mastLead:
        "Il design qui non chiude un problema: apre uno spazio di discussione, di verifica, di lettura.",
      mastApproach: "Vedi l’approccio",
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
          body: rich(
            txt("Dal "),
            lnk("design radicale", links.radicalIt),
            txt(" italiano a "),
            lnk("Dunne & Raby", links.dunneRaby),
            txt(" al "),
            lnk("RCA", links.rca),
            txt(": oggetti e scenari che commentano consumo, tecnologia e abitudini. Non vendono un futuro migliore — lo rendono discutibile. "),
            lnk("Foucault", links.foucault),
            txt(", sulle "),
            lnk("tecnologie del sé", links.techSelf),
            txt(": ogni dispositivo forma anche un soggetto. "),
            lnk("Relatronica", links.relatronica),
            txt(" lavora in questo registro."),
          ),
          quote:
            "Il design può servire a porre domande taglienti e a far pensare, invece di offrire soluzioni pronte.",
          quoteAttr: "Dunne & Raby · Speculative Everything",
        },
        {
          tag: "Verificare",
          title: "Infrastruttura",
          statement:
            "Un modello sicuro di sé non ha ancora dimostrato nulla.",
          body: rich(
            txt("Tra ciò che una macchina produce e ciò che diventa decisione serve uno spazio di contestazione: prove, obiezioni, traccia. "),
            lnk("Jonas", links.jonasIt),
            txt(" chiamava «heuristic fear», nel "),
            lnk("Principio responsabilità", links.responsibilityIt),
            txt(", immaginare conseguenze mentre si può ancora agire. "),
            lnk("Welt Form", links.weltform),
            txt(" è costruito lì — sulla verifica, non sulla confidenza dell’interfaccia."),
          ),
          quote:
            "L’etica comincia dove una certezza si può rifiutare.",
          quoteAttr: "Dal saggio · La confidenza non è verifica",
        },
        {
          tag: "Rendere leggibile",
          title: "Software libero",
          statement:
            "Ciò che non si può leggere non si può contestare.",
          body: rich(
            txt("Apertura del codice, strumenti pubblicati, documenti riprendibili: non è un optional etico. È la condizione perché qualcuno, fuori dal team, possa capire e intervenire — il "),
            lnk("software libero", links.freeSwIt),
            txt(" rende leggibile ciò che altrimenti resterebbe una scatola nera. Per questo la "),
            lnk("Toolbox for Ethical Futures", links.cern),
            txt(" è OPEN al CERN."),
          ),
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
      quote: "L’etica comincia dove una certezza si può rifiutare.",
      quoteAuthor: "Giuseppe Aceto",
      quoteContext: "Dal saggio · La confidenza non è verifica",
      quoteCite: "/writing/confidence-is-not-verification",
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
      aboutCard: "Humanities, digital design, roots in Italian radical design.",
      approachCard: "Three theses: provoke, verify, make readable.",
      writingCard: "Essays and the Debug dei Desideri newsletter.",
      contactCard: "Talks, workshops, research, consulting.",
      allWork: "All work",
      affinitiesLabel: "Affinities",
      mastLead:
        "Design here does not close a problem: it opens a space for discussion, verification, and reading.",
      mastApproach: "See the approach",
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
          body: rich(
            txt("From Italian "),
            lnk("radical design", links.radicalEn),
            txt(" to "),
            lnk("Dunne & Raby", links.dunneRaby),
            txt(" at the "),
            lnk("RCA", links.rca),
            txt(": objects and scenarios that comment on consumption, technology, and habit. They do not sell a better future — they make it contestable. "),
            lnk("Foucault", links.foucault),
            txt(", on "),
            lnk("technologies of the self", links.techSelf),
            txt(": every device also shapes a subject. "),
            lnk("Relatronica", links.relatronica),
            txt(" works in that register."),
          ),
          quote:
            "Design can be used to pose incisive questions and encourage thinking, rather than provide ready-made solutions.",
          quoteAttr: "Dunne & Raby · Speculative Everything",
        },
        {
          tag: "Verify",
          title: "Infrastructure",
          statement:
            "A model sure of itself has not yet proved anything.",
          body: rich(
            txt("Between what a machine produces and what becomes a decision, there must be room for contestation: evidence, objection, a trace. "),
            lnk("Jonas", links.jonasEn),
            txt(" called “heuristic fear”, in "),
            lnk("The Imperative of Responsibility", links.responsibilityEn),
            txt(", imagining consequences while you can still act. "),
            lnk("Welt Form", links.weltform),
            txt(" is built there — on verification, not on the confidence of the interface."),
          ),
          quote: "Ethics begins where a certainty can be refused.",
          quoteAttr: "From the essay · Confidence is not verification",
        },
        {
          tag: "Make readable",
          title: "Free software",
          statement:
            "What you cannot read, you cannot contest.",
          body: rich(
            txt("Open source, published tools, documents others can remake: this is not an ethical optional. It is the condition for someone outside the team to understand and intervene — "),
            lnk("free software", links.freeSwEn),
            txt(" makes readable what would otherwise stay a black box. That is why the "),
            lnk("Toolbox for Ethical Futures", links.cern),
            txt(" is OPEN at CERN."),
          ),
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
      quote: "Ethics begins where a certainty can be refused.",
      quoteAuthor: "Giuseppe Aceto",
      quoteContext: "From the essay · Confidence is not verification",
      quoteCite: "/en/writing/confidence-is-not-verification",
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
