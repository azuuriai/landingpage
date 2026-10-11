"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { dayNames, days, everdancePlaces, groupLabels, happenings, team, week, type Group, type Slot } from "./data";
import { StepBoard } from "./stepboard";
import { ActionLink, DISPLAY, Heading, ORANGE, ORANGE_LARGE, Page, Ring, Section } from "./ui";

// Homepage draft for Dance it, second version. Order follows what a
// visitor asks: what is this, when can I come, is it for me, what else.
export function DanceItHome({ base }: { base: string }) {
  return (
    <Page base={base}>
      <Hero base={base} />
      <Week base={base} />
      <Attitude />
      <Everdance />
      <Happenings />
      <Room />
      <Team />
    </Page>
  );
}

function Hero({ base }: { base: string }) {
  return (
    <section className="mx-auto max-w-[1320px] px-5 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-[76px] font-extrabold uppercase leading-[0.86] tracking-[-0.005em] md:text-[124px]" style={DISPLAY}>
            {/* Coloured like the logo: the word in orange, "it" in grey. */}
            <span className="block">
              <span style={{ color: ORANGE_LARGE }}>See</span> <span className="text-[#8c8783]">it!</span>
            </span>
            <span className="block">
              <span style={{ color: ORANGE_LARGE }}>Dance</span> <span className="text-[#8c8783]">it!</span>
            </span>
          </h1>
          <p className="mt-7 max-w-[34ch] text-[18px] leading-[1.55] text-[#3b3936] md:text-[21px]">
            Tanzschule am Rigiplatz in Zürich, seit 2009. Paartanz, Hip-Hop, Kinderkurse und Everdance®, für jedes Alter und ohne Vorkenntnisse.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <ActionLink href={`${base}#woche`}>Kurs finden</ActionLink>
            <ActionLink href={`${base}/kurse/paartanz`} variant="quiet">
              Paartanz für Einsteiger
            </ActionLink>
          </div>
        </div>
        <StepBoard />
      </div>

      <ul className="mt-12 grid overflow-hidden rounded-[16px] border border-[#1e1d1c]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["2009", "gegründet von Monika Stirnimann"],
          ["108 m²", "heller Saal, dazu ein kleiner"],
          ["4,7", "Sterne bei 46 Google-Bewertungen"],
          ["EN", "viele Kurse auch auf Englisch"],
        ].map(([value, text]) => (
          <li key={value} className="flex items-baseline gap-3 border-b border-[#1e1d1c]/[0.08] px-6 py-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
            <span className="whitespace-nowrap text-[36px] font-extrabold leading-none" style={DISPLAY}>
              {value}
            </span>
            <span className="text-[15px] leading-5 text-[#5d5955]">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ---------------------------------------------------------------- week

const groupTone: Record<Group, { bg: string; bar: string }> = {
  paare: { bg: "#fff1ea", bar: "#ff5a14" },
  jugend: { bg: "#e9eef4", bar: "#5b7288" },
  sechzig: { bg: "#e9f0e7", bar: "#5e7d5a" },
  fitness: { bg: "#f3eee4", bar: "#9a7b4f" },
};

// The timetable leaves out the quiet midday (12 to 15 h, no courses), so
// the evenings, where most classes are, get the room.
const DAY_START = 9 * 60;
const BREAK_FROM = 12 * 60;
const BREAK_TO = 15 * 60;
const DAY_END = 23 * 60;
const PX_PER_MIN = 0.9;
const BREAK_GAP = 28;
const GRID_HEIGHT = (BREAK_FROM - DAY_START + DAY_END - BREAK_TO) * PX_PER_MIN + BREAK_GAP;
const HOURS = [9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23];

function y(minute: number) {
  return minute <= BREAK_FROM
    ? (minute - DAY_START) * PX_PER_MIN
    : (BREAK_FROM - DAY_START) * PX_PER_MIN + BREAK_GAP + (minute - BREAK_TO) * PX_PER_MIN;
}

function minutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

// Courses that overlap on a day share the column side by side.
function lanes(slots: Slot[]) {
  const sorted = [...slots].sort((a, b) => minutes(a.time) - minutes(b.time));
  const laneEnds: number[] = [];
  const placed = sorted.map((slot) => {
    let lane = laneEnds.findIndex((end) => end <= minutes(slot.time));
    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(0);
    }
    laneEnds[lane] = minutes(slot.end);
    return { slot, lane };
  });
  return placed.map((item) => ({
    ...item,
    count: placed.filter(
      (other) => minutes(other.slot.time) < minutes(item.slot.end) && minutes(other.slot.end) > minutes(item.slot.time),
    ).length,
  }));
}

function Week({ base }: { base: string }) {
  const [group, setGroup] = useState<Group | "alle">("alle");
  const [mobileDay, setMobileDay] = useState<Slot["day"]>("Mo");
  const filters: [Group | "alle", string][] = [["alle", "Alle Kurse"], ...(Object.entries(groupLabels) as [Group, string][])];

  return (
    <Section id="woche" className="bg-white">
      <Heading>Ihre Woche bei Dance it.</Heading>
      <p className="mt-5 max-w-[56ch] text-[17px] leading-7 text-[#5d5955]">
        Ein Auszug aus dem Herbstprogramm. Neue Kurse starten laufend, der Einstieg geht ohne Vorkenntnisse.
      </p>

      <LayoutGroup id="week-filter">
        <div role="tablist" aria-label="Kurse nach Gruppe" className="-mx-5 mt-8 flex gap-1 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
          {filters.map(([id, label]) => {
            const active = id === group;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setGroup(id)}
                className="relative shrink-0 rounded-full px-4 py-2.5 text-[15px] font-semibold"
              >
                {active ? (
                  <motion.span layoutId="group-pill" className="absolute inset-0 rounded-full bg-[#1e1d1c]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                ) : null}
                <span className={`relative flex items-center gap-2 ${active ? "text-white" : "text-[#1e1d1c]/70 hover:text-[#1e1d1c]"}`}>
                  {id !== "alle" ? <span aria-hidden="true" className="h-3 w-1 rounded-full" style={{ background: groupTone[id].bar }} /> : null}
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Desktop: a real timetable, courses placed by time and length. */}
      <div id="stundenplan" className="mt-8 hidden scroll-mt-[88px] rounded-[16px] border border-[#1e1d1c]/10 bg-[#fafaf8] p-4 md:block">
        <div className="grid grid-cols-[52px_repeat(6,minmax(0,1fr))] gap-x-2">
          <span />
          {days.map((day) => (
            <p key={day} className="pb-3 text-[15px] font-semibold">
              {dayNames[day]}
            </p>
          ))}
          <div className="relative" style={{ height: GRID_HEIGHT }}>
            {HOURS.map((hour) => (
              <span
                key={hour}
                className="absolute right-2 -translate-y-1/2 text-[12px] tabular-nums text-[#8c8783]"
                style={{ top: y(hour * 60) }}
              >
                {String(hour).padStart(2, "0")}:00
              </span>
            ))}
          </div>
          {days.map((day) => (
            <div key={day} className="relative rounded-[10px] bg-white" style={{ height: GRID_HEIGHT }}>
              {HOURS.map((hour) => (
                <span
                  key={hour}
                  aria-hidden="true"
                  className="absolute inset-x-0 border-t border-[#1e1d1c]/[0.06]"
                  style={{ top: y(hour * 60) }}
                />
              ))}
              {/* The skipped midday, shown as a soft band. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bg-[repeating-linear-gradient(135deg,rgba(30,29,28,0.05)_0_2px,transparent_2px_8px)]"
                style={{ top: y(BREAK_FROM), height: BREAK_GAP }}
              />
              {lanes(week.filter((slot) => slot.day === day)).map(({ slot, lane, count }) => (
                <SlotBlock key={`${slot.time}-${slot.title}`} slot={slot} base={base} dim={group !== "alle" && slot.group !== group} lane={lane} count={count} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Phone: pick a day, see its courses as a list. */}
      <div className="mt-6 md:hidden">
        <div className="grid grid-cols-6 gap-1 rounded-full bg-[#f1f1ef] p-1">
          {days.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setMobileDay(day)}
              aria-pressed={mobileDay === day}
              className={`rounded-full py-2 text-[15px] font-semibold ${mobileDay === day ? "bg-[#1e1d1c] text-white" : "text-[#1e1d1c]/70"}`}
            >
              {day}
            </button>
          ))}
        </div>
        <ul className="mt-4 grid gap-2.5">
          {week
            .filter((slot) => slot.day === mobileDay && (group === "alle" || slot.group === group))
            .map((slot) => (
              <li key={`${slot.time}-${slot.title}`}>
                <SlotRow slot={slot} base={base} />
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
}

function SlotBlock({ slot, base, dim, lane, count }: { slot: Slot; base: string; dim: boolean; lane: number; count: number }) {
  const tone = groupTone[slot.group];
  const top = y(minutes(slot.time));
  const height = Math.max(y(minutes(slot.end)) - top - 3, 64);
  const style = {
    top,
    height,
    left: `calc(${(lane / count) * 100}% + 3px)`,
    width: `calc(${100 / count}% - 6px)`,
    background: tone.bg,
    opacity: dim ? 0.22 : 1,
  };
  const body = (
    <>
      <span className="absolute inset-y-1.5 left-1.5 w-[3px] rounded-full" style={{ background: tone.bar }} />
      <span className="block text-[11.5px] font-semibold tabular-nums text-[#5d5955]">
        {count > 1 ? slot.time : `${slot.time}–${slot.end}`}
      </span>
      <span className="line-clamp-2 block text-[13.5px] font-semibold leading-tight">{slot.title}</span>
      {height > 70 ? <span className="mt-0.5 block text-[12px] text-[#5d5955]">{slot.teacher}</span> : null}
    </>
  );
  const className = "di-card absolute overflow-hidden rounded-[8px] border border-transparent py-1.5 pl-4 pr-2 transition-opacity";
  return slot.href ? (
    <Link href={slotHref(slot, base)} className={className} style={style} aria-label={`${slot.title}, ${dayNames[slot.day]} ${slot.time}: Termine und Anmeldung`}>
      {body}
      <ArrowUpRight size={14} aria-hidden="true" className="absolute right-1.5 top-1.5 text-[#1e1d1c]/60" />
    </Link>
  ) : (
    <div className={className} style={style}>
      {body}
    </div>
  );
}

// The course page opens with the clicked date selected.
function slotHref(slot: Slot, base: string) {
  return `${base}/${slot.href}${slot.date ? `?termin=${slot.date}` : ""}`;
}

function SlotRow({ slot, base }: { slot: Slot; base: string }) {
  const tone = groupTone[slot.group];
  const inner = (
    <span className="flex items-center gap-4 rounded-[12px] px-4 py-3.5" style={{ background: tone.bg }}>
      <span className="w-[52px] shrink-0 text-[15px] font-semibold tabular-nums">{slot.time}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] font-semibold leading-snug">{slot.title}</span>
        <span className="block text-[13px] text-[#5d5955]">
          bis {slot.end}, {slot.teacher}
          {slot.english ? ", auch Englisch" : ""}
        </span>
      </span>
      {slot.href ? <ArrowUpRight size={18} aria-hidden="true" /> : null}
    </span>
  );
  return slot.href ? (
    <Link href={slotHref(slot, base)} className="di-card block rounded-[12px] border border-transparent">
      {inner}
    </Link>
  ) : (
    inner
  );
}

// ---------------------------------------------------------------- attitude

function Attitude() {
  return (
    <Section id="haltung">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="text-[56px] font-extrabold uppercase leading-[0.88] md:text-[104px]" style={DISPLAY}>
            Foxtrott,
            <br />
            <span className="text-[#8c8783]">nicht Slowfox.</span>
          </p>
          <p className="mt-8 max-w-[46ch] text-[18px] leading-8 text-[#3b3936]">
            Bei uns lernen Sie Gesellschaftstanz, der auf jedem Fest funktioniert, und keine Turniertechnik. Die kommt erst in den Clubs, wenn Sie möchten.
          </p>
        </div>
        <figure className="self-end rounded-[16px] border border-[#1e1d1c]/10 bg-white p-7 md:p-9">
          <blockquote className="text-[22px] font-medium leading-snug md:text-[26px]">
            „Jeder kann ein guter Tänzer werden. Es entscheiden nicht die linken Füsse, sondern die Liebe zur Musik.“
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-4">
            <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full bg-[#1e1d1c] text-[18px] font-bold text-white" style={DISPLAY}>
              MS
            </span>
            <span className="text-[15px] leading-5">
              <span className="block font-semibold">Monika Stirnimann</span>
              <span className="text-[#5d5955]">Inhaberin, diplomierte Tanzlehrerin swissdance</span>
            </span>
          </figcaption>
          <div className="mt-7 flex items-center gap-3 border-t border-[#1e1d1c]/10 pt-6">
            <span className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={17} fill={ORANGE} stroke={ORANGE} />
              ))}
            </span>
            <span className="text-[15px] text-[#3b3936]">
              <span className="font-semibold">4,7 von 5</span> bei 46 Google-Bewertungen. Oft genannt: kleine Gruppen, viel Geduld und Humor.
            </span>
          </div>
        </figure>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- everdance

function Everdance() {
  return (
    <Section id="everdance" className="bg-[#1e1d1c] text-white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-[15px] font-semibold text-[#8c8783]">Tanzen ohne Partner, ab 60</p>
          <h2 className="mt-3 text-[56px] font-extrabold leading-[0.9] md:text-[88px]" style={{ ...DISPLAY, color: ORANGE }}>
            Everdance®
          </h2>
          <p className="mt-6 max-w-[44ch] text-[17px] leading-7 text-white/75">
            Entwickelt von Pro Senectute Kanton Zürich: einfache Schrittfolgen aus Cha Cha Cha, Samba und Walzer, gut für Kopf, Kreislauf und Gleichgewicht. Monika Stirnimann bildet Everdance-Lehrerinnen und -Lehrer aus.
          </p>
        </div>
        <div className="grid content-center gap-10">
          <div>
            <p className="text-[14px] font-semibold text-white/55">Kurse an fünf Orten</p>
            <ol className="relative mt-6 flex justify-between">
              <span aria-hidden="true" className="absolute inset-x-2 top-[7px] h-px bg-white/25" />
              {everdancePlaces.map((place, i) => (
                <li key={place} className="relative flex flex-col items-center gap-3 text-center">
                  <span aria-hidden="true" className={`h-[15px] w-[15px] rounded-full border-2 ${i === 0 ? "border-[#ff5a14] bg-[#ff5a14]" : "border-white/60 bg-[#1e1d1c]"}`} />
                  <span className={`text-[14px] md:text-[15px] ${i === 0 ? "font-semibold text-white" : "text-white/75"}`}>{place}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[16px] border border-white/15 p-5">
              <p className="text-[14px] font-semibold text-white/55">Im Fernsehen</p>
              <p className="mt-1.5 text-[16px] leading-6">SRF gesundheitheute, „Alt werden – aber wie?“, 25. Januar 2020</p>
            </div>
            <div className="rounded-[16px] border border-white/15 p-5">
              <p className="text-[14px] font-semibold text-white/55">Everdance-Wochenende, 3.–5. Oktober</p>
              <p className="mt-1.5 text-[16px] leading-6">Seminarhotel Lihn am Walensee. Ausgebucht, Warteliste möglich.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- happenings

function Happenings() {
  return (
    <Section id="anlaesse">
      <Heading>Nach dem Kurs weitertanzen.</Heading>
      <p className="mt-5 max-w-[52ch] text-[17px] leading-7 text-[#5d5955]">
        Üben, was Sie gelernt haben: an den Tanzabenden am Samstag und beim Tanz-Tee am Sonntagnachmittag.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <li className="di-card rounded-[16px] border border-[#1e1d1c]/10 bg-[#1e1d1c] p-6 text-white">
          <p className="text-[15px] font-semibold text-white/60">Samstags</p>
          <p className="mt-2 text-[44px] font-extrabold leading-none" style={{ ...DISPLAY, color: ORANGE }}>
            20–23 Uhr
          </p>
          <p className="mt-4 text-[20px] font-semibold">Tanzabend</p>
          <p className="mt-1 text-[15px] leading-6 text-white/70">An den ausgeschriebenen Daten, CHF 10, mit Legi CHF 8.</p>
        </li>
        {happenings.map((item) => (
          <li key={`${item.date}-${item.month}`} className="group di-card rounded-[16px] border border-[#1e1d1c]/10 bg-white p-6">
            <p className="flex items-baseline gap-2" style={DISPLAY}>
              <span className="text-[64px] font-extrabold leading-none transition-colors duration-300 group-hover:text-[#ff5a14]">{item.date}</span>
              <span className="text-[24px] font-bold uppercase text-[#8c8783]">{item.month}</span>
            </p>
            <p className="mt-4 text-[20px] font-semibold">{item.title}</p>
            <p className="mt-1 text-[15px] leading-6 text-[#5d5955]">{item.text}</p>
            {item.note ? <p className="mt-3 text-[14px] font-semibold">{item.note}</p> : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}

// ---------------------------------------------------------------- room

// A plan of the large hall, drawn from the school's own description:
// window front, two sofas, sound system, light floor. No dimensions,
// because none are published beyond the 108 m².
function HallPlan() {
  return (
    <svg viewBox="0 0 520 360" className="w-full" role="img" aria-label="Grundriss des grossen Tanzsaals, schematisch">
      <defs>
        <pattern id="hall-planks" width="520" height="18" patternUnits="userSpaceOnUse">
          <line x1="0" y1="17.5" x2="520" y2="17.5" stroke="#1e1d1c" strokeOpacity="0.07" />
          <line x1="140" y1="0" x2="140" y2="17.5" stroke="#1e1d1c" strokeOpacity="0.05" />
          <line x1="360" y1="0" x2="360" y2="17.5" stroke="#1e1d1c" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect x="20" y="20" width="480" height="320" rx="6" fill="#fafaf8" />
      <rect x="20" y="20" width="480" height="320" rx="6" fill="url(#hall-planks)" stroke="#1e1d1c" strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={46 + i * 76} y="14" width="62" height="12" rx="2" fill="#dfe6ea" stroke="#1e1d1c" strokeWidth="2" />
      ))}
      <rect x="40" y="250" width="92" height="36" rx="10" fill="#1e1d1c" />
      <rect x="40" y="296" width="92" height="28" rx="10" fill="#1e1d1c" opacity="0.85" />
      <rect x="440" y="262" width="40" height="58" rx="6" fill="#ffffff" stroke="#1e1d1c" strokeWidth="2" />
      <circle cx="460" cy="282" r="7" fill="none" stroke="#1e1d1c" strokeWidth="2" />
      <circle cx="460" cy="306" r="4" fill="#1e1d1c" />
      <path d="M232 340 A 44 44 0 0 1 276 296" fill="none" stroke="#8c8783" strokeWidth="2" strokeDasharray="4 5" />
      <line x1="232" y1="340" x2="276" y2="340" stroke="#f1f1ef" strokeWidth="5" />
      <text x="260" y="176" textAnchor="middle" fill="#1e1d1c" style={{ ...DISPLAY, fontSize: 64, fontWeight: 800 }}>
        108 m²
      </text>
      <text x="260" y="206" textAnchor="middle" fill="#8c8783" style={{ fontSize: 15, fontWeight: 500 }}>
        heller Boden, viel Tageslicht
      </text>
      <text x="86" y="244" textAnchor="middle" fill="#5d5955" style={{ fontSize: 12, fontWeight: 600 }}>
        Sofas
      </text>
      <text x="460" y="254" textAnchor="middle" fill="#5d5955" style={{ fontSize: 12, fontWeight: 600 }}>
        Musik
      </text>
      <text x="260" y="48" textAnchor="middle" fill="#5d5955" style={{ fontSize: 12, fontWeight: 600 }}>
        Fensterfront
      </text>
    </svg>
  );
}

function Room() {
  return (
    <Section id="saal" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <HallPlan />
        <div>
          <Heading>Unseren Saal mieten.</Heading>
          <p className="mt-5 max-w-[44ch] text-[17px] leading-7 text-[#3b3936]">
            Für Yoga, Fitness, Tanzunterricht, eine Probe oder Ihren Apéro. Mit Garderobe und Profi-Musikanlage, stundenweise, tageweise oder dauerhaft.
          </p>
          <p className="mt-8 text-[14px] font-semibold text-[#5d5955]">Frei zu diesen Zeiten</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {["Mo–Fr bis 18 Uhr", "Mittwoch ab 21 Uhr", "Samstag ganztags", "Sonntag ganztags"].map((time) => (
              <li key={time} className="rounded-full border border-[#1e1d1c]/15 px-4 py-2 text-[15px] font-medium">
                {time}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <a href="mailto:info@dance-it.ch?subject=Saalmiete" className="di-btn">
              <Ring />
              Saal anfragen
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------- team

function Team() {
  return (
    <Section id="team">
      <Heading>Wer bei uns unterrichtet.</Heading>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((person) => (
          <li key={person.name} className="di-card flex items-center gap-5 rounded-[16px] border border-[#1e1d1c]/10 bg-white p-5">
            <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#f1f1ef] text-[22px] font-extrabold" style={DISPLAY}>
              {person.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </span>
            <span className="min-w-0">
              <span className="block text-[18px] font-semibold leading-tight">{person.name}</span>
              <span className="mt-1 block text-[14px] text-[#5d5955]">{person.role}</span>
              <span className="mt-1 block text-[13px] font-semibold text-[#c2410c]">{person.since}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
