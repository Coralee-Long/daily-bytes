import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'indigo-dark-100': '#2e2969',
        'indigo-dark-200': '#231f4f',
        'indigo-dark-400': '#1b183d',
        'indigo-dark-600': '#14122e',
        'indigo-dark-800': '#0c0b1c',
        'indigo-dark-900': '#0b0a1c',
        'indigo-light-100': '#3a347a', // Lightest indigo close to indigo-dark-100
        'indigo-light-200': '#504b8b',
        'indigo-light-300': '#66619c',
        'indigo-light-400': '#7d77ad',
        'indigo-light-500': '#938dc0',
        'indigo-light-600': '#aaa4d3',
        'indigo-light-700': '#c1bbe5',
        'indigo-light-800': '#d8d2f2',
        'indigo-light-900': '#eeeafc', // Very light, almost white
        'white-100': '#e6e6eb',
        'white-200': '#d2d2d6',
        'white-400': '#bebec4',
        'white-600': '#a3a3ad',
        'white-800': '#848496',
      },
    },
  },
  plugins: [],
};

export default config;
