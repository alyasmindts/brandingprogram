import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Identity marks — drawn as real vector paths, legible at 16px        */
/* ------------------------------------------------------------------ */

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      role="img"
      aria-label="Monogram DN"
      className={className}
      fill="none"
    >
      <rect
        x="2.25"
        y="2.25"
        width="67.5"
        height="67.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* D */}
      <path
        d="M18 20.5 H31.5 C39 20.5 44 25.2 44 33.2 C44 41.2 39 45.8 31.5 45.8 H18 V20.5 Z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="miter"
      />
      {/* N */}
      <path
        d="M48.5 45.8 V20.5 L59.8 45.8 V20.5"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      {/* registration tick */}
      <path d="M18 52.5 H59.8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 56.4 H34" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function MonogramFull({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 132 72"
      role="img"
      aria-label="Monogram DNF"
      className={className}
      fill="none"
    >
      <rect
        x="2.25"
        y="2.25"
        width="127.5"
        height="67.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* D */}
      <path
        d="M16 20.5 H28 C35 20.5 39.6 25.2 39.6 33.2 C39.6 41.2 35 45.8 28 45.8 H16 V20.5 Z"
        stroke="currentColor"
        strokeWidth="3.2"
      />
      {/* N */}
      <path
        d="M43.4 45.8 V20.5 L53.7 45.8 V20.5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="square"
      />
      {/* F */}
      <path
        d="M58.5 45.8 V20.5 H72.5 M58.5 32.4 H69"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="square"
      />
      <path d="M80 24 H116 M80 33 H104 M80 42 H116" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Brand glyphs drawn as vectors (lucide no longer ships brand icons)  */
/* ------------------------------------------------------------------ */

export function InstagramMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.2 20.8 4.5 16.6A8.3 8.3 0 1 1 8.2 20.1l-5 .7Z" />
      <path d="M8.9 8.4c-.3 0-.7.1-.9.5-.3.4-.8 1-.8 2.2s.9 2.5 1 2.7c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4l-1.6-.8c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.5-.5c.1-.2.2-.3.2-.5s0-.4-.1-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.2Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Contact-sheet corner ticks                                         */
/* ------------------------------------------------------------------ */

export function CornerTicks({ color = "#0756B8" }: { color?: string }) {
  const corners = [
    "left-2 top-2 border-l-2 border-t-2",
    "right-2 top-2 border-r-2 border-t-2",
    "left-2 bottom-2 border-l-2 border-b-2",
    "right-2 bottom-2 border-r-2 border-b-2",
  ];
  return (
    <>
      {corners.map((cls) => (
        <span
          key={cls}
          aria-hidden="true"
          className={`pointer-events-none absolute h-4 w-4 ${cls}`}
          style={{ borderColor: color, opacity: 0.9 }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                      */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading with marginal frame counter                        */
/* ------------------------------------------------------------------ */

export function SectionHead({
  index,
  kicker,
  title,
  lead,
  tone = "light",
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <Reveal className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div
          className={`flex items-center gap-3 ${
            isDark ? "text-sky" : "text-primary"
          }`}
        >
          <span className="label tnum">{index}</span>
          <span
            className={`h-px w-10 ${isDark ? "bg-sky/50" : "bg-primary/35"}`}
            aria-hidden="true"
          />
          <span className="label">{kicker}</span>
        </div>
        <h2
          className={`mt-5 text-[clamp(2.1rem,5.4vw,3.9rem)] font-semibold leading-[1.02] tracking-[-0.035em] ${
            isDark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>
      {lead && (
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-9">
          <p
            className={`max-w-[46ch] text-[1.02rem] leading-[1.75] ${
              isDark ? "text-white/72" : "text-slate-blue"
            }`}
          >
            {lead}
          </p>
        </div>
      )}
    </Reveal>
  );
}
