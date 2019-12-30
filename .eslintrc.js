module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'gridsome'
  ],
  extends: [
    'plugin:gridsome/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/no-v-html': 'off'
  }
};
