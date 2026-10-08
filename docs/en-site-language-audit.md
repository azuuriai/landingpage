# Sprach- und Positionierungsaudit der englischen Site (/en)

Stand: 8. Oktober 2026. Geprüft: `app/content/en/*` vollständig, `app/content/de/*` zum Vergleich, Platzierung über `home-spread.tsx`, `subpage-hero.tsx`, `detail-page.tsx`, `services-content.tsx`, `projects-overview.tsx`, `case-study-page.tsx`. Englische Zitate stehen wörtlich; Ersatzvorschläge sind in US-Englisch. Während des Audits lagen uncommittete Änderungen an `site.ts`, `home-spread.tsx` und `showcase.tsx` im Arbeitsverzeichnis (neue Byline auf der Startseite, Monitor-Rahmen); die Byline ist berücksichtigt, der Rest nicht.

## 1. Gesamteindruck

Die englische Site liest sich wie geschrieben, nicht wie übersetzt: US-Schreibweise durchgehend, typografische Anführungszeichen, kurze Sätze, direkte Anrede. Sie landet klar auf der Seite „polished“; die sprachlichen Befunde sind Feinschliff (rund zwanzig Kalkierungen, der deutsche Gedankenstrich-Stil im Fließtext, drei, vier schwache Labels), keine Peinlichkeiten. Ein Erstbesucher versteht in zehn Sekunden: ein Einzelentwickler in Wien, Web und iOS, bringt Dinge bis zum Launch. Die Case Studies sind das Beste an der Site: konkret, belegt, und mit den ehrlichsten AI-Sätzen, die ich auf einer Freelancer-Site gelesen habe.

Die größte Lücke ist nicht sprachlich, sondern die Positionierung auf der Services-Seite. Sie verkauft Websites zuerst, Web-Apps als Zweites und iOS als bedingten Zusatz („where it belongs, native on the iPhone“, drei dünne Bullets, der zweite native iOS-Beleg unter „Web apps“ abgelegt), während der Showcase das Gegenteil belegt: zwei von vier Einträgen sind native SwiftUI-Apps, und das stärkste Alleinstellungsmerkmal, Webprodukt und native App auf einem Backend, wird nirgends als Angebot formuliert. Zweite Lücke, für Upwork-Leser die größere: Die Site hat genau eine mögliche Kundenstimme (Indeed Unique) und zeigt sie nicht, und dass drei von vier Showcase-Projekten eigene Produkte sind, steht erst in den Case Studies, nicht in der Übersicht.

## 2. Was gut funktioniert

- „From idea to product. Launch included.“ und der Abschnitt „Launch included.“ mit fünf Schritten: Versprechen und Einlösung, in einem Wort verbunden.
- „iOS apps that feel like iOS.“ und „a website dressed up as an app“: ein Bild, konsistent auf Services, FAQ und iOS-Case-Study.
- AI-Transparenz, die beruhigt statt beunruhigt: „AI speeds up the research but publishes nothing on its own.“, „Which events match is decided by a transparent search, not by the language model.“, „The app drafts, a person decides and publishes.“
- Zahlen mit Quelle (24/22/182/279 bei Indeed Unique, 4/11/53/2 bei der Operations-App) und ehrliche Einschränkungen: „what you see here is the preview mode with sample data“.
- Die FAQ-Chips „Fixed price“, „You own the code“, „You work with me directly“: genau die drei Dinge, die ein Auftraggeber hören will.
- Contact-Ton: „Prefer email?“, „where is it stuck right now?“, „I reply personally.“
- Die Rechtsseiten: nüchtern, lesbar, „The German version is the legally binding one.“ oben.
- Die neue Startseiten-Byline „You work with me directly, from the first call to launch.“: ein Satz, der das FAQ-Versprechen „You work with me directly“ nach vorn holt.
- Konsistente US-Schreibung (inquiry, favorites, organize, optimized) und keine geraden Anführungszeichen.

## 3. Befunde

### 3.1 Sprachqualität

