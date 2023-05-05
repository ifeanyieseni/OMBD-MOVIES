/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

// https://huemint.com/brand-2/#palette=fafffb-8d4f4f-f83b00
