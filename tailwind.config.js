export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["animate-bubble"],
  theme: {
    extend: {
      colors: {
        "Squareable India-blue": "#0A1E5E",
        "Squareable India-violet": "#4B2A85",
        "Squareable India-gold": "#D4AF37",
        "Squareable India-bg": "#F8F9FD",
        "Squareable India-text": "#1C1C1E",
      },
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.7" },
          "100%": { transform: "translateY(-100vh) scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        bubble: "bubble 4s linear infinite",
      },
    },
  },
  plugins: [],
};
