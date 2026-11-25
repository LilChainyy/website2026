import { FEATURED, type Project } from "@/data";

const colorMap: Record<string, { bg: string; ink: string }> = {
  sage: { bg: "var(--sage)", ink: "var(--sage-deep)" },
  plum: { bg: "var(--clay)", ink: "var(--clay-deep)" },
  clay: { bg: "var(--slate)", ink: "var(--slate-deep)" },
};

function ProjectCard({
  p,
}: {
  p: Project;
  onOpen: (p: Project) => void;
}) {
  const c = colorMap[p.color] || colorMap.sage;
  return (
    <article
      style={{
        borderRadius: 12,
        padding: 24,
        background: c.bg,
        color: c.ink,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Details */}
      <div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--ink-2)",
            marginBottom: 6,
            opacity: 0.75,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {p.role}
          {p.dates ? ` · ${p.dates}` : ""}
        </div>

        {/* Title + Live link inline */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: 40,
              color: "var(--ink)",
              margin: 0,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              lineHeight: 0.98,
            }}
          >
            {p.name}
          </h3>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: c.ink,
                textDecoration: "none",
                borderBottom: `1px solid ${c.ink}`,
                paddingBottom: 1,
                opacity: 0.7,
                letterSpacing: "0.02em",
              }}
            >
              live ↗
            </a>
          )}
          {p.headline && (
            <span className="headline-badge">{p.headline}</span>
          )}
        </div>

        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: 17,
            fontStyle: "italic",
            color: "var(--ink-2)",
            marginTop: 8,
            whiteSpace: "pre-line",
            lineHeight: 1.55,
          }}
        >
          {p.tagline}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: 12,
          }}
        >
          {p.stack.map((s) => (
            <span key={s} className="stack-pill">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Demo video — below text */}
      <div
        style={{
          aspectRatio: "16/9",
          borderRadius: 8,
          background: "rgba(26,26,26,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {p.youtube ? (
          <iframe
            src={p.youtube}
            title={p.name}
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        ) : p.demoImage ? (
          <a href={p.liveUrl || p.websiteUrl || ""} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%" }}>
            <img
              src={p.demoImage}
              alt={`${p.name} screenshot`}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
          </a>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              color: c.ink,
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              ▶ demo
            </div>
            <div
              style={{ fontFamily: "var(--mono)", fontSize: 10, opacity: 0.7 }}
            >
              embed coming
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  const [first, second, ...rest] = FEATURED;

  return (
    <section
      id="projects"
      style={{ padding: "48px 56px 64px", maxWidth: 1320, margin: "0 auto" }}
    >
      {/* Section label */}
      <div className="section-label" style={{ marginBottom: 20 }}>
        Featured projects
      </div>

      {/* Top two side by side */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {first && <ProjectCard p={first} onOpen={() => {}} />}
        {second && <ProjectCard p={second} onOpen={() => {}} />}
      </div>

      {/* Remaining featured — full width */}
      {rest.map((p) => (
        <div key={p.id} style={{ marginTop: 20 }}>
          <ProjectCard p={p} onOpen={() => {}} />
        </div>
      ))}
    </section>
  );
}
