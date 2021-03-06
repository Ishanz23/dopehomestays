module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        landing: ['"Exo 2"', 'sans-serif'],
      },
      zIndex: { '-1': '-1', '-2': '-2' },
      transformOrigin: {
        0: '0%',
      },
      backgroundImage: (theme) => ({
        'landing-cover': "url('/images/landing-cover.jpg')",
        'homestay-cover': "url('/images/homestay-cover.jpg')",
        'homestay-art': "url('/images/homestay-cover-art.png')",
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
    minHeight: {
      4: '1rem',
      8: '2rem',
      16: '3rem',
      24: '4rem',
      28: '4.5rem',
      32: '5rem',
      header: '5vh',
      body: '95vh',
      footer: '5vh',
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
