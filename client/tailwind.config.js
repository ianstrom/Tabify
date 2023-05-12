/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brownish: '#372d1f',
        navbar: '#1F2545',
        navbarbutton: '#1F3845',
        text: "#451F25"
      },
      // backgroundImage: {
      //   'background': 'linear-gradient(to bottom, #1d3557, #2a9d8f, $e9c46a, #f4a261, #ffa600, #e63946)'
      // }
    },
  },
  plugins: []
}

