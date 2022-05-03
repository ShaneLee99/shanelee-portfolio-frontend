module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  mode: "jit",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Background': '#101010',
      'SecondryBackground': '#151515',
      'Text': "#ffffff",
      'FirstColour': "#0ea5e9",
      'SecondryColour': "#10b981",
      'required': "#ef4444"
    },
    extend: {
      fontFamily: {
        'rubik': ['"rubik"'],
        'poppins': ['poppins'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
