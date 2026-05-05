/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0F',
          soft: '#161620',
          muted: '#5A5A6A',
        },
        bone: {
          DEFAULT: '#F5F1EA',
          soft: '#EFEAE0',
        },
        accent: {
          DEFAULT: '#C8A86B',
          dark: '#A6884F',
        },
        epinac: {
          DEFAULT: '#3F5B3A',
          deep: '#2A3F26',
        },
        plaine: {
          DEFAULT: '#1B2A4A',
          deep: '#0F1B33',
        },
      },
      fontFamily: {
        display: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      maxWidth: {
        wide: '1400px',
      },
    },
  },
  plugins: [],
};
