import type { Locale } from "./locales";
import { lnk, rich, txt, type RichParagraph } from "./rich-text";

export type WorkItem = {
  year: string;
  title: string;
  role: string;
  blurb: string;
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
    substack: string;
    toolkit: string;
    sfscon: string;
    behance: string;
    cern: string;
  };
  about: {
    title: string;
    lead: RichParagraph;
    paragraphs: readonly RichParagraph[];
  };
  tradition: {
    label: string;
    title: string;
    lead: RichParagraph;
    paragraphs: readonly RichParagraph[];
    figure: {
      title: string;
      note: string;
      alt: string;
      sourceLabel: string;
      sourceHref: string;
    };
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
    title: "Giuseppe Aceto — Design critico",
    description:
      "Giuseppe Aceto — design critico e speculativo. Fondatore di Relatronica e Welt Form; autore della Toolbox for Ethical Futures al CERN.",
    location: "Milano / Zurigo",
    tagline: "Oggetti, scenari e software per discutere la tecnologia.",
    links: sharedLinks,
    about: {
      title: "Capacità da tenere vive",
      lead: rich(
        txt("Il design critico usa oggetti e scenari per discutere tecnologia e consumo. "),
        lnk("Dunne & Raby", "http://www.dunneandraby.co.uk/"),
        txt(" ne gettarono le basi al "),
        lnk("Royal College of Art", "https://www.rca.ac.uk/"),
        txt(", negli anni Novanta; in Italia la stessa tensione ha radici più antiche nel "),
        lnk("design radicale", "/about/#tradition"),
        txt("."),
      ),
      paragraphs: [
        rich(
          txt("Al CERN ho pubblicato la "),
          lnk("Toolbox for Ethical Futures", sharedLinks.cern),
          txt(", esercizi aperti per il pensiero critico sulla tecnologia in gruppo. "),
          lnk("Relatronica", sharedLinks.relatronica),
          txt(" è un laboratorio di design speculativo in Svizzera. "),
          lnk("Welt Form", sharedLinks.weltform),
          txt(" è infrastruttura per verificare output automatici prima che diventino decisioni."),
        ),
        rich(
          lnk("Hans Jonas", "https://it.wikipedia.org/wiki/Hans_Jonas"),
          txt(" parlava di «heuristic fear» nel "),
          lnk("Il principio responsabilità", "https://en.wikipedia.org/wiki/The_Imperative_of_Responsibility"),
          txt(": immaginare conseguenze mentre si può ancora agire. "),
          lnk("Foucault", "https://plato.stanford.edu/entries/foucault/"),
          txt(", delle "),
          lnk("tecnologie del sé", "https://plato.stanford.edu/entries/foucault/#TechSelf"),
          txt(": ogni dispositivo forma anche un soggetto. Quando progetto, parto da lì."),
        ),
        rich(
          txt("Il "),
          lnk("software libero", "https://www.gnu.org/philosophy/free-sw.it.html"),
          txt(" rende leggibile ciò che altrimenti resterebbe una scatola nera. Collaboro con laboratori, istituzioni e comunità che vogliono portare verifica e speculazione dentro prodotti e servizi."),
        ),
        rich(
          txt("Consulenza e design, ricerca e workshop con istituzioni, talk e testi pubblici."),
        ),
      ],
    },
    tradition: {
      label: "Radici",
      title: "Design radicale in Italia",
      lead: rich(
        txt("Prima del «critical design» anglosassone, Firenze negli anni Sessanta e Settanta: gruppi che usavano il progetto per criticare consumo, città e "),
        lnk("scuola del design", "https://it.wikipedia.org/wiki/Design_radical"),
        txt("."),
      ),
      paragraphs: [
        rich(
          lnk("Superstudio", "https://it.wikipedia.org/wiki/Superstudio"),
          txt(" e "),
          lnk("Archizoom", "https://it.wikipedia.org/wiki/Archizoom"),
          txt(" disegnavano città senza fine e cataloghi di oggetti assurdi: non per produrli, ma per mostrare dove porta la logica del mercato. Con "),
          lnk("No-Stop City", "https://it.wikipedia.org/wiki/No-Stop_City"),
          txt(", Archizoom immagina un territorio urbano continuo, senza centro né confine."),
        ),
        rich(
          lnk("Ugo La Pietra", "https://it.wikipedia.org/wiki/Ugo_La_Pietra"),
          txt(", con "),
          lnk("La dissociazione come modo d'azione", "https://www.domusweb.it/it/news/gallery/2020/04/15/ugo-la-pietra-la-dissociazione-come-modo-d-azione.html"),
          txt(" (1976), descrive l'individuo in bilico tra casa e metropoli controllata. "),
          lnk("Enzo Mari", "https://it.wikipedia.org/wiki/Enzo_Mari"),
          txt(", con "),
          lnk("Proposta per un'autoprogettazione", "https://it.wikipedia.org/wiki/Autoprogettazione"),
          txt(" (1974), sposta il progetto nelle mani di chi lo usa: istruzioni stampate, non sedie in serie."),
        ),
        rich(
          lnk("Global Tools", "https://it.wikipedia.org/wiki/Global_Tools"),
          txt(" (1973–1975) prova a trasformare il design in laboratorio condiviso — tra "),
          lnk("Branzi", "https://it.wikipedia.org/wiki/Andrea_Branzi"),
          txt(", "),
          lnk("Mendini", "https://it.wikipedia.org/wiki/Alessandro_Mendini"),
          txt(", "),
          lnk("Ettore Sottsass", "https://it.wikipedia.org/wiki/Ettore_Sottsass"),
          txt(" e altri. "),
          lnk("Dunne & Raby", "http://www.dunneandraby.co.uk/"),
          txt(" hanno citato spesso quella stagione come antenata del loro lavoro al RCA. A me serve oggi per leggere piattaforme, AI e infrastrutture con la stessa lucidità."),
        ),
      ],
      figure: {
        title: "Il Monumento Continuo",
        note: "Fotomontaggio, 1969: una griglia bianca infinita invade la valle. Superstudio immagina l'architettura come totalità — critica dell'omologazione, non progetto da costruire.",
        alt: "Superstudio, Il Monumento Continuo: una struttura a griglia bianca emerge dalle nuvole in una valle di montagna, con un piccolo edificio in primo piano.",
        sourceLabel: "Superstudio · Continuous Monument, 1969",
        sourceHref: "https://www.moma.org/collection/works/142978",
      },
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
          note: "La dipendenza si progetta, come l'interfaccia.",
        },
      ],
    },
    essay: {
      slug: "confidence-is-not-verification",
      title: "La confidenza non è verifica",
      date: "2025",
      dek: "Un modello sicuro di sé non ha ancora dimostrato nulla. L'etica comincia dove una certezza si può rifiutare.",
      body: [
        "Abbiamo allenato una generazione di sistemi a parlare con sicurezza. L'interfaccia premia la scorrevolezza, la demo la velocità, la dashboard un numero verde. Lungo questa catena la certezza prende il posto della verità, e quasi nessuno se ne accorge.",
        "Prendi una domanda di mutuo respinta da un modello. La risposta arriva in un secondo, senza un'esitazione, con un punteggio a due decimali. Chi può contestarla? Su quali basi, con quali prove, prima di quale decisione? Quasi sempre nessuno. La confidenza sta nel modello, mentre la verifica deve stare fuori: nei registri, nel diritto di obiezione, nelle stanze in cui un rifiuto ha ancora peso. Verificare è lento e non fa bella figura, quindi non succede da sé. Va costruito.",
        "Per questo mi interessa l'infrastruttura. Un principio su una slide non ferma una pipeline. Uno strato di contestazione può farlo. Ma contestare presuppone di poter guardare: l'opacità non è un dettaglio tecnico, è una decisione su chi ha il diritto di vedere. Il software libero conta per questa ragione.",
        "I filosofi nei team di prodotto servono, ma arrivano quasi sempre a roadmap già finanziata, e a quel punto la loro critica diventa una benedizione. Il lavoro che mi interessa viene prima: stabilire cosa si può affermare, cosa va mostrato, cosa deve restare indeciso. L'incertezza dichiarata non è un difetto del prodotto. È l'ultimo punto in cui qualcuno può ancora intervenire.",
        "Il desiderio segue la stessa logica. Le piattaforme non si limitano a servire ciò che vogliamo: lo scrivono. Il mutuo negato è il caso estremo, il feed è quello quotidiano. Chiamo Debug dei Desideri questa lettura: la dipendenza come architettura, la sovranità come capacità di rifiutare una riscrittura del proprio volere. Anche qui vale la regola: si può rifiutare solo ciò che si può vedere, e solo se c'è qualcuno a cui dirlo.",
        "Per questo progetto, scrivo, costruisco strumenti e tengo laboratori: un solo registro non basta. Un'etica impraticabile è arredo. Una pratica che nessuno può contestare è soltanto un'altra macchina sicura di sé.",
      ],
    },
    work: [
      {
        year: "in corso",
        title: "Welt Form",
        role: "Infrastruttura",
        blurb:
          "Verifica di output automatici prima che diventino decisioni — Dubitor, Vektor, Roundel, Probe.",
        href: "https://www.weltform.com/it",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "CERN OPEN",
        blurb:
          "Esercizi aperti per il pensiero critico sulla tecnologia, da riprendere in aula e in laboratorio.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        blurb:
          "Il software libero come condizione di leggibilità e governo collettivo del sistema.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Design speculativo",
        blurb:
          "Laboratorio in Svizzera: 404human, Segno, Substrato e altri esperimenti pubblici.",
        href: "https://relatronica.com",
      },
    ],
  },
  en: {
    name: "Giuseppe Aceto",
    title: "Giuseppe Aceto — Critical design",
    description:
      "Giuseppe Aceto — critical and speculative design. Founder of Relatronica and Welt Form; author of the Toolbox for Ethical Futures at CERN.",
    location: "Milan / Zurich",
    tagline: "Objects, scenarios, and software for discussing technology.",
    links: sharedLinks,
    about: {
      title: "Capacities worth keeping alive",
      lead: rich(
        txt("Critical design uses objects and scenarios to discuss technology and consumption. "),
        lnk("Dunne & Raby", "http://www.dunneandraby.co.uk/"),
        txt(" laid the groundwork at the "),
        lnk("Royal College of Art", "https://www.rca.ac.uk/"),
        txt(" in the 1990s; in Italy the same tension has older roots in "),
        lnk("radical design", "/en/about/#tradition"),
        txt("."),
      ),
      paragraphs: [
        rich(
          txt("At CERN I published the "),
          lnk("Toolbox for Ethical Futures", sharedLinks.cern),
          txt(", open exercises for critical thought about technology in a group. "),
          lnk("Relatronica", sharedLinks.relatronica),
          txt(" is a speculative-design laboratory in Switzerland. "),
          lnk("Welt Form", sharedLinks.weltform),
          txt(" is infrastructure for verifying automated outputs before they become decisions."),
        ),
        rich(
          lnk("Hans Jonas", "https://en.wikipedia.org/wiki/Hans_Jonas"),
          txt(" wrote about \"heuristic fear\" in "),
          lnk("The Imperative of Responsibility", "https://en.wikipedia.org/wiki/The_Imperative_of_Responsibility"),
          txt(": imagining consequences while you can still act. "),
          lnk("Foucault", "https://plato.stanford.edu/entries/foucault/"),
          txt(", on "),
          lnk("technologies of the self", "https://plato.stanford.edu/entries/foucault/#TechSelf"),
          txt(": every device also shapes a subject. That is where I start when I design."),
        ),
        rich(
          lnk("Free software", "https://www.gnu.org/philosophy/free-sw.html"),
          txt(" makes readable what would otherwise stay a black box. I work with laboratories, institutions, and communities that want verification and speculation inside products and services."),
        ),
        rich(
          txt("Consulting and design, research and workshops with institutions, public talks and writing."),
        ),
      ],
    },
    tradition: {
      label: "Roots",
      title: "Radical design in Italy",
      lead: rich(
        txt("Before English-language critical design, Florence in the 1960s and 1970s: groups using design to criticise consumption, the city, and "),
        lnk("design education", "https://en.wikipedia.org/wiki/Radical_design"),
        txt(" itself."),
      ),
      paragraphs: [
        rich(
          lnk("Superstudio", "https://en.wikipedia.org/wiki/Superstudio"),
          txt(" and "),
          lnk("Archizoom", "https://en.wikipedia.org/wiki/Archizoom"),
          txt(" drew endless cities and catalogues of absurd objects — not to manufacture them, but to show where market logic leads. With "),
          lnk("No-Stop City", "https://en.wikipedia.org/wiki/No-Stop_City"),
          txt(", Archizoom imagined urban territory as a continuous field, without centre or edge."),
        ),
        rich(
          lnk("Ugo La Pietra", "https://en.wikipedia.org/wiki/Ugo_La_Pietra"),
          txt(", in "),
          lnk("Dissociation as a mode of action", "https://www.domusweb.it/en/news/gallery/2020/04/15/ugo-la-pietra-la-dissociazione-come-modo-d-azione.html"),
          txt(" (1976), described individuals caught between home and a controlled metropolis. "),
          lnk("Enzo Mari", "https://en.wikipedia.org/wiki/Enzo_Mari"),
          txt(", in "),
          lnk("Autoprogettazione", "https://en.wikipedia.org/wiki/Enzo_Mari#Autoprogettazione"),
          txt(" (1974), moved design into the user's hands: printed instructions, not chairs off a production line."),
        ),
        rich(
          lnk("Global Tools", "https://en.wikipedia.org/wiki/Global_Tools"),
          txt(" (1973–1975) tried to turn design into a shared laboratory — among "),
          lnk("Branzi", "https://en.wikipedia.org/wiki/Andrea_Branzi"),
          txt(", "),
          lnk("Mendini", "https://en.wikipedia.org/wiki/Alessandro_Mendini"),
          txt(", "),
          lnk("Ettore Sottsass", "https://en.wikipedia.org/wiki/Ettore_Sottsass"),
          txt(", and others. "),
          lnk("Dunne & Raby", "http://www.dunneandraby.co.uk/"),
          txt(" often cited that period as an ancestor of their work at the RCA. I use it today to read platforms, AI, and infrastructure with the same clarity."),
        ),
      ],
      figure: {
        title: "The Continuous Monument",
        note: "Photomontage, 1969: an endless white grid invades the valley. Superstudio imagines architecture as totality — a critique of homogenisation, not a building to erect.",
        alt: "Superstudio, The Continuous Monument: a white gridded structure rises from clouds in a mountain valley, with a small building in the foreground.",
        sourceLabel: "Superstudio · Continuous Monument, 1969",
        sourceHref: "https://www.moma.org/collection/works/142978",
      },
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
          note: "Addiction is designed in, like the interface.",
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
        "Take a mortgage application rejected by a model. The answer arrives in a second, without hesitation, with a score to two decimal places. Who can contest it? On what grounds, with what evidence, before which decision? Almost always, no one. Confidence sits inside the model, while verification has to stand outside it: in the logs, in the right to object, in the rooms where a refusal still carries weight. Verification is slow and will not flatter the demo, so it does not happen on its own. It has to be built.",
        "This is why infrastructure matters to me. A principle on a slide does not stop a pipeline. A layer of contestation can. But contestation assumes you can look: opacity is not a technical detail, it is a decision about who is allowed to see. Free software matters for that reason.",
        "Philosophers inside product teams are useful, but they almost always arrive once the roadmap is already funded, and by then their critique becomes a blessing. The work I care about comes earlier: deciding what may be claimed, what must be shown, and what has to remain undecided. Declared uncertainty is not a product flaw. It is the last point at which someone can still intervene.",
        "Desire follows the same logic. Platforms do not merely serve what we want; they write it. The denied mortgage is the extreme case; the feed is the everyday one. I call this reading Debug dei Desideri: addiction as architecture, sovereignty as the capacity to refuse a rewrite of one's own wanting. The same rule holds here: you can refuse only what you can see, and only if there is someone to say it to.",
        "That is why I design, write, build tools, and keep laboratories: one register is never enough. Ethics that cannot be practiced is décor. A practice no one can contest is only another machine sure of itself.",
      ],
    },
    work: [
      {
        year: "ongoing",
        title: "Welt Form",
        role: "Infrastructure",
        blurb:
          "Verifying automated outputs before they become decisions — Dubitor, Vektor, Roundel, Probe.",
        href: "https://www.weltform.com/en",
      },
      {
        year: "2025",
        title: "Toolbox for Ethical Futures",
        role: "CERN OPEN",
        blurb:
          "Open exercises for critical thought about technology, meant for classrooms and labs.",
        href: "https://cds.cern.ch/record/2930771",
      },
      {
        year: "2025",
        title: "Responsible by Design",
        role: "Talk · SFSCON",
        blurb:
          "Free software as the condition for readability and collective governance of a system.",
        href: "https://www.sfscon.it/talks/responsible-by-design/",
      },
      {
        year: "2024",
        title: "Relatronica",
        role: "Speculative design",
        blurb:
          "A laboratory in Switzerland: 404human, Segno, Substrato, and other public experiments.",
        href: "https://relatronica.com",
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

export type SitePage = "about" | "approach" | "work" | "writing" | "contact";

const pageSegments: Record<SitePage, string> = {
  about: "/about",
  approach: "/approach",
  work: "/work",
  writing: "/writing",
  contact: "/contact",
};

export function pagePath(locale: Locale, page: SitePage): string {
  const segment = pageSegments[page];
  return locale === "en" ? `/en${segment}/` : `${segment}/`;
}

export function localizedPath(pathname: string, target: Locale): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const clean = bare === "/" ? "/" : bare.replace(/\/$/, "");
  if (target === "en") {
    return clean === "/" ? "/en/" : `/en${clean}/`;
  }
  return clean === "/" ? "/" : `${clean}/`;
}

