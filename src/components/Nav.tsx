import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../data";
import { Monogram } from "./Marks";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-b border-primary/12 bg-offwhite/92 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[88px] lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Kembali ke beranda — Dewi Nabila Fibrianti"
          >
            <Monogram className="h-10 w-10 text-primary transition-transform duration-500 group-hover:-rotate-3" />
            <span className="hidden sm:block">
              <span className="block font-display text-[0.92rem] font-semibold leading-tight tracking-[-0.01em] text-navy">
                Dewi Nabila
              </span>
              <span className="label block text-[0.58rem] leading-tight text-slate-blue">
                Creative Portfolio
              </span>
            </span>
          </a>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-navy/72 hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 border border-primary bg-primary px-5 py-2.5 text-[0.8rem] font-semibold text-white transition-colors duration-300 hover:bg-navy hover:border-navy sm:inline-flex"
            >
              Let's Connect
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu navigasi"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center border border-primary/25 text-primary transition-colors hover:bg-lightblue lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[70] bg-navy lg:hidden"
          >
            <div className="flex h-[76px] items-center justify-between px-5 sm:px-8">
              <Monogram className="h-10 w-10 text-white" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu navigasi"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Navigasi seluler" className="px-5 pt-6 sm:px-8">
              <ul>
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.08, duration: 0.4 }}
                    className="border-b border-white/12"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4"
                    >
                      <span className="label tnum text-sky">{item.index}</span>
                      <span className="font-display text-2xl font-medium tracking-[-0.02em] text-white">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-between bg-primary px-6 py-4 text-white"
              >
                <span className="font-display text-lg font-semibold">Let's Connect</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <p className="mt-6 text-sm leading-relaxed text-white/60">
                {PROFILE.instagram} · {PROFILE.email}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
