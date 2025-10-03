
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: { legionBlue: '#3A6EA5', legionGray: '#3A3A3A' },
      boxShadow: { smooth: '0 10px 25px rgba(0,0,0,0.08)' }
    }
  },
  plugins: []
};
