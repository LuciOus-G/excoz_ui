module.exports = {
  purge: ['./pages/**/*.{js,vue}', './components/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xmp': '320px',
      'xml': '480px',
      '3xl': '1920px',
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      '1/5md': '801px',
      'sm': '640px'
    },
    extend: {
      height: theme => ({
        "h-5xl": "45rem",
      }),
    }
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
}
