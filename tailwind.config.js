/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '0px',
      },
      colors: {'primary-orange': '#f25d00'},
      backgroundImage: {
        'herobg': "url('/src/assets/images/imageVS.png')",

      }
    },
  },
  plugins: [],
}

