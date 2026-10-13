"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { course1 } from "./data";
import { StepBoard } from "./stepboard";
import { DISPLAY, Heading, Page, Ring } from "./ui";

// Course page with booking at the date: pick a date, say who comes, see
// the price, send. Nothing is sent in the draft; the last step says so.
// ?termin=mi (from the week plan) preselects that date. useSearchParams needs
// a Suspense boundary on a static page; the fallback starts with the first.
export function DanceItKurs({ base }: { base: string }) {
  return (
    <Suspense fallback={<Kurs base={base} />}>
      <KursFromUrl base={base} />
    </Suspense>
  );
}

function KursFromUrl({ base }: { base: string }) {
  const termin = useSearchParams().get("termin");
  const date = course1.dates.find((item) => item.id === termin);
  return <Kurs key={date?.id} base={base} initialDate={date?.id} />;
}

function Kurs({ base, initialDate = course1.dates[0].id }: { base: string; initialDate?: string }) {
  const [dateId, setDateId] = useState(initialDate);
  const [who, setWho] = useState<"person" | "couple">("couple");
  const [legi, setLegi] = useState(false);
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);
  const [name, setName] = useState("");
  const [partner, setPartner] = useState("");
  const [email, setEmail] = useState("");
  const errors = {
    name: name.trim() ? "" : "Bitte Vorname und Name eintragen.",
    partner: who === "couple" && !partner.trim() ? "Bitte den Namen Ihres Tanzpartners eintragen." : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ? "" : "Bitte eine gültige E-Mail-Adresse eintragen.",
  };
  const valid = !errors.name && !errors.partner && !errors.email;
  const date = course1.dates.find((item) => item.id === dateId) ?? course1.dates[0];
  const price = who === "couple" ? course1.prices.couple : legi ? course1.prices.legi : course1.prices.person;

  return (
    <Page base={base}>
      <section className="mx-auto max-w-[1320px] px-5 pb-14 pt-8 md:px-10 md:pb-20 md:pt-12">
        <Link href={`${base}#woche`} className="di-link inline-flex items-center gap-2 text-[15px] font-semibold">
          <ArrowLeft size={16} aria-hidden="true" />
          Wochenplan
        </Link>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h1 className="text-[64px] font-extrabold uppercase leading-[0.86] md:text-[108px]" style={DISPLAY}>
              Paartanz
              <br />
              <span className="text-[#8c8783]">Kurs 1</span>
            </h1>
            <p className="mt-6 max-w-[40ch] text-[18px] leading-[1.55] text-[#3b3936] md:text-[20px]">{course1.lead}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {course1.dances.map((dance) => (
                <li key={dance} className="rounded-full border border-[#1e1d1c]/15 bg-white px-4 py-2 text-[14px] font-semibold">
                  {dance}
                </li>
              ))}
            </ul>
          </div>
          <StepBoard />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-[1fr_460px]">
          <div>
            <Heading>Termin wählen.</Heading>
            <p className="mt-4 text-[16px] text-[#5d5955]">
              {course1.format}. Beginn der nächsten Kurse, im Entwurf als Beispieldaten.
            </p>
            <LayoutGroup id="dates">
              <ul className="mt-8 grid gap-3" role="radiogroup" aria-label="Kurstermin">
                {course1.dates.map((item) => {
                  const active = item.id === dateId;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => {
                          setDateId(item.id);
                          setSent(false);
                        }}
                        className={`di-card relative grid w-full grid-cols-[76px_1fr_auto] items-center gap-4 overflow-hidden rounded-[16px] border px-5 py-5 text-left ${
                          active ? "border-[#1e1d1c]" : "border-[#1e1d1c]/12 bg-[color:var(--di-floor)]"
                        }`}
                      >
                        {active ? (
                          <motion.span layoutId="date-active" className="absolute inset-0 bg-[#1e1d1c]" transition={{ type: "spring", stiffness: 380, damping: 34 }} />
                        ) : null}
                        <span className="relative text-[46px] font-extrabold leading-none text-[#ff5a14]" style={DISPLAY}>
                          {item.day.slice(0, 2)}
                        </span>
                        <span className={`relative ${active ? "text-white" : ""}`}>
                          <span className="block text-[18px] font-semibold">{item.time}</span>
                          <span className={`block text-[14px] ${active ? "text-white/75" : "text-[#5d5955]"}`}>ab {item.start}</span>
                          <span className={`block text-[14px] ${active ? "text-white/75" : "text-[#5d5955]"}`}>
                            {item.teacher}
                            {item.english ? ", auch auf Englisch" : ""}
                          </span>
                        </span>
                        <span
                          className={`relative grid h-8 w-8 place-items-center rounded-full border-2 ${
                            active ? "border-[#ff5a14] bg-[#ff5a14] text-[#1e1d1c]" : "border-[#1e1d1c]/20"
                          }`}
                        >
                          {active ? <Check size={16} aria-hidden="true" strokeWidth={3} /> : null}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </LayoutGroup>

            <h2 className="mt-16 text-[28px] font-semibold tracking-[-0.01em] md:text-[34px]">Ihr Weg danach</h2>
            <ol className="mt-6 grid gap-3 md:grid-cols-5">
              {course1.levels.map((level, index) => (
                <li key={level} className={`rounded-[14px] border p-4 ${index === 0 ? "border-[#ff5a14] bg-[#fff1ea]" : "border-[#1e1d1c]/10 bg-[color:var(--di-floor)]"}`}>
                  <span className="block text-[22px] font-bold leading-none" style={DISPLAY}>
                    {level}
                  </span>
                  <span className="mt-2 block text-[14px] text-[#5d5955]">{course1.levelNotes[index]}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-[60ch] text-[15px] leading-6 text-[#5d5955]">
              Verpasste Abende holen Sie in einem Parallelkurs nach. Einen Kurs wiederholen Sie innert eines Jahres zum halben Preis.
            </p>
          </div>

          <aside
            id="anmelden"
            className="scroll-mt-[72px] self-start rounded-[20px] border border-[#1e1d1c]/10 bg-[color:var(--di-band)] p-6 lg:sticky lg:top-[96px] md:p-8"
            aria-label="Anmeldung"
          >
            <h2 className="text-[30px] font-semibold tracking-[-0.01em]">Anmelden</h2>
            <p className="mt-3 rounded-[12px] bg-white px-4 py-3 text-[15px]">
              <span className="font-semibold">
                {date.day}, {date.time}
              </span>
              <span className="block text-[#5d5955]">ab {date.start}</span>
            </p>

            <LayoutGroup id="who">
              <div className="mt-5 grid grid-cols-2 gap-1 rounded-full bg-white p-1" role="radiogroup" aria-label="Wer kommt">
                {(
                  [
                    ["couple", "Zu zweit"],
                    ["person", "Allein"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={who === id}
                    onClick={() => {
                      setWho(id);
                      setSent(false);
                    }}
                    className="relative h-11 rounded-full text-[15px] font-semibold"
                  >
                    {who === id ? (
                      <motion.span layoutId="who-pill" className="absolute inset-0 rounded-full bg-[#1e1d1c]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                    ) : null}
                    <span className={`relative ${who === id ? "text-white" : "text-[#1e1d1c]/70"}`}>{label}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
            {who === "person" ? (
              <label className="mt-4 flex items-center gap-2.5 text-[15px]">
                <input type="checkbox" checked={legi} onChange={(event) => setLegi(event.target.checked)} className="h-5 w-5 accent-[#1e1d1c]" />
                Ich habe eine Legi (Schüler, Lehrling, Student)
              </label>
            ) : null}

            <div className="mt-5 grid gap-4">
              <Field id="name" label="Vorname und Name" value={name} onChange={setName} error={tried ? errors.name : ""} autoComplete="name" />
              {who === "couple" ? (
                <Field id="partner" label="Name Ihres Tanzpartners" value={partner} onChange={setPartner} error={tried ? errors.partner : ""} />
              ) : null}
              <Field id="email" label="E-Mail" type="email" value={email} onChange={setEmail} error={tried ? errors.email : ""} autoComplete="email" />
            </div>

            <p className="mt-6 flex items-baseline justify-between border-t border-[#1e1d1c]/15 pt-5">
              <span className="text-[15px] font-semibold">{who === "couple" ? "Pro Paar" : "Pro Person"}</span>
              <motion.span key={price} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-[44px] font-extrabold leading-none" style={DISPLAY}>
                CHF {price}
              </motion.span>
            </p>
            <p className="mt-1.5 text-[14px] text-[#5d5955]">Bezahlt wird am ersten Abend. Abmeldung bis 14 Tage vorher kostenlos.</p>

            <button
              type="button"
              onClick={() => {
                setTried(true);
                setSent(valid);
              }}
              className="di-btn mt-6 w-full justify-center"
            >
              <Ring />
              Anmeldung senden
            </button>
            <p className="mt-4 text-center text-[14px] text-[#5d5955]">
              Lieber persönlich?{" "}
              <a href="tel:+41443646566" className="font-semibold text-[#1e1d1c]">
                044 364 65 66
              </a>{" "}
              oder WhatsApp <span className="font-semibold text-[#1e1d1c]">079 542 58 07</span>
            </p>
            {sent && valid ? (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex gap-3 rounded-[12px] bg-white px-4 py-3.5 text-[14px] leading-6"
              >
                <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#c2410c]" strokeWidth={3} />
                So sähe die Bestätigung aus: Sie erhalten gleich eine E-Mail mit allen Angaben. Im Entwurf wird nichts gesendet.
              </motion.p>
            ) : null}
          </aside>
        </div>
      </section>
    </Page>
  );
}

// Label above the input, error text below it, tied together for screen readers.
function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={`di-${id}`} className="text-[14px] font-semibold">
        {label}
      </label>
      <input
        id={`di-${id}`}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `di-${id}-error` : undefined}
        className={`h-12 rounded-[12px] border bg-white px-4 text-[16px] transition-colors hover:border-[#1e1d1c]/50 ${
          error ? "border-[#b42318]" : "border-[#1e1d1c]/20"
        }`}
      />
      {error ? (
        <p id={`di-${id}-error`} className="text-[13px] font-medium text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
