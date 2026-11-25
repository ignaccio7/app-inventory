/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "raleway": ["Raleway_600SemiBold"],
        "raleway-bold": ["Raleway_700Bold"],
        "roboto": ["Roboto_400Regular"],
        "roboto-medium": ["Roboto_500Medium"],
      },
      colors: {
        "primary-container": "#f4f1ea",
        "surface-lowest": "#ffffff",
        "surface-low": "#f6f3f2",
        "surface": "#f0eded",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#474740",
        "secondary": "#465d92",
        "tertiary": "#bc151b",
        "highlighter-yellow": "#FFFFA5",
      },
    },
  },
  plugins: [],
}


