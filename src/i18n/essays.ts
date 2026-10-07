import type { Locale } from "./locales";
import { essaysMoreEn, essaysMoreIt } from "./essays-more";

export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export type Essay = {
  slug: string;
  /** ISO 8601 date */
  date: string;
  title: string;
  dek: string;
  body: readonly EssayBlock[];
  /** Canonical Substack URL when mirrored */
  substackHref?: string;
};

const essaysItBase: readonly Essay[] = [
  {
    slug: "confidence-is-not-verification",
    date: "2025-09-01",
    title: "La confidenza non è verifica",
    dek: "Un modello sicuro di sé non ha ancora dimostrato nulla. L'etica comincia dove una certezza si può rifiutare.",
    body: [
      {
        type: "p",
        text: "Abbiamo allenato una generazione di sistemi a parlare con sicurezza. L'interfaccia premia la scorrevolezza, la demo la velocità, la dashboard un numero verde. Lungo questa catena la certezza prende il posto della verità, e quasi nessuno se ne accorge.",
      },
      {
        type: "p",
        text: "Prendi una domanda di mutuo respinta da un modello. La risposta arriva in un secondo, senza un'esitazione, con un punteggio a due decimali. Chi può contestarla? Su quali basi, con quali prove, prima di quale decisione? Quasi sempre nessuno. La confidenza sta nel modello, mentre la verifica deve stare fuori: nei registri, nel diritto di obiezione, nelle stanze in cui un rifiuto ha ancora peso. Verificare è lento e non fa bella figura, quindi non succede da sé. Va costruito.",
      },
      {
        type: "p",
        text: "Per questo mi interessa l'infrastruttura. Un principio su una slide non ferma una pipeline. Uno strato di contestazione può farlo. Ma contestare presuppone di poter guardare: l'opacità non è un dettaglio tecnico, è una decisione su chi ha il diritto di vedere. Il software libero conta per questa ragione.",
      },
      {
        type: "p",
        text: "I filosofi nei team di prodotto servono, ma arrivano quasi sempre a roadmap già finanziata, e a quel punto la loro critica diventa una benedizione. Il lavoro che mi interessa viene prima: stabilire cosa si può affermare, cosa va mostrato, cosa deve restare indeciso. L'incertezza dichiarata non è un difetto del prodotto. È l'ultimo punto in cui qualcuno può ancora intervenire.",
      },
      {
        type: "p",
        text: "Il desiderio segue la stessa logica. Le piattaforme non si limitano a servire ciò che vogliamo: lo scrivono. Il mutuo negato è il caso estremo, il feed è quello quotidiano. Chiamo Debug dei Desideri questa lettura: la dipendenza come architettura, la sovranità come capacità di rifiutare una riscrittura del proprio volere. Anche qui vale la regola: si può rifiutare solo ciò che si può vedere, e solo se c'è qualcuno a cui dirlo.",
      },
      {
        type: "p",
        text: "Per questo progetto, scrivo, costruisco strumenti e tengo laboratori: un solo registro non basta. Un'etica impraticabile è arredo. Una pratica che nessuno può contestare è soltanto un'altra macchina sicura di sé.",
      },
    ],
  },
  {
    slug: "la-filosofia-in-busta-paga",
    date: "2026-07-01",
    title: "La filosofia in busta paga",
    dek: "Nella Silicon Valley i filosofi non mancano. Manca la prova che contino qualcosa.",
    substackHref:
      "https://giuseppeaceto.substack.com/p/la-filosofia-in-busta-paga",
    body: [
      {
        type: "p",
        text: "Le aziende tecnologiche più potenti del pianeta stanno assumendo filosofi a ritmo sostenuto, e il dato statistico citato dall’Economist è di per sé un piccolo scandalo intellettuale: oggi, negli Stati Uniti, un laureato in filosofia ha più probabilità di trovare lavoro di un laureato in informatica. La disciplina che per decenni è stata il bersaglio preferito di chi voleva umiliare gli studenti di Lettere si è trasformata nell’assicurazione sulla vita più richiesta della Silicon Valley.",
      },
      {
        type: "p",
        text: "Il motivo è semplice da enunciare e complicato da accettare: l’intelligenza artificiale pone, per usare le parole della stessa rivista, problemi “spinosi, il tipo preferito dai filosofi”. Cos’è la coscienza? Un modello linguistico può subire un torto morale? Cosa dobbiamo a un’entità di cui non sappiamo se provi qualcosa? Sono domande che un ingegnere non è addestrato a porsi, e che un’azienda quotata o prossima a quotarsi non può permettersi di lasciare senza risposta — non perché tema di sbagliare eticamente, ma perché teme di non avere una risposta pronta quando qualcuno glielo chiederà in un’audizione, in tribunale, o su un giornale.",
      },
      {
        type: "p",
        text: "Questi filosofi sono ancora filosofi, o sono diventati sottili mediatori tra credibilità accademica e necessità di business? Amanda Askell, dottorato a New York su questioni di etica dell’infinito, oggi guida l’allineamento della personalità di un chatbot. Joe Carlsmith, dottorato a Oxford, ha lavorato alla “costituzione” di un altro modello, un documento di ottantaquattro pagine che cita insieme Kant, la dichiarazione universale dei diritti umani e i termini di servizio di Apple — forse la sintesi più involontariamente comica del nostro tempo: l’imperativo categorico accanto all’accordo sulla privacy che nessuno legge mai. Henry Shevlin e Atoosa Kasirzadeh lavorano alla “prontezza” di DeepMind per l’AGI.",
      },
      {
        type: "quote",
        text: "Sam Altman ha dichiarato di aver consultato “centinaia di filosofi morali” per scrivere le regole di comportamento di ChatGPT, un’affermazione che nessun giornalista è mai riuscito a verificare chiedendo, banalmente, i nomi.",
      },
      {
        type: "p",
        text: "A questo punto bisogna chiedersi se quella critica abbia mai avuto conseguenze, se sia mai costata un lancio rimandato, una funzione tolta, un prodotto cambiato. Un’azienda può tollerare critici al proprio interno senza concedere loro alcun potere reale: il dissenso autorizzato è spesso la forma più sofisticata di controllo del dissenso, perché permette all’azienda di dire “vedete, abbiamo chi ci contraddice” mentre quella voce resta strutturalmente priva di leva. La domanda da porre a ogni filosofo aziendale non è “ti hanno mai zittito?” ma “hai mai vinto?” — e se la risposta è “non lo so, è confidenziale”, il sospetto è già una risposta.",
      },
      {
        type: "p",
        text: "C’è poi un secondo livello, più scomodo del primo. Edward Harcourt, filosofo a Oxford, ha parlato apertamente del rischio di ethics-washing: l’etica come verniciatura, non come architettura. Ma chi fa questo lavoro dentro le aziende risponderebbe (e con qualche ragione) che l’accusa di “decorazione” è troppo comoda, perché non riconosce mai il caso in cui il lavoro filosofico ha davvero contato. Forse è vero. Il problema è che, da fuori, non possiamo distinguere i due casi: l’opacità delle decisioni aziendali rende la domanda empiricamente irrisolvibile, e questa irrisolvibilità è già parte del problema. Una disciplina che chiede trasparenza al mondo dovrebbe poter esibire la propria.",
      },
      {
        type: "p",
        text: "C’è un’ironia storica che vale la pena ricordare. Per secoli la filosofia medievale è stata definita ancilla theologiae, ancella della teologia: libera di ragionare, ma solo fino al punto in cui la ragione confermava la fede. Oggi rischia di diventare ancella del capitale: libera di ragionare, ma solo fino al punto in cui la ragione conferma il modello di business. La differenza è che nessuno, nel Duecento, fingeva che la teologia fosse neutrale. Le aziende tecnologiche, invece, insistono nel presentare l’etica come ricerca pura, mentre ne pagano lo stipendio.",
      },
      {
        type: "p",
        text: "Questo non significa che questi filosofi siano in malafede, né che il loro lavoro sia inutile — sarebbe un’accusa pigra quanto l’apologia opposta. Significa solo che il valore del loro lavoro non si misura dalla loro buona fede individuale, che è quasi sempre genuina, ma da un dato strutturale che nessuna biografia personale può correggere: chi paga lo stipendio resta, alla fine, il pubblico a cui si deve rispondere per primo.",
      },
    ],
  },
  {
    slug: "make-people-addicted",
    date: "2026-06-07",
    title: "Make people addicted",
    dek: "La dipendenza come architettura.",
    substackHref: "https://giuseppeaceto.substack.com/p/make-people-addicted",
    body: [
      {
        type: "h2",
        text: "Come il linguaggio del tech ha smesso di nascondersi",
      },
      {
        type: "p",
        text: "Nel gergo del product management esistono parole che circolano da decenni nei corridoi delle grandi aziende tecnologiche senza mai comparire nei comunicati stampa. “Sticky”, letteralmente “appiccicoso”, è una di queste: descrive un prodotto che l’utente fatica ad abbandonare, che si incolla alle abitudini quotidiane, che genera dipendenza funzionale. Gli addetti ai lavori sanno benissimo cosa significa; i comunicati ufficiali parlano di “engagement”, “retention”, “time on platform”. La distanza tra il linguaggio interno e quello pubblico è una forma di igiene reputazionale: il riconoscimento implicito che certi obiettivi, detti apertamente, suonerebbero male.",
      },
      {
        type: "p",
        text: "Microsoft ha infranto questa convenzione. Un documento interno relativo a Scout (il nuovo assistente AI integrato in Microsoft 365, annunciato al Build 2026) descrive la strategia di lancio in tre fasi. La prima si chiama, senza perifrasi, “Make people addicted” — non “build daily habits”, non “increase engagement”, non “create indispensable workflows”. Dipendenza, direttamente. Il piano prevede di costruire un’app capace di generare questa dipendenza prima ancora di espanderne le funzionalità, sulla logica che un utente agganciato è un utente convertibile in qualunque cosa venga dopo.",
      },
      {
        type: "p",
        text: "La reazione di Satya Nadella, una volta che il documento è diventato pubblico grazie a 404 Media, merita di essere esaminata con attenzione. Il CEO ha comunicato allo staff di non sapere “cosa fosse questo documento o chi lo stesse scrivendo”, definendolo “nonsense” trapelato senza ragione. Un’affermazione curiosa, considerando che il documento era firmato da Omar Shahine, il dirigente a capo del progetto Scout, che aveva scritto pubblicamente del prodotto sul suo blog e su LinkedIn, e il cui nome compare nell’annuncio ufficiale di Microsoft, oltre che da un secondo executive, Jakob Werner. La distanza presa da Nadella rivela, involontariamente, qualcosa di più interessante di quanto intendesse comunicare: o il CEO non sapeva cosa stesse facendo uno dei suoi team più visibili, oppure sapeva benissimo e ha scelto la negazione come risposta comunicativa. Entrambe le ipotesi sono, a modo loro, illuminanti.",
      },
      { type: "h2", text: "Dipendenza come ingegneria" },
      {
        type: "p",
        text: "Per capire perché questa storia va oltre la gaffe aziendale, è utile considerare cosa significa progettare intenzionalmente per la dipendenza nel contesto specifico dell’intelligenza artificiale.",
      },
      {
        type: "p",
        text: "Gli strumenti digitali hanno sempre cercato di occupare più spazio possibile nella vita degli utenti. I social network hanno costruito loop di notifiche e scroll infiniti ispirandosi esplicitamente alle slot machine: la ricompensa variabile intermittente è il meccanismo più efficace per ancorare un comportamento. Le app di messaggistica hanno ingegnerizzato il senso di urgenza attraverso le spunte di lettura. Le piattaforme di streaming hanno eliminato gli spazi vuoti tra un episodio e l’altro per rendere la scelta di smettere un atto attivo invece che passivo. In tutti questi casi, l’obiettivo era intercettare l’attenzione umana e trasformarla in tempo trascorso sulla piattaforma, poi monetizzabile in vari modi.",
      },
      {
        type: "p",
        text: "Scout rappresenta un salto qualitativo rispetto a questo modello, e la differenza è strutturale. Un assistente AI come quello descritto nei documenti di Microsoft — capace di gestire il calendario, smistare la posta, preparare riunioni, eseguire workflow ricorrenti, continuare a lavorare anche quando l’utente non è davanti allo schermo — non compete per l’attenzione. Si propone come sostituto parziale dell’agency. L’utente non trascorre più tempo su Scout: delega a questo strumento parti crescenti della propria capacità di organizzare, pianificare e agire. La dipendenza non è dall’interfaccia ma dalla funzione, ed è una dipendenza infinitamente più profonda, perché smettere di usare lo strumento non significa annoiarsi o perdere intrattenimento: significa perdere la capacità di svolgere compiti che lo strumento ha gradualmente colonizzato.",
      },
      {
        type: "p",
        text: "Lisanne Bainbridge lo aveva descritto nel 1983, in un paper destinato a diventare un riferimento classico degli studi sull’automazione: automatizzare i compiti routinari non libera l’operatore, lo priva delle occasioni ordinarie per mantenere competenze che restano necessarie nelle eccezioni. Le abilità manuali e cognitive si atrofizzano per mancanza d’uso e, quando il sistema fallisce, l’operatore deve intervenire con capacità che non ha più praticato. Il paradosso si applica ai piloti di linea rispetto all’autopilota; si applica, con la stessa struttura, al knowledge worker rispetto all’assistente AI. Uno studio di Microsoft stessa, presentato al CHI 2025, cita esplicitamente Bainbridge: “un’ironia chiave dell’automazione è che, meccanizzando i compiti routinari, si priva l’utente delle opportunità ordinarie di esercitare il proprio giudizio e rafforzare la propria muscolatura cognitiva, lasciandola atrofizzata”.",
      },
      {
        type: "p",
        text: "Questo è il significato della frase “build the skill and tool ecosystem that makes people depend on it daily”, che compare nel documento accanto all’intestazione “Make people addicted”. Il progetto non è di rendere Scout piacevole o coinvolgente nel senso tradizionale, ma di rendere le persone funzionalmente incapaci di farne a meno.",
      },
      { type: "h2", text: "Il fossato che non si vede" },
      {
        type: "p",
        text: "Il punto è che “addicted” è semplicemente la traduzione onesta di quello che l’industria chiama moat, il fossato competitivo. In un mercato dove ogni grande azienda tecnologica sta lanciando assistenti AI con capacità simili, la differenziazione non avviene più principalmente sulla qualità del modello. Avviene sulla profondità dell’integrazione, sulla quantità di contesto accumulato, sulla difficoltà di trasferire altrove le proprie abitudini e i propri dati.",
      },
      {
        type: "p",
        text: "Ma c’è una differenza rispetto ai fossati competitivi tradizionali. Un brevetto esclude i concorrenti. Un effetto rete li rallenta. La dipendenza cognitiva fa qualcosa di più sottile: ridisegna le preferenze dell’utente dall’interno. Betsy Sparrow, in uno studio pubblicato su Science nel 2011, ha mostrato il meccanismo di base: quando le persone si aspettano di poter accedere a un’informazione in futuro, smettono di memorizzarla — memorizzano invece dove trovarla. Il cervello tratta lo strumento come farebbe con un collega esperto: smette di duplicare ciò che sa essere disponibile altrove. È un adattamento razionale, individualmente. Ma ha una conseguenza strutturale: dopo mesi in cui Scout ha gestito il tuo calendario, non è solo che cambiare strumento è scomodo. È che la tua capacità di gestire il calendario autonomamente si è redistribuita, le soglie di tolleranza si sono spostate, l’idea stessa di farne a meno è diventata cognitivamente costosa. Non sei più lo stesso utente che aveva scelto lo strumento: sei un utente che lo strumento ha, nel frattempo, parzialmente formato.",
      },
      {
        type: "p",
        text: "Questo è il moat più solido che esista. Non è costruito fuori dall’utente ma dentro di lui.",
      },
      { type: "h2", text: "L’utente come materiale grezzo" },
      {
        type: "p",
        text: "Esiste una tensione irrisolta al centro di quasi ogni prodotto AI consumer degli ultimi anni. Da una parte, questi strumenti offrono un’utilità genuina e in certi contesti straordinaria: riducono il tempo necessario per compiti ripetitivi, amplificano capacità cognitive, rendono accessibili risorse prima disponibili solo a chi poteva permettersi consulenze specializzate. Dall’altra, il modello di business che ne sostiene lo sviluppo richiede scala, lock-in e capacità di monetizzare nel tempo l’utente acquisito.",
      },
      {
        type: "p",
        text: "Questa tensione non è nuova: esiste da quando Google ha capito che la posta elettronica gratuita era un ottimo modo per costruire profili pubblicitari. Ma si manifesta in modo più acuto con gli assistenti AI perché la natura del dato prodotto è qualitativamente diversa. Quando Scout gestisce il tuo calendario, sa non solo dove sei ogni giorno ma anche con chi, per quale scopo, quanto peso dai a certi impegni rispetto ad altri. Quando smista la tua posta, apprende le tue priorità, le tue relazioni, i tuoi ritardi abituali. Quando prepara le tue riunioni, costruisce una mappa della tua vita professionale che nessun altro strumento precedente aveva mai avuto la granularità per produrre.",
      },
      {
        type: "p",
        text: "La dipendenza, in questo contesto, è anche il meccanismo che garantisce la continuità del flusso di dati. Un utente che abbandona lo strumento dopo sei mesi porta via con sé poco. Un utente che lo usa per tre anni ha contribuito alla costruzione di un modello comportamentale personale di valore inestimabile e ha sviluppato abitudini sufficientemente radicate da rendere la migrazione verso un competitor genuinamente costosa.",
      },
      { type: "h2", text: "Cosa ci dice questo di noi" },
      {
        type: "p",
        text: "Il documento di Microsoft è stato scritto per un prodotto destinato ai lavoratori della conoscenza in settori come finanza, diritto e risorse umane: una popolazione istruita, abituata agli strumenti digitali, capace in teoria di riconoscere i pattern di design manipolativo. Ed è esattamente su questa popolazione che la strategia è giudicata più efficace. Chi ha più compiti da delegare, più flussi da automatizzare, più riunioni da preparare, è chi ha più da guadagnare nell’immediato e più da perdere nel lungo termine. La dipendenza funzionale si annida con precisione nei punti dove l’utilità è più alta.",
      },
      {
        type: "p",
        text: "In economia esiste il concetto di rendita di posizione: il vantaggio che deriva non da ciò che produci ma da dove sei situato, da quale accesso controlli. L’industria tecnologica ha trovato nel corpo delle abitudini cognitive umane qualcosa di analogo — una rendita che non dipende da brevetti o barriere regolamentari, ma dalla difficoltà crescente, per l’utente, di ricordare come funzionava prima.",
      },
      {
        type: "quote",
        text: "Scout non è necessariamente il primo prodotto a perseguire questa logica. È il primo, in questo ciclo, ad averla scritta in un documento di strategia senza il filtro del linguaggio di prodotto. E questo, di per sé, è già informazione.",
      },
    ],
  },
];

