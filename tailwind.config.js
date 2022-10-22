/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    backgroundColor: ['hover', 'active'],
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#f84f55",
          "secondary": "#df2774",
          "accent": "#212425",
          "neutral": "#3D4451",
          "base-100": "#111111",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
        light: {
          "primary": "#f84f54",
          "secondary": "#de2674",
          "accent": "#f3f6f6",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#0072b1",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        Comforter: ["Comforter Brush", "cursive"],
        Secular: ["Secular One", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
