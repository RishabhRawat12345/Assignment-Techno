import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  darkMode: "class", // Use 'media' if you want dark mode to follow system settings
  theme: {
    extend: {}, // Add custom styles here
  },
  plugins: [
    tailwindcss(),
  ],
})