1. **Gedankenstrich-Stil aus dem Deutschen (Leerzeichen–Halbgeviert–Leerzeichen) im sichtbaren Text.** US-Englisch setzt einen geschlossenen Em-Dash oder ein anderes Satzzeichen.
   - `pages.ts`: „What I build – live and in use.“ → „What I build, live and in use.“ (oder: „Built, shipped and in use.“)
   - `pages.ts`: „Websites, web apps and native iOS apps – thought through, designed and shipped.“ → „Websites, web apps and native iOS apps: thought through, designed and shipped.“
   - `site.ts`: „Received – thank you!“ → „Got it, thank you!“
   - In aria-Labels und Meta-Titeln („{name} – see the case study“, „Case Study · Indeed Unique – Website with CMS and Eversports“) unkritisch; dort kann der Strich bleiben.

2. **„go-live“ neben „launch“.** Die Site hat „launch“ als Markenwort; „go-live“ ist IT-/Enterprise-Jargon und fällt ab.
   - `services.ts`: „From the first message to after go-live: one point of contact the whole way.“ → „From your first message to life after launch: one point of contact the whole way.“
   - `pages.ts` (FAQ): „You’re not left on your own after go-live.“ → „You’re not on your own after launch.“
   - `projects.ts`: „Concept, design, development, CMS, migration and go-live“ → „…, migration and launch“
   - Das Verb in `pages.ts` „before it can go live“ ist in Ordnung.

3. **Kalkierungen und deutsche Satzstellung.** Jede einzeln klein, zusammen der letzte Rest Übersetzungsgefühl.
   - `projects.ts`: „For the dance studio Indeed Unique in Vienna and Mödling I planned, designed and built the website from the ground up.“ → „I planned, designed and built the new website for Indeed Unique, a dance studio in Vienna and nearby Mödling, from the ground up.“
   - `case-studies.ts`: „Every step on the way is built, from the first filter to the suggestion others reply to.“ → „Every step of the way is covered, from the first filter to the suggestion your friends reply to.“
   - `services.ts`: „Interface, interaction and code come together, in short rounds with you.“ → „…, in short feedback loops with you.“
   - `case-studies.ts`: „Every page is individual and stays on brand.“ → „Every page is unique and stays on brand.“
   - `case-studies.ts`: „The mobile version was planned as an equal from the start, not added later“ → „The mobile version was designed as a first-class version from day one, not bolted on later“
   - `case-studies.ts`: „So there is no server, no database and no platform fees, but automated checks and backups instead.“ → „So there is no server, no database and no platform fees; instead, there are automated checks and backups.“
   - `case-studies.ts`: „Before a find enters the system, it is checked against what is already there.“ → „Before a new entry enters the system, it’s checked against what’s already there.“
   - `case-studies.ts`: „From iOS 26 on, it understands requests in natural language, right on the device.“ → „On iOS 26 and later, it understands natural-language requests, right on the device.“
   - `case-studies.ts`: „The fourth area is the newsletter editor. Data comes live from the backend; …“ → „Three of the four areas are shown here; the fourth is the newsletter editor. Data comes live from the backend; …“
   - `case-studies.ts`: „Post news, organize classes and team profiles, enter the dance year and class-free days.“ → „Post news, manage classes and team profiles, set the dance season and days off.“
   - `case-studies.ts`: „One menu entry per task“ → „One menu item per task“; „plus a full trial build“ → „plus a full test build“
   - `services.ts`: „Where it makes sense, CMS and hosting run on free plans, so you pay for the domain only“ → „Where the scope allows, CMS and hosting run on free tiers, so the domain is your only running cost“
   - `services.ts`: „AI features such as an assistant, where they bring real value“ → „…, where they actually add value“
   - `services.ts`: „and everything the release needs“ → „and everything an App Store release needs“
   - `projects.ts`: „with map, calendar and groups for evenings together“ → „with a map, a calendar and groups for planning nights out“
   - `projects.ts`: „a platform with reviewed recommendations, filters, suggestions for friends and an assistant“ → „a platform with curated recommendations, filters, plans you can propose to friends and an assistant“; ebenso „an assistant that looks for matching ideas“ → „that finds matching ideas“
   - `pages.ts`: „Three sentences are enough for a first assessment.“ → „Three sentences are enough for a first read.“
   - `pages.ts`: „First a check, then a clear scope.“ → „A quick check first, then a clear scope.“
   - `pages.ts` (FAQ): „You don’t necessarily need a separate design team if the scope fits the way I work.“ → „For projects of this size you usually don’t need a separate designer.“
   - `pages.ts` (About): „From teaching I bring the ability to recognize different levels of prior knowledge, structure complex material and make decisions easy to follow.“ → „Teaching taught me to read where someone is starting from, structure complex material and make decisions easy to follow.“
   - `pages.ts` (About): „Representing a project beyond the internet.“ → „Representing a project in person.“
   - `site.ts`: „building websites, web apps and native iOS apps through launch“ → „…all the way to launch“
   - `site.ts`: „The form is delivered through Web3Forms.“ → „This form is sent via Web3Forms.“

