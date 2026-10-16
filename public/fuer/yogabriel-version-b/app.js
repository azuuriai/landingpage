// Vorschau Studio Yogabriel, Fassung 3. Gemeinsame Logik für Variante A (eine Seite) und B (Unterseiten).
// Inhalte von yogabriel.ch (Seiten, Stundenplan ab April 2026, Preisliste, Firmenangebote, Retreat-PDFs), gelesen am 13.10.2026.
(() => {
  const variante = document.body.dataset.variante || 'a';
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const B = n => `https://www.yogabriel.ch/bilder/${n}`;
  const $ = id => document.getElementById(id);
  const setze = (id, html) => { const el = $(id); if (el) el.innerHTML = html; return el; };
  const ziel = (anker, seite) => variante === 'a' ? `#${anker}` : seite;

  // Federkurve als CSS linear(): leichtes Überschwingen, dann Ruhe
  const feder = (() => {
    try { if (!CSS.supports('animation-timing-function', 'linear(0, 1)')) throw 0; } catch (e) { return 'cubic-bezier(.3,1.3,.5,1)'; }
    const z = .62, w = 11, wd = w * Math.sqrt(1 - z * z), p = [];
    for (let i = 0; i <= 48; i++) { const t = i / 48; p.push(+(1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + z * w / wd * Math.sin(wd * t))).toFixed(4)); }
    p[48] = 1; return `linear(${p.join(', ')})`;
  })();

  const kopf = $('kopf');
  if (kopf) addEventListener('scroll', () => kopf.classList.toggle('unten', scrollY > 10), { passive: true });

  // ---------- Daten ----------
  const tage = [['Mo','Montag'],['Di','Dienstag'],['Mi','Mittwoch'],['Do','Donnerstag'],['Fr','Freitag'],['Sa','Samstag'],['So','Sonntag']];
  const woche = [
    ['Mo','12:15','13:15','kurs','PIYO Yoga & Pilates','Gabriel','pilates'],['Mo','18:00','19:15','kurs','PIYO Yoga & Pilates','Gabriel','pilates'],['Mo','19:45','21:00','frei','Raum frei'],
    ['Di','09:30','10:30','kurs','LNB Motion','Paul','yoga'],['Di','11:00','12:00','einzel','Personal Training','Gabriel','personal'],['Di','12:15','13:15','einzel','Personal Training, Schmerztherapie, Coaching','Gabriel','therapie'],['Di','18:00','19:00','frei','Raum frei'],['Di','19:15','20:15','frei','Raum frei'],
    ['Mi','08:00','09:00','einzel','Personal Training','Gabriel','personal'],['Mi','11:00','12:00','einzel','Einzeltherapie','Gabriel','therapie'],['Mi','12:15','13:15','kurs','Hatha Yoga Flow','Gabriel','yoga'],['Mi','17:45','19:00','frei','Raum frei'],['Mi','19:15','20:15','frei','Raum frei'],
    ['Do','09:30','10:30','frei','Raum frei'],['Do','12:15','13:15','kurs','Hatha Yoga Flow','Gabriel','yoga'],['Do','17:00','18:00','frei','Raum frei'],['Do','18:00','19:15','kurs','Hatha Yoga Flow','Gabriel','yoga'],['Do','19:30','21:00','frei','Raum frei'],
    ['Fr','12:00','13:00','einzel','Einzel-Schmerztherapie','Gabriel','therapie'],['Fr','16:30','18:00','frei','Raum frei'],['Fr','18:00','19:15','frei','Raum frei'],
    ['Sa','11:00','12:30','kurs','Hatha Yoga Flow','Gabriel','yoga'],['Sa','15:00','17:00','frei','Raum frei'],
    ['So','11:00','12:30','kurs','Ashtanga Yoga','Seta','yoga'],['So','13:30','14:30','frei','Raum frei'],['So','14:30','15:30','frei','Raum frei'],['So','18:00','19:30','frei','Raum frei'],
  ];
  const zeiten = f => woche.filter(f).map(s => `${s[0]} ${s[1]}`).join(' · ');
  const anzahl = art => woche.filter(s => s[3] === art).length;

  const angebot = [
    { id: 'yoga', name: 'Yoga', bild: 'Yoga-Praxis-4266.jpg', ort: 'In der Gruppe', satz: 'Ruhige Haltungen, fliessende Übergänge, für Einsteiger und Geübte.',
      text: ['<p>Gabriels Yoga verbindet ruhige Haltungen mit fliessenden Übergängen. Yoga ist dabei mehr als eine körperliche Übung: Es verbindet Körper, Geist und Seele und hilft, mitten im hektischen Alltag wieder zu sich zu finden.</p>', '<p>Sonntags unterrichtet Seta Boroyan Ashtanga im Mysore-Stil, auf Deutsch, Englisch oder Französisch. Dienstags zeigt Paul Hörter LNB Motion nach Liebscher und Bracht.</p>'],
      fakten: [['Hatha Yoga Flow', zeiten(s => s[4] === 'Hatha Yoga Flow')], ['Ashtanga und LNB Motion', 'So 11:00 mit Seta · Di 09:30 mit Paul'], ['Dauer', '60 bis 90 Minuten'], ['Preis', '10er-Abo CHF 300 · Monatsabo CHF 260']], thema: 'Eine Stunde',
      kurz: `${woche.filter(s => s[4] === 'Hatha Yoga Flow' || s[4] === 'Ashtanga Yoga').length} Yogastunden pro Woche`, kurzWert: '10er-Abo CHF 300' },
    { id: 'pilates', name: 'Pilates', bild: 'Pilates-4192.jpg', ort: 'In der Gruppe und allein', satz: 'Die tiefen Muskeln um die Wirbelsäule stärken, ohne an Umfang zuzunehmen.',
      text: ['<p>Im Training nach Joseph Pilates lernst du die tief liegenden Muskeln im Bauch kennen und baust das Powerhouse rund um den Bauchnabel auf. Für alle mit Rückenschmerzen ein wirksames Vorbeugen.</p>', '<p>Pilates gibt dir eine sichere Haltung und ein gutes Gefühl im Körper. Den Beckenboden stabilisieren, die Atmung präzisieren, in die neutrale Position zurückfinden.</p>'],
      fakten: [['PIYO Yoga & Pilates', zeiten(s => s[6] === 'pilates')], ['Auch allein', 'als Personal Training mit Gabriel'], ['Dauer', '60 bis 75 Minuten'], ['Preis', '10er-Abo CHF 300 · Monatsabo CHF 260']], thema: 'Eine Stunde', kurz: 'Montags über Mittag und abends', kurzWert: 'PIYO Yoga & Pilates' },
    { id: 'personal', name: 'Personal Training', bild: 'Personal-Training-4212.jpg', ort: 'Allein mit Gabriel', satz: 'Die richtigen Übungen für deinen Körper, sechzig Minuten nur für dich.',
      text: ['<p>Gabriel stellt die Übungen zusammen, die auf deinen Körper zugeschnitten sind, und achtet darauf, dass du sie richtig ausführst. Rücken, Beckenboden, Knie oder Nacken lassen sich gezielt lockern oder stärken.</p>', '<ul><li>Für Frauen und Männer, Seniorinnen und Senioren</li><li>In der Schwangerschaft und für das Rückbildungstraining</li><li>Für Spitzensport, Bewegungsmuffel und alle dazwischen</li></ul>'],
      fakten: [['Dauer', '60 Minuten, durchgehend begleitet'], ['Termine', 'nach Vereinbarung, z. B. ' + zeiten(s => s[6] === 'personal')], ['Preis', 'CHF 165 · 10 Trainings CHF 1’090'], ['Ziele', 'zu Beginn festgelegt, laufend überprüft']], thema: 'Personal Training oder Therapie', kurz: '60 Minuten', kurzWert: 'CHF 165' },
    { id: 'therapie', name: 'Yogatherapie', bild: 'Therapien-und-Massagen-4202.jpg', ort: 'Einzeln', satz: 'Manuelle Therapie und Yogatherapie, bei Rückenschmerzen, Verspannungen und Migräne.',
      text: ['<p>Gabriel verbindet manuelle Therapie mit Yogatherapie. In der Einzelstunde geht es um deine Beschwerden: Schmerzen im Rücken, Verspannungen in Nacken und Schultern oder Migräne.</p>', '<p>Die Einzeltherapie lässt sich mit Kohärenz-Coaching verbinden.</p>'],
      fakten: [['Termine', zeiten(s => s[6] === 'therapie')], ['Preis', 'CHF 165 · 20 Stunden CHF 2’550'], ['Dauer', '60 Minuten'], ['Krankenkasse', 'Anerkennung beim Studio erfragen']], thema: 'Personal Training oder Therapie', kurz: 'Einzelstunde', kurzWert: 'CHF 165' },
    { id: 'meditation', kurzname: 'Meditation', name: 'Meditation und Kohärenz-Coaching', bild: 'Meditation-4222.jpg', ort: 'Einzeln und für Firmen', satz: 'Innere Ruhe und Konzentration, im Studio und am Arbeitsplatz.',
      text: ['<p>Meditation hilft, einen Zustand zu erreichen, in dem klare Wachheit und tiefe Entspannung gleichzeitig möglich sind. Gabriel unterscheidet die stille, sitzende Meditation und die aktive, in Bewegung.</p>', '<p>Er verbindet sie mit Kohärenz-Coaching, in Einzelstunden im Studio und als Corporate Health on Meditation in Unternehmen.</p>'],
      fakten: [['Einzeln', 'wie Yogatherapie, CHF 165'], ['Für Firmen', 'als Format im Business Package'], ['Ort', 'im Studio oder bei euch'], ['Sprache', 'Deutsch']], thema: 'Personal Training oder Therapie', kurz: 'Einzeln oder im Team', kurzWert: 'CHF 165' },
    { id: 'firmen', name: 'Für Firmen', bild: 'Corporate-Business-4185.jpg', ort: 'Corporate Health', satz: 'Gesünder arbeiten: Teams kommen ins Studio, oder Gabriel kommt zu euch.',
      text: ['<ul><li>Meditation und Atmung, für innere Ruhe und Konzentration</li><li>Bewegung und Atmung, Yogabriel-Yoga oder Power Yoga</li><li>Pilates für Rumpf und Beckenboden</li><li>Massagen für Kopf, Nacken und Schultern</li><li>Richtiges Sitzen, Ergotherapie am Arbeitsplatz</li></ul>'],
      fakten: [['Business Package', 'CHF 3’960 plus MWST, pro Firma'], ['Im Studio', 'über Mittag oder nach der Arbeit'], ['Bei euch', 'Formate nach Absprache'], ['Umfang', 'auf Anfrage']], thema: 'Für meine Firma', kurz: 'Business Package', kurzWert: 'CHF 3’960 plus MWST', link: ziel('firmen', 'firmen.html'), linkText: 'Mehr für Firmen' },
    { id: 'ernaehrung', kurzname: 'Ernährung', name: 'Ernährungsberatung', bild: 'Ernaehrungsberatung-4205.jpg', ort: 'Einzeln und auf Retreats', satz: 'Ernährung, Stoffwechsel und Hormone, im Alltag und auf den Retreats.',
      text: ['<p>Gabriel berät zu Ernährung, Stoffwechsel und Hormonen, als Teil von Personal Training und Therapie und auf den Retreats in Bigorio und auf Kos.</p>'],
      fakten: [['Einzeln', 'im Rahmen von Personal Training oder Therapie'], ['Auf Retreats', 'fester Teil des Programms'], ['Preis', 'auf Anfrage'], ['Ort', 'im Studio']], thema: 'Personal Training oder Therapie', kurz: 'Einzeln und auf Retreats', kurzWert: 'auf Anfrage' },
    { id: 'retreats', kurzname: 'Retreats', name: 'Retreats und Reisen', bild: 'Workshops-4264.jpg', ort: 'In den Bergen und am Meer', satz: 'Yoga, kleine Wanderungen und Ernährungsberatung, im Kloster Bigorio und auf Kos.',
      text: ['<p>Mehrmals im Jahr drei Tage im Kloster Bigorio über Lugano, an Pfingsten fünf Tage auf Kos. Alle Termine, die Anreise und das Programm stehen bei den Retreats.</p>'],
      fakten: [['Nächster Termin', '27.–29. November 2026, Bigorio'], ['Bigorio', 'Freitag bis Sonntag, ab CHF 685'], ['Kos', '16.–21. Mai 2027, ab CHF 1’294'], ['Anreise', 'Zürich–Lugano 1 Std. 53, ohne Umsteigen']], thema: 'Retreat', kurz: 'Nächster Termin', kurzWert: '27.–29. November', link: ziel('retreats', 'retreats.html'), linkText: 'Alle Termine ansehen' },
  ];

  const team = [
    ['Seta Boroyan','Ashtanga Yoga, sonntags','Seit zwanzig Jahren in der Praxis, 2024 in Mysore autorisiert. Unterrichtet auf Deutsch, Englisch und Französisch.'],
    ['Paul Hörter','LNB Motion, dienstags','Diplomierter Physiotherapeut und Osteopath in der Gemeinschaftspraxis Bellsana am Bleicherweg.'],
  ];
  const preise = [
    ['Abos', [['5 Stunden','170'],['10 Stunden','300'],['20 Stunden','590'],['30 Stunden','780'],['40 Stunden','960']]],
    ['Monatsabos', [['1 Monat','260'],['3 Monate','690'],['6 Monate','1’380'],['1 Jahr','2’360']]],
    ['Personal Training', [['1 Training','165'],['5 Trainings','590'],['10 Trainings','1’090'],['20 Trainings','2’100']]],
    ['Yogatherapie', [['1 Stunde','165'],['20 Stunden','2’550']]],
  ];
  const retreats = [
    ['27.–29. November 2026','Kloster Bigorio · Freitag bis Sonntag','ab CHF 685','bigorio','2026-11-27'], ['9.–11. April 2027','Kloster Bigorio · Freitag bis Sonntag','ab CHF 685','bigorio','2027-04-09'],
    ['16.–21. Mai 2027','Kos · Pfingsten, Sonntag bis Freitag','ab CHF 1’294','kos','2027-05-16'], ['27.–29. August 2027','Kloster Bigorio · Freitag bis Sonntag','ab CHF 685','bigorio','2027-08-27'],
    ['8.–10. Oktober 2027','Kloster Bigorio · Freitag bis Sonntag','ab CHF 685','bigorio','2027-10-08'], ['29.–31. Oktober 2027','Kloster Bigorio · Freitag bis Sonntag','ab CHF 685','bigorio','2027-10-29'],
  ];
  // Orte der Retreats (Retreat-PDF Bigorio 2027, Seite active-days-2027 zu Kos); Fahrzeiten aus dem SBB-Fahrplan, Freitag 27.11.2026
  const ziele = [
    { id: 'bigorio', name: 'Drei Tage im Kloster Bigorio', kurzname: 'Bigorio', bildUrl: 'https://cdn.pixabay.com/video/2022/05/24/118030-713887489_large.jpg', video: 'https://cdn.pixabay.com/video/2022/05/24/118030-713887489_small.mp4', hinweis: 'Stimmungsvideo Pixabay, nicht das Kloster', ort: 'Swiss Mountain Retreat, Tessin', satz: 'Yoga, Wandern und gutes Essen in einem Kloster über Lugano.',
      text: ['<p>Das Kapuzinerkloster Santa Maria dei Frati Cappuccini steht seit 1535 auf einer Anhöhe über dem Dorf. Die Zimmer sind grosszügig und hell, der Yogaraum liegt unter den Arkaden.</p>'],
      programm: [['Yoga', 'unter den Arkaden oder auf der Wiese im Klostergarten'], ['Wandern', 'in den bewaldeten Bergen des Tessins, mit weiter Aussicht'], ['Ernährung', 'Beratung mit Gabriel'], ['Küche', 'Vollwert mit Bio-Knospe, vegetarisch, vegan oder glutenfrei'], ['Zeit für dich', 'jederzeit vom Programm ausklinken']],
      fakten: [['Dauer', 'Freitag bis Sonntag'], ['Preis', 'ab CHF 685 pro Person']], extra: 'bigorio', thema: 'Retreat' },
    { id: 'kos', name: 'Pfingsten auf Kos', kurzname: 'Kos', bildUrl: 'https://www.yogabriel.ch/bilder/pdm-Beach-750px.jpg', hinweis: 'Fotos des Hotels Palazzo del Mare, von yogabriel.ch', ort: 'Yogareise nach Griechenland', satz: 'Yoga am Meer, fünfzig Meter vom langen Sandstrand.',
      stapel: [['pdm-Beach-750px.jpg', 'Der Strand'], ['pdm-Restaurant-750px.jpg', 'Das Restaurant'], ['pdm-twin-pool-sidesea-750px.jpg', 'Ein Zimmer']],
      text: ['<p>Fünf Tage im Palazzo del Mare in Marmari, nur für Erwachsene. Dazu kleine Wanderungen über die Insel, Halbpension und ein grosser Spa.</p>'],
      fakten: [['Termin', '16.–21. Mai 2027, Sonntag bis Freitag'], ['Inbegriffen', 'Halbpension und alle Yogastunden mit Gabriel'], ['Ohne Flug', 'ab CHF 1’294 pro Person'], ['Mit Flug', 'ab CHF 1’957, Direktflug ab Zürich']], extra: 'kos', thema: 'Retreat' },
  ];
  const kosTag = [['07:15','Yoga am Morgen','Hatha, Power Pilates und Yoga, Flowing Yin oder Kundalini'],['14:00','Yoga am Nachmittag','Hatha Flow und Yin, Detox Yoga oder Yoga und Pilates'],['20:30','Meditation am Strand','Eine Stunde zum Ausklang des Tages']];
  const anreise = [['Zug',88,'1 Std. 28'],['Luzern',100,'1 Std. 40'],['Zürich',113,'1 Std. 53'],['Winterthur',139,'2 Std. 19'],['Basel',171,'2 Std. 51']];
  const nutzungen = ['Yoga','Pilates','Qi Gong','Ballett','Kindertanz','Coaching','Therapie','Shiatsu','Physiotherapie','Massage','Seminar','Workshop'];
  const themen = ['Eine Stunde','Personal Training oder Therapie','Retreat','Für meine Firma','Raum mieten'];

  // ---------- Darstellung ----------
  setze('kacheln', angebot.map((a, i) => `<button class="kachel" style="--i:${i}" data-oeffnen="${a.id}"><span class="foto"><img src="${B(a.bild)}" alt=""></span><span class="name">${a.kurzname || a.name}</span></button>`).join(''));
  setze('liste', angebot.map(a => `<button class="zeile" data-oeffnen="${a.id}"><span class="mini"><img src="${B(a.bild)}" alt=""></span><span><h3>${a.name}</h3><span class="satz">${a.satz}</span></span><span class="fakt"><b>${a.kurzWert}</b>${a.kurz}</span><span class="mehr">Mehr erfahren</span></button>`).join(''));

  const heute = ['So','Mo','Di','Mi','Do','Fr','Sa'][new Date().getDay()];
  const raster = setze('woche-raster', tage.map(([k, n]) => `<div class="tag ${k === heute ? 'heute' : ''}"><h3>${n}${k === heute ? ' · heute' : ''}</h3>${woche.filter(s => s[0] === k).map(s => s[3] === 'frei' ? `<div class="slot frei" data-art="frei"><span>${s[1]}–${s[2]}</span><b>Raum frei</b></div>` : `<button class="slot ${s[3]}" data-art="${s[3]}" data-oeffnen="${s[6]}"><span>${s[1]}–${s[2]}</span><b>${s[4]}</b><span>mit ${s[5]}</span></button>`).join('')}</div>`).join(''));
  const filtern = art => { document.querySelectorAll('.filter button').forEach(x => x.setAttribute('aria-pressed', x.dataset.art === art)); if (raster) raster.querySelectorAll('.slot').forEach(s => s.classList.toggle('aus', art !== 'alle' && s.dataset.art !== art)); };
  document.querySelectorAll('.filter button').forEach(b => b.addEventListener('click', () => filtern(b.dataset.art)));
  if (raster && new URLSearchParams(location.search).get('zeige') === 'frei') filtern('frei');
  const zeigeFrei = $('zeige-frei');
  if (zeigeFrei) zeigeFrei.addEventListener('click', e => { if (raster) { e.preventDefault(); filtern('frei'); raster.scrollIntoView({ behavior: ruhig ? 'auto' : 'smooth', block: 'center' }); } });
  document.querySelectorAll('[data-frei-zahl]').forEach(el => el.textContent = anzahl('frei'));

  (function naechste() {
    const el = $('naechste'); if (!el) return;
    const reihe = ['Mo','Di','Mi','Do','Fr','Sa','So'], namen = Object.fromEntries(tage);
    const jetzt = new Date(), t0 = (jetzt.getDay() + 6) % 7, min = jetzt.getHours() * 60 + jetzt.getMinutes();
    for (let d = 0; d < 8; d++) {
      const tag = reihe[(t0 + d) % 7];
      const k = woche.filter(s => s[3] === 'kurs' && s[0] === tag).find(s => { const [h, m] = s[1].split(':').map(Number); return d > 0 || h * 60 + m > min; });
      if (k) { el.innerHTML = `Nächste Stunde <b>${d === 0 ? 'heute' : d === 1 ? 'morgen' : 'am ' + namen[tag]} um ${k[1]}</b><span class="komma">, </span><span class="naechste-kurs">${k[4]} mit ${k[5]}</span>`; return; }
    }
  })();

  setze('preis-raster', preise.map(([t, z]) => `<div><h3>${t}</h3><dl>${z.map(([a, b]) => `<div><dt>${a}</dt><dd>CHF ${b}</dd></div>`).join('')}</dl></div>`).join(''));
  setze('retreat-liste', retreats.map(r => `<li><span class="datum">${r[0]}<small>${r[1]}</small></span><span class="preis">${r[2]}</span></li>`).join(''));
  setze('anreise', anreise.map(a => `<li><span>${a[0]}</span><span class="balken"><i style="width:${a[1] / 171 * 100}%"></i></span><span>${a[2]}</span></li>`).join(''));
  setze('nutzung', `<span class="nutzung-band">${nutzungen.map(n => `<span>${n}</span>`).join('')}<span class="nutzung-kopie" aria-hidden="true">${nutzungen.map(n => `<span>${n}</span>`).join('')}</span></span>`);
  setze('leiste', tage.map(([k, n]) => `<div><strong>${n}</strong>${woche.filter(s => s[0] === k && s[3] === 'frei').map(s => `<i>${s[1]}–${s[2]}</i>`).join('') || '<span>ausgebucht</span>'}</div>`).join(''));
  // ---------- Retreats: nächster Termin, Jahreslinie, alle Termine ----------
  const heuteIso = new Date().toISOString().slice(0, 10);
  const kommend = retreats.filter(r => r[4] >= heuteIso);
  const ortName = o => o === 'kos' ? 'Kos, Griechenland' : 'Kloster Bigorio, Tessin';
  if (kommend.length) setze('naechster', `<span class="ort">Nächster Termin</span><b class="serif">${kommend[0][0]}</b><span>${ortName(kommend[0][3])}, ${kommend[0][1].split(' · ')[1]}, ${kommend[0][2]}</span><div class="aktionen"><button class="knopf" data-anfrage="Retreat">Platz anfragen</button><a class="text-link" href="#termine">Alle Termine</a></div>`);
  setze('termin-zeilen', kommend.map((r, i) => `<li><button class="termin-zeile" data-oeffnen="${r[3]}" data-termin="${i}"><i class="z-${r[3] === 'kos' ? 'meer' : 'berg'}" aria-hidden="true"></i><span class="t-datum">${r[0]}</span><span class="t-ort">${ortName(r[3])}<small>${r[1].split(' · ')[1]}</small></span><span class="t-preis">${r[2]}</span><span class="t-mehr">Details</span></button></li>`).join(''));
  const linie = $('jahreslinie');
  if (linie && kommend.length) {
    const start = new Date(kommend[0][4].slice(0, 8) + '01'), monate = 12;
    const pos = iso => { const d = new Date(iso); return ((d.getFullYear() - start.getFullYear()) * 12 + d.getMonth() - start.getMonth() + (d.getDate() - 1) / 31) / monate * 100; };
    const mNamen = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    linie.innerHTML = `<span class="j-achse"></span>${Array.from({ length: monate }, (_, m) => { const d = new Date(start.getFullYear(), start.getMonth() + m, 1); return `<span class="j-monat" style="left:${m / monate * 100}%">${mNamen[d.getMonth()]}${d.getMonth() === 0 || m === 0 ? ` <small>${d.getFullYear()}</small>` : ''}</span>`; }).join('')}${kommend.map((r, i) => `<span class="j-marke z-${r[3] === 'kos' ? 'meer' : 'berg'}" data-termin="${i}" style="left:${pos(r[4])}%"></span>`).join('')}`;
    const zeilen = $('termin-zeilen');
    const zeige = (i, an) => { linie.querySelectorAll('.j-marke').forEach(m => m.classList.toggle('hell', an && m.dataset.termin === String(i))); };
    zeilen.addEventListener('pointerover', e => { const z = e.target.closest('.termin-zeile'); zeige(z && z.dataset.termin, !!z); });
    zeilen.addEventListener('pointerleave', () => zeige(null, false));
    zeilen.addEventListener('focusin', e => { const z = e.target.closest('.termin-zeile'); if (z) zeige(z.dataset.termin, true); });
  }
  const bogenPunkt = h => { const t = (h - 6) / 16; return [30 + t * 540, 130 - 400 * t * (1 - t)]; };
  const extras = {
    bigorio: () => {
      const bigorio = retreats.filter(r => r[3] === 'bigorio' && r[4] >= heuteIso);
      return `<h3 class="m-extra-titel">Termine</h3><div class="m-termine">${bigorio.map(r => `<span>${r[0]}</span>`).join('')}</div>`
        + `<h3 class="m-extra-titel">Drei Tage im Kloster</h3><ul class="m-programm">${ziele[0].programm.map(([t, w]) => `<li><b>${t}</b><span>${w}</span></li>`).join('')}</ul>`
        + `<h3 class="m-extra-titel">Der Weg nach Bigorio</h3><div class="weg-wahl" role="group" aria-label="Abfahrt">${anreise.map((a, i) => `<button type="button" aria-pressed="${a[0] === 'Zürich'}" data-weg="${i}">${a[0]}</button>`).join('')}</div>`
        + `<div class="weg-linie" id="weg-linie"><span class="w-zug"><i></i></span><span class="w-taxi"></span><span class="w-halt w-start"></span><span class="w-halt w-lugano"></span><span class="w-gipfel"></span><span class="w-name w-n-start" id="w-start">Zürich</span><span class="w-name w-n-lugano">Lugano</span><span class="w-name w-n-bigorio">Bigorio</span><span class="w-zeit" id="w-zeit">1 Std. 53</span></div>`
        + `<p class="m-klein" id="weg-satz">Mit der Bahn bis Lugano, schnellste Verbindung am Freitag, 27. November 2026, laut SBB-Fahrplan. Ab dem Bahnhof mit dem Taxi hinauf zum Kloster.</p>`;
    },
    kos: () => `<h3 class="m-extra-titel">Ein Tag auf Kos</h3><svg class="tagesbogen" viewBox="0 0 600 160" aria-hidden="true"><path class="bogen" d="M30 130 Q300 -70 570 130" pathLength="1"/><line x1="10" y1="130" x2="590" y2="130"/>${kosTag.map(k => { const [h, m] = k[0].split(':').map(Number), [x, y] = bogenPunkt(h + m / 60); return `<circle class="sonne" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9"/><text x="${x.toFixed(1)}" y="152" text-anchor="middle">${k[0]}</text>`; }).join('')}</svg><ul class="kos-tag">${kosTag.map(k => `<li><b>${k[0]}</b><span><strong>${k[1]}</strong>${k[2]}</span></li>`).join('')}</ul>`,
  };
  function wegZeigen(i) {
    const l = $('weg-linie'); if (!l) return;
    const a = anreise[i], anteil = a[1] / 171;
    l.style.setProperty('--zug', (anteil * 74).toFixed(1) + '%');
    $('w-start').textContent = a[0]; $('w-zeit').textContent = a[2];
    document.querySelectorAll('.weg-wahl button').forEach(b => b.setAttribute('aria-pressed', b.dataset.weg === String(i)));
  }
  document.addEventListener('click', e => { const b = e.target.closest('[data-weg]'); if (b) wegZeigen(+b.dataset.weg); });

  setze('b-team', team.map(t => `<li><b>${t[0]}</b><em>${t[1]}</em><p>${t[2]}</p></li>`).join(''));

  const wahl = setze('wahl', themen.map((t, i) => `<button type="button" aria-pressed="${i === 0}">${t}</button>`).join(''));
  const thema = t => { if (wahl) wahl.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x.textContent === t)); };
  if (wahl) { wahl.addEventListener('click', e => { const b = e.target.closest('button'); if (b) thema(b.textContent); }); const q = new URLSearchParams(location.search).get('thema'); if (q) thema(q); }
  document.querySelectorAll('[data-thema]').forEach(a => a.addEventListener('click', () => thema(a.dataset.thema)));
  const zurAnfrage = t => {
    const f = $('anfrage');
    if (f) { thema(t); f.scrollIntoView({ behavior: ruhig ? 'auto' : 'smooth' }); }
    else location.href = `kontakt.html?thema=${encodeURIComponent(t)}`;
  };

  // ---------- Auftritt der Startseite: Linie, Gipfel, Abzüge ----------
  (function auftritt() {
    const hero = document.querySelector('.hero'), buehne = hero && hero.querySelector('.buehne');
    if (!buehne || ruhig || !buehne.animate) return;
    let wieder = false;
    try { wieder = sessionStorage.getItem('yg-auftritt') === '1'; sessionStorage.setItem('yg-auftritt', '1'); } catch (e) {}
    const weich = 'cubic-bezier(.22,1,.36,1)';
    const anim = (el, frames, opt) => el && el.animate(frames, Object.assign({ fill: 'backwards', easing: weich }, opt));
    const kacheln = [...buehne.querySelectorAll('.kachel')];
    if (wieder) { kacheln.forEach((k, i) => anim(k, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 520, delay: 60 + i * 35 })); return; }
    hero.querySelectorAll('.motto span').forEach((z, i) => anim(z, [{ clipPath: 'inset(-12% -2% 100% -2%)', transform: 'translateY(.42em)' }, { clipPath: 'inset(-12% -2% -32% -2%)', transform: 'none' }], { duration: 1050, delay: 120 + i * 150 }));
    [...hero.querySelectorAll('.unter-motto, .lead, .byline, .naechste')].forEach((el, i) => anim(el, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: 520 + i * 120 }));
    const svg = buehne.querySelector('.gipfel-linie'), strich = svg && svg.querySelector('polygon');
    anim(strich, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 950, delay: 100, easing: 'cubic-bezier(.65,0,.35,1)' });
    anim(svg, [{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: 1500, fill: 'both' });
    anim(buehne.querySelector('.gipfel'), [{ clipPath: 'polygon(50% 100%, 50% 100%, 50% 100%)' }, { clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }], { duration: 1100, delay: 650, easing: 'cubic-bezier(.7,0,.2,1)' });
    const b = buehne.getBoundingClientRect(), gipfel = { x: b.left + b.width * .53, y: b.top + b.height * .26 };
    const drehung = [-14, 9, -6, 12, -10, 7, -12, 10];
    kacheln.forEach((k, i) => {
      const r = k.getBoundingClientRect(), dx = gipfel.x - (r.left + r.width / 2), dy = gipfel.y - (r.top + r.height / 2), start = 1050 + i * 80;
      anim(k, [{ transform: `translate(${dx}px, ${dy}px) scale(.16) rotate(${drehung[i % 8]}deg)`, opacity: 0 }, { opacity: 1, offset: .18 }, { transform: 'none', opacity: 1 }], { duration: 1250, delay: start, easing: feder });
      anim(k.querySelector('img'), [{ transform: 'scale(1.55)' }, { transform: 'scale(1)' }], { duration: 1700, delay: start });
      anim(k.querySelector('.name'), [{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }, { clipPath: 'inset(0 0 0 0)', opacity: 1 }], { duration: 650, delay: start + 620 });
    });
    anim(buehne.querySelector('.dreieck-licht'), [{ transform: 'translateX(-40px) scale(.5)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 1000, delay: 1900, easing: feder });
    anim(buehne.querySelector('.dreieck-stein'), [{ transform: 'translateY(30px) scale(.5)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 1000, delay: 2000, easing: feder });
  })();

  // ---------- Flug eines Bildes zwischen zwei Elementen ----------
  function flug(vonEl, nachEl, opt = {}) {
    if (ruhig || !vonEl || !nachEl) return Promise.resolve();
    const ra = vonEl.getBoundingClientRect(), rb = nachEl.getBoundingClientRect();
    if (!ra.width || !rb.width || ra.bottom < 0 || ra.top > innerHeight) return Promise.resolve();
    // Ungedrehte Masse und Mittelpunkt: so landet das Bild genau auf dem gedrehten Abzug
    const box = (r, el) => { const w = el.offsetWidth || r.width, h = el.offsetHeight || r.height; return { l: r.left + r.width / 2 - w / 2, t: r.top + r.height / 2 - h / 2, w, h }; };
    const a = box(ra, vonEl), b = box(rb, nachEl);
    const f = document.createElement('img'); f.className = 'flieger'; f.src = opt.src || vonEl.currentSrc || vonEl.src;
    Object.assign(f.style, { left: a.l + 'px', top: a.t + 'px', width: a.w + 'px', height: a.h + 'px', borderRadius: opt.vonRadius || '3px' });
    document.body.appendChild(f);
    const anim = f.animate([
      { left: a.l + 'px', top: a.t + 'px', width: a.w + 'px', height: a.h + 'px', borderRadius: opt.vonRadius || '3px', transform: `rotate(${opt.vonDrehung || 0}deg)` },
      { left: b.l + 'px', top: b.t + 'px', width: b.w + 'px', height: b.h + 'px', borderRadius: opt.nachRadius || '3px', transform: `rotate(${opt.drehung || 0}deg)` },
    ], { duration: 720, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
    return Promise.race([anim.finished, new Promise(r => setTimeout(r, 950))]).then(() => f.remove());
  }

  // ---------- Angebots-Modal ----------
  const modal = $('modal'), schleier = $('schleier'), haupt = $('haupt');
  let aktiv = -1, quelle = null, offenesBlatt = false, sammlung = angebot;
  const bildVon = el => el && ((el.dataset.bild && document.querySelector(el.dataset.bild)) || el.querySelector('img'));
  const bildUrl = a => a.bildUrl || B(a.bild);
  const sperren = an => { if (haupt) haupt.inert = an; document.body.classList.toggle('gesperrt', an); };
  function fuellen(i) {
    const a = sammlung[i]; aktiv = i;
    document.querySelectorAll('.flieger').forEach(f => f.remove());
    $('m-bild').style.visibility = 'visible';
    $('m-bild').src = bildUrl(a); $('m-unscharf').src = bildUrl(a); $('m-unterschrift').textContent = a.kurzname || a.name;
    $('m-bildhinweis').textContent = a.hinweis || 'Foto: Studio Yogabriel, Originale in voller Grösse folgen';
    $('m-extra').innerHTML = a.extra ? extras[a.extra]() : '';
    const medien = modal.querySelector('.m-medien'), video = $('m-video'), stapel = $('m-stapel');
    medien.dataset.art = a.video ? 'video' : a.stapel ? 'stapel' : 'abzug';
    if (a.video) { if (video.dataset.src !== a.video) { video.src = a.video; video.dataset.src = a.video; video.poster = a.bildUrl; } if (!ruhig) { video.playbackRate = 1; video.play().catch(() => {}); } } else video.pause();
    stapel.innerHTML = a.stapel ? a.stapel.map(([b, t], k) => `<button class="s-abzug" style="--k:${k}" data-stapel aria-label="Nächstes Foto: ${t}"><img src="${B(b)}" alt=""><span>${t}</span></button>`).join('') : '';
    if (a.extra === 'bigorio') requestAnimationFrame(() => wegZeigen(anreise.findIndex(x => x[0] === 'Zürich')));
    $('m-ort').textContent = a.ort; $('m-titel').textContent = a.name; $('m-satz').textContent = a.satz;
    $('m-text').innerHTML = a.text.join('');
    $('m-fakten').innerHTML = a.fakten.map(([t, w]) => `<div><dt>${t}</dt><dd>${w.includes(' · ') ? `<span class="zeiten">${w.split(' · ').map(z => `<span>${z}</span>`).join('')}</span>` : w}</dd></div>`).join('');
    $('m-aktionen').innerHTML = `<button class="knopf" data-anfrage="${a.thema}">${a.id === 'firmen' ? 'Angebot anfragen' : 'Platz anfragen'}</button>` + (a.link ? `<a class="text-link" href="${a.link}" data-schliessen>${a.linkText}</a>` : `<a class="text-link" href="tel:+41793524660">079 352 46 60</a>`);
    const vor = sammlung[(i - 1 + sammlung.length) % sammlung.length], nach = sammlung[(i + 1) % sammlung.length];
    $('m-zurueck').innerHTML = `Zurück: <b>${vor.kurzname || vor.name}</b>`; $('m-weiter').innerHTML = `Weiter: <b>${nach.kurzname || nach.name}</b>`;
    $('m-zurueck').style.visibility = sammlung.length > 2 ? 'visible' : 'hidden';
    $('m-inhalt').scrollTop = 0;
  }
  function oeffnen(id, ausloeser) {
    sammlung = angebot.some(a => a.id === id) ? angebot : ziele;
    const i = sammlung.findIndex(a => a.id === id); if (i < 0 || !modal) return;
    if (offenesBlatt) blattZu(true);
    fuellen(i); quelle = ausloeser;
    const zielBild = $('m-bild'), abzug = $('m-abzug'), von = innerWidth < 961 ? null : bildVon(ausloeser);
    const mitFlug = !ruhig && !!von;
    zielBild.style.visibility = 'hidden';
    modal.setAttribute('aria-hidden', 'false'); sperren(true);
    schleier.classList.add('offen'); modal.classList.add('offen');
    if (!ruhig) {
      $('m-unscharf').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700, easing: 'ease-out' });
      if (mitFlug) abzug.animate([{ opacity: 0, transform: 'rotate(-2deg) scale(.96)' }, { opacity: 0, offset: .55 }, { opacity: 1, transform: 'rotate(-2deg) scale(1)' }], { duration: 760, easing: 'cubic-bezier(.22,1,.36,1)' });
    }
    let gezeigt = false;
    const zeigen = () => { if (gezeigt) return; gezeigt = true; zielBild.style.visibility = 'visible'; };
    setTimeout(() => flug(von, zielBild, { drehung: -2, vonDrehung: 0 }).then(zeigen), 30);
    setTimeout(zeigen, 1000);
    setTimeout(() => $('schliessen').focus({ preventScroll: true }), 60);
  }
  function schliessen() {
    if (aktiv < 0) return;
    const zielBild = $('m-bild'), q = bildVon(quelle);
    if (q && quelle.dataset.oeffnen === sammlung[aktiv].id && !ruhig && innerWidth >= 961) { zielBild.style.visibility = 'hidden'; flug(zielBild, q, { vonRadius: '6px', nachRadius: '14px' }); }
    modal.classList.remove('offen'); modal.setAttribute('aria-hidden', 'true');
    if (!offenesBlatt) { schleier.classList.remove('offen'); sperren(false); }
    if (quelle) quelle.focus({ preventScroll: true });
    aktiv = -1;
  }

  // ---------- Gabriels Seite ----------
  const blatt = $('blatt');
  let blattQuelle = null;
  function blattAuf(ausloeser) {
    if (!blatt) return;
    if (aktiv >= 0) schliessen();
    offenesBlatt = true; blattQuelle = ausloeser;
    blatt.setAttribute('aria-hidden', 'false'); sperren(true);
    schleier.classList.add('offen'); blatt.classList.add('offen');
    // Das Porträt sitzt schon im Blatt und fährt mit ihm herein; der Flug aus dem Knopf wirkte unruhig (Lukas, 16.10.2026)
    $('b-portrait-bild').style.visibility = 'visible';
    setTimeout(() => $('blatt-schliessen').focus({ preventScroll: true }), 80);
  }
  function blattZu(still) {
    if (!offenesBlatt) return;
    offenesBlatt = false;
    blatt.classList.remove('offen'); blatt.setAttribute('aria-hidden', 'true');
    if (!still) { schleier.classList.remove('offen'); sperren(false); if (blattQuelle) blattQuelle.focus({ preventScroll: true }); }
  }

  // ---------- Ereignisse ----------
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-gabriel]'); if (g) { e.preventDefault(); blattAuf(g); return; }
    const o = e.target.closest('[data-oeffnen]'); if (o) { e.preventDefault(); oeffnen(o.dataset.oeffnen, o); return; }
    const an = e.target.closest('[data-anfrage]'); if (an) { e.preventDefault(); const t = an.dataset.anfrage; schliessen(); blattZu(); zurAnfrage(t); return; }
    const st = e.target.closest('[data-stapel]'); if (st) { const box = st.parentElement; box.appendChild(box.firstElementChild); [...box.children].forEach((c, k) => c.style.setProperty('--k', k)); return; }
    const sz = e.target.closest('[data-schliessen]'); if (sz) { schliessen(); blattZu(); }
  });
  if (modal) {
    $('schliessen').addEventListener('click', schliessen);
    $('m-zurueck').addEventListener('click', () => { quelle = null; fuellen((aktiv - 1 + sammlung.length) % sammlung.length); });
    $('m-weiter').addEventListener('click', () => { quelle = null; fuellen((aktiv + 1) % sammlung.length); });
  }
  if (blatt) $('blatt-schliessen').addEventListener('click', () => blattZu());
  if (schleier) schleier.addEventListener('click', () => { schliessen(); blattZu(); });
  document.addEventListener('keydown', e => {
    const offen = aktiv >= 0 ? modal : offenesBlatt ? blatt : null; if (!offen) return;
    if (e.key === 'Escape') { aktiv >= 0 ? schliessen() : blattZu(); return; }
    if (aktiv >= 0 && e.key === 'ArrowRight') $('m-weiter').click();
    if (aktiv >= 0 && e.key === 'ArrowLeft') $('m-zurueck').click();
    if (e.key === 'Tab') { const f = [...offen.querySelectorAll('button, a[href]')]; const i = f.indexOf(document.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } }
  });
  if (location.hash === '#gabriel' && blatt) setTimeout(() => blattAuf(document.querySelector('.byline')), 300);

  // ---------- Fenster und Blatt am Handy nach unten wegwischen ----------
  const wischen = (el, zu) => {
    if (!el) return;
    let y0 = null, dy = 0;
    el.addEventListener('touchstart', e => { y0 = innerWidth > 960 || el.scrollTop > 0 || e.touches.length > 1 ? null : e.touches[0].clientY; dy = 0; }, { passive: true });
    el.addEventListener('touchmove', e => {
      if (y0 === null) return;
      dy = e.touches[0].clientY - y0;
      if (dy <= 0) { el.style.transform = ''; el.style.transition = ''; return; }
      el.style.transition = 'none'; el.style.transform = `translateY(${dy}px)`;
      if (e.cancelable) e.preventDefault();
    }, { passive: false });
    const los = () => { if (y0 === null) return; el.style.transition = ''; el.style.transform = ''; if (dy > 110) zu(); y0 = null; dy = 0; };
    el.addEventListener('touchend', los); el.addEventListener('touchcancel', los);
  };
  wischen(blatt, () => blattZu()); wischen(modal, () => schliessen());

  // ---------- Menü am Handy (Variante B) ----------
  const menueKnopf = document.querySelector('.menue-knopf'), hauptnav = $('hauptnav');
  if (menueKnopf && hauptnav) {
    const offen = () => hauptnav.classList.contains('offen');
    const menueZu = fokus => { if (!offen()) return; hauptnav.classList.remove('offen'); menueKnopf.setAttribute('aria-expanded', 'false'); if (fokus) menueKnopf.focus(); };
    menueKnopf.addEventListener('click', () => { const auf = !offen(); hauptnav.classList.toggle('offen', auf); menueKnopf.setAttribute('aria-expanded', String(auf)); if (auf) (hauptnav.querySelector('[aria-current]') || hauptnav.querySelector('a')).focus({ preventScroll: true }); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && offen()) menueZu(true); });
    document.addEventListener('click', e => { if (offen() && !e.target.closest('#hauptnav, .menue-knopf')) menueZu(false); });
    hauptnav.addEventListener('click', e => { if (e.target.closest('a')) menueZu(false); });
    hauptnav.addEventListener('focusout', e => { if (e.relatedTarget && !e.relatedTarget.closest('#hauptnav, .menue-knopf')) menueZu(false); });
  }

  // ---------- Bergkette der Retreats ----------
  const retreat = $('retreats');
  if (retreat && !ruhig) {
    const berge = [...retreat.querySelectorAll('.berg')], wort = retreat.querySelector('.konturwort');
    const bewege = () => { const y = -retreat.getBoundingClientRect().top; berge.forEach(b => b.style.setProperty('--y', (y * +b.dataset.speed).toFixed(1) + 'px')); if (wort) wort.style.setProperty('--wort', (-y * .25).toFixed(1) + 'px'); };
    let p = false; addEventListener('scroll', () => { if (p) return; p = true; requestAnimationFrame(() => { bewege(); p = false; }); }, { passive: true }); bewege();
  }
  // ---------- Gipfel-Video etwas schneller ----------
  document.querySelectorAll('.gipfel video').forEach(v => { const tempo = () => { v.playbackRate = 1.6; }; tempo(); v.addEventListener('loadedmetadata', tempo); });

  // ---------- Anfrage: im Entwurf wird nichts gesendet ----------
  document.querySelectorAll('form[data-entwurf]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); f.querySelector('button[type="submit"]').textContent = 'Im Entwurf wird nichts gesendet'; }));

  // ---------- Nachricht: Feld wächst mit dem Text ----------
  document.querySelectorAll('.form textarea').forEach(t => t.addEventListener('input', () => { t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight + 2, 320) + 'px'; }));

  // ---------- Für Firmen: Arbeitsplatz, an dem das gewählte Format aufleuchtet ----------
  const figur = $('figur');
  if (figur) {
    const glanzOrt = { meditation: [258, 140, 64], bewegung: [262, 250, 150], pilates: [232, 282, 62], massage: [250, 166, 58], sitzen: [226, 250, 96] };
    const knoepfe = [...document.querySelectorAll('.format')];
    let auto = 0, nutzerHatGewaehlt = false;
    const waehlen = k => {
      knoepfe.forEach(b => b.setAttribute('aria-pressed', b.dataset.format === k));
      figur.dataset.format = k;
      document.querySelectorAll('.zone-text').forEach(z => z.classList.toggle('an', z.dataset.zone === k));
      const [x, y, r] = glanzOrt[k], g = $('glanz'); g.setAttribute('cx', x); g.setAttribute('cy', y); g.setAttribute('r', r);
    };
    knoepfe.forEach(b => {
      b.addEventListener('click', () => { nutzerHatGewaehlt = true; clearInterval(auto); waehlen(b.dataset.format); });
      b.addEventListener('pointerenter', () => { if (matchMedia('(hover: hover)').matches) { nutzerHatGewaehlt = true; clearInterval(auto); waehlen(b.dataset.format); } });
    });
    waehlen('meditation');
    const zeichnen = () => {
      if (figur.classList.contains('gezeichnet')) return;
      figur.classList.add('gezeichnet');
      if (ruhig || matchMedia('(max-width: 960px)').matches) return;
      let i = 0; auto = setInterval(() => { if (nutzerHatGewaehlt) return clearInterval(auto); i = (i + 1) % knoepfe.length; waehlen(knoepfe[i].dataset.format); }, 2600);
    };
    if ('IntersectionObserver' in window) { const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); zeichnen(); } }, { threshold: .2 }); io.observe(figur); setTimeout(() => { const r = figur.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { io.disconnect(); zeichnen(); } }, 900); } else zeichnen();
  }

  // ---------- Preise: je öfter, desto günstiger ----------
  const hang = $('preis-hang'), reiter = $('preis-reiter');
  if (hang && reiter) {
    const einheit = { 'Abos': ['Stunde', 'pro Stunde', 'beim 5er-Abo'], 'Monatsabos': ['Monat', 'pro Monat', 'beim einzelnen Monat'], 'Personal Training': ['Training', 'pro Training', 'beim einzelnen Training'], 'Yogatherapie': ['Stunde', 'pro Stunde', 'bei einer einzelnen Stunde'] };
    const zahl = t => +t.replace(/’/g, '');
    const anzahl = t => { const n = parseInt(t, 10); return /Jahr/.test(t) ? 12 : n; };
    const chf = v => Number.isInteger(v) ? `CHF ${v.toLocaleString('de-CH')}` : Math.abs(v * 2 - Math.round(v * 2)) < 1e-9 ? `CHF ${v.toFixed(2)}` : `rund CHF ${Math.round(v)}`;
    let gruppe = 0, wahl = 1, neu = true;
    reiter.innerHTML = preise.map(([t], i) => `<button role="tab" id="pr-${i}" aria-selected="${i === 0}" aria-controls="preis-hang" tabindex="${i === 0 ? 0 : -1}">${t}</button>`).join('') + '<span class="reiter-gipfel" aria-hidden="true"></span>';
    const zeichne = () => {
      const [titel, z] = preise[gruppe], [, pro, basis] = einheit[titel];
      const werte = z.map(([a, b]) => ({ a, preis: zahl(b), n: anzahl(a), roh: b })).map(o => ({ ...o, je: o.preis / o.n }));
      if (wahl >= werte.length) wahl = werte.length - 1;
      const max = werte[0].je, min = Math.min(...werte.map(o => o.je)), W = 560, H = 190;
      const pt = (o, i) => [40 + (werte.length === 1 ? 0 : i / (werte.length - 1)) * (W - 80), 30 + (max === min ? 0 : (max - o.je) / (max - min)) * (H - 70)];
      const pfad = werte.map((o, i) => (i ? 'L' : 'M') + pt(o, i).map(v => v.toFixed(1)).join(' ')).join(' ');
      const w = werte[wahl], spar = Math.round((1 - w.je / max) * 100);
      const gegen = basis.replace(/^beim /, 'dem ').replace(/^bei einer /, 'einer ');
      hang.innerHTML = `<div class="hang-wahl" role="group" aria-label="${titel}" data-n="${werte.length}">${werte.map((o, i) => `<button type="button" aria-pressed="${i === wahl}" data-wahl="${i}"><b>${o.a}</b><span>CHF ${o.roh}</span></button>`).join('')}</div>`
        + `<div class="hang-zahl"><span class="ort">${w.a}</span><b class="serif">CHF ${w.roh}</b><dl class="hang-fakten"><div><dt>${pro.charAt(0).toUpperCase() + pro.slice(1)}</dt><dd>${chf(w.je)}</dd></div>${spar > 0 ? `<div class="spar"><dt>Gegenüber ${gegen}</dt><dd>${spar} % günstiger</dd></div>` : ''}</dl><div class="aktionen"><button class="knopf" data-anfrage="${titel === 'Personal Training' || titel === 'Yogatherapie' ? 'Personal Training oder Therapie' : 'Eine Stunde'}">Anfragen</button></div></div>`
        + `<div class="hang-bild"><svg viewBox="0 0 ${W} ${H}" aria-hidden="true"><path class="hang-flaeche" d="${pfad} L ${W - 40} ${H - 20} L 40 ${H - 20} Z"/><path class="hang-linie${neu ? ' neu' : ''}" d="${pfad}" pathLength="1"/>${werte.map((o, i) => { const [x, y] = pt(o, i); return `<polygon class="hang-punkt${i === wahl ? ' an' : ''}" points="${x},${y - 11} ${x + 10},${y + 7} ${x - 10},${y + 7}"/>`; }).join('')}</svg></div>`;
      const aktiv = reiter.querySelector('[aria-selected="true"]'), g = reiter.querySelector('.reiter-gipfel');
      if (aktiv && g) g.style.transform = `translateX(${aktiv.offsetLeft + aktiv.offsetWidth / 2 - 6}px)`;
      neu = false;
    };
    reiter.addEventListener('click', e => { const b = e.target.closest('[role="tab"]'); if (!b) return; gruppe = +b.id.slice(3); wahl = 1; neu = true; reiter.querySelectorAll('[role="tab"]').forEach(t => { const an = t === b; t.setAttribute('aria-selected', an); t.tabIndex = an ? 0 : -1; }); zeichne(); });
    reiter.addEventListener('keydown', e => { if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return; const t = [...reiter.querySelectorAll('[role="tab"]')], i = t.indexOf(document.activeElement); const n = t[(i + (e.key === 'ArrowRight' ? 1 : -1) + t.length) % t.length]; n.focus(); n.click(); });
    hang.addEventListener('click', e => { const b = e.target.closest('[data-wahl]'); if (b) { wahl = +b.dataset.wahl; zeichne(); hang.querySelector(`[data-wahl="${wahl}"]`).focus(); } });
    zeichne(); addEventListener('resize', zeichne);
  }

  // ---------- Radio-Interview in der Fusszeile ----------
  document.querySelectorAll('[data-radio]').forEach(r => {
    const a = r.querySelector('audio'), k = r.querySelector('.radio-knopf'), l = r.querySelector('.radio-linie'), z = r.querySelector('.radio-zeit');
    const zeit = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    k.addEventListener('click', () => { a.paused ? a.play().catch(() => {}) : a.pause(); });
    a.addEventListener('play', () => { r.classList.add('spielt'); k.setAttribute('aria-label', 'Interview anhalten'); });
    a.addEventListener('pause', () => { r.classList.remove('spielt'); k.setAttribute('aria-label', 'Interview mit Gabriel abspielen'); });
    a.addEventListener('timeupdate', () => { const d = a.duration || 168; l.style.setProperty('--fort', a.currentTime / d); z.textContent = zeit(Math.max(0, d - a.currentTime)); });
    a.addEventListener('ended', () => { a.currentTime = 0; l.style.setProperty('--fort', 0); z.textContent = '2:48'; });
    l.addEventListener('click', e => { const b = l.getBoundingClientRect(); if (a.duration) a.currentTime = (e.clientX - b.left) / b.width * a.duration; });
  });

  if (ruhig) document.querySelectorAll('video').forEach(v => { v.removeAttribute('autoplay'); v.pause(); });
})();
