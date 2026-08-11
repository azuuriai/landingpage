"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const CONTACT_EMAIL = "hello@lukaskaffer.com";

type Language = "en" | "de";
type FormStatus = "idle" | "sending" | "sent" | "error";

const FORM_COPY: Record<
  Language,
  {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    note: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
    fallbackPrefix: string;
    fallbackLink: string;
  }
> = {
  de: {
    name: "Name",
    namePlaceholder: "Wie heißt du?",
    email: "E-Mail",
    emailPlaceholder: "name@beispiel.com",
    message: "Deine Idee",
    messagePlaceholder:
      "In zwei, drei Sätzen: Was willst du launchen, für wen, und wo hakt es gerade?",
    submit: "Idee schicken",
    sending: "Wird gesendet ...",
    note: "Das Formular wird technisch über Web3Forms übermittelt.",
    successTitle: "Angekommen - danke!",
    successBody:
      "Ich habe deine Nachricht erhalten und melde mich persönlich zurück.",
    errorBody: "Hat gerade nicht geklappt. Schreib mir gern direkt:",
    fallbackPrefix: "Lieber direkt mailen?",
    fallbackLink: CONTACT_EMAIL,
  },
  en: {
    name: "Name",
    namePlaceholder: "What's your name?",
    email: "Email",
    emailPlaceholder: "name@example.com",
    message: "Your idea",
    messagePlaceholder:
      "In two or three sentences: what you want to launch, who it is for and where it is stuck.",
    submit: "Send idea",
    sending: "Sending ...",
    note: "This form is technically processed through Web3Forms.",
    successTitle: "Got it - thank you!",
    successBody:
      "I received your message and will reply personally.",
    errorBody: "That didn't go through. Feel free to email me directly:",
    fallbackPrefix: "Rather email directly?",
    fallbackLink: CONTACT_EMAIL,
  },
};

export function ContactForm({ language = "de" }: { language?: Language }) {
  const t = FORM_COPY[language];
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const honeypot = String(fd.get("company") ?? "").trim();

    if (honeypot) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    const subject = `Neue Anfrage über lukaskaffer.com - ${name}`;
    const body = [
      `Name:    ${name}`,
      `E-Mail:  ${email}`,
      `Sprache: ${language}`,
      "",
      message,
    ].join("\n");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: "lukaskaffer.com",
          replyto: email,
          name,
          email,
          message: body,
          botcheck: false,
        }),
      });
      const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !json?.success) throw new Error("web3forms");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[8px] border border-[#cdeae6] bg-[#eef9f7] p-6 sm:p-7"
      >
        <span className="accent-pulse inline-block h-2 w-2 rounded-full bg-[#00b8ad]" />
        <p className="mt-3 font-display text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181811]">
          {t.successTitle}
        </p>
        <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.6] text-[#5c6b68]">
          {t.successBody}
        </p>
      </div>
    );
  }

  const labelClass =
    "font-mono text-[11px] uppercase tracking-[0.16em] text-[#5f5f56]";
  const fieldClass =
    "mt-2 w-full rounded-[8px] border border-[#d5d5cf] bg-white/70 px-3.5 py-2.5 text-[14px] leading-6 text-[#181811] outline-none transition placeholder:text-[#6c6c61] focus:border-[#006f68] focus:bg-white focus:ring-2 focus:ring-[#006f68]/25";

  return (
    <form onSubmit={handleSubmit}>
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{t.name}</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{t.email}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>{t.message}</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-[#181811] pl-5 pr-4 text-[13px] font-medium text-[#f2f2f0] transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
        >
          {status === "sending" ? t.sending : t.submit}
          {status === "sending" ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-[#f2f2f0]/40 border-t-[#f2f2f0]" />
          ) : (
            <ArrowUpRight
              size={15}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </button>
        <p className="max-w-[46ch] text-[12px] leading-5 text-[#5f5f56]">
          {t.note}{" "}
          <a href="/datenschutz" className="underline underline-offset-2 transition hover:text-[#181811]">
            Datenschutz
          </a>
        </p>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-[13px] leading-6 text-[#893d31]">
          {t.errorBody}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium underline decoration-[#d6b3ab] underline-offset-2 hover:text-[#181811]"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : (
        <p className="mt-4 text-[12.5px] leading-5 text-[#5f5f56]">
          {t.fallbackPrefix}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-[#d8d8d2] underline-offset-2 transition hover:text-[#181811]"
          >
            {t.fallbackLink}
          </a>
        </p>
      )}
    </form>
  );
}