4. **Labels, die Germanismen sind.**
   - `pages.ts` About-Eyebrow „My path“ (Mein Weg) → „Background“
   - `pages.ts` Contact-Label „Good start“ (Guter Start) → „Start here“
   - `pages.ts` About-Label und Chip „Education“: gemeint ist Unterrichten; auf Englisch liest man die eigene Ausbildung. → „Teaching“
   - `site.ts` „Imprint“: deutsch-englische Konvention; US/UK-Leser kennen „Legal notice“. URL `/en/imprint` kann bleiben.

5. **Generische UI-Wörter an prominenter Stelle.**
   - `site.ts` „Learn more“ ist der Primärbutton jeder Showcase-Karte. → „Case study“ oder „Read the case study“
   - `site.ts` „Ask another question“ (Link unter der FAQ nach Contact; der Leser hat noch keine gestellt) → „Ask me directly“

6. **Terminologie.**
   - `site.ts` og.headline „Websites, web products and native iOS apps“ vs. überall sonst „web apps“ → „web apps“
   - `projects.ts` Showcase-Fakt „AI research with review“ liest sich wie Forschung über AI → „AI-assisted, human-reviewed“
   - `case-studies.ts` „Accounts any way you like“ → „Sign in any way you like“; „Research with duplicate check“ → „Research with duplicate detection“; „Roles checked in the backend“ → „Roles verified server-side“
   - `services.ts` Teaser „Frontend, backend, CMS and booking“ widerspricht der Indeed-Unique-Case-Study („no server, no database“); ein technischer Leser merkt das. → „Design, CMS, booking and launch“

### 3.2 Positionierung und Versprechen

1. **Homepage, zehn Sekunden.** „Web and iOS developer · Vienna, Austria“, „From idea to product. Launch included.“, Monitor und iPhone. Schluss des Besuchers: Einzelentwickler, Web plus Mobile, liefert. Das stimmt und ist klar. Die gerade ergänzte Byline unter der Headline (`site.ts`, uncommitted: „You work with me directly, from the first call to launch.“) ist gutes Englisch und beantwortet die Upwork-Frage „Mit wem arbeite ich?“; sie sagt aber nicht, *was* gebaut wird, und nicht, dass das remote geht. Zwei Lücken bleiben: (a) Kein Wort zu Remote/International; → Descriptor „Web and iOS developer · Vienna, Austria · Remote“ oder „Working remotely from Vienna, Austria“. (b) Das iPhone zeigt nur die Hälfte der Zeit eine native App (Vienna Event Radar), die andere Hälfte die mobile Website von Indeed Unique; ohne Beschriftung ist der iOS-Beleg auf der Startseite unsichtbar. Der unbeschriftete Showcase ist Absicht; aber der OG-Satz „Websites, web products and native iOS apps, built all the way to launch.“ ist genau die Subline, die der Startseite fehlt. Wenn der Einzelbildschirm eine Zeile hergibt, dort hin.

2. **Services-Hero macht iOS zur Bedingung.** `pages.ts`: „…visible on the web, testable with real users and, where it belongs, native on the iPhone.“ iOS ist grammatisch und logisch der Nachsatz. → „…a product people can actually use: on the web, as a real web app, and as a native iOS app when the product belongs on the iPhone. Often both, on one backend.“

