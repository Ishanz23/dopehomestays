module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: { '-1': '-1', '-2': '-2' },
      transformOrigin: {
        0: '0%',
      },
      backgroundImage: (theme) => ({
        'landing-cover': "url('/images/landing-cover.jpg')",
        'homestay-cover': "url('/images/homestay-cover.jpg')",
      }),
      blur: {
        px: '1px',
      },
    },
    minWidth: {
      0: '0',
      '1/10': '10%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33.3333%',
      '2/5': '40%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
