/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111',
        'background-secondary': '#1A1A1A',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A1A1A1',
        primary: '#7C3AED',
        'primary-hover': '#9F67FF',
        'primary-subtle': '#2B1E4B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