3. **Reihenfolge und Gewicht auf Services.** Websites (4 Bullets, 1 Beleg) → Web apps (5 Bullets, 2 Belege) → iOS apps (3 Bullets, 1 Beleg). iOS ist das dünnste Angebot der Seite, bei dem stärksten Beleg im Showcase. Fix ohne etwas zu erfinden, alles durch die iOS-Case-Study gedeckt: „Widgets, Live Activities, Shortcuts and Spotlight“, „Sign in with Apple, push notifications and Apple Calendar“, „One backend shared with your web app, so accounts and data stay in sync“, „Unit and UI tests plus error monitoring“. Danach hat iOS sechs bis sieben Bullets. Die Reihenfolge der drei Abschnitte würde ich dann so lassen; die Gewichtung trägt.

4. **Die Operations-App liegt unter „Web apps“.** `services.ts` Proof „See the operations app“ steht beim Web-Apps-Abschnitt; die App ist natives SwiftUI. → Unter iOS apps verlinken („See the operations app, an internal iOS tool“); unter Web apps nur behalten, wenn die Zeile „Dashboards, back offices and automations“ einen Beleg braucht, dann mit iOS-Hinweis im Label.

5. **Der nicht verkaufte USP.** `case-studies.ts`: „Web and app share the backend, accounts and groups.“ Nirgends auf Services steht „web app and native iOS app from one backend“ als Angebot. Das ist der eine Satz, den reine Web-Shops und reine iOS-Entwickler nicht sagen können, und er ist belegt. → Ein Satz im Services-Hero (siehe 2) oder eine eigene Zeile im iOS-Abschnitt; wer die iOS-Positionierung langfristig will, braucht diesen Satz, nicht mehr iOS-Adjektive.

6. **Nach dem Showcase** liest der Besucher einen mobil-lastigen Produktbauer: zwei von vier Einträgen native iOS, die beiden Web-Einträge mit iPhone daneben. Der Showcase stützt die iOS-Richtung besser als die Services-Seite. Der Hebel liegt also auf Services, nicht im Showcase.

7. **Wo iOS heute stark ist:** FAQ Q2 („Do you build native iOS apps?“) und die iOS-Case-Study. Gut, aber die FAQ ist die letzte Station, nicht die erste.

### 3.3 Glaubwürdigkeit und Behauptungen

1. **Showcase-Übersicht verschweigt die Eigentümerschaft.** `pages.ts`: „Every project here is in use, three of them open to the public.“ Die Einträge sagen bewusst „what it does, not whose it is“. Ein Upwork-Leser nimmt vier Kundenprojekte an und liest dann eine Ebene tiefer „Product, design, development and operations are all mine.“ Diese Entdeckung kostet Vertrauen, das ein Satz vorher verdient hätte. → Ergänzen: „One of them was built for a client; the others are products I build and run myself, which is where the operations and iOS depth comes from.“ Eigene Produkte sind für Gründer ein Plus (Betrieb, Launch, Ops aus erster Hand), wenn man es so sagt.

2. **Die Operations-App anonymisiert die eigene Plattform.** `projects.ts`: „A private iPhone app for running a content platform“. Die Plattform ist Vienna Event Radar; die Anonymisierung wirkt ausweichend und verschenkt den Beleg. In `case-studies.ts` (VER, Backstage) steht „Admin app for the iPhone“ ohne Link. → „The private iPhone app I use to run Vienna Event Radar day to day: …“ und beidseitig verlinken.

3. **„Fixed price“ ist nicht gedeckt.** Chip in `pages.ts`; die Antwort auf die Kostenfrage sagt nur „That becomes a clear proposal with scope, price and next steps.“ → In der Antwort, sofern es stimmt: „Projects are quoted at a fixed price for a defined scope; anything beyond it is quoted separately. Through Upwork, hourly contracts are possible too.“

4. **„clients anywhere“ impliziert einen Kundenstamm, der nicht auf der Seite steht.** `pages.ts` (FAQ Q6 und Contact, wörtlich gleich): „I work remotely with clients anywhere, in English or German.“ → „I work remotely, in English or German, and location isn’t a constraint: calls fit European afternoons and US mornings (CET/CEST), everything else happens in writing, in your tools or mine.“

