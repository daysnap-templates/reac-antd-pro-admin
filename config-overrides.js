// config-overrides.js文件内容：
const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    src: path.resolve(__dirname, 'src'),
    '@': path.resolve(__dirname, 'src'),
  }),
)
