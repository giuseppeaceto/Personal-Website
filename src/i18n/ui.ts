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
    scroll: string;
    moreWork: string;
    moreSound: string;
    moreWriting: string;
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
      meta: "Designer, filosofo, attivista",
      indexWork: "Lavoro",
      indexSound: "Suono",
      moreWork: "Vedi tutti",
      moreSound: "Vedi tutti",
      moreWriting: "Leggi",
      scroll: "Scorri",
    },
    work: {
      label: "Lavori selezionati",
      title: "Le condizioni del pensiero",
      lead: "Un laboratorio, software libero, strumenti aperti, un'infrastruttura. La tecnologia entra quando è lei a dare forma a ciò che si può conoscere, immaginare e mettere in discussione.",
    },
    sound: {
      label: "Suono",
      title: "Chi tiene il tempo",
      lead: "Strumenti, performance, field recording. Il suono è un'altra forma di conoscenza: ascolto, ritmo, la capacità di stare in una situazione senza ridurla a un messaggio.",
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
      title: "Far crescere delle capacità",
      lead: "Conferenze, workshop, ricerca e design. Con laboratori, istituzioni e comunità che mettono al centro conoscenza, creatività e pensiero critico.",
      toolkit: "Toolkit (PDF)",
      source: "Codice sorgente (AGPL-3.0)",
    },
    essay: {
      back: "← Scrittura",
      onThisSite: "Su questo sito",
      morePrefix: "Altri testi in",
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
      meta: "Designer, philosopher, activist",
      indexWork: "Work",
      indexSound: "Sound",
      moreWork: "See all",
      moreSound: "See all",
      moreWriting: "Read",
      scroll: "Scroll",
    },
    work: {
      label: "Selected work",
      title: "Conditions for thought",
      lead: "A laboratory, free software, open tools, an infrastructure. Technology enters when it is what gives shape to what people can know, imagine, and question.",
    },
    sound: {
      label: "Sound",
      title: "Who keeps time",
      lead: "Instruments, performance, field recording. Sound is another form of knowledge: listening, rhythm, the capacity to stay with a situation without reducing it to a message.",
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
      title: "Growing human capacities",
      lead: "Talks, workshops, research, and design. With laboratories, institutions, and communities that put knowledge, creativity, and critical thought at the center.",
      toolkit: "Toolkit (PDF)",
      source: "Source (AGPL-3.0)",
    },
    essay: {
      back: "← Writing",
      onThisSite: "On this site",
      morePrefix: "More writing in",
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
