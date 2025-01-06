
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add this line if it isn't already there
  ],
  plugins: [
    require('daisyui'),
    // other plugins if any
  ],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }

