import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#303030",
        "game-boy-blue": "#01819E",
        "game-boy-dark": "#283037",
        "game-boy-text": "rgba(213, 221, 220, 0.7)",
        "game-boy-screen-dark": "#0D1210",
        "game-boy-d-pad": "#2f2f2f",
        "circle-d-pad": "rgba(120, 120, 120, 0.4)",
        "circle-d-pad-bright": "rgba(210, 210, 210, 0.3)",
        "circle-d-pad-dark": "rgba(50, 50, 50, 0.9)",
        "dark-blue-circle": "rgba(0, 97, 129, 1)",
        "smaller-light": "rgba(255, 137, 71, 1)",
        "snake-background": "#9CBA5B",
        "snake-body": "#3A543D",
      },
      borderRadius: {
        "game-boy-screen-bottom": "50px 40px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
