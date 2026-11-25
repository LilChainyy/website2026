"use client";

import { useState } from "react";
import { MORE, type Project } from "@/data";
import ProjectSheet from "./ProjectSheet";

export default function MoreProjects() {
  const [sheetProject, setSheetProject] = useState<Project | null>(null);

  return (
    <>
      <section style={{ padding: "0 56px 64px", maxWidth: 1320, margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: 20 }}>
          More projects
        </div>

        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {MORE.map((p) => (
            <div
              key={p.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "14px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {/* Name */}
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 20,
                  fontWeight: 400,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                  minWidth: 160,
                  flexShrink: 0,
                }}
              >
                {p.name}
              </span>

              {/* Tagline */}
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 16,
                  fontStyle: "italic",
                  color: "var(--muted)",
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {p.tagline}
              </span>

              {/* Link */}
              <div style={{ flexShrink: 0, display: "flex", gap: 10 }}>
                {p.detail || p.summary ? (
                  <button
                    onClick={() => setSheetProject(p)}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--muted)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    details
                  </button>
                ) : null}
                {p.liveUrl || p.websiteUrl ? (
                  <a
                    href={p.liveUrl || p.websiteUrl || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--muted)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    live ↗
                  </a>
                ) : p.demoUrl ? (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--muted)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    demo ↗
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {sheetProject && (
        <ProjectSheet
          item={sheetProject}
          onClose={() => setSheetProject(null)}
        />
      )}
    </>
  );
}
