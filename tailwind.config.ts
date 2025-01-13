import type { Config } from "tailwindcss";

export default {
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
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8E44AD",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#F1F0FB",
          foreground: "hsl(var(--secondary-foreground))",
        },
        oilBlack: "#000000",
        lavenderBlue: "#D3E4FD",
        lavenderPurple: "#D6BCFA",
        neonSilver: "#C8C8C9",
        purpleMain: "#9B7EBD",
        warmGray: "#9F9F9F",
      },
      fontSize: {
        'body': ['1.125rem', '1.75'],  // 18px with 1.75 line height
        'h1': ['2.5rem', '1.2'],       // 40px
        'h2': ['2rem', '1.3'],         // 32px
        'h3': ['1.5rem', '1.4'],       // 24px
      },
      spacing: {
        'section': '8rem',
        'header': '6rem',
      },
      boxShadow: {
        'card': '0 4px 10px rgba(0, 0, 0, 0.08)',
        'modal': '0 15px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;