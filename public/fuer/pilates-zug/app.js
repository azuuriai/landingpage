// Pilates Zug, Entwurf von Lukas Kaffer. Ohne Abhängigkeiten.
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const daten = JSON.parse($('#daten').textContent);
  const ruhigMQ = matchMedia('(prefers-reduced-motion: reduce)');
  let offenFenster = () => false, schliessenFenster = () => {};
  let ruhig = ruhigMQ.matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const bereich = (p, a, b) => clamp((p - a) / (b - a));
  const weich = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const lerp = (a, b, t) => a + (b - a) * t;
  const kopfH = () => $('#kopf').offsetHeight;

  // ---------------------------------------------------------------- Scroll-Zeitleisten ohne native Unterstützung
  // Dieselben CSS-Keyframes; hier wird nur die Zeit gesetzt. Bereich und Subjekt stehen in --zl-t und --zl-r.
  const nativ = CSS.supports('animation-timeline: view()') && CSS.supports('timeline-scope: --a');
  let zl = [];
  if (!nativ) root.classList.add('zl-js');
  function zlSammeln() {
    if (nativ || ruhig) { zl = []; return; }
    zl = $$('.zl').map(el => {
      const cs = getComputedStyle(el);
      const t = cs.getPropertyValue('--zl-t').trim().replace(/^--/, '');
      const m = cs.getPropertyValue('--zl-r').trim().match(/([a-z]+)\s+(-?[\d.]+)%\s+[a-z]+\s+(-?[\d.]+)%/);
      const subjekt = $(`[data-zl-subjekt="${t}"]`);
      return m && subjekt ? { subjekt, modus: m[1], a: +m[2] / 100, b: +m[3] / 100, anims: el.getAnimations() } : null;
    }).filter(Boolean);
  }
  function zlTick() {
    if (!zl.length) return;
    const vh = innerHeight, rects = new Map();
    for (const z of zl) {
      let r = rects.get(z.subjekt); if (!r) { r = z.subjekt.getBoundingClientRect(); rects.set(z.subjekt, r); }
      const h = r.height, t = -r.top;
      let s, e;
      if (z.modus === 'cover') { s = -vh; e = h; }
      else if (z.modus === 'contain') { s = Math.min(0, h - vh); e = Math.max(0, h - vh); }
      else if (z.modus === 'exit') { s = Math.max(0, h - vh); e = h; }
      else { s = -vh; e = Math.min(0, h - vh); }
      const q = clamp(((t - s) / (e - s || 1) - z.a) / (z.b - z.a || 1));
      for (const a of z.anims) a.currentTime = q * 1000;
    }
  }

  // ---------------------------------------------------------------- Kopf: über der Eröffnung durchsichtig, aktive Feder
  const kopf = $('#kopf'), eroeffnung = $('.eroeffnung');
  const navLinks = $$('.nav-link'), navMarke = $('.nav-marke'), menueLinks = $$('[data-menue-link]');
  const bereiche = [
    ['angebot', $('#angebot'), $('#angebot')],
    ['stundenplan', $('#stundenplan'), $('#stundenplan')],
    ['geraete', $('#geraete'), $('.raum')],
    ['team', $('.nonna'), $('.nonna')],
    ['kontakt', $('#kontakt'), $('#kontakt')],
  ];
  let aktivId = null;
  function kopfTick() {
    // Durchsichtig nur, solange der helle Verlauf oben in der Eröffnung unter der Kopfzeile liegt
    kopf.classList.toggle('ueber', eroeffnung.getBoundingClientRect().top > -24);
    const y = innerHeight * .42;
    let id = null;
    for (const [n, a, b] of bereiche) if (a.getBoundingClientRect().top <= y && b.getBoundingClientRect().bottom > y) id = n;
    if (id === aktivId) return;
    aktivId = id;
    navLinks.forEach(l => l.dataset.nav === id ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current'));
    menueLinks.forEach(l => l.getAttribute('href') === '#' + id ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current'));
    markeSetzen();
  }
  function markeSetzen() {
    const l = navLinks.find(x => x.dataset.nav === aktivId);
    if (!l || !navMarke.offsetParent) { navMarke.classList.remove('an'); return; }
    navMarke.style.transform = `translateX(${l.offsetLeft + l.offsetWidth / 2 - 9}px)`;
    navMarke.classList.add('an');
  }

  // Der Knopf im Kopf erscheint, sobald der Knopf der Eröffnung aus dem Blick ist
  const eroKnopf = $('.ero-buchen');
  if (eroKnopf && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => kopf.classList.toggle('buchen-an', !e.isIntersecting && e.boundingClientRect.top < innerHeight), { rootMargin: '-60px 0px 0px 0px' }).observe(eroKnopf);
  } else kopf.classList.add('buchen-an');

  // ---------------------------------------------------------------- Sprünge innerhalb der Seite
  // Statt durch alle Scroll-Szenen zu fahren: kurz in den Leinengrund, springen, wieder aufblenden
  const vorhang = document.createElement('div'); vorhang.className = 'vorhang'; vorhang.setAttribute('aria-hidden', 'true'); document.body.appendChild(vorhang);
  function springeZu(id) {
    const ziel = document.getElementById(id); if (!ziel) return;
    const y = () => Math.max(0, ziel.getBoundingClientRect().top + scrollY - (id === 'top' ? 0 : kopfH()));
    const fokus = () => { if (id !== 'top') { if (!ziel.hasAttribute('tabindex')) ziel.setAttribute('tabindex', '-1'); ziel.focus({ preventScroll: true }); } };
    if (ruhig) { scrollTo({ top: y(), behavior: 'auto' }); fokus(); return; }
    vorhang.classList.add('an');
    setTimeout(() => {
      root.style.scrollBehavior = 'auto'; scrollTo(0, y());
      requestAnimationFrame(() => { if (Math.abs(scrollY - y()) > 2) scrollTo(0, y()); root.style.scrollBehavior = ''; });
      fokus();
      requestAnimationFrame(() => requestAnimationFrame(() => vorhang.classList.remove('an')));
    }, 290);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a || a.classList.contains('sprung')) return;
    const id = a.getAttribute('href').slice(1); if (!document.getElementById(id)) return;
    e.preventDefault();
    if (menueKnopf && menueKnopf.getAttribute('aria-expanded') === 'true') menueAuf(false);
    if (offenFenster()) schliessenFenster();
    springeZu(id);
  }, true);

  // ---------------------------------------------------------------- Menü am Handy
  const menueKnopf = $('.menue-knopf'), menue = $('#menue'), haupt = $('#inhalt'), fuss = $('.fuss');
  function menueAuf(auf) {
    menueKnopf.setAttribute('aria-expanded', auf);
    $('.menue-text', menueKnopf).textContent = auf ? menueKnopf.dataset.zu : menueKnopf.dataset.auf;
    menue.hidden = !auf; menue.classList.toggle('offen', auf);
    document.body.classList.toggle('gesperrt', auf);
    haupt.inert = auf; fuss.inert = auf;
    if (auf) { $$('a', menue).forEach((a, k) => a.style.setProperty('--k', k)); $('a', menue).focus(); }
  }
  // iOS lässt die Seite hinter Fenster und Menü trotz overflow: hidden mitlaufen. Wischen nur zulassen,
  // wo innen wirklich etwas scrollt, und nie über dessen Anfang oder Ende hinaus.
  let wischY = 0;
  addEventListener('touchstart', e => { wischY = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchmove', e => {
    if (!document.body.classList.contains('gesperrt')) return;
    const box = e.target.closest('.f-inhalt, .menue'), dy = e.touches[0].clientY - wischY;
    if (!box || box.scrollHeight <= box.clientHeight + 1 || (dy > 0 && box.scrollTop <= 0) || (dy < 0 && box.scrollTop + box.clientHeight >= box.scrollHeight - 1)) e.preventDefault();
  }, { passive: false });
  menueKnopf.addEventListener('click', () => menueAuf(menueKnopf.getAttribute('aria-expanded') !== 'true'));
  menue.addEventListener('click', e => { if (e.target.closest('[data-menue-link]')) menueAuf(false); });

  // ---------------------------------------------------------------- Sprache wechseln, Stelle merken
  const anker = ['top', 'angebot', 'stundenplan', 'geraete', 'nonna', 'team', 'kontakt'].map(id => document.getElementById(id)).filter(Boolean);
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-sprache]'); if (!a) return;
    let el = anker[0];
    for (const x of anker) if (x.getBoundingClientRect().top <= 2) el = x;
    const r = el.getBoundingClientRect();
    try { sessionStorage.setItem('pz-stelle', JSON.stringify({ id: el.id, f: -r.top / r.height })); } catch (_) {}
  });
  try {
    const s = JSON.parse(sessionStorage.getItem('pz-stelle') || 'null');
    sessionStorage.removeItem('pz-stelle');
    const el = s && document.getElementById(s.id);
    if (el) {
      root.style.scrollBehavior = 'auto';
      const springen = () => scrollTo(0, el.getBoundingClientRect().top + scrollY + s.f * el.offsetHeight);
      springen(); addEventListener('load', springen, { once: true });
      setTimeout(() => root.style.scrollBehavior = '', 300);
    }
  } catch (_) {}

  // ---------------------------------------------------------------- Reformer: vom Strich zum Raum
  const reformer = (() => {
    const s = $('.reformer'); if (!s) return null;
    const svg = $('svg', s), striche = $$('[pathLength]', svg);
    const wagen = $('.wagen', svg), federnG = $('.federn', svg), riemen = $('.riemen', svg);
    const etiketten = $$('.etikett', svg), mitwagen = $('.mitwagen', svg);
    const buehne = $('.r-buehne', s), fenster = $('.r-fenster', s), innen = $('.r-fenster-innen', s), bild = $('.r-fenster-bild', s);
    const zeichnung = $('.r-zeichnung', s), aussage = $('.r-aussage', s), kopfzeile = $('.r-kopf', s);
    const saetze = JSON.parse(s.dataset.saetze);
    const NS = 'http://www.w3.org/2000/svg', L0 = 310, farben = ['--f1', '--f2', '--f3', '--f4'];
    // Schraubenfeder in Seitenansicht, einmal gezeichnet und danach nur gedehnt
    const federPfad = (L, r, w) => { let d = 'M0 0'; const n = w * 24; for (let i = 1; i <= n; i++) { const th = i / n * w * Math.PI * 2; d += ` L${(L * i / n - r * .55 * Math.sin(th)).toFixed(1)} ${(-r * Math.sin(th)).toFixed(1)}`; } return d; };
    const federn = farben.map(f => { const p = document.createElementNS(NS, 'path'); p.setAttribute('class', 'feder'); p.setAttribute('d', federPfad(L0, 4.2, 15)); p.style.stroke = `var(${f})`; federnG.appendChild(p); return p; });
    let satz = -1, letzt = -1, satzMarke = 0;
    function zeigeSatz(n, sofort) {
      if (n === satz) return;
      const erst = satz === -1; satz = n;
      const marke = ++satzMarke;
      const setzen = ein => { if (marke !== satzMarke) return; aussage.innerHTML = saetze[n].split('|').map((z, i) => `<span${ein ? ` class="ein" style="--i:${i}"` : ''}>${z}</span>`).join(''); aussage.classList.remove('weg'); };
      if (erst || sofort) setzen(false); else { aussage.classList.add('weg'); setTimeout(() => setzen(true), 330); }
    }
    const massstab = () => svg.style.setProperty('--k', (zeichnung.offsetWidth / 1200).toFixed(4));
    massstab(); addEventListener('resize', massstab);
    function zeichne(p, still) {
      if (p === letzt && !still) return; letzt = p;
      const fahrt = still ? .55 : weich(bereich(p, .46, .70)) - .55 * weich(bereich(p, .62, .74));
      const dx = -230 * fahrt;
      // Lesen
      const sb = svg.getBoundingClientRect(), bb = buehne.getBoundingClientRect();
      // 1 Linien zeichnen sich
      const zug = weich(bereich(p, .02, .28));
      striche.forEach((el, i) => { el.style.strokeDasharray = 1; el.style.strokeDashoffset = 1 - clamp(zug * 1.25 - i * .012); });
      // 2 Beschriftungen
      etiketten.forEach(e => e.classList.toggle('an', still || (p >= +e.dataset.ab && p < .8)));
      // 3 Wagen fährt zum Kopfende, Federn dehnen sich, der Riemen folgt
      wagen.setAttribute('transform', `translate(${dx} 0)`); mitwagen.setAttribute('transform', `translate(${dx} 0)`);
      const sicht = weich(bereich(p, .2, .3));
      const len = 1040 - (730 + dx);
      federn.forEach((f, i) => { f.setAttribute('transform', `translate(${730 + dx} ${340 + i * 6.5}) scale(${(len / L0).toFixed(4)} 1)`); f.style.opacity = sicht; });
      const rx = 470 + dx - 178, ry = 262 - 162;
      riemen.setAttribute('transform', `translate(178 162) rotate(${(Math.atan2(ry, rx) * 180 / Math.PI).toFixed(2)}) scale(${Math.hypot(rx, ry).toFixed(1)} 1)`);
      riemen.style.opacity = sicht;
      // 4 Der Wagen öffnet sich zum Raum: Fenster wird grösser, das Bild darin bleibt stehen
      const auf = still ? 0 : weich(bereich(p, .78, .96));
      const k = sb.width / 1200, W = bb.width, H = bb.height;
      const wl = sb.left - bb.left + (430 + dx) * k, wt = sb.top - bb.top + 286 * k, ww = 300 * k, wh = 36 * k;
      const sx = lerp(ww / W, 1, auf), sy = lerp(wh / H, 1, auf), tx = lerp(wl, 0, auf), ty = lerp(wt, 0, auf);
      fenster.style.opacity = !still && p > .76 ? 1 : 0;
      fenster.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
      innen.style.transform = `scale(${(1 / sx).toFixed(4)}, ${(1 / sy).toFixed(4)}) translate(${(-tx).toFixed(1)}px, ${(-ty).toFixed(1)}px)`;
      bild.style.transform = `scale(${(1.18 - .18 * auf).toFixed(3)})`;
      zeichnung.style.opacity = (1 - clamp(auf * 1.6)).toFixed(3);
      kopfzeile.style.opacity = auf > .3 ? 0 : 1;
      aussage.classList.toggle('hell', auf > .55);
      // Aussagen wechseln
      if (still) { satz = -1; aussage.innerHTML = s.dataset.ruhig.split('|').map(z => `<span>${z}</span>`).join(''); return; }
      let n = 0; [0, .46, .62, .80].forEach((ab, i) => { if (p >= ab) n = i; });
      zeigeSatz(n);
    }
    function fortschritt() {
      const r = s.getBoundingClientRect(), stage = buehne.offsetHeight;
      return clamp((kopfH() - r.top) / (r.height - stage));
    }
    return { tick: () => { if (!ruhig) zeichne(fortschritt()); }, still: () => zeichne(.4, true) };
  })();

  // ---------------------------------------------------------------- Galerie: Tastatur bringt die Tafel in den Blick
  const angebot = $('#angebot'), spur = $('.spur');
  $$('.tafel').forEach(t => t.addEventListener('focus', () => {
    if (ruhig || !angebot || !t.matches(':focus-visible')) return;
    const r = angebot.getBoundingClientRect(), max = r.height - innerHeight;
    const distanz = spur.scrollWidth - innerWidth;
    const ziel = clamp((t.offsetLeft - innerWidth * .3) / distanz);
    // Bereich der Spur: contain 4 % bis 96 %
    const p = .04 + ziel * .92;
    scrollTo({ top: scrollY + r.top + p * max, behavior: 'auto' });
  }));

  // ---------------------------------------------------------------- Fenster mit Bildflug
  const schleier = $('#schleier'), fenster = $('#fenster'), fImg = $('#f-img');
  let quelle = null, offen = false, aktivFormat = -1;
  const formate = daten.formate;
  const bildSetzen = (b, pos) => { fImg.srcset = b.srcset; fImg.src = b.src; fImg.sizes = '(max-width: 1023px) 100vw, 480px'; fImg.style.objectPosition = pos || ''; };
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const knopf = (href, text) => `<a class="knopf" href="${href}" target="_blank" rel="noopener">${esc(text)}</a>`;
  // Ein Fenster für alles: Format, Nonna und Buchen füllen dieselben Felder, leere Felder blenden sich aus
  function fuellen(d) {
    $('#f-titel').textContent = d.titel;
    $('#f-satz').innerHTML = esc(d.satz) + (d.satzHinweis ? `<span class="f-satz-hinweis">${esc(d.satzHinweis)}</span>` : '');
    $('#f-wer').innerHTML = d.wer ? `<span>${esc(d.wer)}</span>` : '';
    const z = $('#f-zahlen'); z.style.setProperty('--n', (d.zahlen || []).length || 3);
    z.innerHTML = (d.zahlen || []).map(([zahl, text]) => `<div><dt>${esc(text)}</dt><dd>${esc(zahl)}</dd></div>`).join('');
    $('#f-tags').innerHTML = (d.tags || []).map(x => `<li>${esc(x)}</li>`).join('');
    $('#f-extra').textContent = d.extra || '';
    $('#f-text').textContent = d.text || '';
    $('#f-wege').innerHTML = d.wege || '';
    $('#f-aktionen').innerHTML = d.aktionen || '';
    $('#f-blaettern').hidden = !d.blaettern;
    $('#f-inhalt').scrollTop = 0;
  }
  function fuellenFormat(i) {
    const f = formate[i]; aktivFormat = i;
    bildSetzen(daten.bilder[f.id]); fImg.alt = f.alt;
    const gruppe = f.id === 'gruppe';
    fuellen({ titel: f.name, satz: f.satz, leute: f.leute, wer: f.wer, zahlen: f.zahlen, tags: f.tags, extra: f.extra, blaettern: true,
      aktionen: (gruppe ? knopf(daten.bsport_kalender, daten.buchen_fenster.gruppe_knopf) : knopf(daten.bsport_privat, daten.f_bsport))
        + `<a class="text-link" href="tel:${daten.tel}">${esc(daten.f_anrufen)}</a><p class="f-hinweis">${esc(daten.f_bsport_hinweis)}</p>` });
    const vor = formate[(i + formate.length - 1) % formate.length], nach = formate[(i + 1) % formate.length];
    $('#f-zurueck').innerHTML = `${esc(daten.f_zurueck)}: <b>${esc(vor.name)}</b>`; $('#f-weiter').innerHTML = `${esc(daten.f_weiter)}: <b>${esc(nach.name)}</b>`;
  }
  function fuellenNonna() {
    const n = daten.nonna_fenster; aktivFormat = -1;
    bildSetzen(daten.bilder.portrait, '50% 34%'); fImg.alt = n.alt;
    fuellen({ titel: n.titel, satz: n.satz, satzHinweis: n.hinweis, zahlen: n.zahlen, text: n.text,
      aktionen: knopf(daten.bsport_privat, daten.buchen) + `<a class="text-link" href="#team" data-schliessen>${esc(n.team)}</a>` });
  }
  function fuellenBuchen() {
    const b = daten.buchen_fenster; aktivFormat = -1;
    bildSetzen(daten.bilder.eroeffnung); fImg.alt = '';
    fuellen({ titel: b.titel, satz: b.satz,
      wege: b.wege.map(([n, satz, art]) => `<div class="f-weg"><b>${esc(n)}</b><span>${esc(satz)}</span>${art === 'privat' ? knopf(daten.bsport_privat, daten.f_bsport) : knopf(daten.bsport_kalender, b.gruppe_knopf)}</div>`).join(''),
      aktionen: `<p class="f-hinweis">${esc(daten.f_bsport_hinweis)}</p>` });
  }
  // Bildflug: Das Bild startet genau dort, wo es in der Tafel zu sehen ist, und landet im Fenster.
  // Bewegt wird nur transform; der sichtbare Ausschnitt öffnet sich über clip-path vom Tafel- zum Fensterrahmen.
  function flug(vonImg, vonRahmen, nachRahmen) {
    if (ruhig || !vonImg || !nachRahmen || innerWidth <= 1023 || !vonImg.naturalWidth) return Promise.resolve();
    const nw = vonImg.naturalWidth, nh = vonImg.naturalHeight;
    const gezeichnet = (box, el) => {
      const [px, py] = getComputedStyle(el).objectPosition.split(' ').map(v => parseFloat(v) / 100);
      const k = Math.max(box.width / nw, box.height / nh), w = nw * k, h = nh * k;
      return { l: box.left + (box.width - w) * (isNaN(px) ? .5 : px), t: box.top + (box.height - h) * (isNaN(py) ? .5 : py), w, h };
    };
    const A = gezeichnet(vonImg.getBoundingClientRect(), vonImg), Z = nachRahmen.getBoundingClientRect(), B = gezeichnet(Z, fImg);
    const r = vonRahmen.getBoundingClientRect(), oben = kopfH();
    const W0 = { l: Math.max(r.left, 0), t: Math.max(r.top, oben), r: Math.min(r.right, innerWidth), b: Math.min(r.bottom, innerHeight) };
    if (W0.r - W0.l < 40 || W0.b - W0.t < 40) return Promise.resolve();
    const k0 = A.w / B.w;
    const inset = (W, o, k) => `inset(${((W.t - o.t) / k).toFixed(1)}px ${(B.w - (W.r - o.l) / k).toFixed(1)}px ${(B.h - (W.b - o.t) / k).toFixed(1)}px ${((W.l - o.l) / k).toFixed(1)}px round ${(6 / k).toFixed(1)}px)`;
    const f = document.createElement('img'); f.className = 'flieger'; f.alt = ''; f.src = vonImg.currentSrc || vonImg.src;
    Object.assign(f.style, { left: B.l + 'px', top: B.t + 'px', width: B.w + 'px', height: B.h + 'px' });
    document.body.appendChild(f);
    const anim = f.animate([
      { transform: `translate(${A.l - B.l}px, ${A.t - B.t}px) scale(${k0})`, clipPath: inset(W0, A, k0) },
      { transform: 'translate(0px, 0px) scale(1)', clipPath: inset({ l: Z.left, t: Z.top, r: Z.right, b: Z.bottom }, B, 1).replace(/round [\d.]+px/, 'round 0px') },
    ], { duration: 720, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
    return Promise.race([anim.finished, new Promise(res => setTimeout(res, 950))]).then(() => f.remove());
  }
  function sperren(an) { haupt.inert = an; fuss.inert = an; kopf.inert = an; document.body.classList.toggle('gesperrt', an); }
  function oeffnen(art, ausloeser) {
    if (art === 'buchen') fuellenBuchen(); else if (art === 'nonna') fuellenNonna(); else fuellenFormat(formate.findIndex(f => f.id === art));
    quelle = ausloeser; offen = true;
    if (menue && !menue.hidden) menueAuf(false);
    fenster.classList.toggle('ist-nonna', art === 'nonna');
    schleier.hidden = false; fenster.hidden = false;
    sperren(true);
    const vonBild = art !== 'buchen' && ausloeser ? $('img', ausloeser) : null;
    const mitFlug = vonBild && vonBild.complete && !ruhig && innerWidth > 1023;
    // Mit Bildflug steht das Fenster sofort an seinem Platz und blendet nur auf, damit das Bild genau landet
    fenster.classList.toggle('mit-flug', !!mitFlug);
    requestAnimationFrame(() => { schleier.classList.add('offen'); fenster.classList.add('offen'); });
    if (mitFlug) {
      fImg.style.opacity = 0;
      const rahmen = art === 'nonna' ? $('.g-bild', ausloeser) : ausloeser;
      requestAnimationFrame(() => requestAnimationFrame(() => flug(vonBild, rahmen, $('.f-bild', fenster)).then(() => { fImg.style.opacity = ''; })));
    }
    setTimeout(() => $('#f-zu').focus({ preventScroll: true }), 60);
  }
  function schliessen() {
    if (!offen) return; offen = false;
    schleier.classList.remove('offen'); fenster.classList.remove('offen');
    sperren(false);
    const weg = () => { if (!offen) { schleier.hidden = true; fenster.hidden = true; } };
    ruhig ? weg() : setTimeout(weg, 460);
    if (quelle && document.contains(quelle)) quelle.focus({ preventScroll: true });
  }
  offenFenster = () => offen; schliessenFenster = schliessen;
  $('#f-zu').addEventListener('click', schliessen);
  schleier.addEventListener('click', schliessen);
  $('#f-zurueck').addEventListener('click', () => fuellenFormat((aktivFormat + formate.length - 1) % formate.length));
  $('#f-weiter').addEventListener('click', () => fuellenFormat((aktivFormat + 1) % formate.length));
  // Fokus bleibt im Fenster
  fenster.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), iframe', fenster).filter(x => x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });

  document.addEventListener('click', e => {
    const t = e.target.closest('.tafel'); if (t) { oeffnen(t.dataset.format, t); return; }
    const g = e.target.closest('[data-nonna]'); if (g) { oeffnen('nonna', g); return; }
    const b = e.target.closest('[data-buchen]'); if (b) { oeffnen('buchen', b); return; }
  });
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (offen) schliessen(); else if (menueKnopf.getAttribute('aria-expanded') === 'true') { menueAuf(false); menueKnopf.focus(); }
  });

  // ---------------------------------------------------------------- Stundenplan: Gruppenstunden live aus bsport (Firma 401)
  (() => {
    const tageEl = $('#plan-tage'); if (!tageEl) return;
    const P = daten.plan, sprache = daten.lang === 'de' ? 'de-CH' : 'en-GB', TZ = 'Europe/Zurich';
    const tagSchl = d => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
    const ausSchl = k => new Date(k + 'T12:00:00Z');
    const plus = (k, n) => { const d = ausSchl(k); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
    const montag = k => plus(k, -((ausSchl(k).getUTCDay() + 6) % 7));
    const heute = tagSchl(new Date()), dieseWoche = montag(heute);
    const zeit = d => new Intl.DateTimeFormat(sprache, { timeZone: TZ, hour: '2-digit', minute: '2-digit' }).format(d);
    const tagName = k => new Intl.DateTimeFormat(sprache, { timeZone: 'UTC', weekday: 'short' }).format(ausSchl(k));
    const datum = (k, opt) => new Intl.DateTimeFormat(sprache, Object.assign({ timeZone: 'UTC' }, opt)).format(ausSchl(k));
    let stunden = [], woche = dieseWoche, beispiel = false;
    const coaches = Object.assign({}, daten.coaches), status = $('#plan-status');
    function zeichnen() {
      const tage = Array.from({ length: 7 }, (_, i) => plus(woche, i));
      $('#plan-woche').textContent = `${datum(tage[0], { day: 'numeric', month: 'short' })} – ${datum(tage[6], { day: 'numeric', month: 'short', year: 'numeric' })}`;
      const inWoche = stunden.filter(s => s.tag >= tage[0] && s.tag <= tage[6]);
      tageEl.innerHTML = tage.map((k, i) => {
        const liste = inWoche.filter(s => s.tag === k).sort((a, b) => a.start - b.start);
        const karten = liste.map(s => {
          const frei = Math.max(0, s.plaetze - s.gebucht), vorbei = s.start < new Date(), voll = s.voll || frei === 0;
          const kasten = Array.from({ length: s.plaetze }, (_, n) => `<b${n < s.gebucht ? ' class="besetzt"' : ''}></b>`).join('');
          const text = vorbei ? P.vorbei : voll ? P.voll : P.frei.replace('{n}', frei).replace('{m}', s.plaetze);
          const inhalt = `<span class="plan-zeit">${zeit(s.start)} – ${zeit(s.ende)}</span><span class="plan-name">${esc(P.namen[s.name] || s.name)}</span><span class="plan-lehr">${esc(coaches[s.coach] || '')}</span><span class="plan-plaetze"><i aria-hidden="true">${kasten}</i>${esc(text)}</span>`;
          return vorbei || voll
            ? `<div class="plan-stunde ${vorbei ? 'vorbei' : 'voll'}">${inhalt}</div>`
            : `<a class="plan-stunde" href="${daten.bsport_kalender}" target="_blank" rel="noopener">${inhalt}<span class="plan-buchen">${esc(P.buchen)}</span></a>`;
        }).join('');
        const leer = !liste.length && i < 5 ? `<span class="plan-privat">${esc(P.privat)}<br>07:30 – 19:00</span>` : '';
        return `<div class="plan-tag${k === heute ? ' heute' : ''}"><div class="plan-tag-kopf"><b>${esc(k === heute ? P.heute : tagName(k))}</b><span>${datum(k, { day: 'numeric', month: 'numeric' })}</span></div>${karten}${leer}</div>`;
      }).join('');
      status.textContent = beispiel ? P.fehler : inWoche.length ? '' : P.leer;
      $('[data-woche="-1"]').disabled = beispiel || woche <= plus(dieseWoche, -28);
      $('[data-woche="1"]').disabled = beispiel || woche >= plus(dieseWoche, 35);
    }
    const umwandeln = r => { const start = new Date(r.date_start); return { start, ende: new Date(start.getTime() + r.duration_minute * 60000), tag: tagSchl(start), name: r.activity_name, coach: r.coach, plaetze: r.effectif, gebucht: r.validated_booking_count, voll: r.full }; };
    $$('.plan-pfeil').forEach(b => b.addEventListener('click', () => { woche = plus(woche, 7 * +b.dataset.woche); zeichnen(); }));
    const api = 'https://api.production.bsport.io';
    const laden = async url => { const r = await fetch(url); if (!r.ok) throw new Error(r.status); return r.json(); };
    (async () => {
      try {
        let url = `${api}/book/v1/offer/?company=401&min_date=${plus(dieseWoche, -28)}&max_date=${plus(dieseWoche, 41)}`;
        const alle = [];
        for (let n = 0; url && n < 6; n++) { const d = await laden(url); alle.push(...(d.results || [])); url = d.next; }
        stunden = alle.map(umwandeln);
        laden(`${api}/api/v1/coach/?company=401`).then(d => { (d.results || []).forEach(c => { coaches[c.id] = c.user.name; }); zeichnen(); }).catch(() => {});
      } catch (_) {
        beispiel = true; stunden = daten.plan_beispiel.map(umwandeln); woche = montag(stunden[0].tag);
      }
      zeichnen();
    })();
  })();

  // Fokusring nach Zeiger-Bedienung nicht auf den Elementen zeigen, die den Fokus zurückbekommen (Safari)
  addEventListener('keydown', e => { if (e.key === 'Tab') root.classList.add('tastatur'); });
  addEventListener('pointerdown', () => root.classList.remove('tastatur'));

  // ---------------------------------------------------------------- Takt
  let wartet = false;
  function tick() { wartet = false; zlTick(); kopfTick(); if (reformer) reformer.tick(); }
  const anstoss = () => { if (!wartet) { wartet = true; requestAnimationFrame(tick); } };
  addEventListener('scroll', anstoss, { passive: true });
  addEventListener('resize', () => { markeSetzen(); anstoss(); });
  function modusSetzen() {
    ruhig = ruhigMQ.matches;
    zlSammeln();
    if (ruhig && reformer) reformer.still();
    anstoss();
  }
  ruhigMQ.addEventListener('change', modusSetzen);
  if (document.fonts) document.fonts.ready.then(markeSetzen);
  addEventListener('load', () => { zlSammeln(); anstoss(); });
  modusSetzen();
})();
