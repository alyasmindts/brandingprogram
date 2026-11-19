import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { About, Education, Experience, Skills } from "./components/Sections";
import Portfolio from "./components/Portfolio";
import { CareerGoals, Contact, Footer } from "./components/Closing";
import { Monogram } from "./components/Marks";
import { PROFILE } from "./data";

function MarginRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-[72px] flex-col items-center justify-between border-r border-primary/12 bg-offwhite/60 py-7 2xl:flex"
    >
      <Monogram className="h-8 w-8 text-primary/70" />

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-8">
        <div className="relative h-[220px] w-px bg-primary/15">
          <motion.span
            style={{ scaleY, originY: 0 }}
            className="absolute inset-0 block bg-primary"
          />
        </div>
        <p
          className="label whitespace-nowrap text-slate-blue"
          style={{ writingMode: "vertical-rl" }}
        >
          {PROFILE.label}
        </p>
      </div>

      <p
        className="label tnum whitespace-nowrap text-primary/70"
        style={{ writingMode: "vertical-rl" }}
      >
        Portfolio — 2026
      </p>
    </aside>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-offwhite">
      <MarginRail />
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
