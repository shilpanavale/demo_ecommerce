import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        "ink-muted": "#667085",
        cream: "#fffaf0",
        peach: "#ffb199",
        coral: "#ff6f61",
        berry: "#7f3dff",
        plum: "#2b164c",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(127, 61, 255, 0.2)",
        card: "0 18px 60px rgba(17, 24, 39, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
} satisfies Config;

export default config;
