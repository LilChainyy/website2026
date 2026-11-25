export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 56px",
        maxWidth: 1320,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          marginTop: 40,
          paddingTop: 16,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "var(--serif)",
            fontSize: 20,
            fontStyle: "italic",
            color: "var(--ink)",
          }}
        >
          Alina Chen
        </div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--muted)",
          }}
        >
          © 2026
        </div>
      </div>
    </footer>
  );
}
