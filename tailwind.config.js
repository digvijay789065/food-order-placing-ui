/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  corePlugins: {
    scrollbarGutter: true,
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        // Hide all scrollbars
        '*': {
          '@apply': 'scrollbar-hide',
        },
        html: {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        body: {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}