5. **Web-Apps-Bullet „Email, payments and integrations with other services“.** Zahlungen sind nirgends auf der Site belegt; das widerspricht dem eigenen Prinzip „Belege vor Fähigkeitslisten“. → Behalten als Fähigkeit oder abschwächen: „Email, newsletters and integrations with other services“. Niedrige Priorität.

6. **AI-Framing.** `pages.ts` (About): „Claude Code and ChatGPT make me faster; product logic, data flow, validation and delivery remain my responsibility.“ Ehrlich und gut. Für einen Auftraggeber fehlen Nutzen und Kontrolle: → „Claude Code and ChatGPT make me faster, so a smaller budget goes further; product logic, data flow, validation and delivery remain my responsibility, and nothing ships that I haven’t read and tested.“ Und: Der Satz gehört als Frage in die FAQ („Do you use AI tools?“), weil Upwork-Kunden genau das fragen; auf About schauen wenige.

7. **„Ask your Radar“ als Produktname.** In `projects.ts` (Showcase-Fakt „Assistant | Ask your Radar“, metaDescription „the “Ask your Radar” assistant“), `services.ts` (Alt-Text) und `case-studies.ts` (Titel) steht der erfundene Name; nur `case-studies.ts` löst auf: „An assistant, called “Frag dein Radar” in the app“. Wer die Plattform öffnet, findet einen deutschen Button. → Echten Namen mit Glosse bei der ersten Nennung pro Seite: „the “Frag dein Radar” (Ask your Radar) assistant“; Showcase-Fakt: „Assistant | Natural-language search (“Frag dein Radar”)“. Dasselbe für „Monday Radar“ (Montagsradar) prüfen: Heißt der Newsletter in der englischen Oberfläche so? Wenn nicht, den echten Namen nehmen.

8. **Zwei Namen für ein Produkt.** „Wien Event Radar for iOS“ neben „Vienna Event Radar“; der Showcase-Eintrag („Native iPhone app for discovering, searching and planning: …“) sagt nicht, dass es die App von Vienna Event Radar ist. → „The native iPhone app of Vienna Event Radar (App Store name: Wien Event Radar): …“, einmal, im Showcase.

9. **Zahlen:** alle mit Quelle im Code kommentiert, nichts Behauptetes. „Ten years of performances“ ist das Archiv des Studios, keine eigene Reichweite. In Ordnung.

### 3.4 Passung für internationale und Upwork-Leser

Abgedeckt: Remote, Sprachen, Gesprächsfenster, Upwork als Option, Code-Eigentum (Chip, FAQ Q5, Launch-Schritt 5), kostenloses Erstgespräch, Ablauf. Gute Basis. Es fehlt:

1. **Preismodell:** fixed vs. hourly, Währung (EUR), ein Halbsatz zur Umsatzsteuer für Nicht-EU-Kunden. Ein Satz in FAQ Q1.
2. **Typische Zeiträume:** selbst eine Spanne („a studio website like Indeed Unique takes weeks, not months“) hilft; nur, wenn du dahinterstehst.
3. **Android:** Die Site eines iOS-Entwicklers muss „and Android?“ beantworten. Die ehrliche Antwort („iOS natively; Android through the web app, or not at all“) ist selbst Positionierung. Neue FAQ-Frage.
4. **AI als FAQ-Frage** (siehe 3.3, Punkt 6).
5. **Sichtbarer Upwork-Link.** FAQ Q6 nennt Upwork, kann aber nicht verlinken (Antworten sind reine Strings). Entweder Typ erweitern oder ein Chip auf Contact.
6. **Eine Kundenstimme.** Null Testimonials. Ein Satz von Indeed Unique im Showcase oder im Websites-Abschnitt wiegt mehr als jede Textänderung in diesem Audit.
7. **Zeitzone benennen:** „Calls fit European afternoons and US mornings“ → mit „(CET/CEST)“.
8. **Vertrag, Rechnung, NDA:** eine Zeile („Contract and invoice from an Austrian sole proprietorship, in EUR; NDA on request“). Niedrige Priorität.
9. **„Vienna, Austria“** wird gut eingesetzt: Herkunft, nicht Grenze; Contact gleicht mit „Remote, worldwide“ aus. Nur Startseiten-Descriptor und Meta-Titel („Web and iOS Developer in Vienna“) haben keinen Remote-Hinweis; „in Vienna“ ist eine lokale SEO-Wahl, die das englische Publikum nicht braucht. → Titel „Web and iOS Developer · Vienna, Austria“ erwägen.

