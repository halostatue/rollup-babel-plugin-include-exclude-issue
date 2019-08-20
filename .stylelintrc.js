module.exports = {
  'defaultSeverity': 'warning',
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  'rules': {
    'plugin/no-unsupported-browser-features': true,
    'no-empty-source': null
  },
  'plugins': [
    'stylelint-no-unsupported-browser-features'
  ],
  'processors': [
    'stylelint-processor-html'
  ]
}
