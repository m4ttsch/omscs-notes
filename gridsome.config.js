// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: './src/assets/images/favicon.png',
  siteName: 'OMSCS Notes',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'notes/**/!(README)*.md',
        typeName: 'Note'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }
  ],
  templates: {
    Note: '/:course/:lecture'
  }
}
