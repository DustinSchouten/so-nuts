# SO-NUTS web app
Dit project bevat een web app voor het project SO-NUTS. Dit project is bedoeld voor 55-plussers om gezond te blijven leven op het gebied van voeding en beweging. De app bevat een aantal vragenlijsten waar de gebruiker doorheen dient te lopen. Na het beantwoorden van alle vragen krijgt de gebruiker de optie om uit verschillende zogenaamde intakelijsten te kiezen. Het doel van de app is om de mensen nieuwe (gezondere) gewoontes te laten creëren.

Bij dit project is gebruikgemaakt van HTML, CSS, JavaScript, Express en Node.js Ook is er gebruikgemaakt van een externe API om data op te halen waaruit de vragenlijsten worden gegenereerd.

Link naar live project: https://dustinschouten.github.io/so-nuts/

## Productbiografie
### Week 1
#### Designkeuzes voorafgaand aan het gesprek
Voorafgaand aan de eerste ontmoeting heb ik op basis van de beschikbare informatie alvast wat designkeuzes gedefiniëerd:

- Mensen in deze doelgroep voelen zich vaak dom als ze denken dat ze iets 'fout' doen met technologie. Daarom is het een goed idee om bijvoorbeeld niet 'Onjuist ingevoerd' als error message te doen. In plaats daarvan kun je beter iets vermelden als 'tip: je zou het ook zo kunnen doen...'

- Mensen in deze doelgroep hebben minder goede ogen. In dat geval moeten de kleurcontrasten hoog genoeg zijn en de teksten groot en leesbaar.

- Bovendien is het geen goed idee om straattaal in de app te gebruiken, doordat de mensen van deze doelgroep hierdoor zich niet aangesproken zullen voelen.

- Verder moet de app ook vertrouwen en duidelijkheid uitstralen om de doelgroep voldoende tegemoet te komen.

- Omdat de app ook in de stijl van voeding en beweging ontwikkeld wordt, moeten de kleuren in de app hierop ook aansluiten. Een huisstijl met veel groen zou daarom ook erg goed passen. Groen doet namelijk denken aan de natuur (beweging) en aan gezond eten zoals groente.

#### Bevindingen tijdens gesprek opdrachtgever (dinsdag 24 mei)
Uit het eerste opdrachtgeversgesprek van het project So Nuts hebben wij studenten gehoord wat de plannen van het bedrijf Chippr zijn wat betreft de app. Zij willen voor 55-plussers een app ontwikkelen om hen te helpen om gezond te blijven leven op het gebied van voeding en beweging. Uit het gesprek zijn de volgende aandachtspunten naar voren gekomen:

- In de te ontwikkelen app wordt er eerst gevraagd naar persoonlijke informatie (denk aan leeftijd, lengte, gewicht, BMI en gezinssituatie).

- Daarna krijg je als gebruiker een intakelijst op het gebied van voeding en sport. Met vragen zoals 'hoeveel uur per week sport je?' en 'hoevaak eet je gezonde voeding?'.

- Na de intake kan de gebruiker kiezen uit verschillende zogenaamde action lijsten. Hierbij zijn er 15 verschillende richtlijnen om erachter te komen waar je aan moet werken. Een daarvan is bijvoorbeeld dat je per week minimaal 150 minuten moet bewegen.

- In de app kunnen er video's getoond worden met begeleiding en adviezen over hoe je verantwoord kunt sporten.

- Uiteindelijk is het de bedoeling van de app dat mensen zelf nieuwe gewoontes gaan creëren. Op die manier worden de specialisten (diëtisten en sportbegeleiders) ontlast doordat mensen zelf met hun vernieuwde levensstijl aan de slag gaan.

- De app moet op een smartphone gebruikt worden en het is meer een nice to have als het ook op een tablet gebruikt kan worden. Oudere mensen zitten namelijk ook vaak op een groter scherm.

- Uiteindelijk wil Chippr de app met Flutter gaan bouwen.

- De vragenlijsten worden met een API opgehaald.

- Over het design mogen de studenten zelf een invulling geven.

