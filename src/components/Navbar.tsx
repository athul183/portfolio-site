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
      { threshold: 0.25 }
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
          background: scrolled ? "rgba(8,6,16,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo">
            <div className="nav-logo-badge">AK</div>
            <span className="nav-logo-text">Athulraj K</span>
          </a>

          {/* Desktop links */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ul className="nav-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={`nav-link ${active === href.slice(1) ? "active" : ""}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/AthulrajK-CV.pdf"
              download
              className="btn btn-accent"
              style={{ fontSize: "0.72rem", marginLeft: "0.75rem" }}
            >
              <Download size={12} />
              Resume
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--text-2)",
              padding: "0.45rem",
              display: "none",
              cursor: "pointer",
            }}
          >
            <Menu size={18} />
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
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(8,6,16,0.97)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--text-2)",
                padding: "0.45rem",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>

            {/* Mobile brand */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                left: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div className="nav-logo-badge" style={{ width: 30, height: 30, fontSize: "0.7rem" }}>AK</div>
            </div>

            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  color: "rgba(240,236,254,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--text)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,236,254,0.45)"}
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
