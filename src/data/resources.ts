import type { Locale } from "../i18n/locales";

export type ResourceKind = "paper" | "book" | "tool" | "media";
export type ResourceTheme =
  | "ai-ethics"
  | "understanding-ai"
  | "cognitive-sovereignty"
  | "philosophy-of-technology"
  | "critical-thinking"
  | "digital-rights"
  | "open-source"
  | "work-and-technology";

export type Resource = {
  title: string;
  author: string;
  year?: string;
  kind: ResourceKind;
  theme: ResourceTheme;
  href: string;
  /** One line per locale: why it matters and how to use it. */
  note: Record<Locale, string>;
};

/** Display order of the themes on the page. */
export const resourceThemes: readonly ResourceTheme[] = [
  "ai-ethics",
  "understanding-ai",
  "cognitive-sovereignty",
  "philosophy-of-technology",
  "critical-thinking",
  "digital-rights",
  "open-source",
  "work-and-technology",
];

/**
 * Curated free / open resources used in mentoring.
 * Every entry was checked: links point to the original or an open-access source.
 */
export const resources: readonly Resource[] = [
  // — AI ethics ————————————————————————————————————————
  {
    title: "On the Dangers of Stochastic Parrots",
    author: "Bender, Gebru, McMillan-Major, Shmitchell",
    year: "2021",
    kind: "paper",
    theme: "ai-ethics",
    href: "https://dl.acm.org/doi/10.1145/3442188.3445922",
    note: {
      it: "Da dove viene ciò che un modello «dice»: predizione statistica, non comprensione. La lettura che smonta l’antropomorfismo.",
      en: "Where a model’s “speech” comes from: statistical prediction, not understanding. The read that dismantles anthropomorphism.",
    },
  },
  {
    title: "Model Cards for Model Reporting",
    author: "Mitchell et al.",
    year: "2019",
    kind: "paper",
    theme: "ai-ethics",
    href: "https://arxiv.org/abs/1810.03993",
    note: {
      it: "Documentare un modello come si documenta un farmaco: uso previsto, limiti, dati. Una pratica da pretendere, non da ricevere in regalo.",
      en: "Documenting a model the way a drug is documented: intended use, limits, data. A practice to demand, not to be granted.",
    },
  },
  {
    title: "Datasheets for Datasets",
    author: "Gebru et al.",
    year: "2018",
    kind: "paper",
    theme: "ai-ethics",
    href: "https://arxiv.org/abs/1803.09010",
    note: {
      it: "Ogni dataset ha una storia: chi l’ha raccolto, per cosa, chi ne resta fuori. Il complemento dei model cards.",
      en: "Every dataset has a history: who collected it, for what, who is left out. The counterpart to model cards.",
    },
  },
  {
    title: "Toward Trustworthy AI Development",
    author: "Brundage et al.",
    year: "2020",
    kind: "paper",
    theme: "ai-ethics",
    href: "https://arxiv.org/abs/2004.07213",
    note: {
      it: "Come rendere verificabili le promesse sull’IA: prove, audit, responsabilità. Da leggere quando qualcuno dice «è sicuro».",
      en: "How to make AI promises verifiable: evidence, audits, accountability. Read it when someone says “it’s safe”.",
    },
  },
  {
    title: "Data Feminism",
    author: "D’Ignazio & Klein",
    year: "2020",
    kind: "book",
    theme: "ai-ethics",
    href: "https://data-feminism.mitpress.mit.edu/",
    note: {
      it: "I dati come potere. Sette principi per leggere classificazioni, bias e chi paga il prezzo delle decisioni automatiche.",
      en: "Data as power. Seven principles for reading classification, bias, and who pays for automated decisions.",
    },
  },
  {
    title: "A People’s Guide to AI",
    author: "Ọnụọha & Mother Cyborg",
    year: "2018",
    kind: "book",
    theme: "ai-ethics",
    href: "https://alliedmedia.org/wp-content/uploads/2020/09/peoples-guide-ai.pdf",
    note: {
      it: "Una guida a fumetti per spiegare l’IA a chi non la programma. Fatta per essere usata in gruppo, non letta da soli.",
      en: "A zine that explains AI to people who don’t code. Made to be used in a group, not read alone.",
    },
  },
  {
    title: "Ethics of AI",
    author: "University of Helsinki · MOOC",
    kind: "media",
    theme: "ai-ethics",
    href: "https://ethics-of-ai.mooc.fi/",
    note: {
      it: "Corso gratuito in sette capitoli, senza prerequisiti. Il punto di partenza che consiglio a chi comincia.",
      en: "A free seven-chapter course with no prerequisites. The starting point I recommend.",
    },
  },
  // — Understanding AI ————————————————————————————————
  {
    title: "Elements of AI",
    author: "University of Helsinki · MOOC",
    kind: "media",
    theme: "understanding-ai",
    href: "https://www.elementsofai.com/",
    note: {
      it: "Cosa è davvero l’IA, senza matematica. Toglie il vocabolario magico prima di discuterne l’etica.",
      en: "What AI actually is, without the maths. Clears the magical vocabulary before you argue about ethics.",
    },
  },
  {
    title: "ChatGPT Is a Blurry JPEG of the Web",
    author: "Ted Chiang",
    year: "2023",
    kind: "paper",
    theme: "understanding-ai",
    href: "https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web",
    note: {
      it: "I grandi modelli linguistici come compressione lossy di Internet: la metafora più lucida per capire le allucinazioni.",
      en: "Large language models as lossy web compression: the clearest metaphor for why they hallucinate.",
    },
  },
  {
    title: "Transformer Explainer",
    author: "Polo Club of Data Science · Georgia Tech",
    year: "2024",
    kind: "tool",
    theme: "understanding-ai",
    href: "https://poloclub.github.io/transformer-explainer/",
    note: {
      it: "Modello Transformer interattivo nel browser: visualizza matrici di attenzione, vettori e predizione token per token in tempo reale.",
      en: "An interactive Transformer running live in the browser: visualising attention weights, vectors, and token probabilities.",
    },
  },
  {
    title: "Neural Networks",
    author: "3Blue1Brown",
    year: "2017",
    kind: "media",
    theme: "understanding-ai",
    href: "https://www.3blue1brown.com/topics/neural-networks",
    note: {
      it: "La migliore introduzione visiva e intuitiva a reti neurali, gradient descent e backpropagation: la geometria dietro i pesi.",
      en: "The best intuitive, visual introduction to neural networks, gradient descent, and backpropagation: the geometry behind the weights.",
    },
  },
  {
    title: "The Illustrated Transformer",
    author: "Jay Alammar",
    year: "2018",
    kind: "tool",
    theme: "understanding-ai",
    href: "https://jalammar.github.io/illustrated-transformer/",
    note: {
      it: "La scomposizione grafica di riferimento dell’architettura Transformer: self-attention, matrici Query-Key-Value e strati spiegati con chiarezza.",
      en: "The canonical visual walkthrough of the Transformer architecture: self-attention, Query-Key-Value matrices, and layers made clear.",
    },
  },
  {
    title: "Why AI Is Harder Than We Think",
    author: "Melanie Mitchell",
    year: "2021",
    kind: "paper",
    theme: "understanding-ai",
    href: "https://arxiv.org/abs/2104.12871",
    note: {
      it: "Quattro fallacie cognitive che ci inducono a sovrastimare l’IA. Essenziale per distinguere abilità ristrette da comprensione del mondo.",
      en: "Four cognitive fallacies that lead us to overestimate AI progress. Essential to separate narrow skill from real understanding.",
    },
  },
  {
    title: "Deep Learning",
    author: "Goodfellow, Bengio, Courville",
    year: "2016",
    kind: "book",
    theme: "understanding-ai",
    href: "https://www.deeplearningbook.org/",
    note: {
      it: "Il testo di riferimento della disciplina, liberamente accessibile online: dall’algebra lineare alle architetture generative.",
      en: "The benchmark textbook of the field, freely accessible online: from linear algebra to generative architectures.",
    },
  },

  // — Cognitive sovereignty ——————————————————————————————
  {
    title: "Stand Out of Our Light",
    author: "James Williams",
    year: "2018",
    kind: "book",
    theme: "cognitive-sovereignty",
    href: "https://openlibrary.org/works/OL19855208W/Stand_Out_of_Our_Light",
    note: {
      it: "La nostra attenzione come bene conteso. Williams la pone come questione di volontà, non di produttività. Open access.",
      en: "Our attention as contested territory. Williams frames it as a matter of will, not productivity. Open access.",
    },
  },
  {
    title: "Data Detox Kit",
    author: "Tactical Tech",
    kind: "tool",
    theme: "cognitive-sovereignty",
    href: "https://datadetoxkit.org/en/home/",
    note: {
      it: "Esercizi concreti, in oltre quaranta lingue, per riprendere il controllo di dati, privacy e tempo sullo schermo.",
      en: "Concrete exercises, in over forty languages, to take back control of data, privacy, and screen time.",
    },
  },
  {
    title: "The Glass Room",
    author: "Tactical Tech",
    kind: "tool",
    theme: "cognitive-sovereignty",
    href: "https://www.theglassroom.org/",
    note: {
      it: "Mostra itinerante che rende tangibile il tracciamento. Da visitare, o da ricostruire in aula con i materiali aperti.",
      en: "A travelling exhibition that makes tracking tangible. Visit it, or rebuild it in a classroom with the open materials.",
    },
  },
  {
    title: "Surveillance Self-Defense",
    author: "Electronic Frontier Foundation",
    kind: "tool",
    theme: "cognitive-sovereignty",
    href: "https://ssd.eff.org/",
    note: {
      it: "Guide pratiche per decidere cosa proteggere e come. Il contrario della paura: scelte, non allarmismo.",
      en: "Practical guides to decide what to protect and how. The opposite of fear: choices, not alarmism.",
    },
  },
  {
    title: "Privacy Guides",
    author: "Privacy Guides community",
    kind: "tool",
    theme: "cognitive-sovereignty",
    href: "https://www.privacyguides.org/",
    note: {
      it: "Alternative concrete ai servizi di sorveglianza, con criteri espliciti. Un riferimento, non un catechismo.",
      en: "Concrete alternatives to surveillance services, with explicit criteria. A reference, not a catechism.",
    },
  },
  {
    title: "Your Undivided Attention",
    author: "Center for Humane Technology · podcast",
    kind: "media",
    theme: "cognitive-sovereignty",
    href: "https://www.humanetech.com/podcast",
    note: {
      it: "Il podcast che ha reso popolare la critica all’economia dell’attenzione. Buono per iniziare una discussione.",
      en: "The podcast that popularised the critique of the attention economy. A good way into the conversation.",
    },
  },
  {
    title: "Tech Won’t Save Us",
    author: "Paris Marx · podcast",
    kind: "media",
    theme: "cognitive-sovereignty",
    href: "https://techwontsave.us/",
    note: {
      it: "Contro-narrazione settimanale sul capitalismo tecnologico. Per non confondere innovazione e progresso.",
      en: "A weekly counter-narrative on tech capitalism. So you don’t confuse innovation with progress.",
    },
  },

  // — Philosophy of technology ————————————————————————————
  {
    title: "Philosophy of Technology",
    author: "Stanford Encyclopedia of Philosophy",
    kind: "paper",
    theme: "philosophy-of-technology",
    href: "https://plato.stanford.edu/entries/technology/",
    note: {
      it: "Voce enciclopedica gratuita e aggiornata: la mappa per orientarsi prima di citare. Punto d’ingresso, non sostituto dei testi.",
      en: "A free, regularly updated encyclopaedia entry: the map before you cite. An entry point, not a substitute for the texts.",
    },
  },
  {
    title: "Do Artifacts Have Politics?",
    author: "Langdon Winner",
    year: "1980",
    kind: "paper",
    theme: "philosophy-of-technology",
    href: "https://www.jstor.org/stable/20024652",
    note: {
      it: "Gli oggetti hanno politica. Il saggio che fonda l’idea che un progetto non sia mai neutrale.",
      en: "Artifacts have politics. The essay that grounds the idea that a design is never neutral.",
    },
  },
  {
    title: "Free Software, Free Society",
    author: "Richard Stallman",
    year: "2002",
    kind: "book",
    theme: "philosophy-of-technology",
    href: "https://www.gnu.org/philosophy/fsfs/rms-essays.pdf",
    note: {
      it: "Stallman raccolto in volume: perché il codice leggibile è una questione politica, non tecnica.",
      en: "Stallman collected: why readable code is a political question, not a technical one.",
    },
  },
  {
    title: "The Cathedral and the Bazaar",
    author: "Eric S. Raymond",
    year: "1999",
    kind: "book",
    theme: "philosophy-of-technology",
    href: "http://www.catb.org/~esr/writings/cathedral-bazaar/",
    note: {
      it: "Come la collaborazione aperta batte il modello chiuso. Originale datato, argomento ancora attuale.",
      en: "How open collaboration beats the closed model. A dated original, still a current argument.",
    },
  },

  // — Critical thinking & information ——————————————————————
  {
    title: "Lateral Reading: Reading Less and Learning More",
    author: "Sam Wineburg, Sarah McGrew",
    year: "2017",
    kind: "paper",
    theme: "critical-thinking",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3048994",
    note: {
      it: "Dimostra che i fact-checker leggono in modo laterale, aprendo più schede invece di fidarsi del sito: base empirica per esercizi pratici.",
      en: "Shows that fact-checkers read laterally, opening new tabs instead of trusting a site: a solid empirical basis for practical exercises.",
    },
  },
  {
    title: "Critical Ignoring as a Core Competence",
    author: "Kozyreva, Wineburg, Lewandowsky, Hertwig",
    year: "2023",
    kind: "paper",
    theme: "critical-thinking",
    href: "https://journals.sagepub.com/doi/10.1177/09637214221121570",
    note: {
      it: "Perché la competenza chiave nell’economia dell’attenzione è ignorare criticamente: scartare le fonti a basso valore, non solo verificarle.",
      en: "Why critical ignoring matters in the attention economy: discarding low-value sources, not just verifying them.",
    },
  },
  {
    title: "Web Literacy for Student Fact-Checkers",
    author: "Mike Caulfield",
    year: "2017",
    kind: "book",
    theme: "critical-thinking",
    href: "https://webliteracy.pressbooks.com/",
    note: {
      it: "Manuale aperto con esercizi concreti su fact-checking, bias di conferma e ricerca upstream: da cui estrarre attività per il mentee.",
      en: "An open textbook with concrete exercises on fact-checking, confirmation bias, and going upstream: a source of mentoring activities.",
    },
  },
  {
    title: "SIFT (The Four Moves)",
    author: "Mike Caulfield",
    year: "2019",
    kind: "tool",
    theme: "critical-thinking",
    href: "https://hapgood.us/2019/06/19/sift-the-four-moves/",
    note: {
      it: "Le quattro mosse (Stop, Investigate, Find coverage, Trace) in una pagina: una checklist da ripetere finché diventa automatica.",
      en: "The four moves (Stop, Investigate, Find coverage, Trace) on one page: a checklist to drill until it becomes automatic.",
    },
  },
  {
    title: "The Debunking Handbook 2020",
    author: "Lewandowsky, Cook et al.",
    year: "2020",
    kind: "tool",
    theme: "critical-thinking",
    href: "https://www.climatechangecommunication.org/debunking-handbook-2020/",
    note: {
      it: "Consenso scientifico su come correggere la disinformazione senza rafforzarla (truth sandwich): utile per comunicare, non solo per verificare.",
      en: "The scientific consensus on correcting misinformation without reinforcing it (truth sandwich): useful to communicate, not just to verify.",
    },
  },
  {
    title: "Calling Bullshit",
    author: "Carl T. Bergstrom, Jevin D. West",
    year: "2017",
    kind: "media",
    theme: "critical-thinking",
    href: "https://callingbullshit.org/",
    note: {
      it: "Corso aperto di ragionamento sui dati: perfetto per smontare grafici e statistiche ingannevoli con esempi reali.",
      en: "An open course on data reasoning: ideal for debunking misleading charts and statistics with real examples.",
    },
  },

  // — Digital rights & governance ——————————————————————————
  {
    title: "EU regulations on algorithmic decision-making and a “right to explanation”",
    author: "Bryce Goodman, Seth Flaxman",
    year: "2016",
    kind: "paper",
    theme: "digital-rights",
    href: "https://arxiv.org/abs/1606.08813",
    note: {
      it: "Testo di riferimento sul diritto alla spiegazione nel GDPR: come tradurre obblighi normativi in requisiti tecnici di interpretabilità.",
      en: "A reference text on the GDPR right to explanation: how legal duties translate into technical requirements for interpretability.",
    },
  },
  {
    title: "Anatomy of an AI System",
    author: "Kate Crawford, Vladan Joler",
    year: "2018",
    kind: "paper",
    theme: "digital-rights",
    href: "https://anatomyof.ai/",
    note: {
      it: "Mappa aperta di un singolo dispositivo AI, dall’estrazione allo smaltimento: svela catene di lavoro e risorse dietro la sorveglianza quotidiana.",
      en: "An open map of a single AI device, from extraction to disposal: it reveals the chains of labour and resources behind everyday surveillance.",
    },
  },
  {
    title: "The EU Artificial Intelligence Act",
    author: "Future of Life Institute",
    year: "2024",
    kind: "tool",
    theme: "digital-rights",
    href: "https://artificialintelligenceact.eu/",
    note: {
      it: "Testo dell’AI Act navigabile, con riassunti e compliance checker: utile per ragionare su classificazione del rischio e obblighi concreti.",
      en: "A navigable AI Act with summaries and a compliance checker: useful for reasoning about risk classification and concrete obligations.",
    },
  },
  {
    title: "noyb – None of Your Business",
    author: "NOYB – European Center for Digital Rights",
    year: "2017",
    kind: "tool",
    theme: "digital-rights",
    href: "https://noyb.eu/en",
    note: {
      it: "Le cause di Max Schrems mostrano il GDPR in azione: adatto per seguire casi reali su consenso, tracciamento e autorità di protezione dati.",
      en: "Max Schrems’s cases show the GDPR in action: good for following real cases on consent, tracking, and data protection authorities.",
    },
  },
  {
    title: "Ranking Digital Rights",
    author: "Ranking Digital Rights",
    kind: "tool",
    theme: "digital-rights",
    href: "https://rankingdigitalrights.org/",
    note: {
      it: "Indice che valuta le politiche di privacy e libertà d’espressione delle grandi piattaforme: per confrontare le aziende con criteri pubblici.",
      en: "An index ranking the privacy and free-expression policies of major platforms: comparing companies against public criteria.",
    },
  },
  {
    title: "The Tech Policy Press Podcast",
    author: "Tech Policy Press · podcast",
    kind: "media",
    theme: "digital-rights",
    href: "https://www.techpolicy.press/podcast/",
    note: {
      it: "Podcast settimanale su governance tecnologica e diritti digitali: ascolto mirato per seguire il dibattito regolatorio internazionale.",
      en: "A weekly podcast on tech governance and digital rights: targeted listening to follow the international regulatory debate.",
    },
  },

  // — Open source & the commons ————————————————————————————
  {
    title: "The GNU Manifesto",
    author: "Richard Stallman",
    year: "1985",
    kind: "paper",
    theme: "open-source",
    href: "https://www.gnu.org/gnu/manifesto.html",
    note: {
      it: "Manifesto fondativo del software libero: utile per discutere la differenza tra libertà d’uso e «open source».",
      en: "The founding manifesto of free software: useful to discuss the difference between user freedom and “open source”.",
    },
  },
  {
    title: "Producing Open Source Software",
    author: "Karl Fogel",
    year: "2020",
    kind: "book",
    theme: "open-source",
    href: "https://producingoss.com/",
    note: {
      it: "Guida libera e pratica a governance, comunità e sostenibilità dei progetti: ottima per ragionare su regole e manutenzione nel tempo.",
      en: "A free, practical guide to governance, community, and project sustainability: excellent for reasoning about rules and long-term maintenance.",
    },
  },
  {
    title: "Roads and Bridges",
    author: "Nadia Eghbal · Ford Foundation",
    year: "2016",
    kind: "book",
    theme: "open-source",
    href: "https://www.fordfoundation.org/work/learning/research-reports/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/",
    note: {
      it: "Rapporto sul lavoro invisibile che regge l’infrastruttura digitale: serve a parlare di sostenibilità dei maintainer e di beni comuni.",
      en: "A report on the invisible labour sustaining digital infrastructure: it frames maintainer sustainability and the digital commons.",
    },
  },
  {
    title: "Choose an Open Source License",
    author: "GitHub",
    kind: "tool",
    theme: "open-source",
    href: "https://choosealicense.com/",
    note: {
      it: "Strumento interattivo su licenze permissive e copyleft (GPL, AGPL): pratico per confrontare scelte di licenza su casi reali.",
      en: "An interactive tool on permissive and copyleft licences (GPL, AGPL): practical for comparing licence choices on real cases.",
    },
  },
  {
    title: "Public Money, Public Code",
    author: "Free Software Foundation Europe",
    year: "2017",
    kind: "tool",
    theme: "open-source",
    href: "https://publiccode.eu/",
    note: {
      it: "Campagna con lettera aperta perché il software finanziato da denaro pubblico sia libero: spunto su beni comuni e appalti pubblici.",
      en: "A campaign with an open letter to make publicly funded software free: a prompt to discuss the commons and public procurement.",
    },
  },
  {
    title: "The Changelog",
    author: "Adam Stacoviak, Jerod Santo · podcast",
    kind: "media",
    theme: "open-source",
    href: "https://changelog.com/podcast",
    note: {
      it: "Podcast settimanale su software open source e manutenzione: ascolto mirato per seguire dibattiti attuali su governance e sostenibilità.",
      en: "A weekly podcast on open-source software and maintenance: targeted listening to follow current debates on governance and sustainability.",
    },
  },

  // — Work & technology ————————————————————————————————————
  {
    title: "The Future of Employment",
    author: "Carl Benedikt Frey, Michael A. Osborne",
    year: "2013",
    kind: "paper",
    theme: "work-and-technology",
    href: "https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf",
    note: {
      it: "Lo studio che ha definito il dibattito sul rischio di automazione (≈47% dei lavori USA): introduce stime quantitative e i loro limiti metodologici.",
      en: "The paper that framed the automation-risk debate (≈47% of US jobs): an entry point to quantitative estimates and their methodological limits.",
    },
  },
  {
    title: "Automation and New Tasks",
    author: "Daron Acemoglu, Pascual Restrepo",
    year: "2019",
    kind: "paper",
    theme: "work-and-technology",
    href: "https://www.aeaweb.org/articles?id=10.1257/jep.33.2.3",
    note: {
      it: "Modello economico che distingue sostituzione del lavoro e creazione di nuovi compiti: per ragionare su occupazione e salari senza catastrofismi.",
      en: "An economic model separating displacement from task reinstatement: reasoning about employment and wages beyond doom narratives.",
    },
  },
  {
    title: "On the Phenomenon of Bullshit Jobs",
    author: "David Graeber",
    year: "2013",
    kind: "paper",
    theme: "work-and-technology",
    href: "https://strikemag.org/bullshit-jobs/",
    note: {
      it: "Saggio provocatorio sui lavori percepiti come inutili: utile per discutere senso del lavoro, overwork e prestigio sociale delle professioni.",
      en: "A provocative essay on jobs people consider pointless: useful to discuss meaning, overwork, and the social prestige of professions.",
    },
  },
  {
    title: "Exploring Universal Basic Income",
    author: "Gentilini, Grosh, Rigolini, Yemtsov · World Bank",
    year: "2020",
    kind: "book",
    theme: "work-and-technology",
    href: "https://documents.worldbank.org/curated/en/993911574784667955/pdf/exploring-universal-basic-income-a-guide-to-navigating-concepts-evidence-and-practices.pdf",
    note: {
      it: "Guida open access e basata su dati al dibattito sul reddito di base: per distinguere i disegni di policy dalle prove empiriche.",
      en: "An open-access, evidence-based guide to the basic income debate: distinguishing policy designs from empirical evidence.",
    },
  },
  {
    title: "World Employment and Social Outlook 2021",
    author: "International Labour Organization",
    year: "2021",
    kind: "tool",
    theme: "work-and-technology",
    href: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@dgreports/@dcomm/@publ/documents/publication/wcms_771749.pdf",
    note: {
      it: "Rapporto globale su piattaforme digitali, condizioni dei gig worker e gestione algoritmica: base solida per discutere regolazione e tutele.",
      en: "A global report on digital platforms, gig-worker conditions, and algorithmic management: a solid basis for discussing regulation and protections.",
    },
  },
  {
    title: "Why are there still so many jobs?",
    author: "David Autor · TED",
    year: "2016",
    kind: "media",
    theme: "work-and-technology",
    href: "https://www.ted.com/talks/david_autor_why_are_there_still_so_many_jobs",
    note: {
      it: "Talk breve che mostra il paradosso di lungo periodo dell’occupazione: introduzione accessibile prima di letture più tecniche.",
      en: "A short talk showing the long-run paradox of employment: an accessible intro before more technical readings.",
    },
  },
];
