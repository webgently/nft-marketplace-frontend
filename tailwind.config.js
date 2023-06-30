/** @type {import('tailwindcss').Config} */

function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

function range1(start, end, increment = 10) {
  const count = Math.floor((end - start + 1 / increment) * increment);
  return Array(count).fill(0).map((_, idx) => start + idx / increment);
}

const minFont = 5;
const maxFont = 80;

const minPixel = 0;
const maxPixel = 1500;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    screens: {
      sx: '350px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',

      mobile: '600px',
      laptop: '900px',
      desktop: '1200px',
    },

    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        unset: '#00000000',

        baseBg: '#2B2B2B',
        comBg: '#3B3B3B',
        btnBg: '#A259FF',
      },
    },

    fontSize: {
      ...range(minFont, maxFont).reduce((merged, f) => (
        { ...merged, [f]: `${f}px !important` }
      ), {}),

      ...range1(0.5, 5, 10).reduce((merged, f) => (
        { ...merged, [f + 'r']: `${f}rem !important` }
      ), {})
    },

    spacing: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
        { ...merged, [f]: `${f}px !important` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
        { ...merged, [f + 'vw']: `${f}vw !important` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
        { ...merged, [f + 'vh']: `${f}vh !important` }
      ), {})
    },

    maxWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
        { ...merged, [f]: `${f}px !important` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
        { ...merged, [f + 'vw']: `${f}vw !important` }
      ), {}),
    },

    minWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
        { ...merged, [f]: `${f}px !important` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
        { ...merged, [f + 'vw']: `${f}vw !important` }
      ), {}),
    },

    maxHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
        { ...merged, [f]: `${f}px !important` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
        { ...merged, [f + 'vh']: `${f}vh !important` }
      ), {})
    },

    minHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
        { ...merged, [f]: `${f}px !important` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
        { ...merged, [f + 'vh']: `${f}vh !important` }
      ), {})
    },
  },

  plugins: [],
};
