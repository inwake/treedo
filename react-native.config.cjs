const path = require('path')

module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    root: path.resolve(__dirname),
    sourceExts: ['js', '.cjs', '.mjs', 'jsx', 'ts', 'tsx', 'json']
  }
}
