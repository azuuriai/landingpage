"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { ContactFormCopy } from "../content/types";
import { CONTACT_EMAIL } from "../site";
import { ICON_UP, PRIMARY_BUTTON, QUIET_LINK } from "./button-styles";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm({
  copy: t,
  privacyLabel,
}: {
  copy: ContactFormCopy;
  privacyLabel: string;
}) {
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

    // Honeypot: bots fill this hidden field. Pretend success, send nothing.
    if (honeypot) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    const subject = `${t.subject} – ${name}`;
    // The language line tells which version of the site the message came
    // from, so the reply can match it.
    const body = [
      `Name:     ${name}`,
      `E-Mail:   ${email}`,
      `Sprache:  ${t.languageName}`,
      "",
      message,
    ].join("\n");

    try {
      // Web3Forms' free tier only accepts browser-side submissions, so the
      // request goes straight from here (allowlisted in the CSP).
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
      {/* Honeypot – visually hidden, skipped by keyboard and screen readers. */}
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
          className={PRIMARY_BUTTON}
        >
          {status === "sending" ? t.sending : t.submit}
          {status === "sending" ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-[#0b1f1d]/30 border-t-[#0b1f1d]" />
          ) : (
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          )}
        </button>
        <p className="max-w-[46ch] text-[12px] leading-5 text-[#5f5f56]">
          {t.note}{" "}
          <Link href="/datenschutz" className={QUIET_LINK}>
            {privacyLabel}
          </Link>
        </p>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-[13px] leading-6 text-[#893d31]">
          {t.errorBody}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`${QUIET_LINK} font-medium`}
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : (
        <p className="mt-4 text-[12.5px] leading-5 text-[#5f5f56]">
          {t.fallbackPrefix}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={QUIET_LINK}
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      )}
    </form>
  );
}
