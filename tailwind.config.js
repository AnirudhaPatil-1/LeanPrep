/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend:{
    theme:{
        extend:{
          'mystyle':{
            'input':'input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black mb-5',
            'label':'block text-start',
          },
        },
    },
  }
}