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
          DEFAULT: "#e7c6ff",
          hover: "#b8c0ff",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#caffbf",
          hover: "#72ddf7",
          foreground: "hsl(var(--secondary-foreground))",
        },
        lavender: "#e7c6ff",
        periwinkle: "#b8c0ff",
        mintGreen: "#caffbf",
        skyBlue: "#72ddf7",
        warmGray: "#9CA3AF", // Added warmGray color
      },
      fontSize: {
        'body': ['1.125rem', '1.75'],
        'h1': ['3.5rem', '1.2'],
        'h2': ['2.5rem', '1.3'],
        'h3': ['2rem', '1.4'],
      },
      spacing: {
        'section': '10rem',
        'header': '6rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'modal': '0 15px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;