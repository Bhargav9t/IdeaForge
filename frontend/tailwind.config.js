/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The "Cloud Architect" Palette
        ceramic: {
          light: "#FFFFFF", // Pure white highlights
          base: "#F5F5F0", // Warm off-white/beige background
          dark: "#E8E8E1", // Recessed areas
        },
        cloud: {
          blue: "#D6E4FF", // Calm, aesthetic light blue
          accent: "#4A90E2", // Stronger blue for active states/buttons
        },
        ink: {
          dark: "#2D3748", // Primary text (soft black)
          muted: "#718096", // Secondary text
        },
      },
      boxShadow: {
        // Skeuomorphic "Lifted" shadow for light mode (Ceramic feel)
        "skeuo-outer": "10px 10px 20px #D5D5D0, -10px -10px 20px #FFFFFF",

        // Skeuomorphic "Pressed" shadow for light mode (Recessed inputs)
        "skeuo-inner":
          "inset 6px 6px 12px #D5D5D0, inset -6px -6px 12px #FFFFFF",

        // Soft Glassmorphism depth
        "glass-depth": "0 8px 32px 0 rgba(136, 152, 170, 0.15)",
      },
    },
  },
  plugins: [],
};
