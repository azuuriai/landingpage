import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl lg:mb-14">
          {eyebrow && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.02em] text-bone sm:text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-bone/75">
      {children}
    </span>
  );
}
