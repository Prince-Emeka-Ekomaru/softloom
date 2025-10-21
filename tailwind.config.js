/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softloom-green': '#0B3D2E',
        'softloom-yellow': '#D6BA73',
        'softloom-blue': '#0B3D2E',
        'softloom-dark-blue': '#202020',
        'softloom-cream': '#F5F1E6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

