module.exports = function(api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: '3',
          modules: false
        }
      ]
    ],
    plugins: [
      'lodash',
      'macros'
    ]
  }
}