- Er is vanuit de opdrachtgever geen voorkeur tussen client-side en server-side.

#### Planning
Mijn planning voor het eerste testmoment van volgende week is om alvast een opzet te maken van het homescherm van de app en om alvast de vragenlijst vorm te geven. Doordat we (op het moment van schrijven) nog geen toegang hebben tot de API, hebben we een statische JSON-bestand met voorbeeldvragen en -antwoorden gekregen waarmee ik mijn app kan testen. Bij het vormgeven van de app zal ik proberen om een aantal designkeuzes toe te passen.

### Week 2
#### Eerste oplevering
Voorafgaand aan de eerste oplevering/iteratie heb ik een eerste prototype gemaakt. Zie de screenshots hieronder:
![](projectbeschrijving_images/Week 2/schermen.png)

#### Bevindingen tijdens gesprek opdrachtgever (maandag 30 mei)
Uit de eerste iteratie met Kevin en Winnie (van Chippr) zijn de volgende feedbackpunten naar voren gekomen:

- Het belangrijkste aandachtspunt ging over de vragenlijst. Ik had tot nu toe iedere vraag op een aparte pagina gezet waarbij je als gebruiker steeds moest klikken op 'Volgende vraag' of 'Vorige vraag'. In mijn prototype had ik de voorbeeld-API-response gebruikt die aan ons beschikbaar werd gesteld waarin zes persoonlijke vragen stonden. De vragenlijsten die wij later zullen ontvangen, zouden beduidend meer vragen bevatten. Het zou dus niet echt gebruiksvriendelijk zijn als je dan na iedere vraag op een knop zou moeten klikken. In plaats daarvan is het beter om alle vragen die bij een bepaalde categorie horen onder elkaar op één pagina te zetten.

- Op de vragenlijstpagina heb ik de titel 'Vragenlijst' gezet. Doordat er meerdere verschillende onderwerpen aan bod komen, is het een beter idee om de titels wat zinvollere namen te geven zoals 'Persoonlijke vragen' en 'Vragen over voeding'.

- De gebruikte knoppen in mijn app zijn volgens Winnie vrij aanwezig. In principe is het een goed idee om alle elementen in de app wat groter te maken voor 55-plussers, maar deze knoppen moeten wat kleiner zodat ze iets minder opvallen.

- Ook kwam als optie naar voren om steeds tussen twee aparte vragenlijsten een soort tussenscherm te maken met daarop een tekst als 'Bedankt voor het invullen van de persoonlijke vragen. We gaan nu verder naar de vragenlijst over voeding.'.

- In mijn design heb ik drie verschillende kleuren groen (donker, normaal en licht) gebruikt. Het zou volgens Winnie een goed idee zijn als ik een iets uitgebreider kleurenschema zou gebruiken om onderscheid tussen de verschillende vragenlijsten te kunnen maken. Dit onderscheid is voor oudere mensen prettiger zodat ze makkelijker kunnen herkennen bij welke vragen ze zijn.

- Wat als prettig werd ervaren was het feit dat je als gebruiker kon zien hoe ver je in het proces zit van het beantwoorden van de vragen ('Vraag 1 / 6').

#### Planning
Mijn planning voor volgende week is om de vragen van de vragenlijsten onder elkaar te zetten en om alvast na te denken over een manier om onderscheid te maken tussen de verschillende vragenlijsten. Verder zal ik proberen om zoveel mogelijk feedbackpunten te verwerken. Als deze week de API beschikbaar gesteld wordt, dan zal ik daar als eerste mee beginnen.

### Week 3
Voor deze week heb ik mijn applicatie verbeterd op een aantal punten. Zie de screenshots hieronder:
![](projectbeschrijving_images/Week 3/schermen.png)
Hierbij wil ik de opmerking maken dat ik deze week weinig aan het project heb kunnen werken i.v.m. het schrijven van een afstudeervoorstel voor mijn opleiding.

#### Bevindingen tijdens gesprek opdrachtgever (dinsdag 7 juni)
Uit deze iteratie (met Winnie en Wouter van Chippr) heb ik, doordat ik weinig heb kunnen doen ook slechts een paar feedbackpuntjes gekregen:

