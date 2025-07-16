// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
 "fox-orange": '#fca17d',
            "fox-purple": '#b28dff',
            "fox-teal": '#8fe3cf',
            "fox-rose": '#fcd5ce',
            "fox-pink": '#ffb6c1',
           "fox-beige": '#F5F5DC',
           "fox-orange": '#ffd6a5',
      },
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
});
