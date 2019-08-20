module.exports = {
  plugins: [
    'vue',
    'compat',
    'lodash-fp'
  ],
  extends: [
    'eslint:recommended',
    'plugin:lodash-fp/recommended',
    'plugin:vue/essential'
  ],
  rules: {
  },
  parserOptions: {
    'ecmaVersion': 2018//,
    // 'ecmaFeatures': {
    //   'experimentalObjectRestSpread': true
    // }
  },
}
