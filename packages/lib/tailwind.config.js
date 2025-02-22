// Tailwind CSS configuration (https://tailwindcss.com/docs/configuration)
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  mode: 'build',
  presets: [require(path.join(__dirname, './tailwindcss/tailwind.config'))],
  content: ['./package/**/*', 'tailwindcss/**/*'],
  prefix: 'maz-',
  corePlugins: {
    preflight: false,
    container: false,
  },
}
