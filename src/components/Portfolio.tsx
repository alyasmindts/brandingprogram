import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import { PROJECTS, type Project } from "../data";
import { Reveal, SectionHead, CornerTicks } from "./Marks";

function Lightbox({
  project,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = project.images[index];

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau karya ${project.title}`}
      className="fixed inset-0 z-[90] flex flex-col bg-navy/96 px-4 py-4 sm:px-8 sm:py-6"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="label truncate text-sky">
            Project {project.index} — {project.title}
          </p>
          <p className="mt-1 truncate text-sm text-white/70">{image.caption}</p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup pratinjau"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-navy"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center py-5">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Gambar sebelumnya"
          className="absolute left-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-navy"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-full max-w-full object-contain"
        />
        <button
          type="button"
          onClick={onNext}
          aria-label="Gambar berikutnya"
          className="absolute right-0 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-navy"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-white/60">Gunakan tombol ← → untuk berpindah gambar</p>
        <p className="label tnum text-white/70">
          {String(index + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
        </p>
      </div>
    </motion.div>
  );
}

function ProjectPlate({ project, offset }: { project: Project; offset: boolean }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + project.images.length) % project.images.length
      ),
    [project.images.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % project.images.length)),
    [project.images.length]
  );

  return (
    <Reveal className={`w-full ${offset ? "lg:pt-24" : ""}`}>
      <article className="group">
        <div className="flex items-end justify-between gap-6 border-b border-primary/20 pb-4">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[clamp(2.6rem,6vw,4.2rem)] font-bold leading-none tracking-[-0.05em] text-primary/18 transition-colors duration-500 group-hover:text-primary/35">
              {project.index}
            </span>
            <div>
              <p className="label text-primary">{project.category}</p>
              <h3 className="mt-1.5 font-display text-[clamp(1.55rem,3.3vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-navy">
                {project.title}
              </h3>
            </div>
          </div>
          <span className="label tnum hidden shrink-0 text-slate-blue sm:block">{project.year}</span>
        </div>

        {/* image plate */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`Perbesar gambar: ${img.alt}`}
              className={`group/img relative overflow-hidden bg-lightblue ${
                i === 0 ? "col-span-2 aspect-[16/10]" : "col-span-2 aspect-[4/3] sm:col-span-1"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.045]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover/img:bg-navy/22"
              />
              <CornerTicks color="#FFFFFF" />
              <span className="label absolute bottom-3 left-3 bg-white/92 px-2.5 py-1.5 text-navy">
                {img.caption}
              </span>
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-primary text-white opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          ))}

          {/* frame data panel — fills the grid beside the second frame */}
          <div className="col-span-2 hidden aspect-[4/3] flex-col justify-between border border-primary/18 bg-white/70 p-6 sm:col-span-1 sm:flex">
            <div>
              <p className="label text-primary">Frame Data</p>
              <dl className="mt-5 space-y-3">
                {[
                  { k: "Kategori", v: project.category },
                  { k: "Tools", v: project.tools },
                  { k: "Jumlah Frame", v: `${project.images.length} gambar` },
                ].map((row) => (
                  <div key={row.k} className="flex items-baseline justify-between gap-3 border-b border-primary/12 pb-2">
                    <dt className="label text-slate-blue">{row.k}</dt>
                    <dd className="text-right text-[0.88rem] font-medium text-navy">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="label flex items-center gap-2 text-slate-blue">
              <Expand className="h-3.5 w-3.5" />
              Klik gambar untuk memperbesar
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-[58ch] text-[1.01rem] leading-[1.8] text-navy/80">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="label border border-primary/22 px-3 py-1.5 text-primary">
            Tools: {project.tools}
          </span>
          <button
            type="button"
            onClick={() => setDetailOpen((v) => !v)}
            aria-expanded={detailOpen}
            className="group/btn inline-flex items-center gap-2 text-[0.86rem] font-semibold text-primary transition-colors hover:text-navy"
          >
            {detailOpen ? "Tutup Detail Proyek" : "View Project Detail"}
            <ArrowUpRight
              className={`h-4 w-4 transition-transform duration-300 ${
                detailOpen ? "rotate-90" : "group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              }`}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {detailOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 border-l-2 border-primary/35 bg-white/80 px-6 py-6">
                <p className="label text-primary">Tentang Proyek</p>
                <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-[1.85] text-slate-blue">
                  {project.detail}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.images.map((img) => (
                    <li key={img.src}>
                      <button
                        type="button"
                        onClick={() => setLightbox(project.images.indexOf(img))}
                        className="label border border-primary/20 px-3 py-1.5 text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        {img.caption}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            project={project}
            index={lightbox}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-lightblue/60 py-20 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="05"
          kicker="Selected Portfolio"
          title="Karya pilihan."
          lead="Dua proyek utama yang merepresentasikan ketertarikan saya pada fotografi dan desain grafis — digarap dengan eksplorasi komposisi, warna, dan penyampaian pesan secara visual."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectPlate key={project.index} project={project} offset={i % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="relative isolate overflow-hidden border border-primary/20">
            <img
              src="images/portfolio-booklet.jpg"
              alt="Buku portofolio cetak yang terbuka di atas meja, memperlihatkan hasil cetak karya fotografi."
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/45"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 px-7 py-12 sm:px-12 sm:py-14 lg:flex-row lg:items-end">
              <div>
                <p className="label text-sky">Koleksi Lengkap</p>
                <p className="mt-4 max-w-[30ch] font-display text-[clamp(1.55rem,3.2vw,2.35rem)] font-semibold leading-[1.18] tracking-[-0.035em] text-white">
                  Ingin melihat lebih banyak karya dan proses di baliknya?
                </p>
                <p className="mt-4 max-w-[48ch] text-[0.99rem] leading-[1.8] text-white/72">
                  Koleksi lengkap tersedia dalam portofolio PDF — termasuk foto, desain,
                  dan catatan proses pengerjaannya.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2.5 bg-white px-7 py-4 text-[0.87rem] font-semibold text-navy transition-colors duration-300 hover:bg-sky"
              >
                View Full Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
