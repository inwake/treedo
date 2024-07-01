const {getDefaultConfig} = require('@react-native/metro-config')
const path = require('path')

// Rest of the code...

// const {mergeConfig} = require('metro-config')
const {resolver, ...defaults} = getDefaultConfig(path.resolve(__dirname))

// console.log(path.join(__dirname, 'node_modules/react-native'))

module.exports = {...defaults,
  projectRoot: path.resolve(__dirname),
  resolver: {...resolver,
    sourceExts: [...resolver.sourceExts, '.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.json'],
    nodeModulePaths: [path.resolve(__dirname, 'node_modules')]}}
