"use client";

import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label="Fayis Kanthapuram — home"
      >
        <span className="monogram">
          f<span>k</span>
          <i />
        </span>
        <span>
          Fayis Kanthapuram
          <span className="wordmark-sub">DEVELOPER & BUILDER</span>
        </span>
      </a>
      <button
        ref={button}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={open ? "navigation is-open" : "navigation"}
      >
        <a href="#work" onClick={() => setOpen(false)}>
          Selected work <span>03</span>
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#approach" onClick={() => setOpen(false)}>
          Approach
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume <span aria-hidden="true">↗</span>
        </a>
        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