- Tussen de rondjes met de vraagnummers en de daadwerkelijke vragen zit best wat ruimte die volgens Winnie wat 'slimmer' benut kan worden. Op deze manier kunnen de pagina's met de vragenlijsten iets verkort worden.

- Zij vertelde mij dat ze, ongeacht hoe ver ik in mijn project zit, voor volgende week graag een actionplan-scherm te zien krijgt als je als gebruiker door de vragenlijst heen bent.

#### Bevindingen tijdens design review (woensdag 8 juni)
Uit dit coachgesprek heb ik de volgende feedbackpunten verkregen:

- Als een gebruiker mijn app voor het eerst ziet en het doel van het project niet kent, dan zal hij/zij waarschijnlijk niet al mijn vragenlijsten willen invullen. Mensen zijn over het algemeen namelijk terughoudend als het gaat om het vrijgeven van persoonsgegevens. Een goede tip is om de 'onboarding' uit te breiden om de gebruiker te laten weten wat er met hun gegevens gaat gebeuren.

- Nog een reden waarom mensen mijn app (misschien) niet zo snel zullen gebruiken is dat je vrijwel gelijk (op een insstructiescherm na) allemaal vragen op je afgevuurd krijgt. Ik zou met mijn ontwerp de gebruikers wat meer aan moeten trekken. Dit kan door bijvoorbeeld screenshots van het hoofdgedeelte van de app te laten zien, door testimonials te laten zien en door al vroeg kort en krachtig met pakkende teksten de gebruiker te verleiden om naar de vragenlijst te gaan.

- Een ander puntje ging over de progressie die je als gebruiker zal moeten zien bij het invullen. Vooraf geef ik weliswaar aan hoe ver de gebruiker is, maar als de lijst 40 vragen bevat en je bent zo'n beetje bij vraag 23, dan kun je dat wellicht vergeten en moet je weer helemaal naar boven (of beneden) scrollen om te zien hoeveel vragen er nog zijn. Dit probleem kan ik oplossen d.m.v. bijvoorbeeld een progress bar.

- Ook kwam het onderwerp kleur nog ter sprake. Bij de pagina met vragen over voeding heb ik een groen-geel-rode gradient gebruikt. Echter kunnen kleuren voor verschillende mensen een verschillende (culturele) betekenis hebben. Een ander idee is om het onderscheid daarom te verduidelijken met icons en minder met kleuren.

#### Bevindingen tijdens code review (woensdag 8 juni)
Tijdens dit project heb ik tot nu toe al die tijd in JavaScript-modules op de client gewerkt. Dit vond ik tijdens het vak Web App From Scratch een prettige manier om mijn code te structureren. Echter doordat mijn HTML-pagina's op bepaalde punten dezelfde opbouw hebben (denk hierbij aan de head en de onderkant van de body met script-tags), vond ik het in dit geval handiger om hiervoor een ejs-template te gebruiken (server-side). Op deze manier wilde ik dus duplicate code vermijden. Later bedacht ik mij dat het vanuit progressive enhancement oogpunt wellicht beter is om ook alle vragenlijsten vanuit de API server-side te laten renderen. Deze kwestie heb ik voor deze review voorgelegd. Hieruit kreeg ik als response dat, wanneer ik het op een valide manier kan onderbouwen, het ook oke is om mijn JavaScript client-side en modulair te laten.

#### Planning voor aankomende week
De afgelopen dagen had ik het gevoel dat ik nog niet helemaal op schema lag qua voortgang. Ook vond ik mijn project qua structuur een beetje chaotisch worden waardoor ik niet meer prettig kon werken. Mede hierdoor en door alle nieuwe verkregen feedback werd het voor mij ook lastig om te bepalen waar ik de komende dagen precies mijn focus aan wilde geven. Daarom ga ik eerst uitzoeken hoe ik deze structuur weer terug kan vinden en ga ik ook kijken welke aandachtspunten de meeste prioriteit hebben.