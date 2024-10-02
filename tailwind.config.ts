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
        theme: {
          light: "#FFFFFF",
        },
        navbar: {
          light: "#FFFFFF",
          border: "#DEE2E6",
          text: "#495057",
          hover: {
            text: "#74C0FC",
          },
        },
        button: {
          light: "#007BFF",
          hover: "#74C0FC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
