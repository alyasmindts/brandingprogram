import { GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";
import { FACTS, EDUCATION, EXPERIENCE, SOFT_SKILLS, HARD_SKILLS, PROFILE } from "../data";
import { Reveal, SectionHead, Monogram } from "./Marks";

/* ================================ ABOUT ================================ */

export function About() {
  return (
    <section id="about" className="relative bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="02"
          kicker="About Me"
          title={
            <>
              Berkomunikasi lewat
              <span className="block text-primary">gambar dan cerita.</span>
            </>
          }
          lead="Saya terbiasa mengolah ide menjadi visual yang sederhana, rapi, dan mudah dipahami — mulai dari mengambil foto, menyusun desain, hingga mengelola kebutuhan administrasi organisasi."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* facts ledger */}
          <Reveal className="lg:col-span-6">
            <div className="border border-primary/15 bg-white">
              <div className="flex items-center justify-between border-b border-primary/15 px-6 py-4">
                <span className="label text-primary">Data Diri</span>
                <span className="label tnum text-slate-blue">01 / 05</span>
              </div>
              <dl>
                {FACTS.map((fact, i) => (
                  <div
                    key={fact.label}
                    className="group grid grid-cols-[2.4rem_1fr] items-start gap-3 border-b border-primary/10 px-6 py-5 transition-colors duration-300 last:border-b-0 hover:bg-lightblue/70"
                  >
                    <span className="label tnum pt-1 text-slate-blue/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <dt className="label text-slate-blue">{fact.label}</dt>
                      <dd className="mt-1.5 font-display text-[1.05rem] font-medium leading-snug tracking-[-0.015em] text-navy">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 flex items-center gap-4 border border-primary/15 bg-lightblue px-6 py-5">
              <Sparkles className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-[0.92rem] leading-relaxed text-navy/80">
                Aktif sebagai pengurus{" "}
                <strong className="font-semibold text-primary">
                  Media Community Visualization (McV)
                </strong>{" "}
                sejak 2023.
              </p>
            </div>
          </Reveal>

          {/* statement */}
          <Reveal delay={0.12} className="lg:col-span-6">
            <div className="relative h-full overflow-hidden border border-primary/15 bg-navy px-7 py-10 sm:px-10 sm:py-12">
              <Monogram className="absolute -right-6 -top-6 h-40 w-40 text-white/8" />
              <p className="label text-sky">Statement</p>
              <p className="mt-6 font-display text-[clamp(1.35rem,2.6vw,1.95rem)] font-medium leading-[1.42] tracking-[-0.025em] text-white">
                “{PROFILE.tagline}”
              </p>
              <div className="mt-8 h-px w-24 bg-sky/50" />
              <p className="mt-7 max-w-[42ch] text-[0.98rem] leading-[1.85] text-white/70">
                Saya percaya bahwa komunikasi yang baik lahir dari ketelitian melihat
                detail — warna, komposisi, kata, dan waktu yang tepat. Karena itu saya
                terus belajar di persimpangan fotografi, desain grafis, dan media digital.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div>
                  <p className="label text-white/50">Instagram</p>
                  <a
                    href={PROFILE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-white transition-colors hover:text-sky"
                  >
                    {PROFILE.instagram}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div>
                  <p className="label text-white/50">Email</p>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="mt-1 inline-block text-[0.95rem] font-medium text-white transition-colors hover:text-sky"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================= EDUCATION ============================== */

export function Education() {
  return (
    <section id="education" className="relative bg-lightblue/70 py-20 lg:py-24">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="02.1"
          kicker="Education"
          title="Riwayat Pendidikan"
          lead="Jenjang pendidikan yang membentuk cara saya melihat, menyusun, dan menyampaikan pesan secara visual."
        />

        <ol className="mt-14 border-t border-primary/20">
          {EDUCATION.map((item, i) => (
            <Reveal
              as="li"
              key={item.institution}
              delay={i * 0.1}
              className="group grid grid-cols-1 gap-x-10 gap-y-4 border-b border-primary/20 py-9 transition-colors duration-300 hover:bg-white/70 lg:grid-cols-12"
            >
              <div className="lg:col-span-3">
                <p className="label tnum text-primary">{item.period}</p>
                <p className="mt-2 flex items-center gap-2 text-slate-blue">
                  <GraduationCap className="h-4 w-4" />
                  <span className="label">{item.major}</span>
                </p>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-display text-[1.35rem] font-semibold leading-snug tracking-[-0.025em] text-navy sm:text-[1.65rem]">
                  {item.institution}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[0.98rem] leading-[1.8] text-slate-blue">
                  {item.note}
                </p>
              </div>
              <div className="flex items-start justify-start lg:col-span-3 lg:justify-end">
                <span className="label tnum flex items-center gap-2 border border-primary/25 px-3.5 py-2 text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  {String(EDUCATION.length - i).padStart(2, "0")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================= EXPERIENCE ============================= */

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/18 blur-[80px]"
      />
      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="03"
          kicker="Experience & Organization"
          title={
            <>
              Pengalaman
              <span className="block text-sky">organisasi.</span>
            </>
          }
          lead="Pengalaman yang membentuk kedisiplinan, kerja sama tim, dan kemampuan mengelola kebutuhan administrasi sebuah komunitas."
          tone="dark"
        />

        <ol className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-sky via-sky/40 to-transparent sm:block"
          />
          {EXPERIENCE.map((item, i) => (
            <Reveal
              as="li"
              key={item.org}
              delay={i * 0.12}
              className="relative grid grid-cols-1 gap-x-10 gap-y-6 pb-14 pl-0 sm:pl-12 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[10px] hidden h-[15px] w-[15px] rotate-45 border-2 border-sky bg-navy sm:block"
              />
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="label tnum bg-sky px-3 py-1.5 text-navy">{item.period}</span>
                <span className="label text-white/55">{item.role}</span>
              </div>

              <h3 className="font-display text-[clamp(1.65rem,3.6vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-white">
                {item.org}
              </h3>

              <ul className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-3">
                {item.points.map((point, pi) => (
                  <li
                    key={point}
                    className="border-t border-white/15 pt-4 text-[0.96rem] leading-[1.75] text-white/72"
                  >
                    <span className="label tnum mb-2 block text-sky">
                      {String(pi + 1).padStart(2, "0")}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ================================ SKILLS ============================== */

function SkillRow({
  index,
  name,
  desc,
}: {
  index: string;
  name: string;
  desc: string;
}) {
  return (
    <li className="group grid grid-cols-[2.6rem_1fr] items-start gap-3 border-b border-primary/15 py-5 transition-colors duration-300 hover:border-primary/45">
      <span className="label tnum pt-1.5 text-slate-blue/70">{index}</span>
      <div>
        <h4 className="font-display text-[1.12rem] font-semibold tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-primary">
          {name}
        </h4>
        <p className="mt-1.5 max-w-[46ch] text-[0.92rem] leading-[1.7] text-slate-blue">
          {desc}
        </p>
      </div>
    </li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="04"
          kicker="Skills"
          title="Kemampuan yang saya gunakan sehari-hari."
          lead="Ditampilkan apa adanya tanpa nilai persentase — hanya kemampuan yang benar-benar saya gunakan dalam perkuliahan, organisasi, dan proyek kreatif."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-baseline justify-between border-b-2 border-primary pb-4">
              <h3 className="font-display text-[1.28rem] font-semibold tracking-[-0.02em] text-navy">
                Soft Skills
              </h3>
              <span className="label tnum text-primary">04 Item</span>
            </div>
            <ul className="mt-2">
              {SOFT_SKILLS.map((s, i) => (
                <SkillRow
                  key={s.name}
                  index={String(i + 1).padStart(2, "0")}
                  name={s.name}
                  desc={s.desc}
                />
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex items-baseline justify-between border-b-2 border-primary pb-4">
              <h3 className="font-display text-[1.28rem] font-semibold tracking-[-0.02em] text-navy">
                Hard Skills
              </h3>
              <span className="label tnum text-primary">04 Item</span>
            </div>
            <ul className="mt-2">
              {HARD_SKILLS.map((s, i) => (
                <SkillRow
                  key={s.name}
                  index={String(i + 1).padStart(2, "0")}
                  name={s.name}
                  desc={s.desc}
                />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