### 3.5 Struktur und Platzierung

1. **About-Reihenfolge.** `pages.ts`: SmartCash 2017–2020 → Outreach („Crypto World Zug and AnarchaPortugal in Porto“) → Education → Today. Die zwei Abschnitte, die einen Auftraggeber am wenigsten interessieren, stehen vorn; „Today“ steht zuletzt. Der Titel „From the classroom to products.“ verspricht einen Bogen Unterricht → Produkte, die Seite beginnt mit Blockchain. → Today zuerst, Teaching als Zweites, SmartCash auf einen Abschnitt verdichtet, Konferenznamen raus („at conferences in Zug and Porto“); „AnarchaPortugal“ wird gegoogelt und liest sich für Business-Kunden als politisches Signal. Chips: „SmartCash 2017–2020“ ist der zweite Chip, den ein Leser sieht → ersetzen durch „Web + iOS“, „Product design“, „Teaching“. metaTitle „About Lukas Kaffer · Education, Community, Products“ → „… · Products, Teaching, Community“.
2. **Contact-Abschnitt „Remote“ = FAQ Q6, wörtlich.** Nicht falsch, aber zwei Jobs: Contact bekommt den Einzeiler mit Zeitzonen, die FAQ die längere Antwort mit Upwork, Tools und Sprache.
3. **Operations-App und VER verbinden** (3.3, Punkt 2): „Admin app for the iPhone“ in der VER-Backstage verlinken; die Operations-App nennt die Plattform.
4. **Showcase und Services beginnen beide mit „What I build“** („What I build for you.“ / „What I build – live and in use.“). → Showcase: „Built, shipped and in use.“ Optional.
5. **Closings plus Button.** Jedes Closing endet mit „Get in touch.“ und daneben steht der Button „Share your idea“: zwei Aufforderungen mit zwei Verben im selben Band. → Closing als reine Frage („Want a website you can maintain yourself?“), der Button trägt das Verb.
6. **„Launch included.“ wird nur auf Services erklärt.** Wer von der Startseite in den Showcase geht, sieht den Prozess nie. Ein Satz mit den fünf Schritten in FAQ Q1 schließt die Lücke. Niedrige Priorität.

### 3.6 Ton

1. **Stimme:** direktes I/you, warm, nicht korporativ, konsistent über alle Seiten. Das deutsche „du“ überträgt sich sauber; Englisch hat kein Registerproblem, und das Register passt zu Gründern, kleinen Teams und Upwork.
2. **„Share your idea“ als globaler CTA** (Header der Startseite, jedes Band, Formular-Submit). „Share“ ist auf Englisch weich und hat Social-Media-Beiklang; als Submit in Ordnung, als einziger Button der Site unterverkauft er: Ideen sind gratis, verkauft werden Projekte. → Header und Bänder: „Tell me about your project“ oder „Start a project“; Formular: „Send“ oder „Send my idea“. Ein Verbsystem, nicht drei.
3. **Hedges, die leiser machen:** „if the scope fits the way I work“, „Where it makes sense“, „where it belongs“, „You don’t necessarily need“. Ein Vorbehalt pro Seite ist Ehrlichkeit; vier auf einem Pfad lesen sich unsicher.
4. **Rechtsseiten:** Ton passend; der Abschnitt „Business outreach“ ist ungewöhnlich offen, das ist gut.

## 4. Top 10 Änderungen nach Wirkung

