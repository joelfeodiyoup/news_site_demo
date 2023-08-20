import { NewsArticle } from "src/news.controller";

/**
 * data scraped from https://www.gq-magazin.de/
 * 
 * var a = Array.from(document.querySelectorAll('.summary-item')).map((el, i) => {
    return {
        rubric: el.querySelector('.summary-item__rubric')?.innerText ?? 'unknown',
        title: el.querySelector('.summary-item__hed')?.innerText ?? 'unknown',
        author: el.querySelector('.byline__name')?.innerText ?? 'unknown',
        created: el.querySelector('.summary-item__publish-date')?.innerText ?? 'unknown',
        id: i,
        imgUrl: el.querySelector('.responsive-image__image')?.src
    }
})
 */
export const data: NewsArticle[] = [
    {
        "rubric": "Die Neue GQ",
        "title": "Einblicke in Pharrell Williams' erste Monate bei Louis Vuitton – und seine Vision für die Zukunft der Mode",
        "author": "Von Noah Johnson",
        "created": "15. August 2023",
        "id": 0,
        "imgUrl": "https://media.gq-magazin.de/photos/64d5e5b15c95a13af88a1396/16:9/w_1600%2Cc_limit/GQ0923_Pharrell_01.jpg",
        "tags": [
            "news"
        ],
        "route": "Einblicke-in-Pharrell-Williams'-erste-Monate-bei-Louis-Vuitton-–-und-seine-Vision-für-die-Zukunft-der-Mode"
    },
    {
        "rubric": "Sommermode",
        "title": "Die Speedo ist zurück – wer sie tragen kann und wann Sie lieber zur Shorts greifen sollten?",
        "author": "Von Jule Scott",
        "created": "12. August 2023",
        "id": 1,
        "imgUrl": "https://media.gq-magazin.de/photos/64c91c5c415f3e5ab3a8e80e/1:1/w_1920%2Cc_limit/Speedo-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Die-Speedo-ist-zurück-–-wer-sie-tragen-kann-und-wann-Sie-lieber-zur-Shorts-greifen-sollten?"
    },
    {
        "rubric": "Style-Guide",
        "title": "Dresscode Cocktail für Männer: Die wichtigsten Do’s und Dont’s",
        "author": "Von Jule Scott",
        "created": "10. August 2023",
        "id": 2,
        "imgUrl": "https://media.gq-magazin.de/photos/64d3813ad03be87eb2c320cb/2:3/w_1920%2Cc_limit/Dresscode-Cocktail-Harry-Styles.jpg",
        "tags": [
            "news"
        ],
        "route": "Dresscode-Cocktail-für-Männer:-Die-wichtigsten-Do’s-und-Dont’s"
    },
    {
        "rubric": "Shopping",
        "title": "Oktoberfest 2023: Alles, was Männer für den perfekten Wiesn-Look brauchen",
        "author": "Von Raffaela Herrmann",
        "created": "10. August 2023",
        "id": 3,
        "imgUrl": "https://media.gq-magazin.de/photos/64d367135c95a13af88a12e8/2:3/w_1920%2Cc_limit/Oktoberfest-Outfit-Herren-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Oktoberfest-2023:-Alles,-was-Männer-für-den-perfekten-Wiesn-Look-brauchen"
    },
    {
        "rubric": "Sneaker-News",
        "title": "Lionel Messi, der größte Fußballstar der Welt trägt diesen Sneaker für 150 Euro",
        "author": "Von GQ.de",
        "created": "17. August 2023",
        "id": 4,
        "imgUrl": "https://media.gq-magazin.de/photos/64de1592d03be87eb2c32365/2:3/w_1920%2Cc_limit/Lionell-Messi-News-Sneaker.jpg",
        "tags": [
            "news"
        ],
        "route": "Lionel-Messi,-der-größte-Fußballstar-der-Welt-trägt-diesen-Sneaker-für-150-Euro"
    },
    {
        "rubric": "Beauty-News",
        "title": "Austin Butler: Das neue Gesicht von Yves Saint Laurent Beauty",
        "author": "Von Thu Nguyễn",
        "created": "10. August 2023",
        "id": 5,
        "imgUrl": "https://media.gq-magazin.de/photos/64d39e6fd03be87eb2c320e7/1:1/w_1920%2Cc_limit/YSLB_AB_OFFICIAL_PORTRAIT.jpg",
        "tags": [
            "news"
        ],
        "route": "Austin-Butler:-Das-neue-Gesicht-von-Yves-Saint-Laurent-Beauty"
    },
    {
        "rubric": "Shopping",
        "title": "Die 15 besten weißen T-Shirts für Männer unter 55 Euro ",
        "author": "Von Raffaela Herrmann",
        "created": "1. August 2023",
        "id": 6,
        "imgUrl": "https://media.gq-magazin.de/photos/64c8bc28d03be87eb2c31e6f/2:3/w_1920%2Cc_limit/GQ-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Die-15-besten-weißen-T-Shirts-für-Männer-unter-55-Euro "
    },
    {
        "rubric": "Uhren",
        "title": "Ryan Gosling trug gleich drei goldene Uhren in “Barbie” - und zwar diese",
        "author": "Von GQ.de",
        "created": "28. Juli 2023",
        "id": 7,
        "imgUrl": "https://media.gq-magazin.de/photos/64c2539f415f3e5ab3a8e778/1:1/w_1920%2Cc_limit/1521055345",
        "tags": [
            "news"
        ],
        "route": "Ryan-Gosling-trug-gleich-drei-goldene-Uhren-in-“Barbie”---und-zwar-diese"
    },
    {
        "rubric": "Shopping",
        "title": "Uhren unter 500 Euro: Großer Luxus zum kleinen Preis",
        "author": "Von Johannes Thalmayr",
        "created": "21. Juli 2023",
        "id": 8,
        "imgUrl": "https://media.gq-magazin.de/photos/608bcf2d5808bd76fb7926a1/2:3/w_1920%2Cc_limit/uhren-unter-500-euro-watches-aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "Uhren-unter-500-Euro:-Großer-Luxus-zum-kleinen-Preis"
    },
    {
        "rubric": "Uhren",
        "title": "Roger Dubuis Excalibur Spider: Das steckt hinter dem rasanten Flyback-Chronographen mit neuem Uhrwerk",
        "author": "Von GQ.de",
        "created": "9. August 2023",
        "id": 9,
        "imgUrl": "https://media.gq-magazin.de/photos/64d36e72d03be87eb2c320c9/2:3/w_1920%2Cc_limit/Uhren_Roger%2520Dubuis%2520Exkalibur%2520Flyback%2520Chronograph.jpg",
        "tags": [
            "news"
        ],
        "route": "Roger-Dubuis-Excalibur-Spider:-Das-steckt-hinter-dem-rasanten-Flyback-Chronographen-mit-neuem-Uhrwerk"
    },
    {
        "rubric": "Uhren",
        "title": "Die Oris Dat Watt Edition II in schimmerndem Grün ist dem Wattenmeer gewidmet",
        "author": "Von GQ.de",
        "created": "15. August 2023",
        "id": 10,
        "imgUrl": "https://media.gq-magazin.de/photos/64db47c05c95a13af88a14c7/2:3/w_1920%2Cc_limit/Uhren_Dat%2520Watt%2520Limited%2520Edition%2520II%2520.jpg",
        "tags": [
            "news"
        ],
        "route": "Die-Oris-Dat-Watt-Edition-II-in-schimmerndem-Grün-ist-dem-Wattenmeer-gewidmet"
    },
    {
        "rubric": "Uhren",
        "title": "Brad Pitt ist ein so großer Fan dieser Uhr, dass er sie dieses Jahr gleich zweimal gekauft hat",
        "author": "Von Cam Wolf",
        "created": "25. Juli 2023",
        "id": 11,
        "imgUrl": "https://media.gq-magazin.de/photos/64be73d4415f3e5ab3a8e694/1:1/w_1920%2Cc_limit/Brad%2520Pitt_bearbeitet.jpg",
        "tags": [
            "news"
        ],
        "route": "Brad-Pitt-ist-ein-so-großer-Fan-dieser-Uhr,-dass-er-sie-dieses-Jahr-gleich-zweimal-gekauft-hat"
    },
    {
        "rubric": "Ratgeber",
        "title": "Rolex kaufen: Uhren-Experten erklären, wie wirklich jeder einfach an eine Rolex-Uhr kommen kann",
        "author": "Von Simon de Burton",
        "created": "5. Juli 2023",
        "id": 12,
        "imgUrl": "https://media.gq-magazin.de/photos/64a3c577415f3e5ab3a8dee8/2:3/w_1920%2Cc_limit/Guide-to-buying-a-Rolex-hp.jpeg",
        "tags": [
            "news"
        ],
        "route": "Rolex-kaufen:-Uhren-Experten-erklären,-wie-wirklich-jeder-einfach-an-eine-Rolex-Uhr-kommen-kann"
    },
    {
        "rubric": "Film-Auto",
        "title": "Der weiße Lamborghini aus \"The Wolf of Wall Street\" wird versteigert",
        "author": "Von GQ.de",
        "created": "9. August 2023",
        "id": 13,
        "imgUrl": "https://media.gq-magazin.de/photos/64d34481415f3e5ab3a8ea1a/1:1/w_1920%2Cc_limit/Mobility_Lamborghini%2520Countach.png",
        "tags": [
            "news"
        ],
        "route": "Der-weiße-Lamborghini-aus-\"The-Wolf-of-Wall-Street\"-wird-versteigert"
    },
    {
        "rubric": "Auto-Messe",
        "title": "IAA 2023: Diese Highlights erwarten Sie bei der diesjährigen Automesse",
        "author": "Von Simone Lo Bartolo",
        "created": "8. August 2023",
        "id": 14,
        "imgUrl": "https://media.gq-magazin.de/photos/64bf8fcdd03be87eb2c31d68/2:3/w_1920%2Cc_limit/IAA2023-Aufmacher-GQ.jpg",
        "tags": [
            "news"
        ],
        "route": "IAA-2023:-Diese-Highlights-erwarten-Sie-bei-der-diesjährigen-Automesse"
    },
    {
        "rubric": "Einzelstück",
        "title": "Der Bugatti Chiron Super Sport Golden Era ist ein \"historisches\" Meisterwerk",
        "author": "Von GQ.de",
        "created": "14. August 2023",
        "id": 15,
        "imgUrl": "https://media.gq-magazin.de/photos/64da0debd03be87eb2c322a1/2:3/w_1920%2Cc_limit/Monility_BUGATTI%2520Golden%2520Era.jpg",
        "tags": [
            "news"
        ],
        "route": "Der-Bugatti-Chiron-Super-Sport-Golden-Era-ist-ein-\"historisches\"-Meisterwerk"
    },
    {
        "rubric": "Tech-News",
        "title": "Special Edition? Apple arbeitet angeblich an einer \"Apple Watch X\" zum zehnjährigen Jubiläum",
        "author": "Von GQ.de",
        "created": "16. August 2023",
        "id": 16,
        "imgUrl": "https://media.gq-magazin.de/photos/64dc7f3a415f3e5ab3a8eb36/2:3/w_1920%2Cc_limit/1233022114",
        "tags": [
            "news"
        ],
        "route": "Special-Edition?-Apple-arbeitet-angeblich-an-einer-\"Apple-Watch-X\"-zum-zehnjährigen-Jubiläum"
    },
    {
        "rubric": "Neuheiten",
        "title": "Goodwood Festival of Speed 2023: Diese 5 Autos feierten beim Festival of Speed Premiere",
        "author": "Von Martin Wittler",
        "created": "23. Juli 2023",
        "id": 17,
        "imgUrl": "https://media.gq-magazin.de/photos/64bada3c5c95a13af88a0da6/1:1/w_1920%2Cc_limit/Goodwood23_Ioniq5N_Foto%2520Hyundai.jpg",
        "tags": [
            "news"
        ],
        "route": "Goodwood-Festival-of-Speed-2023:-Diese-5-Autos-feierten-beim-Festival-of-Speed-Premiere"
    },
    {
        "rubric": "Mobility",
        "title": "Elektrische Leichtfahrzeuge: Diese fünf E-Autos wiegen unter 600 Kilogramm",
        "author": "Von Felix J. Strohbach",
        "created": "14. August 2023",
        "id": 18,
        "imgUrl": "https://media.gq-magazin.de/photos/64d35617415f3e5ab3a8ea1e/2:3/w_1920%2Cc_limit/gq-mobility-elektroautos-elektrische-leichtfahrzeuge-microlino-titelbild.jpg",
        "tags": [
            "news"
        ],
        "route": "Elektrische-Leichtfahrzeuge:-Diese-fünf-E-Autos-wiegen-unter-600-Kilogramm"
    },
    {
        "rubric": "Mode",
        "title": "Second Hand: Was passiert wirklich mit der Kleidung, die wir gespendet oder verkauft haben?",
        "author": "unknown",
        "created": "31. Juli 2023",
        "id": 19,
        "imgUrl": "https://media.gq-magazin.de/photos/64c26258415f3e5ab3a8e779/16:9/w_1600%2Cc_limit/wasteland.jpg",
        "tags": [
            "news"
        ],
        "route": "Second-Hand:-Was-passiert-wirklich-mit-der-Kleidung,-die-wir-gespendet-oder-verkauft-haben?"
    },
    {
        "rubric": "Shopping",
        "title": "Koffer Test: Das sind die 17 besten Begleiter für Ihre nächste Reise",
        "author": "Von Elisa Ascher",
        "created": "13. Juli 2023",
        "id": 20,
        "imgUrl": "https://media.gq-magazin.de/photos/64afe6ca415f3e5ab3a8e3fa/1:1/w_1920%2Cc_limit/Koffer-Test-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Koffer-Test:-Das-sind-die-17-besten-Begleiter-für-Ihre-nächste-Reise"
    },
    {
        "rubric": "Lifestyle",
        "title": "10 Backpacking-Tipps: So reisen Sie günstig durch die Welt",
        "author": "unknown",
        "created": "22. Juli 2023",
        "id": 21,
        "imgUrl": "https://media.gq-magazin.de/photos/64b7d823415f3e5ab3a8e5bd/2:3/w_1920%2Cc_limit/Backpacking-Tipps-aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "10-Backpacking-Tipps:-So-reisen-Sie-günstig-durch-die-Welt"
    },
    {
        "rubric": "Top 10",
        "title": "Top 10 der gesündesten Länder in Europa",
        "author": "Von Blanche Marcel",
        "created": "27. Dezember 2022",
        "id": 22,
        "imgUrl": "https://media.gq-magazin.de/photos/63a565466368b79046b9a2c3/2:3/w_1920%2Cc_limit/su%25C3%25A8de.jpg",
        "tags": [
            "news"
        ],
        "route": "Top-10-der-gesündesten-Länder-in-Europa"
    },
    {
        "rubric": "Film-Häuser",
        "title": "Airbnb vermietet das Barbie-Traumhaus: Und Ken selbst ist der Gastgeber!",
        "author": "Von GQ.de",
        "created": "28. Juni 2023",
        "id": 23,
        "imgUrl": "https://media.gq-magazin.de/photos/649c0bccd41edcd1a0a44827/2:3/w_1920%2Cc_limit/Barbie%2520Traumhaus%2520Airbnb.png",
        "tags": [
            "news"
        ],
        "route": "Airbnb-vermietet-das-Barbie-Traumhaus:-Und-Ken-selbst-ist-der-Gastgeber!"
    },
    {
        "rubric": "City Break",
        "title": "Stadthotels vom Feinsten – Die 8 schönsten Hotels in Städten rund um die Welt",
        "author": "Von Ulf Lipitz",
        "created": "20. Oktober 2022",
        "id": 24,
        "imgUrl": "https://media.gq-magazin.de/photos/635016035f22a789f2a5c2ba/1:1/w_1920%2Cc_limit/Stadthotel-Ace-Hotel-Sydney-2-GQ.jpg",
        "tags": [
            "news"
        ],
        "route": "Stadthotels-vom-Feinsten-–-Die-8-schönsten-Hotels-in-Städten-rund-um-die-Welt"
    },
    {
        "rubric": "Aufgepasst!",
        "title": "Skurrile Verbote: Diese Dinge sollten Sie im Urlaub besser unterlassen",
        "author": "Von Julia Fürst",
        "created": "24. Juni 2023",
        "id": 25,
        "imgUrl": "https://media.gq-magazin.de/photos/62cc1c351b3cfb78a3befc5b/2:3/w_1920%2Cc_limit/body&care-fitness-sport-im-urlaub-aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "Skurrile-Verbote:-Diese-Dinge-sollten-Sie-im-Urlaub-besser-unterlassen"
    },
    {
        "rubric": "Nachhaltige Mode",
        "title": "Veganes Leder: Die 11 besten Lederimitate – so echt kann Leder aus Pilzen aussehen",
        "author": "Von Manuela Hainz",
        "created": "1. Juli 2023",
        "id": 26,
        "imgUrl": "https://media.gq-magazin.de/photos/62f3bef41f933784f299390b/1:1/w_1600%2Cc_limit/Mode-VeganesLeder-Aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "Veganes-Leder:-Die-11-besten-Lederimitate-–-so-echt-kann-Leder-aus-Pilzen-aussehen"
    },
    {
        "rubric": "Mode",
        "title": "Nachhaltig Wäsche waschen: Die besten Tipps – ein Guide, der sich gewaschen hat",
        "author": "Von Theresa Mader",
        "created": "15. Juni 2023",
        "id": 27,
        "imgUrl": "https://media.gq-magazin.de/photos/6320e357a35d21b0639d0304/1:1/w_1600%2Cc_limit/GettyImages-162722815.jpg",
        "tags": [
            "news"
        ],
        "route": "Nachhaltig-Wäsche-waschen:-Die-besten-Tipps-–-ein-Guide,-der-sich-gewaschen-hat"
    },
    {
        "rubric": "Sustainability",
        "title": "Diese 8 nachhaltigen Outdoor-Marken wollen die Funktionskleidung revolutionieren",
        "author": "Von Theresa Mader",
        "created": "14. Juni 2023",
        "id": 28,
        "imgUrl": "https://media.gq-magazin.de/photos/635189c3c4534db4033543a6/1:1/w_1600%2Cc_limit/GettyImages-533708862.jpg",
        "tags": [
            "news"
        ],
        "route": "Diese-8-nachhaltigen-Outdoor-Marken-wollen-die-Funktionskleidung-revolutionieren"
    },
    {
        "rubric": "Accessoires",
        "title": "“Starbucks x Porter”-Kollektion soll Gebrauch umweltfreundlicher Verpackungen steigern",
        "author": "Von GQ.de",
        "created": "11. Juni 2023",
        "id": 29,
        "imgUrl": "https://media.gq-magazin.de/photos/6481b063e0f7040c8202efdf/1:1/w_1600%2Cc_limit/653915024",
        "tags": [
            "news"
        ],
        "route": "“Starbucks-x-Porter”-Kollektion-soll-Gebrauch-umweltfreundlicher-Verpackungen-steigern"
    },
    {
        "rubric": "Die Neue GQ",
        "title": "Grace Wales Bonners Vision von Schwarzer Eleganz ist das angesagteste Momentum der Menswear",
        "author": "Von Samuel Hine",
        "created": "11. April 2023",
        "id": 30,
        "imgUrl": "https://media.gq-magazin.de/photos/6434f95a0b0bb2c8f5bd6ffd/1:1/w_1600%2Cc_limit/GQ0423_WalesBonner_01wm.jpg",
        "tags": [
            "news"
        ],
        "route": "Grace-Wales-Bonners-Vision-von-Schwarzer-Eleganz-ist-das-angesagteste-Momentum-der-Menswear"
    },
    {
        "rubric": "Die Neue GQ",
        "title": "Karol G mischt den Boys’ Club des Reggaeton auf",
        "author": "Von Paula Mejía",
        "created": "6. April 2023",
        "id": 31,
        "imgUrl": "https://media.gq-magazin.de/photos/642d7eb30b0bb2c8f5bd6f00/1:1/w_1600%2Cc_limit/GQ0423_KarolG_01.jpg",
        "tags": [
            "news"
        ],
        "route": "Karol-G-mischt-den-Boys’-Club-des-Reggaeton-auf"
    },
    {
        "rubric": "Die Neue GQ",
        "title": "Kann Yohji Yamamoto die Mode vor sich selbst retten?",
        "author": "Von Noah Johnson",
        "created": "6. April 2023",
        "id": 32,
        "imgUrl": "https://media.gq-magazin.de/photos/642aee7e5778eb886d550e75/1:1/w_1600%2Cc_limit/GQ0423_Yamamoto_03.jpg",
        "tags": [
            "news"
        ],
        "route": "Kann-Yohji-Yamamoto-die-Mode-vor-sich-selbst-retten?"
    },
    {
        "rubric": "DIE NEUE GQ",
        "title": "Wie Hoyeon mit „Squid Game“ zu einer neuen Art von Megastar wurde",
        "author": "Von Yang-Yi Goh",
        "created": "5. April 2023",
        "id": 33,
        "imgUrl": "https://media.gq-magazin.de/photos/642aeb7d56b95a2781649982/1:1/w_1600%2Cc_limit/GQ0423_Hoyeon_01.jpg",
        "tags": [
            "news"
        ],
        "route": "Wie-Hoyeon-mit-„Squid-Game“-zu-einer-neuen-Art-von-Megastar-wurde"
    },
    {
        "rubric": "Entertainment-News",
        "title": "Neue Netflix-Serie von Prinz Harry: Emotionaler Trailer verrät, worum es geht!",
        "author": "Von GQ.de",
        "created": "18. August 2023",
        "id": 34,
        "imgUrl": "https://media.gq-magazin.de/photos/64df28a7415f3e5ab3a8ec9b/1:1/w_1600%2Cc_limit/1165809924",
        "tags": [
            "news"
        ],
        "route": "Neue-Netflix-Serie-von-Prinz-Harry:-Emotionaler-Trailer-verrät,-worum-es-geht!"
    },
    {
        "rubric": "Filmwissen",
        "title": "Von “The Trial of the Chicago 7” bis “Philadelphia”: Diese Justizdramen sollte jeder gesehen haben",
        "author": "Von Anna Rinderspacher",
        "created": "18. August 2023",
        "id": 35,
        "imgUrl": "https://media.gq-magazin.de/photos/604f5935d74bd3971c1f7535/1:1/w_1600%2Cc_limit/oscar-nominierungen-chicago-7-film-entertainment.jpg",
        "tags": [
            "news"
        ],
        "route": "Von-“The-Trial-of-the-Chicago-7”-bis-“Philadelphia”:-Diese-Justizdramen-sollte-jeder-gesehen-haben"
    },
    {
        "rubric": "Entertainment",
        "title": "Netflix zeigt Teaser zu “Maestro” von Bradley Cooper",
        "author": "Von GQ.de",
        "created": "17. August 2023",
        "id": 36,
        "imgUrl": "https://media.gq-magazin.de/photos/64ddd48cd03be87eb2c3231d/1:1/w_1600%2Cc_limit/DSC03182_bw_rt2.jpg",
        "tags": [
            "news"
        ],
        "route": "Netflix-zeigt-Teaser-zu-“Maestro”-von-Bradley-Cooper"
    },
    {
        "rubric": "Streaming-Highlights",
        "title": "20 Serien über Superhelden, die sich wirklich lohnen – von “Peacemaker” bis “The Boys”",
        "author": "Von Anna Rinderspacher",
        "created": "17. August 2023",
        "id": 37,
        "imgUrl": "https://media.gq-magazin.de/photos/62836a20a3d4ee15ec93c3e2/1:1/w_1600%2Cc_limit/entertainment-amazon-prime-the-boys-aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "20-Serien-über-Superhelden,-die-sich-wirklich-lohnen-–-von-“Peacemaker”-bis-“The-Boys”"
    },
    {
        "rubric": "GQ Hype",
        "title": "Nicholas Galitzine und Taylor Zakhar Perez im Interview über ihre gemeinsame Romanze \"Royal Blue\"",
        "author": "Von Iana Murray",
        "created": "9. August 2023",
        "id": 38,
        "imgUrl": "https://media.gq-magazin.de/photos/64d21dd8415f3e5ab3a8e9ab/1:1/w_1600%2Cc_limit/Nicholas%2520Galitzine%2520GQ%2520Banner.jpg",
        "tags": [
            "news"
        ],
        "route": "Nicholas-Galitzine-und-Taylor-Zakhar-Perez-im-Interview-über-ihre-gemeinsame-Romanze-\"Royal-Blue\""
    },
    {
        "rubric": "GQ Hype",
        "title": "Wolfram Amadeus im Interview über seine Karriere, seine Herkunft und seine Katze",
        "author": "Von Ulf Pape",
        "created": "17. Juli 2023",
        "id": 39,
        "imgUrl": "https://media.gq-magazin.de/photos/64b509575c95a13af88a0c96/1:1/w_1600%2Cc_limit/Wolfram%2520Amadeus%2520Banner.jpg",
        "tags": [
            "news"
        ],
        "route": "Wolfram-Amadeus-im-Interview-über-seine-Karriere,-seine-Herkunft-und-seine-Katze"
    },
    {
        "rubric": "GQ Hype",
        "title": "Mads Mikkelsen weiß, was einen Bad Boy ausmacht – und wie er trotzdem Sympathien gewinnt",
        "author": "Von Lauren Larson",
        "created": "30. Juni 2023",
        "id": 40,
        "imgUrl": "https://media.gq-magazin.de/photos/649eb1359ff0169a7dfba363/1:1/w_1600%2Cc_limit/Mads%2520Mikkelsen%2520Banner.jpg",
        "tags": [
            "news"
        ],
        "route": "Mads-Mikkelsen-weiß,-was-einen-Bad-Boy-ausmacht-–-und-wie-er-trotzdem-Sympathien-gewinnt"
    },
    {
        "rubric": "GQ Hype",
        "title": "Adrien Brody über sein nächstes Ziel: “Ich habe alles, was für diesen Schritt notwendig ist”",
        "author": "Von Adam Sanchez",
        "created": "22. Juni 2023",
        "id": 41,
        "imgUrl": "https://media.gq-magazin.de/photos/64940c63d41edcd1a0a44564/1:1/w_1600%2Cc_limit/Adrien%2520Brody%2520Banner.jpg",
        "tags": [
            "news"
        ],
        "route": "Adrien-Brody-über-sein-nächstes-Ziel:-“Ich-habe-alles,-was-für-diesen-Schritt-notwendig-ist”"
    },
    {
        "rubric": "Sneaker-News",
        "title": "Die besten Sneaker-Releases der Woche: Adidas x Homer Simpson, Nike Air Jordan und Ganni x New Balance",
        "author": "Von Manuela Hainz",
        "created": "17. August 2023",
        "id": 42,
        "imgUrl": "https://media.gq-magazin.de/photos/6319e92a93c428d557785ef4/1:1/w_1920%2Cc_limit/Mode-SneakerReleases-Aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "Die-besten-Sneaker-Releases-der-Woche:-Adidas-x-Homer-Simpson,-Nike-Air-Jordan-und-Ganni-x-New-Balance"
    },
    {
        "rubric": "Shopping",
        "title": "Die 17 besten Polohemden und wie wir den Klassiker stylen",
        "author": "Von Patrick Pendiuk",
        "created": "17. August 2023",
        "id": 43,
        "imgUrl": "https://media.gq-magazin.de/photos/6492d215d41edcd1a0a444a1/2:3/w_1920%2Cc_limit/Polohemden-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Die-17-besten-Polohemden-und-wie-wir-den-Klassiker-stylen"
    },
    {
        "rubric": "Shopping",
        "title": "Welches ist es, das beste Männerparfum? Wir haben mehr als eine Antwort",
        "author": "Von Raffaela Herrmann",
        "created": "17. August 2023",
        "id": 44,
        "imgUrl": "https://media.gq-magazin.de/photos/64ddd7cad03be87eb2c32323/2:3/w_1920%2Cc_limit/Bestes-Maennerparfum-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Welches-ist-es,-das-beste-Männerparfum?-Wir-haben-mehr-als-eine-Antwort"
    },
    {
        "rubric": "Shopping",
        "title": "Schwarzes Hemd: Alles zum Mode-Klassiker und unsere 10 Favoriten",
        "author": "Von Nils Doose",
        "created": "17. August 2023",
        "id": 45,
        "imgUrl": "https://media.gq-magazin.de/photos/62b41e021c9e99a971d8653d/2:3/w_1920%2Cc_limit/schwarze-hemden-besten-herrenhemden-mode-aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "Schwarzes-Hemd:-Alles-zum-Mode-Klassiker-und-unsere-10-Favoriten"
    },
    {
        "rubric": "Shopping",
        "title": "Das perfekte weiße Hemd – und wie Sie es finden",
        "author": "Von Raffaela Herrmann",
        "created": "17. August 2023",
        "id": 46,
        "imgUrl": "https://media.gq-magazin.de/photos/64dca00d415f3e5ab3a8eba8/1:1/w_1920%2Cc_limit/GQ-Aufmacher3.jpg",
        "tags": [
            "news"
        ],
        "route": "Das-perfekte-weiße-Hemd-–-und-wie-Sie-es-finden"
    },
    {
        "rubric": "Shopping",
        "title": "Leinenanzug für Herren: Unsere 20 Sommerfavoriten für jedes Budget",
        "author": "Von Helena Ziogas",
        "created": "17. August 2023",
        "id": 47,
        "imgUrl": "https://media.gq-magazin.de/photos/649069b59ff0169a7dfb9c44/2:3/w_1920%2Cc_limit/Leinenanzug-Herren-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Leinenanzug-für-Herren:-Unsere-20-Sommerfavoriten-für-jedes-Budget"
    },
    {
        "rubric": "Sneaker Als Wertanlage",
        "title": "Teuerste Schuhe der Welt: Der aktuelle Rekordhalter sind diese Sneaker für 2.2 Millionen US Dollar",
        "author": "Von GQ.de",
        "created": "15. August 2023",
        "id": 48,
        "imgUrl": "https://media.gq-magazin.de/photos/61f9329d131bab4db80d296a/1:1/w_1600%2Cc_limit/Teuerste%2520Sneaker-Michael%2520Jordan%2520AF1-Mode.jpg",
        "tags": [
            "news"
        ],
        "route": "Teuerste-Schuhe-der-Welt:-Der-aktuelle-Rekordhalter-sind-diese-Sneaker-für-2.2-Millionen-US-Dollar"
    },
    {
        "rubric": "Sneaker-News",
        "title": "Nike ehrt Kobe Bryant mit neuem Sneaker",
        "author": "Von GQ.de",
        "created": "10. August 2023",
        "id": 49,
        "imgUrl": "https://media.gq-magazin.de/photos/64d4ac45d03be87eb2c320ff/1:1/w_1600%2Cc_limit/499681918",
        "tags": [
            "news"
        ],
        "route": "Nike-ehrt-Kobe-Bryant-mit-neuem-Sneaker"
    },
    {
        "rubric": "Mode",
        "title": "Nike, Adidas oder New Balance? Das ist die beliebteste Sneaker-Marke der Welt",
        "author": "Von GQ.de",
        "created": "8. August 2023",
        "id": 50,
        "imgUrl": "https://media.gq-magazin.de/photos/64d1fdc35c95a13af88a11b2/1:1/w_1600%2Cc_limit/Beliebteste%2520Sneakermarke%2520Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Nike,-Adidas-oder-New-Balance?-Das-ist-die-beliebteste-Sneaker-Marke-der-Welt"
    },
    {
        "rubric": "Mode",
        "title": "Skechers x Snoop Dogg: Die neue Kollektion mit der Rap-Ikone",
        "author": "Von Thu Nguyễn",
        "created": "7. August 2023",
        "id": 51,
        "imgUrl": "https://media.gq-magazin.de/photos/64cd132f415f3e5ab3a8e974/1:1/w_1600%2Cc_limit/Skechers%2520x%2520SnoopDogg_Drop1_August_23_06_23_BTS-0291_LT.jpg",
        "tags": [
            "news"
        ],
        "route": "Skechers-x-Snoop-Dogg:-Die-neue-Kollektion-mit-der-Rap-Ikone"
    },
    {
        "rubric": "Genuss Ohne Alkohol",
        "title": "Alkoholfreies Bier: Kennen Sie schon die 8 besten Sorten?",
        "author": "Von Nathalie Nietzsche-Knappe",
        "created": "2. August 2023",
        "id": 52,
        "imgUrl": "https://media.gq-magazin.de/photos/64b6937c415f3e5ab3a8e514/1:1/w_1600%2Cc_limit/1305839358",
        "tags": [
            "news"
        ],
        "route": "Alkoholfreies-Bier:-Kennen-Sie-schon-die-8-besten-Sorten?"
    },
    {
        "rubric": "Drink Der Woche",
        "title": "Das Barrio de Cuba in Deutschland erleben: Mit einem besonderen Rum im Daiquiri",
        "author": "Von Mathias Ottmann",
        "created": "27. Juli 2023",
        "id": 53,
        "imgUrl": "https://media.gq-magazin.de/photos/64c27bbd5c95a13af88a0f6d/1:1/w_1600%2Cc_limit/daiquiri-eminente-lifestyle.jpg",
        "tags": [
            "news"
        ],
        "route": "Das-Barrio-de-Cuba-in-Deutschland-erleben:-Mit-einem-besonderen-Rum-im-Daiquiri"
    },
    {
        "rubric": "Shopping",
        "title": "Prime Day Spirituosen-Schnäppchen: Dieser Gin wechselt die Farbe und ist 25 Prozent reduziert",
        "author": "Von Jessie Atkinson",
        "created": "12. Juli 2023",
        "id": 54,
        "imgUrl": "https://media.gq-magazin.de/photos/64ae9f9d5c95a13af88a0c0c/1:1/w_1600%2Cc_limit/Amazon%2520Prime%2520Day%25202023%2520Alkohol%2520Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Prime-Day-Spirituosen-Schnäppchen:-Dieser-Gin-wechselt-die-Farbe-und-ist-25-Prozent-reduziert"
    },
    {
        "rubric": "Whisky Der Woche",
        "title": "Die 21 besten Whiskys und Whiskeys – das ist unsere Topliste",
        "author": "Von Mathias Ottmann",
        "created": "20. Juni 2023",
        "id": 55,
        "imgUrl": "https://media.gq-magazin.de/photos/6218af10b41ac51e98246b66/1:1/w_1600%2Cc_limit/whisky-der-woche-aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Die-21-besten-Whiskys-und-Whiskeys-–-das-ist-unsere-Topliste"
    },
    {
        "rubric": "Selbstverwirklichung",
        "title": "Lebenslanges Lernen: 7 Tipps, damit Sie am Ball bleiben",
        "author": "Von Maria Berentzen",
        "created": "15. Juli 2023",
        "id": 56,
        "imgUrl": "https://media.gq-magazin.de/photos/64b0f97cd03be87eb2c31abf/1:1/w_1920%2Cc_limit/GettyImages-LebenslangesLernen3.jpg",
        "tags": [
            "news"
        ],
        "route": "Lebenslanges-Lernen:-7-Tipps,-damit-Sie-am-Ball-bleiben"
    },
    {
        "rubric": "Shopping",
        "title": "Der Sommermode Guide für den stilbewussten Mann: Zeitlose Klassiker und trendige Accessoires",
        "author": "Von Helena Ziogas",
        "created": "7. Juli 2023",
        "id": 57,
        "imgUrl": "https://media.gq-magazin.de/photos/64a41bbc415f3e5ab3a8deff/2:3/w_1920%2Cc_limit/Sommermode-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Der-Sommermode-Guide-für-den-stilbewussten-Mann:-Zeitlose-Klassiker-und-trendige-Accessoires"
    },
    {
        "rubric": "Karriere",
        "title": "6 Tipps für neue Führungskräfte",
        "author": "Von Maria Berentzen",
        "created": "5. Juli 2023",
        "id": 58,
        "imgUrl": "https://media.gq-magazin.de/photos/609390575808bd76fb7929ae/2:3/w_1920%2Cc_limit/new-work-kolumne-verdienst-chef-karriere-business-aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "6-Tipps-für-neue-Führungskräfte"
    },
    {
        "rubric": "Karriere",
        "title": "Alleinstellungsmerkmal entwickeln: So heben Sie sich im Job von anderen ab",
        "author": "Von Maria Berentzen",
        "created": "12. Juli 2023",
        "id": 59,
        "imgUrl": "https://media.gq-magazin.de/photos/64ad1019d03be87eb2c3192b/2:3/w_1920%2Cc_limit/GettyImages-Bewerbung1.jpg",
        "tags": [
            "news"
        ],
        "route": "Alleinstellungsmerkmal-entwickeln:-So-heben-Sie-sich-im-Job-von-anderen-ab"
    },
    {
        "rubric": "Lifestyle",
        "title": "Unfassbare Summe: So viel verdienten die reichsten Milliardäre der Welt 2023 bisher durchschnittlich – pro Tag",
        "author": "Von GQ.de",
        "created": "5. Juli 2023",
        "id": 60,
        "imgUrl": "https://media.gq-magazin.de/photos/64a5286ad03be87eb2c317c4/1:1/w_1920%2Cc_limit/1229892614",
        "tags": [
            "news"
        ],
        "route": "Unfassbare-Summe:-So-viel-verdienten-die-reichsten-Milliardäre-der-Welt-2023-bisher-durchschnittlich-–-pro-Tag"
    },
    {
        "rubric": "Business",
        "title": "Elon Musk: Diese unglaubliche Summe hat er mit Twitter in weniger als einem Jahr verloren",
        "author": "Von GQ.de",
        "created": "1. Juli 2023",
        "id": 61,
        "imgUrl": "https://media.gq-magazin.de/photos/64770d9ce0f7040c8202ecc5/2:3/w_1920%2Cc_limit/1255019302",
        "tags": [
            "news"
        ],
        "route": "Elon-Musk:-Diese-unglaubliche-Summe-hat-er-mit-Twitter-in-weniger-als-einem-Jahr-verloren"
    },
    {
        "rubric": "Kritik",
        "title": "“37 Sekunden” Serie: Ist das eine Vergewaltigung?",
        "author": "Von Ulf Pape",
        "created": "16. August 2023",
        "id": 62,
        "imgUrl": "https://media.gq-magazin.de/photos/64cbc5b15c95a13af88a1118/1:1/w_1600%2Cc_limit/37%2520Sekunden_03.jpg",
        "tags": [
            "news"
        ],
        "route": "“37-Sekunden”-Serie:-Ist-das-eine-Vergewaltigung?"
    },
    {
        "rubric": "Auktion",
        "title": "Roger Moore: Seine persönliche James-Bond-Sammlung wird versteigert – darunter ein 007-Smoking und einige Luxusuhren",
        "author": "Von GQ.de",
        "created": "16. August 2023",
        "id": 63,
        "imgUrl": "https://media.gq-magazin.de/photos/64dca097d03be87eb2c322eb/1:1/w_1600%2Cc_limit/607391782",
        "tags": [
            "news"
        ],
        "route": "Roger-Moore:-Seine-persönliche-James-Bond-Sammlung-wird-versteigert-–-darunter-ein-007-Smoking-und-einige-Luxusuhren"
    },
    {
        "rubric": "RIP",
        "title": "15 Netflix-Serien, die nach nur einer Staffel eingestellt wurden",
        "author": "Von Anna Rinderspacher",
        "created": "16. August 2023",
        "id": 64,
        "imgUrl": "https://media.gq-magazin.de/photos/64cb8f5ad03be87eb2c31fce/1:1/w_1600%2Cc_limit/enterteinment-serien-netflix-gypsy-aufm.jpg",
        "tags": [
            "news"
        ],
        "route": "15-Netflix-Serien,-die-nach-nur-einer-Staffel-eingestellt-wurden"
    },
    {
        "rubric": "Die Besten Serien",
        "title": "Von \"The Witcher\" bis \"Haus des Geldes\": Bei diesen 18 Netflix-Serien ist Action garantiert",
        "author": "Von Anna Rinderspacher",
        "created": "16. August 2023",
        "id": 65,
        "imgUrl": "https://media.gq-magazin.de/photos/648ac3fee0f7040c8202f14d/1:1/w_1600%2Cc_limit/netflix.jpg",
        "tags": [
            "news"
        ],
        "route": "Von-\"The-Witcher\"-bis-\"Haus-des-Geldes\":-Bei-diesen-18-Netflix-Serien-ist-Action-garantiert"
    },
    {
        "rubric": "Body & Care",
        "title": "Welches ist es, das beste Männerparfum? Wir haben mehr als eine Antwort",
        "author": "Von Raffaela Herrmann, Nils Doose, and Helena Ziogas",
        "created": "unknown",
        "id": 66,
        "imgUrl": "https://media.gq-magazin.de/photos/64ddd7cad03be87eb2c32323/1:1/w_320%2Cc_limit/Bestes-Maennerparfum-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Welches-ist-es,-das-beste-Männerparfum?-Wir-haben-mehr-als-eine-Antwort"
    },
    {
        "rubric": "Entertainment",
        "title": "Lionel Messi, der größte Fußballstar der Welt trägt diesen Sneaker für 150 Euro",
        "author": "Von GQ.de",
        "created": "unknown",
        "id": 67,
        "imgUrl": "https://media.gq-magazin.de/photos/64de1592d03be87eb2c32365/1:1/w_320%2Cc_limit/Lionell-Messi-News-Sneaker.jpg",
        "tags": [
            "news"
        ],
        "route": "Lionel-Messi,-der-größte-Fußballstar-der-Welt-trägt-diesen-Sneaker-für-150-Euro"
    },
    {
        "rubric": "Body & Care",
        "title": "Whey Protein Test 2023: Die 20 besten Proteinpulver im Check",
        "author": "Von Raffaela Herrmann",
        "created": "unknown",
        "id": 68,
        "imgUrl": "https://media.gq-magazin.de/photos/6261055770c42c3da955a07e/1:1/w_320%2Cc_limit/Fitness-Whey%2520Protein%2520Test%25202022-Aufmacher.jpg",
        "tags": [
            "news"
        ],
        "route": "Whey-Protein-Test-2023:-Die-20-besten-Proteinpulver-im-Check"
    },
    {
        "rubric": "Shopping",
        "title": "Matratzen-Test 2023: Die 11 besten Matratzen im Vergleich",
        "author": "Von Raffaela Herrmann",
        "created": "24. Juli 2023",
        "id": 69,
        "imgUrl": "https://media.gq-magazin.de/photos/62b97e583aee0a08f9da0d2b/4:3/w_1280%2Cc_limit/matratzen-test-besten-matratzen-lifestyle-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Matratzen-Test-2023:-Die-11-besten-Matratzen-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Handgepäck Koffer: Die 10 besten Reisebegleiter im Test",
        "author": "Von Elisa Ascher",
        "created": "13. Juli 2023",
        "id": 70,
        "imgUrl": "https://media.gq-magazin.de/photos/642bbfb55198fe7caf208ef2/4:3/w_768%2Cc_limit/handgepa%25CC%2588ckkoffer-gq-GettyImages-1280016887.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Handgepäck-Koffer:-Die-10-besten-Reisebegleiter-im-Test"
    },
    {
        "rubric": "Shopping",
        "title": "SUP Board Test 2023: Die besten Stand Up Paddle Boards im Vergleich",
        "author": "Von Raffaela Herrmann",
        "created": "23. Mai 2023",
        "id": 71,
        "imgUrl": "https://media.gq-magazin.de/photos/62b484f7052901c8b9a9e35b/4:3/w_768%2Cc_limit/Fitness-SUP%2520Board%2520Test-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "SUP-Board-Test-2023:-Die-besten-Stand-Up-Paddle-Boards-im-Vergleich"
    },
    {
        "rubric": "Mode-News",
        "title": "Stüssy enthüllt Herbstkollektion 2023 – ein Mix aus Skater-Kleidung und Strick-Looks",
        "author": "unknown",
        "created": "18. August 2023",
        "id": 72,
        "imgUrl": "https://media.gq-magazin.de/photos/64df3e4a415f3e5ab3a8eca9/4:3/w_748%2Cc_limit/Mode_Stu%25CC%2588ssy%2520Herbstkollektion%25202023.png",
        "tags": [
            "shopping"
        ],
        "route": "Stüssy-enthüllt-Herbstkollektion-2023-–-ein-Mix-aus-Skater-Kleidung-und-Strick-Looks"
    },
    {
        "rubric": "Mode",
        "title": "Kopenhagen Fashion Week: Von diesen 5 dänischen Marken werden Sie in Zukunft noch einiges hören",
        "author": "Von Samuel Hine",
        "created": "18. August 2023",
        "id": 73,
        "imgUrl": "https://media.gq-magazin.de/photos/64dcaa78415f3e5ab3a8ebb9/4:3/w_748%2Cc_limit/gq%2520sn%2520lede%2520image.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Kopenhagen-Fashion-Week:-Von-diesen-5-dänischen-Marken-werden-Sie-in-Zukunft-noch-einiges-hören"
    },
    {
        "rubric": "Sneaker-News",
        "title": "Die besten Sneaker-Releases der Woche: Adidas x Homer Simpson, Nike Air Jordan und Ganni x New Balance",
        "author": "Von Manuela Hainz",
        "created": "17. August 2023",
        "id": 74,
        "imgUrl": "https://media.gq-magazin.de/photos/6319e92a93c428d557785ef4/4:3/w_748%2Cc_limit/Mode-SneakerReleases-Aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Die-besten-Sneaker-Releases-der-Woche:-Adidas-x-Homer-Simpson,-Nike-Air-Jordan-und-Ganni-x-New-Balance"
    },
    {
        "rubric": "Shopping",
        "title": "Schwarzes Hemd: Alles zum Mode-Klassiker und unsere 10 Favoriten",
        "author": "Von Nils Doose",
        "created": "17. August 2023",
        "id": 75,
        "imgUrl": "https://media.gq-magazin.de/photos/62b41e021c9e99a971d8653d/4:3/w_748%2Cc_limit/schwarze-hemden-besten-herrenhemden-mode-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Schwarzes-Hemd:-Alles-zum-Mode-Klassiker-und-unsere-10-Favoriten"
    },
    {
        "rubric": "Mode-News",
        "title": "The North Face x Comme des Garçons: Der neue Drop – japanische Mode trifft auf coole Outdoor-Styles",
        "author": "Von GQ.de",
        "created": "17. August 2023",
        "id": 76,
        "imgUrl": "https://media.gq-magazin.de/photos/64dde4cb415f3e5ab3a8ebff/4:3/w_748%2Cc_limit/A86KS_TNF_F23_CDG_003a.jpg",
        "tags": [
            "shopping"
        ],
        "route": "The-North-Face-x-Comme-des-Garçons:-Der-neue-Drop-–-japanische-Mode-trifft-auf-coole-Outdoor-Styles"
    },
    {
        "rubric": "Mode",
        "title": "Jeremy Allen White trägt jetzt Nagellack – und sieht cooler aus denn je",
        "author": "Von Eileen Cartter",
        "created": "16. August 2023",
        "id": 77,
        "imgUrl": "https://media.gq-magazin.de/photos/64dbd5ce415f3e5ab3a8eb2b/4:3/w_748%2Cc_limit/Jeremy%2520Allen%2520White.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Jeremy-Allen-White-trägt-jetzt-Nagellack-–-und-sieht-cooler-aus-denn-je"
    },
    {
        "rubric": "Mode-News",
        "title": "Palace x McDonald's: Die erste Kollektion des Fast-Food-Giganten mit der Hype-Skaterbrand",
        "author": "Von GQ.de",
        "created": "16. August 2023",
        "id": 78,
        "imgUrl": "https://media.gq-magazin.de/photos/64dc87a6415f3e5ab3a8eb3c/4:3/w_748%2Cc_limit/Mode_PalacexMcdonalds%2520hoodie.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Palace-x-McDonald's:-Die-erste-Kollektion-des-Fast-Food-Giganten-mit-der-Hype-Skaterbrand"
    },
    {
        "rubric": "Tech-News",
        "title": "Special Edition? Apple arbeitet angeblich an einer \"Apple Watch X\" zum zehnjährigen Jubiläum",
        "author": "Von GQ.de",
        "created": "16. August 2023",
        "id": 79,
        "imgUrl": "https://media.gq-magazin.de/photos/64dc7f3a415f3e5ab3a8eb36/4:3/w_748%2Cc_limit/1233022114",
        "tags": [
            "shopping"
        ],
        "route": "Special-Edition?-Apple-arbeitet-angeblich-an-einer-\"Apple-Watch-X\"-zum-zehnjährigen-Jubiläum"
    },
    {
        "rubric": "Die Neue GQ",
        "title": "Einblicke in Pharrell Williams' erste Monate bei Louis Vuitton – und seine Vision für die Zukunft der Mode",
        "author": "Von Noah Johnson",
        "created": "15. August 2023",
        "id": 80,
        "imgUrl": "https://media.gq-magazin.de/photos/64d5e5b15c95a13af88a1396/4:3/w_748%2Cc_limit/GQ0923_Pharrell_01.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Einblicke-in-Pharrell-Williams'-erste-Monate-bei-Louis-Vuitton-–-und-seine-Vision-für-die-Zukunft-der-Mode"
    },
    {
        "rubric": "Mode",
        "title": "Kid Cudi, Alexa Demie & Co. sind die Stars der Calvin-Klein-Kampagne für den Herbst 2023",
        "author": "Von GQ.de",
        "created": "15. August 2023",
        "id": 81,
        "imgUrl": "https://media.gq-magazin.de/photos/64db5d52d03be87eb2c322b1/4:3/w_748%2Cc_limit/Mode_Kid%2520Cudi_Calvin%2520Klein%2520Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Kid-Cudi,-Alexa-Demie-&-Co.-sind-die-Stars-der-Calvin-Klein-Kampagne-für-den-Herbst-2023"
    },
    {
        "rubric": "Shopping",
        "title": "Leinenhosen: Die 10 schönsten Sommerhosen und wie wir sie kombinieren",
        "author": "unknown",
        "created": "unknown",
        "id": 82,
        "imgUrl": "https://media.gq-magazin.de/photos/646dcbf5d41edcd1a0a43d4c/4:3/w_1600%2Cc_limit/leinenhosen-gq-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Leinenhosen:-Die-10-schönsten-Sommerhosen-und-wie-wir-sie-kombinieren"
    },
    {
        "rubric": "Shopping",
        "title": "Badehosen-Trends 2023: Farben, Schnitte und die 10 besten Modelle",
        "author": "unknown",
        "created": "unknown",
        "id": 83,
        "imgUrl": "https://media.gq-magazin.de/photos/645dfaa9d41edcd1a0a43b50/4:3/w_1600%2Cc_limit/badehosen-gq-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Badehosen-Trends-2023:-Farben,-Schnitte-und-die-10-besten-Modelle"
    },
    {
        "rubric": "Shopping",
        "title": "Die 10 besten Sonnenbrillenmarken für Männer",
        "author": "unknown",
        "created": "unknown",
        "id": 84,
        "imgUrl": "https://media.gq-magazin.de/photos/645a13ef9ff0169a7dfb923d/4:3/w_1600%2Cc_limit/Sonnenbrille-Marken-Aufmacher-NEW.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Die-10-besten-Sonnenbrillenmarken-für-Männer"
    },
    {
        "rubric": "Shopping",
        "title": "Anzug im Sommer: Das sind die schönsten Suits ab 100 Euro für heiße Tage",
        "author": "unknown",
        "created": "unknown",
        "id": 85,
        "imgUrl": "https://media.gq-magazin.de/photos/646dd3269ff0169a7dfb953e/4:3/w_1600%2Cc_limit/anzug-im-sommer-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Anzug-im-Sommer:-Das-sind-die-schönsten-Suits-ab-100-Euro-für-heiße-Tage"
    },
    {
        "rubric": "Shopping",
        "title": "Die 15 besten weißen T-Shirts für Männer unter 55 Euro ",
        "author": "unknown",
        "created": "unknown",
        "id": 86,
        "imgUrl": "https://media.gq-magazin.de/photos/64c8bc28d03be87eb2c31e6f/4:3/w_1600%2Cc_limit/GQ-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Die-15-besten-weißen-T-Shirts-für-Männer-unter-55-Euro "
    },
    {
        "rubric": "Shopping",
        "title": "Sommerdüfte 2023: Die Lieblinge der GQ-Redaktion",
        "author": "unknown",
        "created": "unknown",
        "id": 87,
        "imgUrl": "https://media.gq-magazin.de/photos/647713119ff0169a7dfb96a9/4:3/w_1600%2Cc_limit/sommerdu%25CC%2588fte-ma%25CC%2588nner-gq-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Sommerdüfte-2023:-Die-Lieblinge-der-GQ-Redaktion"
    },
    {
        "rubric": "Shopping",
        "title": "Beste Sonnencreme: Unsere 17 Testsieger bieten effektiven Schutz",
        "author": "unknown",
        "created": "unknown",
        "id": 88,
        "imgUrl": "https://media.gq-magazin.de/photos/60a3afad01d3a5b659ebb102/4:3/w_1600%2Cc_limit/best-of-sonnencreme-2021-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Beste-Sonnencreme:-Unsere-17-Testsieger-bieten-effektiven-Schutz"
    },
    {
        "rubric": "Shopping",
        "title": "Diese Düfte lassen Sie sofort attraktiver wirken",
        "author": "unknown",
        "created": "unknown",
        "id": 89,
        "imgUrl": "https://media.gq-magazin.de/photos/63189c95fda8a1210ef3c709/4:3/w_1600%2Cc_limit/verfuehrerische-duefte-gq2.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Diese-Düfte-lassen-Sie-sofort-attraktiver-wirken"
    },
    {
        "rubric": "Shopping",
        "title": "Beste Duftkerzen: Die 10 GQ-Favoriten im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 90,
        "imgUrl": "https://media.gq-magazin.de/photos/64366ee50b0bb2c8f5bd7103/4:3/w_1600%2Cc_limit/beste-duftkerzen-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Beste-Duftkerzen:-Die-10-GQ-Favoriten-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Föhn-Test 2023: Die Top 13 Haartrockner im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 91,
        "imgUrl": "https://media.gq-magazin.de/photos/626a7b4170c42c3da955a2ea/4:3/w_1600%2Cc_limit/fo%25CC%2588hn-test-haartrockner-im-vergleich-pflege-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Föhn-Test-2023:-Die-Top-13-Haartrockner-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Kopfkissen Test: Die 13 besten Kissen für jeden Schlaftyp",
        "author": "unknown",
        "created": "unknown",
        "id": 92,
        "imgUrl": "https://media.gq-magazin.de/photos/62eb8737735416464087dba7/4:3/w_1600%2Cc_limit/kopfkissen-test-besten-kissen-lifestyle-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Kopfkissen-Test:-Die-13-besten-Kissen-für-jeden-Schlaftyp"
    },
    {
        "rubric": "Shopping",
        "title": "Boxspringbett Test: Das sind die 8 besten Betten im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 93,
        "imgUrl": "https://media.gq-magazin.de/photos/644a6cffd41edcd1a0a436cc/4:3/w_1600%2Cc_limit/boxspring-bett-gq-GettyImages-1215173300.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Boxspringbett-Test:-Das-sind-die-8-besten-Betten-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Bettdecken Test 2023: Die besten Modelle für einen luxuriösen Schlaf wie im Hotel",
        "author": "unknown",
        "created": "unknown",
        "id": 94,
        "imgUrl": "https://media.gq-magazin.de/photos/64b90d8e5c95a13af88a0d45/4:3/w_1600%2Cc_limit/Bettdecken-Test-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Bettdecken-Test-2023:-Die-besten-Modelle-für-einen-luxuriösen-Schlaf-wie-im-Hotel"
    },
    {
        "rubric": "Shopping",
        "title": "Handgepäck Koffer: Die besten Reisebegleiter im Test",
        "author": "unknown",
        "created": "unknown",
        "id": 95,
        "imgUrl": "https://media.gq-magazin.de/photos/642bbfb55198fe7caf208ef2/4:3/w_1600%2Cc_limit/handgepa%25CC%2588ckkoffer-gq-GettyImages-1280016887.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Handgepäck-Koffer:-Die-besten-Reisebegleiter-im-Test"
    },
    {
        "rubric": "Shopping",
        "title": "Grill Test 2023: Die 21 besten Grills im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 96,
        "imgUrl": "https://media.gq-magazin.de/photos/625eacdeeea3f906c70b48e8/4:3/w_1600%2Cc_limit/Lifestyle-Grill%2520Test%25202022-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Grill-Test-2023:-Die-21-besten-Grills-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Staubsauger Test: Die besten Geräte, um Ihr Zuhause mit Leichtigkeit auf Vordermann zu bringen",
        "author": "unknown",
        "created": "unknown",
        "id": 97,
        "imgUrl": "https://media.gq-magazin.de/photos/64634472e0f7040c8202e9bb/4:3/w_1600%2Cc_limit/staubsauger-test-gq-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Staubsauger-Test:-Die-besten-Geräte,-um-Ihr-Zuhause-mit-Leichtigkeit-auf-Vordermann-zu-bringen"
    },
    {
        "rubric": "Shopping",
        "title": "Bierzapfanlage Test 2023: Das sind die Top 7 für zu Hause",
        "author": "unknown",
        "created": "unknown",
        "id": 98,
        "imgUrl": "https://media.gq-magazin.de/photos/6273b959a19c57b760c8a536/4:3/w_1600%2Cc_limit/Lifestyle-Bierzapfanlage%2520Test%25202022-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Bierzapfanlage-Test-2023:-Das-sind-die-Top-7-für-zu-Hause"
    },
    {
        "rubric": "Shopping",
        "title": "Pizzaofen für zuhause: Die besten 7 Pizzamaker im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 99,
        "imgUrl": "https://media.gq-magazin.de/photos/64252aca408da8cdd0c36119/4:3/w_1600%2Cc_limit/pizzaofen-fu%25CC%2588r-zuhause-gq-GettyImages-960962890.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Pizzaofen-für-zuhause:-Die-besten-7-Pizzamaker-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Protein-Shake-Test: Die 10 besten Eiweißshakes für den Muskelaufbau",
        "author": "unknown",
        "created": "unknown",
        "id": 100,
        "imgUrl": "https://media.gq-magazin.de/photos/640b01d6d9f4fc5f0ce95170/4:3/w_1600%2Cc_limit/protein-shake-fitness-aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Protein-Shake-Test:-Die-10-besten-Eiweißshakes-für-den-Muskelaufbau"
    },
    {
        "rubric": "Fitness",
        "title": "Bestes Creatin: Die 10 Top-Präparate für schnelleren Muskelaufbau",
        "author": "unknown",
        "created": "unknown",
        "id": 101,
        "imgUrl": "https://media.gq-magazin.de/photos/63cfb1621cdd8aa4c2459c79/4:3/w_1600%2Cc_limit/Bestes-Creatin-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Bestes-Creatin:-Die-10-Top-Präparate-für-schnelleren-Muskelaufbau"
    },
    {
        "rubric": "Gesundheit",
        "title": "Probiotika Test: Die 7 besten Produkte im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 102,
        "imgUrl": "https://media.gq-magazin.de/photos/62de6774aca723550925d41f/4:3/w_1600%2Cc_limit/Gesundheit-Probiotika%2520Test-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Probiotika-Test:-Die-7-besten-Produkte-im-Vergleich"
    },
    {
        "rubric": "Shopping",
        "title": "Proteinriegel Test 2023: Die 15 besten Eiweißriegel im Vergleich",
        "author": "unknown",
        "created": "unknown",
        "id": 103,
        "imgUrl": "https://media.gq-magazin.de/photos/626fe7ac5bba1bd3fdbaf893/4:3/w_1600%2Cc_limit/Fitness-Proteinriegel%2520Test%25202022-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Proteinriegel-Test-2023:-Die-15-besten-Eiweißriegel-im-Vergleich"
    },
    {
        "rubric": "Boost It!",
        "title": "10 Supplements, die Haut, Fitness und Gesundheit von innen stärken",
        "author": "unknown",
        "created": "unknown",
        "id": 104,
        "imgUrl": "https://media.gq-magazin.de/photos/615d7ea665d6a781b6bf6aaf/4:3/w_1600%2Cc_limit/body-care-gesundheit-supplements-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "10-Supplements,-die-Haut,-Fitness-und-Gesundheit-von-innen-stärken"
    },
    {
        "rubric": "Filmwissen",
        "title": "Von “The Trial of the Chicago 7” bis “Philadelphia”: Diese Justizdramen sollte jeder gesehen haben",
        "author": "Von Anna Rinderspacher",
        "created": "18. August 2023",
        "id": 105,
        "imgUrl": "https://media.gq-magazin.de/photos/604f5935d74bd3971c1f7535/4:3/w_1600%2Ch_1200%2Cc_limit/oscar-nominierungen-chicago-7-film-entertainment.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Von-“The-Trial-of-the-Chicago-7”-bis-“Philadelphia”:-Diese-Justizdramen-sollte-jeder-gesehen-haben"
    },
    {
        "rubric": "Shopping",
        "title": "Kurzarmhemden: Die besten Designs für den Sommer und wie sie kombiniert werden",
        "author": "Von Patrick Pendiuk",
        "created": "17. August 2023",
        "id": 106,
        "imgUrl": "https://media.gq-magazin.de/photos/64ddf223415f3e5ab3a8ec04/4:3/w_1600%2Ch_1200%2Cc_limit/Kurzarmhemden-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Kurzarmhemden:-Die-besten-Designs-für-den-Sommer-und-wie-sie-kombiniert-werden"
    },
    {
        "rubric": "Sneaker-News",
        "title": "Die besten Sneaker-Releases der Woche: Adidas x Homer Simpson, Nike Air Jordan und Ganni x New Balance",
        "author": "Von Manuela Hainz",
        "created": "17. August 2023",
        "id": 107,
        "imgUrl": "https://media.gq-magazin.de/photos/6319e92a93c428d557785ef4/4:3/w_1600%2Ch_1200%2Cc_limit/Mode-SneakerReleases-Aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Die-besten-Sneaker-Releases-der-Woche:-Adidas-x-Homer-Simpson,-Nike-Air-Jordan-und-Ganni-x-New-Balance"
    },
    {
        "rubric": "Shopping",
        "title": "Schwarzes Hemd: Alles zum Mode-Klassiker und unsere 10 Favoriten",
        "author": "Von Nils Doose",
        "created": "17. August 2023",
        "id": 108,
        "imgUrl": "https://media.gq-magazin.de/photos/62b41e021c9e99a971d8653d/4:3/w_1600%2Ch_1200%2Cc_limit/schwarze-hemden-besten-herrenhemden-mode-aufm.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Schwarzes-Hemd:-Alles-zum-Mode-Klassiker-und-unsere-10-Favoriten"
    },
    {
        "rubric": "Shopping",
        "title": "Die 17 besten Polohemden und wie wir den Klassiker stylen",
        "author": "Von Patrick Pendiuk",
        "created": "17. August 2023",
        "id": 109,
        "imgUrl": "https://media.gq-magazin.de/photos/6492d215d41edcd1a0a444a1/4:3/w_1600%2Ch_1200%2Cc_limit/Polohemden-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Die-17-besten-Polohemden-und-wie-wir-den-Klassiker-stylen"
    },
    {
        "rubric": "Sneaker-News",
        "title": "Lionel Messi, der größte Fußballstar der Welt trägt diesen Sneaker für 150 Euro",
        "author": "Von GQ.de",
        "created": "17. August 2023",
        "id": 110,
        "imgUrl": "https://media.gq-magazin.de/photos/64de1592d03be87eb2c32365/4:3/w_1600%2Ch_1200%2Cc_limit/Lionell-Messi-News-Sneaker.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Lionel-Messi,-der-größte-Fußballstar-der-Welt-trägt-diesen-Sneaker-für-150-Euro"
    },
    {
        "rubric": "Shopping",
        "title": "Das perfekte weiße Hemd – und wie Sie es finden",
        "author": "Von Raffaela Herrmann",
        "created": "17. August 2023",
        "id": 111,
        "imgUrl": "https://media.gq-magazin.de/photos/64dca00d415f3e5ab3a8eba8/4:3/w_1600%2Ch_1200%2Cc_limit/GQ-Aufmacher3.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Das-perfekte-weiße-Hemd-–-und-wie-Sie-es-finden"
    },
    {
        "rubric": "Shopping",
        "title": "Welches ist es, das beste Männerparfum? Wir haben mehr als eine Antwort",
        "author": "Von Raffaela Herrmann",
        "created": "17. August 2023",
        "id": 112,
        "imgUrl": "https://media.gq-magazin.de/photos/64ddd7cad03be87eb2c32323/4:3/w_1600%2Ch_1200%2Cc_limit/Bestes-Maennerparfum-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Welches-ist-es,-das-beste-Männerparfum?-Wir-haben-mehr-als-eine-Antwort"
    },
    {
        "rubric": "Shopping",
        "title": "Leinenanzug für Herren: Unsere 20 Sommerfavoriten für jedes Budget",
        "author": "Von Helena Ziogas",
        "created": "17. August 2023",
        "id": 113,
        "imgUrl": "https://media.gq-magazin.de/photos/649069b59ff0169a7dfb9c44/4:3/w_1600%2Ch_1200%2Cc_limit/Leinenanzug-Herren-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Leinenanzug-für-Herren:-Unsere-20-Sommerfavoriten-für-jedes-Budget"
    },
    {
        "rubric": "Checkliste",
        "title": "Flug-Essentials: Diese 11 Tools sollten Sie bei einem Langstreckenflug im Handgepäck haben",
        "author": "Von Julia Fürst",
        "created": "16. August 2023",
        "id": 114,
        "imgUrl": "https://media.gq-magazin.de/photos/64d9e988d03be87eb2c321f3/4:3/w_1600%2Ch_1200%2Cc_limit/GettyImages-FlightEssentials.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Flug-Essentials:-Diese-11-Tools-sollten-Sie-bei-einem-Langstreckenflug-im-Handgepäck-haben"
    },
    {
        "rubric": "Shopping",
        "title": "14 Sportkopfhörer im Test: Tolle Trainingsbuddies gibt’s schon ab 14 Euro!",
        "author": "Von Raffaela Herrmann",
        "created": "16. August 2023",
        "id": 115,
        "imgUrl": "https://media.gq-magazin.de/photos/64dc94225c95a13af88a14f0/4:3/w_1600%2Ch_1200%2Cc_limit/Sportkopfhoerer%2520Test%2520Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "14-Sportkopfhörer-im-Test:-Tolle-Trainingsbuddies-gibt’s-schon-ab-14-Euro!"
    },
    {
        "rubric": "Sneaker Als Wertanlage",
        "title": "Teuerste Schuhe der Welt: Der aktuelle Rekordhalter sind diese Sneaker für 2.2 Millionen US Dollar",
        "author": "Von GQ.de",
        "created": "15. August 2023",
        "id": 116,
        "imgUrl": "https://media.gq-magazin.de/photos/61f9329d131bab4db80d296a/4:3/w_1600%2Ch_1200%2Cc_limit/Teuerste%2520Sneaker-Michael%2520Jordan%2520AF1-Mode.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Teuerste-Schuhe-der-Welt:-Der-aktuelle-Rekordhalter-sind-diese-Sneaker-für-2.2-Millionen-US-Dollar"
    },
    {
        "rubric": "Shopping",
        "title": "Eiswürfelmaschine Test: Mit diesen 10 Geräten haben Sie immer perfekte Eiswürfel für kühle Drinks",
        "author": "Von Julia Fürst",
        "created": "14. August 2023",
        "id": 117,
        "imgUrl": "https://media.gq-magazin.de/photos/64b9301b415f3e5ab3a8e5ed/4:3/w_1600%2Ch_1200%2Cc_limit/Eiswuerfelmaschine-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Eiswürfelmaschine-Test:-Mit-diesen-10-Geräten-haben-Sie-immer-perfekte-Eiswürfel-für-kühle-Drinks"
    },
    {
        "rubric": "Stars & Ihre Filme",
        "title": "Timothée Chalamet: Das sind die besten Filme des jungen Stars",
        "author": "Von Anna Rinderspacher",
        "created": "13. August 2023",
        "id": 118,
        "imgUrl": "https://media.gq-magazin.de/photos/623c254cafa05c44ddab8c61/4:3/w_1600%2Ch_1200%2Cc_limit/MCDDUNE_WB056.jpeg",
        "tags": [
            "shopping"
        ],
        "route": "Timothée-Chalamet:-Das-sind-die-besten-Filme-des-jungen-Stars"
    },
    {
        "rubric": "Shopping",
        "title": "Haferlschuhe: Diese 10 traditionellen Modelle machen Ihren Wiesn-Look perfekt",
        "author": "Von Raffaela Herrmann",
        "created": "11. August 2023",
        "id": 119,
        "imgUrl": "https://media.gq-magazin.de/photos/64d4dfa0415f3e5ab3a8ea73/4:3/w_1600%2Ch_1200%2Cc_limit/Haferlschuhe-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Haferlschuhe:-Diese-10-traditionellen-Modelle-machen-Ihren-Wiesn-Look-perfekt"
    },
    {
        "rubric": "Shopping",
        "title": "Oktoberfest 2023: Alles, was Männer für den perfekten Wiesn-Look brauchen",
        "author": "Von Raffaela Herrmann",
        "created": "10. August 2023",
        "id": 120,
        "imgUrl": "https://media.gq-magazin.de/photos/64d367135c95a13af88a12e8/4:3/w_1600%2Ch_1200%2Cc_limit/Oktoberfest-Outfit-Herren-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Oktoberfest-2023:-Alles,-was-Männer-für-den-perfekten-Wiesn-Look-brauchen"
    },
    {
        "rubric": "Shopping",
        "title": "Trachtenhemd Herren: Die 10 schönsten Hemden für die Wiesn ab 30 Euro",
        "author": "Von Raffaela Herrmann",
        "created": "9. August 2023",
        "id": 121,
        "imgUrl": "https://media.gq-magazin.de/photos/64d246ac5c95a13af88a12b6/4:3/w_1600%2Ch_1200%2Cc_limit/Trachtenhemden-Aufmacher-NEW.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Trachtenhemd-Herren:-Die-10-schönsten-Hemden-für-die-Wiesn-ab-30-Euro"
    },
    {
        "rubric": "Shopping",
        "title": "Jeanshemden: Von Workwear zum Modeklassiker – das sind die 10 schönsten Pieces",
        "author": "Von Nils Doose",
        "created": "9. August 2023",
        "id": 122,
        "imgUrl": "https://media.gq-magazin.de/photos/64ad6969415f3e5ab3a8e2df/4:3/w_1600%2Ch_1200%2Cc_limit/Jeanshemden-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Jeanshemden:-Von-Workwear-zum-Modeklassiker-–-das-sind-die-10-schönsten-Pieces"
    },
    {
        "rubric": "Shopping",
        "title": "So findet jeder Bräutigam den perfekten Hochzeitsanzug",
        "author": "Von Nils Doose",
        "created": "8. August 2023",
        "id": 123,
        "imgUrl": "https://media.gq-magazin.de/photos/64cb6e3d415f3e5ab3a8e8af/4:3/w_1600%2Ch_1200%2Cc_limit/Hochzeitsanzug%2520Herren%2520David%2520Beckham%2520Suit%2520Wedding%2520Royal.jpg",
        "tags": [
            "shopping"
        ],
        "route": "So-findet-jeder-Bräutigam-den-perfekten-Hochzeitsanzug"
    },
    {
        "rubric": "Shopping",
        "title": "Herren-Hemden: Die 10 schönsten Shirts ab 50 Euro für jeden Anlass",
        "author": "Von Nils Doose",
        "created": "8. August 2023",
        "id": 124,
        "imgUrl": "https://media.gq-magazin.de/photos/64cb668cd03be87eb2c31fb9/4:3/w_1600%2Ch_1200%2Cc_limit/Herren-Hemden-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Herren-Hemden:-Die-10-schönsten-Shirts-ab-50-Euro-für-jeden-Anlass"
    },
    {
        "rubric": "Shopping",
        "title": "Levi's-Jeans: Die 15 besten Modelle unter 100 Euro",
        "author": "Von Helena Ziogas",
        "created": "7. August 2023",
        "id": 125,
        "imgUrl": "https://media.gq-magazin.de/photos/64d0fb2f415f3e5ab3a8e98d/4:3/w_1600%2Ch_1200%2Cc_limit/GQ-Aufmacher.jpg",
        "tags": [
            "shopping"
        ],
        "route": "Levi's-Jeans:-Die-15-besten-Modelle-unter-100-Euro"
    },
    {
        "rubric": "Shopping",
        "title": "14 sports headphones in the test: Great training buddies are available from 14 euros!",
        "author": "By Raffaela Herrmann",
        "created": "August 16, 2023",
        "id": 126,
        "imgUrl": "https://media.gq-magazin.de/photos/64dc94225c95a13af88a14f0/1:1/w_1600%2Cc_limit/Sportkopfhoerer%2520Test%2520Aufmacher.jpg",
        "tags": [
            "technology"
        ],
        "route": "14-sports-headphones-in-the-test:-Great-training-buddies-are-available-from-14-euros!"
    },
    {
        "rubric": "Tech News",
        "title": "special edition? Apple is reportedly working on a 10th anniversary Apple Watch X",
        "author": "From GQ.de",
        "created": "August 16, 2023",
        "id": 127,
        "imgUrl": "https://media.gq-magazin.de/photos/64dc7f3a415f3e5ab3a8eb36/1:1/w_1600%2Cc_limit/1233022114",
        "tags": [
            "technology"
        ],
        "route": "special-edition?-Apple-is-reportedly-working-on-a-10th-anniversary-Apple-Watch-X"
    },
    {
        "rubric": "Technology",
        "title": "For the 70th anniversary: ​​Harman Kardon introduces three new premium speakers",
        "author": "By Benedict Sauer",
        "created": "August 11, 2023",
        "id": 128,
        "imgUrl": "https://media.gq-magazin.de/photos/64d2623c415f3e5ab3a8ea13/1:1/w_1600%2Cc_limit/HK_AURA_STUDIO_4.jpg",
        "tags": [
            "technology"
        ],
        "route": "For-the-70th-anniversary:-​​Harman-Kardon-introduces-three-new-premium-speakers"
    },
    {
        "rubric": "Music",
        "title": "Apple Music Classical: Apple is conquering the world of classical music with this new app",
        "author": "By Simone Lo Bartolo",
        "created": "August 10, 2023",
        "id": 129,
        "imgUrl": "https://media.gq-magazin.de/photos/64c27442415f3e5ab3a8e78c/1:1/w_1600%2Cc_limit/apple-classical.jpg",
        "tags": [
            "technology"
        ],
        "route": "Apple-Music-Classical:-Apple-is-conquering-the-world-of-classical-music-with-this-new-app"
    },
    {
        "rubric": "Car Fair",
        "title": "IAA 2023: These highlights await you at this year's motor show",
        "author": "By Simone Lo Bartolo",
        "created": "August 8, 2023",
        "id": 130,
        "imgUrl": "https://media.gq-magazin.de/photos/64bf8fcdd03be87eb2c31d68/1:1/w_1600%2Cc_limit/IAA2023-Aufmacher-GQ.jpg",
        "tags": [
            "technology"
        ],
        "route": "IAA-2023:-These-highlights-await-you-at-this-year's-motor-show"
    },
    {
        "rubric": "Internet",
        "title": "Elon Musk is now messing with Apple - and portraying himself as little David fighting Goliath",
        "author": "From GQ.de",
        "created": "August 3, 2023",
        "id": 131,
        "imgUrl": "https://media.gq-magazin.de/photos/64cb7945d03be87eb2c31fc4/1:1/w_1600%2Cc_limit/1245242394",
        "tags": [
            "technology"
        ],
        "route": "Elon-Musk-is-now-messing-with-Apple---and-portraying-himself-as-little-David-fighting-Goliath"
    },
    {
        "rubric": "Apple",
        "title": "Apple iPhone 15: New pictures show the final design – experts expect record sales",
        "author": "By Jeremy Patrelle",
        "created": "July 28, 2023",
        "id": 132,
        "imgUrl": "https://media.gq-magazin.de/photos/64bfe6f5d03be87eb2c31db9/1:1/w_1600%2Cc_limit/iPhone%252015%2520Leak.jpg",
        "tags": [
            "technology"
        ],
        "route": "Apple-iPhone-15:-New-pictures-show-the-final-design-–-experts-expect-record-sales"
    },
    {
        "rubric": "Shopping",
        "title": "Ice cream machine test: With these 13 models, you can easily make delicious ice cream",
        "author": "By Julia Furst",
        "created": "July 27, 2023",
        "id": 133,
        "imgUrl": "https://media.gq-magazin.de/photos/6495585cd41edcd1a0a446af/1:1/w_1600%2Cc_limit/eismaschinen-test-gq-GettyImages-578189905.jpg",
        "tags": [
            "technology"
        ],
        "route": "Ice-cream-machine-test:-With-these-13-models,-you-can-easily-make-delicious-ice-cream"
    },
    {
        "rubric": "Internet",
        "title": "Elon Musk: Is there legal trouble because of X?",
        "author": "From GQ.de",
        "created": "July 27, 2023",
        "id": 134,
        "imgUrl": "https://media.gq-magazin.de/photos/64c0e6e75c95a13af88a0f4d/1:1/w_1600%2Cc_limit/1554197244",
        "tags": [
            "technology"
        ],
        "route": "Elon-Musk:-Is-there-legal-trouble-because-of-X?"
    },
    {
        "rubric": "Tech",
        "title": "Twitter: Elon Musk says goodbye to name and logo",
        "author": "From GQ.de",
        "created": "July 24, 2023",
        "id": 135,
        "imgUrl": "https://media.gq-magazin.de/photos/64be4437415f3e5ab3a8e65e/1:1/w_1600%2Cc_limit/1550392855",
        "tags": [
            "technology"
        ],
        "route": "Twitter:-Elon-Musk-says-goodbye-to-name-and-logo"
    },
    {
        "rubric": "Review",
        "title": "Turntable in the test 2023: These are the top 10 models in comparison",
        "author": "By Laura Bähr",
        "created": "July 21, 2023",
        "id": 136,
        "imgUrl": "https://media.gq-magazin.de/photos/6336f15cfda8a1210ef3e149/1:1/w_1600%2Cc_limit/Plattenspieler_AudioTechnica2.jpg",
        "tags": [
            "technology"
        ],
        "route": "Turntable-in-the-test-2023:-These-are-the-top-10-models-in-comparison"
    },
    {
        "rubric": "Shopping",
        "title": "Air purifier test: The 13 best models for clean air in comparison",
        "author": "By Julia Furst",
        "created": "July 20, 2023",
        "id": 137,
        "imgUrl": "https://media.gq-magazin.de/photos/64955c689ff0169a7dfb9e49/1:1/w_1600%2Cc_limit/Luftreiniger-Test-Aufmacher.jpg",
        "tags": [
            "technology"
        ],
        "route": "Air-purifier-test:-The-13-best-models-for-clean-air-in-comparison"
    },
    {
        "rubric": "IPhone 16",
        "title": "Apple leak: The new iPhone 16 Max should get this fantastic innovation",
        "author": "From GQ.de",
        "created": "July 20, 2023",
        "id": 138,
        "imgUrl": "https://media.gq-magazin.de/photos/64b8ea3a5c95a13af88a0d2b/1:1/w_1600%2Cc_limit/1244051306",
        "tags": [
            "technology"
        ],
        "route": "Apple-leak:-The-new-iPhone-16-Max-should-get-this-fantastic-innovation"
    },
    {
        "rubric": "Shopping",
        "title": "Fan Test 2023: With these 20 products, stylish and literal coolness is guaranteed",
        "author": "By Raffaela Herrmann",
        "created": "July 19, 2023",
        "id": 139,
        "imgUrl": "https://media.gq-magazin.de/photos/62c57b7e2998bef088b9589c/1:1/w_1600%2Cc_limit/ventilator-test-2022-tech.jpg",
        "tags": [
            "technology"
        ],
        "route": "Fan-Test-2023:-With-these-20-products,-stylish-and-literal-coolness-is-guaranteed"
    },
    {
        "rubric": "Apple",
        "title": "2007 iPhone fetches $190,000 at auction - that's why the model is so valuable",
        "author": "From GQ.de",
        "created": "July 19, 2023",
        "id": 140,
        "imgUrl": "https://media.gq-magazin.de/photos/64b7ae835c95a13af88a0cee/1:1/w_1600%2Cc_limit/Apple%2520iPhone%25204.png",
        "tags": [
            "technology"
        ],
        "route": "2007-iPhone-fetches-$190,000-at-auction---that's-why-the-model-is-so-valuable"
    },
    {
        "rubric": "Counselor",
        "title": "Keep your MacBook fit: With these 6 tips, your MacBook will live longer",
        "author": "By Laura Bähr",
        "created": "July 18, 2023",
        "id": 141,
        "imgUrl": "https://media.gq-magazin.de/photos/64b66552415f3e5ab3a8e500/1:1/w_1600%2Cc_limit/GettyImages-MacBook_fit_halten1.jpg",
        "tags": [
            "technology"
        ],
        "route": "Keep-your-MacBook-fit:-With-these-6-tips,-your-MacBook-will-live-longer"
    },
    {
        "rubric": "Shopping",
        "title": "Bluetooth speaker test 2023: The 15 best speakers in comparison",
        "author": "By Raffaela Herrmann",
        "created": "July 18, 2023",
        "id": 142,
        "imgUrl": "https://media.gq-magazin.de/photos/6294e2af20fcc2740c9625ea/1:1/w_1600%2Cc_limit/Technik-Bluetooth%2520Lautsprecher%2520Test-Aufmacher.jpg",
        "tags": [
            "technology"
        ],
        "route": "Bluetooth-speaker-test-2023:-The-15-best-speakers-in-comparison"
    },
    {
        "rubric": "Shopping",
        "title": "These Amazon devices are must-haves for 2023: Echo, Fire TV & Co.",
        "author": "By Helena Ziogas",
        "created": "July 18, 2023",
        "id": 143,
        "imgUrl": "https://media.gq-magazin.de/photos/64ae4560d03be87eb2c319f1/1:1/w_1600%2Cc_limit/Amazon-Prime-Day-2023-Aufmacher.jpg",
        "tags": [
            "technology"
        ],
        "route": "These-Amazon-devices-are-must-haves-for-2023:-Echo,-Fire-TV-&-Co."
    },
    {
        "rubric": "Smartphone",
        "title": "Apple: An iPhone to roll? This is what the next flagship phone could look like",
        "author": "From GQ.de",
        "created": "July 17, 2023",
        "id": 144,
        "imgUrl": "https://media.gq-magazin.de/photos/64b508fa5c95a13af88a0c92/1:1/w_1600%2Cc_limit/1530253211",
        "tags": [
            "technology"
        ],
        "route": "Apple:-An-iPhone-to-roll?-This-is-what-the-next-flagship-phone-could-look-like"
    },
    {
        "rubric": "Shopping",
        "title": "Gifts for Men: The Best Ideas (That He'll Really Like)",
        "author": "By Raffaela Herrmann",
        "created": "July 14, 2023",
        "id": 145,
        "imgUrl": "https://media.gq-magazin.de/photos/64aff03ad03be87eb2c31ab4/1:1/w_1600%2Cc_limit/Geschenke-fuer-Maenner-Aufmacher.jpg",
        "tags": [
            "technology"
        ],
        "route": "Gifts-for-Men:-The-Best-Ideas-(That-He'll-Really-Like)"
    },
    {
        "rubric": "Smartphone Test",
        "title": "Nothing Phone (2) in the test: The crazy hype smartphone can do that",
        "author": "By Simone Lo Bartolo",
        "created": "July 13, 2023",
        "id": 146,
        "imgUrl": "https://media.gq-magazin.de/photos/64ad8612415f3e5ab3a8e311/1:1/w_1600%2Cc_limit/Nothing-Phone2-Aufmacher-GQ.jpg",
        "tags": [
            "technology"
        ],
        "route": "Nothing-Phone-(2)-in-the-test:-The-crazy-hype-smartphone-can-do-that"
    }
]