import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0b09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* KR monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "rgba(249,115,22,0.15)",
              border: "1px solid rgba(249,115,22,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#f97316",
            }}
          >
            KR.
          </div>
          <span style={{ fontSize: 18, color: "#9a8880" }}>keerthick-portfolio.vercel.app</span>
        </div>

        {/* Name */}
        <div style={{ fontSize: 72, fontWeight: 700, color: "#f0ebe8", lineHeight: 1.1, marginBottom: 20 }}>
          Keerthick Ravikumar
        </div>

        {/* Title */}
        <div style={{ fontSize: 32, color: "#f97316", fontWeight: 500, marginBottom: 24 }}>
          Frontend Engineer
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 22, color: "#9a8880", marginBottom: 48 }}>
          Fast by design. Accessible by default.
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["React", "Next.js", "TypeScript", "Bengaluru, India"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid #2e2520",
                background: "#1a1512",
                color: "#9a8880",
                fontSize: 16,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
