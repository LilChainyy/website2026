"use client";

import { PROFILE } from "@/data";

export default function Nav() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 56px",
        borderBottom: "1px solid var(--line)",
        background: "rgba(245,241,235,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: 24,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            color: "var(--ink)",
          }}
        >
          Alina
        </span>
        <span style={{ width: 1, height: 16, background: "var(--line-2)" }} />
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {["About", "Projects"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "var(--sans)",
              fontSize: 14,
              color: "var(--ink-2)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            {l}
          </a>
        ))}
        <a href={`mailto:${PROFILE.email}`} className="btn btn-dark">
          Contact ↗
        </a>
      </nav>
    </header>
  );
}
