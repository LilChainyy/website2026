"use client";

import { useState } from "react";
import { ABOUT } from "@/data";
import WorkSheet from "./WorkSheet";

export default function Work() {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <>
      <section id="work" style={{ padding: "32px 56px 48px", maxWidth: 1320, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div className="section-label">{"// 02 past work"}</div>
          </div>
          <div>
            <div
              style={{
                padding: "40px 44px",
                background: "#EDE5DA",
                borderRadius: 12,
                fontFamily: "var(--sans)",
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--ink-2)",
              }}
            >
              <p style={{ margin: "0 0 16px" }}>{ABOUT.para1}</p>
              <p style={{ margin: "0 0 20px" }}>{ABOUT.para2}</p>
              <button
                onClick={() => setShowSheet(true)}
                className="btn btn-dark"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {showSheet && <WorkSheet onClose={() => setShowSheet(false)} />}
    </>
  );
}
