/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'templates/**/*.html.twig',
    'templates/*.html.twig',
    'assets/*.js',
    'assets/**/*.js',
  ],
  theme: {
    extend: {},
    data: {
      checked: 'ui~="checked"',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    boxShadow: {
      'xl': '0px 0px 35px 10px rgba(0, 0, 0, 0.3)',
    },
    
  },
  plugins: [],
}
