import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00FF85',
          cyan: '#22D3EE',
        },
      },
    },
  },
  plugins: [],
};

export default config;
