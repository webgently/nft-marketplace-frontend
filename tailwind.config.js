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

const minFontWeight = 100;
const maxFontWeight = 1000;

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    screens: {
      '2xs': '320px',
      xs: '375px',
      sm: '600px',
      md: '840px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        primary: '#2B2B2B',
        second: '#3B3B3B',
        third: '#858584',
        purple: '#A259FF'
      },
    },

    fontWeight: {
      ...range(minFontWeight, maxFontWeight).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {})
    },

    fontSize: {
      ...range(minFont, maxFont).reduce((merged, f) => (
          { ...merged, [f]: `${f}px` }
      ), {}),

      ...range1(0.5, 5, 10).reduce((merged, f) => (
          { ...merged, [f + 'r']: `${f}rem` }
      ), {})
    },

    spacing: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
          { ...merged, [f]: `${f}px` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
          { ...merged, [f + 'vw']: `${f}vw` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
          { ...merged, [f + 'vh']: `${f}vh` }
      ), {})
    },

    maxWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
          { ...merged, [f]: `${f}px` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
          { ...merged, [f + 'vw']: `${f}vw` }
      ), {}),
    },

    minWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
          { ...merged, [f]: `${f}px` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
          { ...merged, [f + 'vw']: `${f}vw` }
      ), {}),
    },

    maxHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
          { ...merged, [f]: `${f}px` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
          { ...merged, [f + 'vh']: `${f}vh` }
      ), {})
    },

    minHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => (
          { ...merged, [f]: `${f}px` }
      ), {}),

      ...range(1, 100).reduce((merged, f) => (
          { ...merged, [f + 'vh']: `${f}vh` }
      ), {})
    },
  },

  plugins: [],
};
