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
      fontSize: {
        xs: '1.2rem', // 12px
        sm: '1.4rem', // 14px
        base: '1.6rem', // 16px (default size)
        lg: '1.8rem', // 18px
        xl: '2.0rem', // 20px
        '2xl': '2.4rem', // 24px
        '3xl': '3.0rem', // 30px
        '4xl': '3.6rem', // 36px
        '5xl': '4.8rem', // 48px
        '6xl': '6.0rem', // 60px
      },
      fontWeight: {
        thin: '100',
        extraLight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        extraBold: '800',
        black: '900',
      },
      spacing: {
        '0': '0px',
        '1': '0.4rem', // 4px
        '2': '0.8rem', // 8px
        '3': '1.2rem', // 12px
        '4': '1.6rem', // 16px
        '5': '2.0rem', // 20px
        '6': '2.4rem', // 24px
        '8': '3.2rem', // 32px
        '10': '4.0rem', // 40px
        '12': '4.8rem', // 48px
        '16': '6.4rem', // 64px
        '20': '8.0rem', // 80px
        '24': '9.6rem', // 96px
        '32': '12.8rem', // 128px
        '40': '16.0rem', // 160px
        '48': '19.2rem', // 192px
        '56': '22.4rem', // 224px
        '64': '25.6rem', // 256px
      },
    },
  },
  plugins: [],
};

export default config;