const essaysEnBase: readonly Essay[] = [
  {
    slug: "confidence-is-not-verification",
    date: "2025-09-01",
    title: "Confidence is not verification",
    dek: "A model sure of itself has not yet proved anything. Ethics begins where a certainty can be refused.",
    body: [
      {
        type: "p",
        text: "We have trained a generation of systems to speak with certainty. The interface rewards fluency, the demo rewards speed, the dashboard rewards a green number. Along that chain, certainty takes the place of truth, and almost no one notices.",
      },
      {
        type: "p",
        text: "Take a mortgage application rejected by a model. The answer arrives in a second, without hesitation, with a score to two decimal places. Who can contest it? On what grounds, with what evidence, before which decision? Almost always, no one. Confidence sits inside the model, while verification has to stand outside it: in the logs, in the right to object, in the rooms where a refusal still carries weight. Verification is slow and will not flatter the demo, so it does not happen on its own. It has to be built.",
      },
      {
        type: "p",
        text: "This is why infrastructure matters to me. A principle on a slide does not stop a pipeline. A layer of contestation can. But contestation assumes you can look: opacity is not a technical detail, it is a decision about who is allowed to see. Free software matters for that reason.",
      },
      {
        type: "p",
        text: "Philosophers inside product teams are useful, but they almost always arrive once the roadmap is already funded, and by then their critique becomes a blessing. The work I care about comes earlier: deciding what may be claimed, what must be shown, and what has to remain undecided. Declared uncertainty is not a product flaw. It is the last point at which someone can still intervene.",
      },
      {
        type: "p",
        text: "Desire follows the same logic. Platforms do not merely serve what we want; they write it. The denied mortgage is the extreme case; the feed is the everyday one. I call this reading Debug dei Desideri: addiction as architecture, sovereignty as the capacity to refuse a rewrite of one's own wanting. The same rule holds here: you can refuse only what you can see, and only if there is someone to say it to.",
      },
      {
        type: "p",
        text: "That is why I design, write, build tools, and keep laboratories: one register is never enough. Ethics that cannot be practiced is décor. A practice no one can contest is only another machine sure of itself.",
      },
    ],
  },
  {
    slug: "la-filosofia-in-busta-paga",
    date: "2026-07-01",
    title: "Philosophy on the payroll",
    dek: "Silicon Valley is not short of philosophers. It is short of proof that they matter.",
    substackHref:
      "https://giuseppeaceto.substack.com/p/la-filosofia-in-busta-paga",
    body: [
      {
        type: "p",
        text: "The most powerful technology companies on the planet are hiring philosophers at a steady clip, and the statistic cited by The Economist is itself a small intellectual scandal: today, in the United States, a philosophy graduate is more likely to find work than a computer-science graduate. The discipline that for decades was the favourite target of people who liked to humiliate humanities students has become Silicon Valley’s most sought-after life insurance.",
      },
      {
        type: "p",
        text: "The reason is easy to state and hard to accept: artificial intelligence poses, in the magazine’s own words, “thorny problems, the kind philosophers prefer.” What is consciousness? Can a language model suffer a moral wrong? What do we owe an entity we cannot tell whether it feels anything? These are questions an engineer is not trained to ask, and that a public company — or one about to go public — cannot afford to leave unanswered, not because it fears being ethically wrong, but because it fears having no answer ready when someone asks in a hearing, in court, or in a newspaper.",
      },
      {
        type: "p",
        text: "Are these philosophers still philosophers, or have they become subtle mediators between academic credibility and business necessity? Amanda Askell, with a New York doctorate on ethics of infinity, now leads personality alignment for a chatbot. Joe Carlsmith, Oxford doctorate, worked on another model’s “constitution” — an eighty-four-page document that cites Kant, the Universal Declaration of Human Rights, and Apple’s terms of service together, perhaps the most involuntarily comic synthesis of our time: the categorical imperative beside the privacy agreement nobody reads. Henry Shevlin and Atoosa Kasirzadeh work on DeepMind’s “readiness” for AGI.",
      },
      {
        type: "quote",
        text: "Sam Altman has claimed to have consulted “hundreds of moral philosophers” to write ChatGPT’s behavioural rules — a claim no journalist has ever managed to verify by simply asking for the names.",
      },
      {
        type: "p",
        text: "At this point one has to ask whether that critique has ever had consequences: whether it has ever cost a delayed launch, a removed feature, a changed product. A company can tolerate internal critics without granting them any real power. Authorised dissent is often the most sophisticated form of controlling dissent, because it lets the company say “see, we have people who contradict us” while that voice remains structurally without leverage. The question to put to every corporate philosopher is not “have they ever silenced you?” but “have you ever won?” — and if the answer is “I don’t know, it’s confidential,” the suspicion is already an answer.",
      },
      {
        type: "p",
        text: "There is a second, more uncomfortable level. Edward Harcourt, a philosopher at Oxford, has spoken openly about the risk of ethics-washing: ethics as varnish, not architecture. Those who do this work inside companies would reply — and with some reason — that the charge of “decoration” is too convenient, because it never recognises the case where philosophical work genuinely counted. Perhaps that is true. The problem is that, from outside, we cannot tell the two cases apart: the opacity of corporate decisions makes the question empirically unresolvable, and that unresolvability is already part of the problem. A discipline that asks the world for transparency should be able to show its own.",
      },
      {
        type: "p",
        text: "There is a historical irony worth remembering. For centuries medieval philosophy was called ancilla theologiae, handmaid of theology: free to reason, but only up to the point where reason confirmed the faith. Today it risks becoming the handmaid of capital: free to reason, but only up to the point where reason confirms the business model. The difference is that no one in the thirteenth century pretended theology was neutral. Technology companies, by contrast, insist on presenting ethics as pure research while paying its salary.",
      },
      {
        type: "p",
        text: "This does not mean these philosophers are acting in bad faith, nor that their work is useless — that would be as lazy an accusation as the opposite apology. It means only that the value of their work is not measured by their individual good faith, which is almost always genuine, but by a structural fact no personal biography can correct: whoever pays the salary remains, in the end, the audience that must be answered first.",
      },
    ],
  },
  {
    slug: "make-people-addicted",
    date: "2026-06-07",
    title: "Make people addicted",
    dek: "Addiction as architecture.",
    substackHref: "https://giuseppeaceto.substack.com/p/make-people-addicted",
    body: [
      {
        type: "h2",
        text: "When tech language stopped hiding",
      },
      {
        type: "p",
        text: "In product-management jargon there are words that have circulated for decades in the corridors of big tech companies without ever appearing in press releases. “Sticky” is one of them: it describes a product the user struggles to leave, that sticks to daily habits, that generates functional addiction. Insiders know exactly what it means; official statements talk about “engagement,” “retention,” “time on platform.” The gap between internal and public language is a form of reputational hygiene: the implicit recognition that some goals, said out loud, would sound bad.",
      },
      {
        type: "p",
        text: "Microsoft broke that convention. An internal document about Scout (the new AI assistant in Microsoft 365, announced at Build 2026) describes a three-phase launch strategy. The first is called, without euphemism, “Make people addicted” — not “build daily habits,” not “increase engagement,” not “create indispensable workflows.” Addiction, directly. The plan is to build an app that can generate that addiction before expanding its features, on the logic that a hooked user is a user convertible into whatever comes next.",
      },
      {
        type: "p",
        text: "Satya Nadella’s reaction, once the document became public via 404 Media, deserves close attention. The CEO told staff he did not know “what this document was or who was writing it,” calling it “nonsense” leaked for no reason. A curious claim, given that the document was signed by Omar Shahine, the executive heading Scout, who had written publicly about the product on his blog and LinkedIn, and whose name appears in Microsoft’s official announcement — along with a second executive, Jakob Werner. Nadella’s distancing reveals, involuntarily, something more interesting than he meant to communicate: either the CEO did not know what one of his most visible teams was doing, or he knew perfectly well and chose denial as the communications response. Both hypotheses are, in their way, illuminating.",
      },
      { type: "h2", text: "Addiction as engineering" },
      {
        type: "p",
        text: "To see why this story goes beyond a corporate gaffe, it helps to ask what it means to design intentionally for addiction in the specific context of artificial intelligence.",
      },
      {
        type: "p",
        text: "Digital tools have always sought to occupy as much of users’ lives as possible. Social networks built notification loops and infinite scroll explicitly inspired by slot machines: intermittent variable reward is the most effective mechanism for anchoring behaviour. Messaging apps engineered urgency through read receipts. Streaming platforms removed the gaps between episodes so that stopping became an active choice rather than a passive one. In every case, the goal was to intercept human attention and turn it into time on platform, then monetisable in various ways.",
      },
      {
        type: "p",
        text: "Scout represents a qualitative leap from that model, and the difference is structural. An AI assistant like the one described in Microsoft’s documents — able to manage the calendar, sort mail, prepare meetings, run recurring workflows, keep working when the user is not at the screen — does not compete for attention. It offers itself as a partial substitute for agency. The user no longer spends more time on Scout: they delegate growing parts of their capacity to organise, plan, and act. The addiction is not to the interface but to the function, and it is infinitely deeper, because quitting the tool does not mean boredom or lost entertainment: it means losing the ability to perform tasks the tool has gradually colonised.",
      },
      {
        type: "p",
        text: "Lisanne Bainbridge described this in 1983, in a paper that became a classic of automation studies: automating routine tasks does not free the operator; it deprives them of ordinary occasions to maintain skills that remain necessary in exceptions. Manual and cognitive abilities atrophy from lack of use, and when the system fails the operator must intervene with capacities they no longer practise. The paradox applies to airline pilots and autopilot; it applies, with the same structure, to the knowledge worker and the AI assistant. A Microsoft study presented at CHI 2025 cites Bainbridge explicitly: “a key irony of automation is that by mechanising routine tasks, you deprive the user of ordinary opportunities to exercise judgement and strengthen cognitive musculature, leaving it atrophied.”",
      },
      {
        type: "p",
        text: "That is the meaning of the phrase “build the skill and tool ecosystem that makes people depend on it daily,” which appears in the document beside the heading “Make people addicted.” The project is not to make Scout pleasant or engaging in the traditional sense, but to make people functionally unable to do without it.",
      },
      { type: "h2", text: "The moat you cannot see" },
      {
        type: "p",
        text: "The point is that “addicted” is simply the honest translation of what the industry calls a moat. In a market where every major tech company is launching AI assistants with similar capabilities, differentiation no longer happens mainly on model quality. It happens on depth of integration, amount of accumulated context, difficulty of moving habits and data elsewhere.",
      },
      {
        type: "p",
        text: "But there is a difference from traditional competitive moats. A patent excludes competitors. A network effect slows them. Cognitive addiction does something subtler: it redesigns the user’s preferences from within. Betsy Sparrow, in a 2011 Science study, showed the basic mechanism: when people expect to be able to access information later, they stop memorising it — they memorise where to find it instead. The brain treats the tool as it would an expert colleague: it stops duplicating what it knows is available elsewhere. Individually that is rational. Structurally it means that after months of Scout managing your calendar, switching tools is not merely inconvenient. Your capacity to manage the calendar yourself has been redistributed; tolerance thresholds have shifted; the very idea of doing without has become cognitively costly. You are no longer the same user who chose the tool: you are a user the tool has, in the meantime, partially formed.",
      },
      {
        type: "p",
        text: "This is the most solid moat there is. It is not built outside the user but inside them.",
      },
      { type: "h2", text: "The user as raw material" },
      {
        type: "p",
        text: "There is an unresolved tension at the centre of almost every consumer AI product of recent years. On one side, these tools offer genuine — sometimes extraordinary — utility: they cut time on repetitive tasks, amplify cognitive capacity, make resources available that once required specialist consultancy. On the other, the business model that funds their development requires scale, lock-in, and the ability to monetise the acquired user over time.",
      },
      {
        type: "p",
        text: "This tension is not new: it has existed since Google realised free email was an excellent way to build advertising profiles. But it shows up more sharply with AI assistants because the nature of the data produced is qualitatively different. When Scout manages your calendar, it knows not only where you are each day but with whom, for what purpose, how much weight you give some commitments over others. When it sorts your mail, it learns your priorities, relationships, habitual delays. When it prepares your meetings, it builds a map of your professional life at a granularity no previous tool had.",
      },
      {
        type: "p",
        text: "Addiction, in this context, is also the mechanism that guarantees continuity of the data flow. A user who abandons the tool after six months takes little with them. A user who uses it for three years has contributed to a behavioural model of immense personal value and has developed habits rooted enough to make migration to a competitor genuinely costly.",
      },
      { type: "h2", text: "What this says about us" },
      {
        type: "p",
        text: "The Microsoft document was written for a product aimed at knowledge workers in finance, law, and human resources: an educated population, used to digital tools, theoretically able to recognise manipulative design patterns. And it is exactly on this population that the strategy is judged most effective. Whoever has more tasks to delegate, more flows to automate, more meetings to prepare, has more to gain in the short term and more to lose in the long term. Functional addiction nests precisely where utility is highest.",
      },
      {
        type: "p",
        text: "Economics has the concept of positional rent: advantage that comes not from what you produce but from where you sit, from which access you control. The technology industry has found something analogous in the body of human cognitive habits — a rent that does not depend on patents or regulatory barriers, but on the user’s growing difficulty in remembering how things worked before.",
      },
      {
        type: "quote",
        text: "Scout is not necessarily the first product to pursue this logic. It is the first, in this cycle, to have written it into a strategy document without the filter of product language. And that, in itself, is already information.",
      },
    ],
  },
];

const essaysIt: readonly Essay[] = [
  ...essaysItBase,
  ...(essaysMoreIt as unknown as Essay[]),
];

const essaysEn: readonly Essay[] = [
  ...essaysEnBase,
  ...(essaysMoreEn as unknown as Essay[]),
];

const byLocale: Record<Locale, readonly Essay[]> = {
  it: essaysIt,
  en: essaysEn,
};

export function getEssays(locale: Locale): readonly Essay[] {
  return [...byLocale[locale]].sort((a, b) => b.date.localeCompare(a.date));
}

export function getEssay(locale: Locale, slug: string): Essay | undefined {
  return byLocale[locale].find((essay) => essay.slug === slug);
}

export function getEssaySlugs(): string[] {
  return essaysIt.map((essay) => essay.slug);
}
