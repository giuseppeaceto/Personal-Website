import type { Locale } from "./locales";

export type UiCopy = {
  skipToContent: string;
  navAria: string;
  brandAria: string;
  nav: {
    work: string;
    writing: string;
    about: string;
    contact: string;
  };
  hero: {
    meta: string;
    note: string;
    schoolSource: string;
    schoolSourceTitle: string;
    militarySource: string;
    militarySourceTitle: string;
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
    readSubscribe: string;
    onThisSite: string;
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
      writing: "Scrittura",
      about: "Chi sono",
      contact: "Contatti",
    },
    hero: {
      meta: "Design, filosofia, attivismo",
      note: "Bambini in un paese povero.\nDa quando sei qui, la spesa militare mondiale avrebbe già pagato un anno di scuola per ciascuno.",
      schoolSource: "55 $",
      schoolSourceTitle:
        "Spesa pubblica per la scuola di un bambino in un paese a basso reddito, 2022. UNESCO e Banca Mondiale.",
      militarySource: "SIPRI",
      militarySourceTitle:
        "Spesa militare mondiale nel 2025: 2.887 miliardi di dollari. SIPRI.",
    },
    intro: {
      label: "Chi sono",
    },
    work: {
      label: "Lavori selezionati",
      title: "Le condizioni del pensiero",
      lead: "Un laboratorio, software libero, strumenti aperti, un'infrastruttura. La tecnologia entra quando è lei a dare forma a ciò che si può conoscere, immaginare e mettere in discussione.",
    },
    writing: {
      label: "Scrittura",
      readSubscribe: "Leggi e iscriviti",
      onThisSite: "Note",
      continueReading: "Continua a leggere",
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
      onThisSite: "Note",
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
      writing: "Writing",
      about: "About",
      contact: "Contact",
    },
    hero: {
      meta: "Design, philosophy, activism",
      note: "Children in a poor country.\nSince you arrived, world military spending would already have paid for a year of school for each of them.",
      schoolSource: "$55",
      schoolSourceTitle:
        "Public spending on one child's schooling in a low-income country, 2022. UNESCO and the World Bank.",
      militarySource: "SIPRI",
      militarySourceTitle: "World military spending in 2025: $2.887 trillion. SIPRI.",
    },
    intro: {
      label: "About",
    },
    work: {
      label: "Selected work",
      title: "Conditions for thought",
      lead: "A laboratory, free software, open tools, an infrastructure. Technology enters when it is what gives shape to what people can know, imagine, and question.",
    },
    writing: {
      label: "Writing",
      readSubscribe: "Read & subscribe",
      onThisSite: "Notes",
      continueReading: "Continue reading",
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
      onThisSite: "Notes",
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
