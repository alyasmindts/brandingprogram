import { useState } from "react";
import { Mail, ArrowUpRight, Send, ArrowUp } from "lucide-react";
import {
  CAREER_GOALS,
  NAV_ITEMS,
  PROFILE,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "../data";
import {
  Reveal,
  SectionHead,
  MonogramFull,
  Monogram,
  InstagramMark,
  WhatsAppMark,
} from "./Marks";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/* ============================ CAREER GOALS ============================ */

export function CareerGoals() {
  return (
    <section id="goals" className="relative bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="05.1"
          kicker="Career Goals"
          title="Arah pengembangan."
          lead="Empat fokus yang sedang dan akan terus saya dalami sebagai bekal berkarier di industri media digital dan komunikasi kreatif."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-primary/20 sm:grid-cols-2 lg:grid-cols-4">
          {CAREER_GOALS.map((goal, i) => (
            <Reveal
              key={goal.name}
              delay={i * 0.08}
              className="group relative border-b border-primary/20 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <div className="h-full px-0 py-8 transition-colors duration-500 group-hover:bg-white sm:px-7">
                <div className="flex items-center gap-3">
                  <span className="label tnum text-primary">{goal.index}</span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-primary/18 transition-colors duration-500 group-hover:bg-primary/45"
                  />
                </div>
                <h3 className="mt-6 font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.025em] text-navy transition-colors duration-300 group-hover:text-primary">
                  {goal.name}
                </h3>
                <p className="mt-3 text-[0.93rem] leading-[1.75] text-slate-blue">{goal.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================== CONTACT ============================== */

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const composed = `Halo Dewi${name ? `, saya ${name}` : ""}! ${
    message || WHATSAPP_MESSAGE
  }`;

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/22 blur-[90px]"
      />
      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="06"
          kicker="Contact Me"
          title={
            <>
              Let's build
              <span className="block text-sky">something visual.</span>
            </>
          }
          lead="Terbuka untuk kolaborasi, proyek kreatif, diskusi seputar fotografi dan desain grafis, maupun sekadar bertukar ide."
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* channels */}
          <div className="lg:col-span-6">
            <ul>
              {[
                {
                  icon: InstagramMark,
                  label: "Instagram",
                  value: PROFILE.instagram,
                  href: PROFILE.instagramUrl,
                  external: true,
                },
                {
                  icon: WhatsAppMark,
                  label: "WhatsApp",
                  value: "Chat langsung via WhatsApp",
                  href: waLink(WHATSAPP_MESSAGE),
                  external: true,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: PROFILE.email,
                  href: `mailto:${PROFILE.email}`,
                  external: false,
                },
              ].map((ch, i) => (
                <Reveal as="li" key={ch.label} delay={i * 0.08}>
                  <a
                    href={ch.href}
                    {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 border-b border-white/15 py-6 transition-colors duration-300 hover:border-sky"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/22 text-sky transition-colors duration-300 group-hover:border-sky group-hover:bg-sky group-hover:text-navy">
                      <ch.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="label block text-white/55">{ch.label}</span>
                      <span className="mt-1 block truncate font-display text-[1.12rem] font-medium tracking-[-0.015em] text-white">
                        {ch.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/45 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* quick message composer */}
          <Reveal delay={0.14} className="lg:col-span-6">
            <div className="border border-white/18 bg-white/6 p-6 sm:p-8">
              <p className="label text-sky">Quick Message</p>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-white/72">
                Tulis pesan singkat, lalu kirim langsung ke kanal yang Anda pilih.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="label block text-white/60">
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-[0.95rem] text-white placeholder:text-white/35 transition-colors focus:border-sky focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-msg" className="label block text-white/60">
                    Pesan
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ceritakan proyek atau kolaborasi yang Anda bayangkan…"
                    className="mt-2 w-full resize-none border border-white/20 bg-transparent px-4 py-3 text-[0.95rem] leading-relaxed text-white placeholder:text-white/35 transition-colors focus:border-sky focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={waLink(composed)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 bg-sky px-6 py-3.5 text-[0.85rem] font-semibold text-navy transition-colors hover:bg-white"
                >
                  <Send className="h-4 w-4" />
                  Kirim via WhatsApp
                </a>
                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                    "Kolaborasi dari Website Portofolio"
                  )}&body=${encodeURIComponent(composed)}`}
                  className="group inline-flex items-center gap-2.5 border border-white/25 px-6 py-3.5 text-[0.85rem] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-navy"
                >
                  <Mail className="h-4 w-4" />
                  Kirim via Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =============================== FOOTER =============================== */

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-offwhite">
      <div className="mx-auto max-w-[1360px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MonogramFull className="h-14 w-auto text-primary" />
            <p className="mt-6 font-display text-[1.28rem] font-semibold leading-snug tracking-[-0.025em] text-navy">
              {PROFILE.name}
            </p>
            <p className="mt-3 max-w-[36ch] text-[1.01rem] italic leading-[1.7] text-slate-blue">
              “{PROFILE.tagline}”
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="lg:col-span-3">
            <p className="label text-primary">Navigasi</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-center gap-3 text-[0.94rem] text-navy/80 transition-colors hover:text-primary"
                  >
                    <span className="label tnum text-slate-blue/70">{item.index}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="label text-primary">Terhubung</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.94rem] text-navy/80 transition-colors hover:text-primary"
                >
                  <InstagramMark className="h-4 w-4" />
                  {PROFILE.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 text-[0.94rem] text-navy/80 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={waLink(WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.94rem] text-navy/80 transition-colors hover:text-primary"
                >
                  <WhatsAppMark className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>

            <a
              href="#home"
              className="group mt-8 inline-flex items-center gap-2.5 border border-primary/25 px-5 py-3 text-[0.82rem] font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Kembali ke atas
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary/18 pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.82rem] text-slate-blue">
            © <span className="tnum">{year}</span> {PROFILE.name}. Seluruh hak cipta
            dilindungi.
          </p>
          <div className="flex items-center gap-3">
            <Monogram className="h-7 w-7 text-primary/70" />
            <p className="label text-slate-blue">Creative Portfolio — Sidoarjo, Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
