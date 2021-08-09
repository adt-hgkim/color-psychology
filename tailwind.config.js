module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte', './src/*.svelte'],
  },
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: { center: true },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
