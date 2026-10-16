"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "The Studio" },
  { href: "#tattoo", label: "Tattoo Gallery" },
  { href: "#paint", label: "Paint Gallery" },
  { href: "#process", label: "Process" },
];

/** Loader, navigation, and scroll-reveal observer. Wraps the whole page. */
export default function Shell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHide(y > last && y > 400);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || !ready ? "hidden" : "";
  }, [open, ready]);

  return (
    <div className={ready ? "ready" : ""}>
      <div className={`loader ${ready ? "done" : ""}`} aria-hidden>
        <span>Be iinked</span>
      </div>

      <header className={`nav ${solid ? "solid" : ""} ${hide && !open ? "hide" : ""}`}>
        <div className="wrap nav-in">
          <a href="#top" className="logo" onClick={() => setOpen(false)}>
            Be <i>ii</i>nked
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="#book" className="btn">
              Book Now
            </a>
          </nav>
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`sheet ${open ? "open" : ""}`}>
        {[...links, { href: "#book", label: "Book Now" }].map((l, i) => (
          <a key={l.href} href={l.href} style={{ "--i": i } as React.CSSProperties} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>

      <a href="sms:4702139092" className="fab">
        <i /> Text us
      </a>

      {children}
    </div>
  );
}
