import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Cursor Glow ─────────────────────────────────────────────── */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

/* ── FadeIn on scroll ────────────────────────────────────────── */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  style?: React.CSSProperties;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "", style }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const dirs = { up:{y:32,x:0}, left:{x:40,y:0}, right:{x:-40,y:0}, none:{x:0,y:0} };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Typewriter ──────────────────────────────────────────────── */
export function Typewriter({ words, className = "" }: { words: string[]; className?: string }) {
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del,  setDel]  = useState(false);
  const [txt,  setTxt]  = useState("");

  useEffect(() => {
    const word = words[wIdx];
    const id = setTimeout(() => {
      if (!del) {
        setTxt(word.slice(0, cIdx + 1));
        if (cIdx + 1 === word.length) setTimeout(() => setDel(true), 2000);
        else setCIdx((c) => c + 1);
      } else {
        setTxt(word.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDel(false); setWIdx((i) => (i + 1) % words.length); setCIdx(0); }
        else setCIdx((c) => c - 1);
      }
    }, del ? 50 : 70);
    return () => clearTimeout(id);
  }, [cIdx, del, wIdx, words]);

  return (
    <span className={`typewriter ${className}`} aria-label={words[wIdx]}>{txt}</span>
  );
}

/* ── Animated Counter ────────────────────────────────────────── */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const num    = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView) return;
    let t0 = 0;
    const dur = 1400;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setDisplay(Math.floor((1 - Math.pow(1 - p, 3)) * num) + suffix);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num, suffix]);

  return <span ref={ref} className={className}>{display}</span>;
}

/* ── Section Header ──────────────────────────────────────────── */
export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="section-num" style={{ marginBottom: "1.5rem" }}>
      <span style={{ color: "var(--accent)", fontWeight: 700 }}>{num}</span>
      <span>{label}</span>
    </div>
  );
}
