/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*{js,html,css}',
    './src/**/*.{js,ts,jsx,tsx,css}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      mx: '340px',
      xs: '418px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
