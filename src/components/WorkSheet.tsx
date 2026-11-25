"use client";

import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

export default function WorkSheet({ onClose }: Props) {
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
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: 56,
            color: "var(--ink)",
            margin: "16px 0 8px",
            letterSpacing: "-0.025em",
            fontWeight: 400,
          }}
        >
          About me
        </h2>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--muted)",
            marginTop: 24,
          }}
        >
          TBD
        </p>
      </div>
    </div>
  );
}
