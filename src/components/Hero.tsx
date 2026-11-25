import { PROFILE } from "@/data";

export default function Hero() {
  return (
    <section style={{ padding: "72px 56px 32px", maxWidth: 1320, margin: "0 auto" }}>
      <div
        style={{
          background: "var(--paper-2)",
          borderRadius: 12,
          padding: "72px 56px",
          border: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left — name + buttons */}
        <div>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: 120,
              lineHeight: 0.96,
              color: "var(--ink)",
              margin: 0,
              letterSpacing: "-0.03em",
              fontWeight: 400,
            }}
          >
            {PROFILE.name}
          </h1>
          <div
            style={{
              marginTop: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {[
              { label: "GH", href: `https://github.com/${PROFILE.github}` },
              { label: "X", href: `https://x.com/${PROFILE.twitter}` },
              { label: "in", href: `https://www.linkedin.com/in/${PROFILE.linkedin}/` },
              { label: "YT", href: "https://www.youtube.com/@AlinaChenyy/shorts" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 53,
                  height: 53,
                  borderRadius: "50%",
                  background: "#C2CFE0",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--mono)",
                  fontSize: 14,
                  color: "#2A3F5A",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — two highlight blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: 22,
              lineHeight: 1.3,
              color: "var(--ink)",
              margin: 0,
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            I&apos;m a product-minded builder with finance and GTM experience.
          </p>
        </div>
      </div>
    </section>
  );
}
