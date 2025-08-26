/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"
];
export const theme = {
  extend: {
    fontFamily: {
      bricolage: ['Bricolage Grotesque', 'sans-serif'],
    },
  },
};
export const plugins = [];