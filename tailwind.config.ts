import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'revaya-purple': 'var(--revaya-purple)',
        'revaya-purple-dark': 'var(--revaya-purple-dark)',
        'revaya-teal': 'var(--revaya-teal)',
        'revaya-coral': 'var(--revaya-coral)',
        'revaya-coral-dark': 'var(--revaya-coral-dark)',
        'revaya-mint': 'var(--revaya-mint)',
        'revaya-lavender': 'var(--revaya-lavender)',
        'revaya-white': 'var(--revaya-white)',
        'revaya-dark-gray': 'var(--revaya-dark-gray)',
        'revaya-dark-contrast': 'var(--revaya-dark-contrast)',
        'revaya-medium-gray': 'var(--revaya-medium-gray)',
        'revaya-light-gray': 'var(--revaya-light-gray)',
        'revaya-off-white': 'var(--revaya-off-white)',
        'revaya-success': 'var(--revaya-success)',
        'revaya-warning': 'var(--revaya-warning)',
        'revaya-error': 'var(--revaya-error)',
      },
    },
  },
  plugins: [],
};
export default config;
