/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        lato : ['Lato', 'sans-serif'],
        playfair : ['Playfair Display', 'sans-serif'],
      },
      colors: {
        'primary': "#FFD700",
        'secondary-1': "#5F461D",
        'secondary-2': "#FFB6C1",
        'tertiary-1': "#A8D8B9",
        'tertiary-2': "#FF6B6B",
        'tertiary-3': "#FF6B6B",

        'cream-yellow': "#FFD700",
        'chocolate-brown': "#5F461D",
        'pastel-pink': "#FFB6C1",
        'mint-green': "#A8D8B9",
        'pale-coral': "#FF6B6B",
        'toasty-beige': "#FF6B6B",

        'SoftCreamyYellow': "#FFFACD",
        'MutedMochaBrown': "#B0805A",
        'PaleBlushPink': "#FFD3E1",
        'SageGreen': "#C1E1C1",
        'SoftLavender': "#E6E6FA",
        'WarmBeige': "#F5F5DC",
        
        "white-400": "rgba(255, 255, 255, 0.80)"
      },

      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}