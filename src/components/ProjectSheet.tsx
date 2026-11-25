"use client";

import { useEffect } from "react";
import type { Project } from "@/data";

interface Props {
  item: Project;
  onClose: () => void;
}

export default function ProjectSheet({ item, onClose }: Props) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26,26,26,0.6)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        zIndex: 100,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "48px 32px",
        overflow: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--paper)",
          borderRadius: 12,
          width: "100%",
          maxWidth: 760,
          padding: 40,
          boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            fontFamily: "var(--mono)",
            fontSize: 12,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--muted)",
            padding: 0,
          }}
        >
          ← close
        </button>
        <div
          style={{
            marginTop: 16,
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          {item.role}{item.dates ? ` · ${item.dates}` : ""}
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: 56,
            color: "var(--ink)",
            margin: "8px 0 8px",
            letterSpacing: "-0.025em",
            fontWeight: 400,
          }}
        >
          {item.name}
        </h2>
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: 22,
            fontStyle: "italic",
            color: "var(--muted)",
            marginBottom: 24,
          }}
        >
          {item.tagline}
        </div>
        {item.summary && (
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--ink-2)",
            }}
          >
            {item.summary}
          </p>
        )}
        {item.detail && (
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--ink-2)",
              marginTop: item.summary ? 16 : 0,
              whiteSpace: "pre-line",
            }}
          >
            {item.detail}
          </p>
        )}
        {item.note && (
          <div
            style={{
              marginTop: 24,
              padding: "16px 20px",
              background: "var(--paper-2)",
              borderLeft: "2px solid var(--clay-deep)",
              fontFamily: "var(--serif)",
              fontSize: 16,
              fontStyle: "italic",
              color: "var(--ink-2)",
            }}
          >
            {item.note}
          </div>
        )}
      </div>
    </div>
  );
}
