/** @type {import('tailwindcss').Config} */
const customPx = Array(2000)
  .fill("1")
  .map((item, index) => ({ [index]: `${index}px` }))
  .reduce((pre, curr) => ({ ...pre, ...curr }));
const customText = Array(2000)
  .fill("1")
  .map((item, index) => ({ [`text-${index}`]: `${index}px` }))
  .reduce((pre, curr) => ({ ...pre, ...curr }));
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: customPx,
    extend: {},
  },
  fontSize: customText,
  plugins: [],
};