| # | Wo | Was | Warum |
|---|----|-----|-------|
| 1 | `pages.ts` Services-Hero, `services.ts` iOS-Abschnitt | iOS nicht als Bedingung („where it belongs“); iOS-Bullets um belegte Punkte erweitern (Widgets, Live Activity, Sign in with Apple, geteiltes Backend, Tests); Operations-App auch unter iOS verlinken | Angebot passt dann zum Beleg; heute ist iOS das dünnste Angebot bei stärkstem Beleg |
| 2 | `services.ts` oder Services-Hero | USP „web app and native iOS app on one backend“ als Satz | Das einzige Versprechen, das reine Web-Shops nicht geben können; mit VER belegt, nirgends verkauft |
| 3 | `pages.ts` Showcase-Description | Satz zur Eigentümerschaft („one for a client; the others products I build and run myself“) | Ehrlichkeit vor dem Klick; verhindert den Vertrauensverlust in der Case Study |
| 4 | Showcase oder Websites-Abschnitt | Eine Kundenstimme von Indeed Unique | Die einzige Fremdstimme, die die Site haben kann; Upwork-Leser suchen genau das |
| 5 | `pages.ts` FAQ | „Fixed price“ belegen; hourly/Upwork, EUR; neue Fragen zu Android und AI; Upwork-Link | Beantwortet, was Upwork-Leser vor dem Anschreiben prüfen |
| 6 | `pages.ts` About | Reihenfolge Today → Teaching → SmartCash; Konferenznamen raus; Chips, Eyebrow, „Education“ → „Teaching“ | Erster Eindruck ist Blockchain 2017 statt Produkte 2026 |
| 7 | `site.ts`, Closings | „Share your idea“ → „Tell me about your project“ (Header/Bänder), „Send“ (Formular); „Get in touch.“ aus den Closings; „Learn more“ → „Case study“ | Ein Verb, ein Button; „share“ und „learn more“ unterverkaufen |
| 8 | `projects.ts`, `case-studies.ts` | Operations-App nennt Vienna Event Radar, beidseitig verlinkt; „Wien Event Radar“ einmal erklärt | Anonymisierung wirkt ausweichend; zwei Namen verwirren |
| 9 | alle Content-Dateien | „go-live“ → „launch“; Gedankenstriche im Fließtext; die Kalkierungen aus 3.1 | Der letzte Rest Übersetzungsgefühl |
| 10 | `projects.ts`, `services.ts`, `case-studies.ts` | „Ask your Radar“ mit echtem Namen und Glosse; „Monday Radar“ prüfen | Erfundene Namen fallen beim ersten Klick ins Produkt auf |

## 5. Nicht ändern

- **Sentence case in Überschriften, Title Case in Meta-Titeln:** konsistent und US-üblich.
- **„Showcase“ als Navigationswort:** im Englischen ungewöhnlich (meist „Work“), aber markant und überall gleich; die URL `/work` sieht niemand. Behalten.
- **Produktnamen** „Vienna Event Radar“, „Wien Event Radar“, „Indeed Unique“, „Top Picks“, „Social Studio“, „Monday Radar“ (sofern echt): Namen bleiben, nur einmal erklären (3.3).
- **Claude Code und ChatGPT beim Namen nennen:** genau das macht den AI-Satz glaubwürdig. Nur den Nutzen- und Kontrollsatz ergänzen.
- **„optimized for iOS 27“, „iOS 26 and later“, Versionsnummern, Zahlen mit Quelle:** Konkretes bleibt.
- **Der unbeschriftete Startseiten-Showcase:** bewusste Designentscheidung; das Audit wünscht sich eine Subline, keine Labels.
- **Die Case-Study-Länge:** länger als auf Portfolio-Sites üblich, aber jeder Absatz trägt einen Fakt. Nicht kürzen.
- **Rechtsseiten:** deutsch maßgeblich, englischer Hinweis oben. Richtig so; nur „Imprint“ → „Legal notice“ erwägen.
- **US-Terminologie** „semester pass“, „drop-in classes“, „gift card“, „inquiry“, „favorites“: korrekt und konsistent.
- **Der Kontakt-Abschnitt** („Send me the short version.“, „Prefer email?“, Platzhalter „where is it stuck right now?“): so lassen.
