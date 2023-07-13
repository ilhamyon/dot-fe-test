/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#F5333F",
        "primary-red-darker": "#D92E39",
        "light-grey": "#C5C7D0",
        "grey": "#999999",
        "dark-blue": "#012846"
      },
    },
  },
  plugins: [],
}
