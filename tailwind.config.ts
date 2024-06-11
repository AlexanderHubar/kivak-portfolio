import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        primary: "4px 4px 17.4px 0px #FFFFFF47 inset",
      },
      colors: {
        primary: {
          55: "#4A2CED",
          60: "#5E43EF",
          80: "#8672F3",
          70: "#AEA1F7",
          90: "#D6D0FB",
          95: "#EAE7FD",
          97: "#F3F1FE",
          99: "#FBFAFF",
        },
        dark: {
          3: "#070708",
          6: "#0E0E10",
          8: "#131316",
          12: "#1C1C21",
          15: "#1C1C21",
          20: "#2F2F37",
          25: "#3B3B45",
          30: "#474752",
        },
        grey: {
          40: "#62646C",
          90: "#797C86",
          50: "#AFB0B6",
          95: "#CACACE",
          70: "#AFB0B6",
          97: "#F2F2F3",
          80: "#F7F7F8",
          99: "#FCFCFD",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
