import type { Locale } from "./locales";

export type UiCopy = {
  skipToContent: string;
  navAria: string;
  brandAria: string;
  nav: {
    work: string;
    sound: string;
    writing: string;
    about: string;
    contact: string;
  };
  hero: {
    meta: string;
    indexWork: string;
    indexSound: string;
  };
  work: {
    label: string;
    title: string;
    lead: string;
  };
  sound: {
    label: string;
    title: string;
    lead: string;
  };
  writing: {
    label: string;
    readSubscribe: string;
    onThisSite: string;
    continueReading: string;
  };
  about: {
    label: string;
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
      work: "Lavoro",
      sound: "Suono",
      writing: "Scrittura",
      about: "Info",
      contact: "Contatti",
    },
    hero: {
      meta: "Designer, filosofo, AI ethicist",
      indexWork: "Lavoro",
      indexSound: "Suono",
    },
    work: {
      label: "Lavori selezionati",
      title: "Infrastrutture e interventi",
      lead: "Verifica, tool aperti, talk e un lab — pratiche che trattano l'AI come sistema sociale, non solo tecnico.",
    },
    sound: {
      label: "Suono e stranezze",
      title: "L'ascolto come ricerca",
      lead: "Strumenti, performance e field recording — la parte della pratica che non sta su un badge da conferenza.",
    },
    writing: {
      label: "Scrittura",
      readSubscribe: "Leggi e iscriviti",
      onThisSite: "Su questo sito",
      continueReading: "Continua a leggere",
    },
    about: {
      label: "Info",
    },
    contact: {
      label: "Contatti",
      title: "Lavoriamo insieme",
      lead: "Talk, workshop, collaborazioni di ricerca e design — se vuoi la responsabilità progettata dentro, non provata dopo.",
      toolkit: "Toolkit (PDF)",
      source: "Codice sorgente (AGPL-3.0)",
    },
    essay: {
      back: "← Scrittura",
      onThisSite: "Su questo sito",
      morePrefix: "Altro su",
      moreSuffix: "su Substack.",
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
      work: "Work",
      sound: "Sound",
      writing: "Writing",
      about: "About",
      contact: "Contact",
    },
    hero: {
      meta: "Designer, philosopher, AI ethicist",
      indexWork: "Work",
      indexSound: "Sound",
    },
    work: {
      label: "Selected work",
      title: "Infrastructure & interventions",
      lead: "Verification, open tooling, talks, and a lab — practices that treat AI as a social system, not only a technical one.",
    },
    sound: {
      label: "Sound & oddities",
      title: "Listening as research",
      lead: "Instruments, performance, and field recording — the part of the practice that does not fit on a conference badge.",
    },
    writing: {
      label: "Writing",
      readSubscribe: "Read & subscribe",
      onThisSite: "On this site",
      continueReading: "Continue reading",
    },
    about: {
      label: "About",
    },
    contact: {
      label: "Contact",
      title: "Work with me",
      lead: "Talks, workshops, research collaborations, and design work — if you want responsibility designed in, not rehearsed afterward.",
      toolkit: "Toolkit (PDF)",
      source: "Source (AGPL-3.0)",
    },
    essay: {
      back: "← Writing",
      onThisSite: "On this site",
      morePrefix: "More in",
      moreSuffix: "on Substack.",
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
