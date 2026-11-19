import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { PROFILE } from "../data";
import { CornerTicks } from "./Marks";

const MARQUEE = [
  "Creative Communicator",
  "Fotografi",
  "Desain Grafis",
  "Media Sosial",
  "Komunikasi Kreatif",
  "Visual Enthusiast",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-offwhite pt-[76px] lg:pt-[88px]">
      {/* background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-18%] top-[-12%] h-[720px] w-[720px] rounded-full bg-lightblue blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-white/70 to-transparent"
      />

      <div className="relative mx-auto max-w-[1360px] px-5 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* ---------------- text ---------------- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 bg-primary" aria-hidden="true" />
              <span className="label text-primary">{PROFILE.label}</span>
            </motion.div>

            <h1 className="mt-7">
              <motion.span
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="block font-display text-[clamp(1.5rem,3.4vw,2.35rem)] font-medium leading-tight tracking-[-0.02em] text-slate-blue"
              >
                Hello, I'm
              </motion.span>
              <motion.span
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.16 }}
                className="mt-1 block font-display text-[clamp(2.65rem,7.6vw,5.9rem)] font-bold leading-[0.94] tracking-[-0.045em] text-navy"
              >
                Dewi Nabila
                <span className="block text-primary">Fibrianti.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-7 max-w-[52ch] border-l-2 border-primary/25 pl-5 text-[1.02rem] leading-[1.8] text-navy/80 sm:text-[1.09rem]"
            >
              {PROFILE.intro}
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2.5 bg-primary px-7 py-4 text-[0.87rem] font-semibold tracking-[0.01em] text-white transition-colors duration-300 hover:bg-navy"
              >
                Explore My Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border border-navy/22 px-7 py-4 text-[0.87rem] font-semibold text-navy transition-colors duration-300 hover:border-primary hover:bg-lightblue hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </motion.div>

            <motion.dl
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-11 grid max-w-[560px] grid-cols-2 gap-x-8 gap-y-5 border-t border-primary/15 pt-6 sm:grid-cols-3"
            >
              {[
                { k: "Status", v: "Mahasiswa Aktif" },
                { k: "Prodi", v: "Ilmu Komunikasi" },
                { k: "Domisili", v: "Sidoarjo, Jawa Timur" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="label text-slate-blue">{item.k}</dt>
                  <dd className="mt-1.5 text-[0.93rem] font-medium text-navy">{item.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ---------------- portrait ---------------- */}
          <motion.figure
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none"
          >
            <div className="relative">
              {/* animated contact-sheet frame */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[10px] h-[calc(100%+20px)] w-[calc(100%+20px)]"
                preserveAspectRatio="none"
                viewBox="0 0 100 120"
              >
                <motion.rect
                  x="1"
                  y="1"
                  width="98"
                  height="118"
                  fill="none"
                  stroke="#0756B8"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }}
                  opacity="0.55"
                />
              </svg>

              <div className="grain relative aspect-[4/5] overflow-hidden bg-lightblue">
                <img
                  src="images/portrait.jpg"
                  alt="Foto potret Dewi Nabila Fibrianti, mahasiswa Ilmu Komunikasi Universitas Muhammadiyah Sidoarjo."
                  className="h-full w-full object-cover object-[52%_28%]"
                  width={1024}
                  height={1536}
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/28 via-transparent to-transparent"
                />
                <CornerTicks color="#FFFFFF" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="label bg-white/92 px-2.5 py-1.5 text-navy">
                    Frame 01 — Portrait
                  </span>
                  <span className="label tnum bg-primary px-2.5 py-1.5 text-white">35 MM</span>
                </div>
              </div>
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-primary/15 pt-3">
              <span className="label text-slate-blue">Dokumentasi Pribadi</span>
              <span className="label tnum text-primary">2023 — Sekarang</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>

      {/* ---------------- marquee band ---------------- */}
      <div className="relative overflow-hidden border-y border-navy bg-navy py-4">
        <div
          className={`flex w-max items-center ${reduce ? "" : "animate-[slide_38s_linear_infinite]"}`}
          aria-hidden="true"
        >
          {[0, 1].map((row) => (
            <div key={row} className="flex items-center gap-10 pr-10">
              {MARQUEE.map((word) => (
                <span key={word} className="flex items-center gap-10">
                  <span className="label whitespace-nowrap text-white/85">{word}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-sky" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      <a
        href="#about"
        className="mx-auto flex max-w-[1360px] items-center gap-3 px-5 py-6 text-slate-blue transition-colors hover:text-primary sm:px-8 lg:px-12"
      >
        <span className="flex h-9 w-9 items-center justify-center border border-primary/25">
          <ArrowDown className="h-4 w-4" />
        </span>
        <span className="label">Gulir untuk melihat profil</span>
      </a>
    </section>
  );
}
