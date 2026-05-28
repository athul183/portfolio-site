import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Skills",     href: "#skills"      },
  { label: "Education",  href: "#education"   },
  { label: "Contact",    href: "#contact"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    links.forEach(({ href }) => { const el = document.querySelector(href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="nav"
        style={{
          background: scrolled ? "rgba(11,8,12,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(234,229,236,0.06)" : "none",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo">
            Athulraj K
          </a>

          {/* Desktop links */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <ul className="nav-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={`nav-link ${active === href.slice(1) ? "active" : ""}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/AthulrajK-CV.pdf" download className="btn btn-ghost" style={{ fontSize: "0.72rem" }}>
              <Download size={12} />
              Resume
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setOpen(true)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              color: "var(--text-2)",
              display: "none",
            }}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(11,8,12,0.97)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                color: "var(--text-2)",
                cursor: "pointer",
              }}
            >
              <X size={22} />
            </button>

            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  color: "rgba(234,229,236,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(234,229,236,0.5)"}
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="/AthulrajK-CV.pdf"
              download
              className="btn btn-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: links.length * 0.07 + 0.1 }}
            >
              <Download size={14} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-desktop { display: flex !important; }
          .hide-mobile  { display: none !important; }
        }
      `}</style>
    </>
  );
}
