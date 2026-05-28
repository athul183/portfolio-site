import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CursorGlow } from "./components/ui";

/* ── Expanding Pill Loader ──────────────────────────────────── */
function Loader({ onDone }: { onDone: () => void }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);
  const [expanding, setExpanding] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hoverRef.current || expanding) return;
    const rect = wrapRef.current!.getBoundingClientRect();
    hoverRef.current.style.left = `${e.clientX - rect.left}px`;
    hoverRef.current.style.top  = `${e.clientY - rect.top}px`;
  };

  const handleClick = () => {
    if (expanding) return;
    setExpanding(true);
    // After expansion animation, hide the loader
    setTimeout(() => setHidden(true), 1100);
    setTimeout(() => onDone(), 1200);
  };

  if (hidden) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: hidden ? 0 : 1 }}
    >
      {/* Pill container */}
      <div
        ref={wrapRef}
        className={`loading-pill-wrap ${expanding ? "expanding" : ""}`}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* Purple hover glow */}
        <div ref={hoverRef} className="loading-pill-hover" />

        {/* Button text */}
        <button className="loading-btn" aria-label="Enter portfolio">
          View Portfolio →
        </button>
      </div>

      {/* Small branding above */}
      <div
        style={{
          position: "absolute",
          top: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Geist', sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#0b080c",
          opacity: expanding ? 0 : 1,
          transition: "opacity 0.4s",
        }}
      >
        Athulraj K
      </div>
    </motion.div>
  );
}

/* ── Scroll Progress ────────────────────────────────────────── */
function ScrollBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 99999,
        background: "rgba(194,164,255,0.1)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "var(--accent)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

/* ── App ────────────────────────────────────────────────────── */
export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!ready && <Loader key="loader" onDone={() => setReady(true)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <CursorGlow />
        <ScrollBar />
        <Navbar />
        <main>
          <Hero />
          <div className="hr" />
          <About />
          <div className="hr" />
          <Experience />
          <div className="hr" />
          <Skills />
          <div className="hr" />
          <Education />
          <div className="hr" />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
