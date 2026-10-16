// Vorschau Studio Yogabriel, Variante A: Gratlinie als Kapitelführung, Reiter, gepinnte Woche, Preise in den Fenstern.
// Läuft nach app.js und liest nur dessen Ausgabe im DOM. Alle Inhalte und Zahlen stehen weiter allein in app.js.
(() => {
  const $ = id => document.getElementById(id);
  const ruhigMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const schmalMQ = matchMedia('(max-width: 960px)');
  const weich = () => ruhigMQ.matches ? 'instant' : 'smooth';
  const klemme = (v, a, b) => Math.min(b, Math.max(a, v));
  const kopf = $('kopf');
  const kopfH = () => kopf ? kopf.offsetHeight : 0;
  const obenVon = el => el.getBoundingClientRect().top + scrollY;
  const springe = (el, art = weich()) => el && scrollTo({ top: Math.max(0, obenVon(el) - kopfH() + 1), behavior: art });
  const zahl = t => +t.replace(/[^\d]/g, '');

  // ---------- Für dich: Zeilen aus app.js in zwei Gruppen ----------
  const liste = $('liste');
  document.querySelectorAll('.a-zeilen').forEach(z => z.dataset.ids.split(' ').forEach(id => {
    const zeile = liste && liste.querySelector(`[data-oeffnen="${id}"]`); if (zeile) z.appendChild(zeile);
  }));
  const raster = $('woche-raster');
  const kurse = raster ? raster.querySelectorAll('.slot.kurs').length : 0;
  if ($('a-gruppen-zahl') && kurse) $('a-gruppen-zahl').textContent = `${kurse} Stunden pro Woche`;

  // Preise aus der Preisliste von app.js; die Spanne pro Gruppenstunde wird aus den Abos berechnet
  const preisgruppen = [...document.querySelectorAll('#preis-raster > div')].map(g => ({
    titel: g.querySelector('h3').textContent,
    zeilen: [...g.querySelectorAll('dl > div')].map(d => [d.querySelector('dt').textContent, d.querySelector('dd').textContent]),
  }));
  const gruppe = t => preisgruppen.find(g => g.titel === t);
  const kurzPreis = $('a-preis');
  if (kurzPreis && preisgruppen.length) {
    const zeilen = [];
    const abos = gruppe('Abos');
    if (abos) {
      const proStunde = abos.zeilen.map(([a, b]) => zahl(b) / zahl(a)).filter(isFinite);
      const f = n => Number.isInteger(n) ? n : n.toFixed(2);
      zeilen.push(['Gruppenstunde im Abo', `CHF ${f(Math.min(...proStunde))} bis ${f(Math.max(...proStunde))}`]);
    }
    ['Monatsabos', 'Personal Training', 'Yogatherapie'].forEach(t => { const g = gruppe(t); if (g) zeilen.push([t === 'Monatsabos' ? 'Monatsabo' : t, `${g.zeilen[0][1]}<small>${g.zeilen[0][0]}</small>`]); });
    kurzPreis.innerHTML = zeilen.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
  }

  // Im Angebotsfenster: die ganze Preisliste zum jeweiligen Angebot
  const preiseImFenster = { 'Yoga': ['Abos', 'Monatsabos'], 'Pilates': ['Abos', 'Monatsabos'], 'Personal Training': ['Personal Training'], 'Yogatherapie': ['Yogatherapie'] };
  const mTitel = $('m-titel'), mFakten = $('m-fakten');
  if (mTitel && mFakten && preisgruppen.length) {
    const tafel = document.createElement('div'); tafel.className = 'a-m-preise';
    new MutationObserver(() => {
      const g = (preiseImFenster[mTitel.textContent] || []).map(gruppe).filter(Boolean);
      tafel.innerHTML = g.length ? `<h3>Was es kostet</h3><div class="a-m-preisgruppen">${g.map(x => `<div><h4>${x.titel}</h4><dl>${x.zeilen.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl></div>`).join('')}</div><p>Alle Abos sind persönlich und 365 Tage gültig.</p>` : '';
      const nach = $('m-extra') || mFakten; // seit 3.2: Kernangaben oben, Beschreibung darunter, die Preistafel ans Ende
      if (g.length && tafel.previousElementSibling !== nach) nach.after(tafel);
      if (!g.length) tafel.remove();
      // die Kurzangabe „Preis“ steht dann vollständig in der Tafel darunter
      mFakten.querySelectorAll('div').forEach(d => { d.hidden = !!g.length && d.querySelector('dt').textContent === 'Preis'; });
    }).observe(mTitel, { childList: true, characterData: true, subtree: true });
  }

  // ---------- Reiter: Für dich, Für Firmen, Raum mieten ----------
  const reiter = [...document.querySelectorAll('.a-reiter [role="tab"]')];
  const felder = reiter.map(t => $(t.getAttribute('aria-controls')));
  const gipfel = document.querySelector('.a-reiter-gipfel');
  let aktivReiter = 0;
  const setzeGipfel = () => { const t = reiter[aktivReiter]; if (gipfel && t) gipfel.style.setProperty('--gx', `${t.offsetLeft + t.offsetWidth / 2 - 15 - (t.parentElement.scrollLeft || 0)}px`); };
  const felderBox = $('a-felder');
  function waehle(i, fokus) {
    if (felderBox && i !== aktivReiter) felderBox.dataset.richtung = i > aktivReiter ? 'vor' : 'zurueck';
    aktivReiter = i;
    reiter.forEach((t, n) => { t.setAttribute('aria-selected', String(n === i)); t.tabIndex = n === i ? 0 : -1; });
    felder.forEach((f, n) => { f.classList.toggle('an', n === i); f.classList.toggle('vor', n < i); f.classList.toggle('nach', n > i); f.inert = n !== i; });
    setzeGipfel();
    if (fokus) { reiter[i].focus(); reiter[i].scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  }
  if (reiter.length) {
    waehle(0);
    requestAnimationFrame(() => requestAnimationFrame(() => gipfel && gipfel.classList.add('bereit')));
    reiter.forEach((t, i) => t.addEventListener('click', () => waehle(i)));
    reiter[0].parentElement.addEventListener('keydown', e => {
      const n = reiter.length, ziel = { ArrowRight: (aktivReiter + 1) % n, ArrowLeft: (aktivReiter - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
      if (ziel === undefined) return; e.preventDefault(); waehle(ziel, true);
    });
    reiter[0].parentElement.addEventListener('scroll', setzeGipfel, { passive: true });
  }
  const zumReiter = (id, art) => { const i = felder.findIndex(f => f && f.id === id); if (i < 0) return false; waehle(i); springe($('angebot'), art); return true; };

  // ---------- Woche: Zeitachse und Plan ----------
  const sektion = $('woche'), plan = $('a-plan'), spur = $('a-spur'), gitter = $('a-raster'), tageLeiste = $('a-tage');
  const minuten = t => { const [h, m] = t.trim().split(':').map(Number); return h * 60 + m; };
  const slots = raster ? [...raster.querySelectorAll('.slot')] : [];
  const spannen = slots.map(s => s.querySelector('span').textContent.split('–').map(minuten));
  const START = Math.floor(Math.min(...spannen.map(z => z[0])) / 60) * 60, ENDE = Math.ceil(Math.max(...spannen.map(z => z[1])) / 60) * 60, SPANNE = ENDE - START;
  slots.forEach((s, i) => { s.style.setProperty('--von', spannen[i][0] - START); s.style.setProperty('--dauer', spannen[i][1] - spannen[i][0]); });
  const tage = raster ? [...raster.querySelectorAll('.tag')] : [];
  tage.forEach(t => { const h = t.querySelector('h3'); if (t.classList.contains('heute')) h.innerHTML = `${h.textContent.split(' · ')[0]}<span class="a-heute">heute</span>`; });

  if (gitter && slots.length) {
    let html = '';
    for (let m = START; m <= ENDE; m += 60) html += `<i class="a-linie" style="--m:${m - START}">${(m / 60) % 2 === 0 ? `<b>${String(m / 60).padStart(2, '0')}:00</b>` : ''}</i>`;
    const mittag = spannen.filter(([a]) => a >= 720 && a < 780);
    if (mittag.length > 2) { const a = Math.min(...mittag.map(z => z[0])), b = Math.max(...mittag.map(z => z[1])); html += `<i class="a-mittag" style="--m:${a - START};--d:${b - a}"><b>Mittag</b></i>`; }
    gitter.innerHTML = html;
  }
  (function jetzt() {
    const heute = raster && raster.querySelector('.tag.heute'); if (!heute) return;
    const d = new Date(), m = d.getHours() * 60 + d.getMinutes();
    if (m < START || m > ENDE) return;
    heute.insertAdjacentHTML('beforeend', `<i class="a-jetzt" style="--jetzt:${m - START}"><b>jetzt</b></i>`);
  })();

  // Tagesleiste zum Springen, die Spanne zeigt die sichtbaren Tage
  const kuerzel = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  if (tageLeiste) tageLeiste.innerHTML = tage.map((t, i) => `<button type="button" class="${t.classList.contains('heute') ? 'heute' : ''}" aria-label="${t.querySelector('h3').firstChild.textContent}">${kuerzel[i]}</button>`).join('') + '<i class="a-tage-spanne" aria-hidden="true"></i>';
  const tagKnoepfe = tageLeiste ? [...tageLeiste.querySelectorAll('button')] : [], spanne = tageLeiste && tageLeiste.querySelector('.a-tage-spanne');
  function markiereTage(x) {
    if (sektion) sektion.classList.toggle('verschoben', x > 8);
    if (!spur || !tagKnoepfe.length) return;
    const b = spur.clientWidth; let erst = -1, letzt = -1;
    tage.forEach((t, i) => { const sicht = Math.min(t.offsetLeft + t.offsetWidth, x + b) - Math.max(t.offsetLeft, x) > t.offsetWidth * .55; tagKnoepfe[i].classList.toggle('sichtbar', sicht); if (sicht) { if (erst < 0) erst = i; letzt = i; } });
    if (spanne && erst >= 0) { const a = tagKnoepfe[erst], z = tagKnoepfe[letzt]; spanne.style.left = a.offsetLeft + 8 + 'px'; spanne.style.width = z.offsetLeft + z.offsetWidth - a.offsetLeft - 16 + 'px'; }
  }

  // Plan messen: Minuten in Pixel; die Tagesleiste nur, wenn nicht alle Tage nebeneinander Platz haben
  function messeWoche() {
    if (!sektion || !plan || !spur) return;
    plan.style.setProperty('--ppm', ((plan.clientHeight - 46 - 14) / SPANNE).toFixed(4));
    sektion.classList.toggle('ueberbreit', spur.scrollWidth > spur.clientWidth + 2);
    wocheBewegen();
  }
  function wocheBewegen() {
    if (!sektion) return;
    const r = sektion.getBoundingClientRect();
    if (plan && !ruhigMQ.matches && !schmalMQ.matches) plan.style.setProperty('--zeichne', klemme((innerHeight - r.top) / (innerHeight * .8), 0, 1).toFixed(3));
    markiereTage(spur ? spur.scrollLeft : 0);
  }
  tagKnoepfe.forEach((k, i) => k.addEventListener('click', () => {
    if (schmalMQ.matches && obenVon(spur) < scrollY + kopfH()) springe(sektion);
    spur.scrollTo({ left: tage[i].offsetLeft - (parseFloat(getComputedStyle(raster).paddingLeft) || 0), behavior: weich() });
  }));
  if (spur) spur.addEventListener('scroll', () => markiereTage(spur.scrollLeft), { passive: true });

  // Raum mieten: freie Zeiten im Stundenplan zeigen
  document.querySelectorAll('[data-a-frei]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const f = document.querySelector('.a-woche .filter [data-art="frei"]'); if (f) f.click();
    springe(sektion);
  }));

  // ---------- Gratlinie: Kapitel, Fortschritt, Sprung ----------
  const grat = $('grat'), linie = $('grat-linie'), kapitelKnopf = $('a-kapitel'), kapitelName = $('a-kapitel-name');
  const kapLinks = grat ? [...grat.querySelectorAll('[data-kapitel]')] : [];
  const kapitel = kapLinks.map(a => $(a.dataset.kapitel));
  const [grund, weg, gipfelPfad] = linie ? [...linie.querySelectorAll('path')] : [];
  const HOEHEN = [11, 13, 15, 18];
  let geo = null, aktiv = -2;
  function baueGrat() {
    if (!linie || !kapLinks.length) return;
    const W = kopf.clientWidth, H = 20, y0 = H - .75, kr = kopf.getBoundingClientRect();
    const breit = !schmalMQ.matches;
    const xs = kapLinks.map((a, i) => { const r = a.getBoundingClientRect(); return breit && r.width ? r.left + r.width / 2 - kr.left : W * (i + 1) / (kapLinks.length + 1); });
    const pkt = [[0, y0]], spitzen = [];
    xs.forEach((x, i) => {
      const h = HOEHEN[i % HOEHEN.length] * (breit ? 1 : .8);
      if (i > 0) { const m = (xs[i - 1] + x) / 2 + 6; pkt.push([m - 6, y0], [m, y0 - 3.5], [m + 9, y0]); }
      const l = [x - h * 1.7, y0], s = [x, y0 - h], r = [x + h * 2.2, y0];
      pkt.push(l, s, r); spitzen.push([l, s, r]);
    });
    pkt.push([W, y0]);
    const laengen = [0];
    for (let i = 1; i < pkt.length; i++) laengen.push(laengen[i - 1] + Math.hypot(pkt[i][0] - pkt[i - 1][0], pkt[i][1] - pkt[i - 1][1]));
    const d = 'M' + pkt.map(p => p.map(v => v.toFixed(1)).join(' ')).join(' L');
    linie.setAttribute('viewBox', `0 0 ${W} ${H}`);
    grund.setAttribute('d', d); weg.setAttribute('d', d);
    const L = laengen[laengen.length - 1];
    weg.style.strokeDasharray = `${L} ${L}`;
    geo = { pkt, laengen, L, xs, W, spitzen };
    aktiv = -2; zeichneGrat();
  }
  const laengeBei = x => {
    const { pkt, laengen } = geo;
    for (let i = 1; i < pkt.length; i++) if (x <= pkt[i][0]) { const a = pkt[i - 1], b = pkt[i], t = b[0] > a[0] ? (x - a[0]) / (b[0] - a[0]) : 1; return laengen[i - 1] + (laengen[i] - laengen[i - 1]) * klemme(t, 0, 1); }
    return geo.L;
  };
  function zeichneGrat() {
    if (!geo) return;
    const vorlauf = innerHeight * .35, maxY = document.documentElement.scrollHeight - innerHeight;
    let marken = kapitel.map(k => k ? klemme(obenVon(k) - kopfH() - vorlauf, 0, maxY) : maxY);
    for (let i = 1; i < marken.length; i++) marken[i] = Math.max(marken[i], marken[i - 1] + 1);
    const y = scrollY, stuetz = [[0, 0], ...marken.map((m, i) => [m, geo.xs[i]]), [Math.max(maxY, marken[marken.length - 1] + 1), geo.W]];
    let x = geo.W;
    for (let i = 1; i < stuetz.length; i++) if (y <= stuetz[i][0]) { const [ya, xa] = stuetz[i - 1], [yb, xb] = stuetz[i]; x = xa + (xb - xa) * klemme((y - ya) / ((yb - ya) || 1), 0, 1); break; }
    weg.style.strokeDashoffset = (geo.L - laengeBei(x)).toFixed(1);
    let neu = -1; marken.forEach((m, i) => { if (y >= m - 1) neu = i; });
    if (y >= maxY - 2) neu = marken.length - 1;
    if (neu === aktiv) return;
    aktiv = neu;
    kapLinks.forEach((a, i) => { if (i === neu) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); a.parentElement.classList.toggle('vorbei', i < neu); });
    if (neu >= 0) { const [l, s, r] = geo.spitzen[neu]; gipfelPfad.setAttribute('d', `M${l[0].toFixed(1)} ${l[1]} L${s[0].toFixed(1)} ${s[1]} L${r[0].toFixed(1)} ${r[1]} Z`); }
    else gipfelPfad.removeAttribute('d');
    if (kapitelName) kapitelName.textContent = neu >= 0 ? kapLinks[neu].textContent : 'Inhalt';
  }

  // Kapitelliste am Handy
  const listeZu = fokus => { if (!grat.classList.contains('offen')) return; grat.classList.remove('offen'); kapitelKnopf.setAttribute('aria-expanded', 'false'); if (fokus) kapitelKnopf.focus(); };
  if (kapitelKnopf && grat) {
    kapitelKnopf.addEventListener('click', () => { const auf = !grat.classList.contains('offen'); grat.classList.toggle('offen', auf); kapitelKnopf.setAttribute('aria-expanded', String(auf)); if (auf) (grat.querySelector('[aria-current]') || grat.querySelector('a')).focus({ preventScroll: true }); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && grat.classList.contains('offen')) listeZu(true); });
    document.addEventListener('click', e => { if (grat.classList.contains('offen') && !e.target.closest('#grat, #a-kapitel')) listeZu(false); });
    grat.addEventListener('focusout', e => { if (schmalMQ.matches && e.relatedTarget && !e.relatedTarget.closest('#grat, #a-kapitel')) listeZu(false); });
  }

  // Sprünge im Dokument: Kapitel, Reiter und die Links aus den Fenstern (z. B. „Mehr für Firmen“)
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a || a.hasAttribute('data-gabriel') || a.hasAttribute('data-a-frei')) return;
    const id = a.getAttribute('href').slice(1);
    if (grat && grat.contains(a)) listeZu(false);
    if (felder.some(f => f && f.id === id)) { e.preventDefault(); zumReiter(id); history.replaceState(null, '', '#' + id); setTimeout(() => reiter[aktivReiter].focus({ preventScroll: true }), 30); return; }
    const ziel = id && $(id);
    if (ziel && ziel.closest('main')) { e.preventDefault(); springe(ziel); history.replaceState(null, '', '#' + id); }
  });
  if (location.hash && felder.some(f => f && f.id === location.hash.slice(1))) setTimeout(() => zumReiter(location.hash.slice(1), 'instant'), 60);

  // ---------- Takt ----------
  let geplant = false;
  addEventListener('scroll', () => { if (geplant) return; geplant = true; requestAnimationFrame(() => { geplant = false; wocheBewegen(); zeichneGrat(); }); }, { passive: true });
  const neuMessen = () => { messeWoche(); setzeGipfel(); baueGrat(); };
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(neuMessen, 120); });
  [schmalMQ, ruhigMQ].forEach(q => q.addEventListener('change', neuMessen));
  neuMessen();
  if (document.fonts) document.fonts.ready.then(neuMessen);
  addEventListener('load', neuMessen);
})();
