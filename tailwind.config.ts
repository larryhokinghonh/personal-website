import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist)'],
        geistMono: ['var(--font-geist-mono)'],
        roboto: ['var(--font-roboto)']
      },
    },
  },
  plugins: [],
} satisfies Config;
