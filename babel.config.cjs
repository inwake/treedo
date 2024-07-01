const path = require('path')

module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false
    }],
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
    ['module:metro-react-native-babel-preset', {'useTransformReactJSXExperimental': true}]
  ],
  plugins: [
    ['module-resolver', {
      cwd: 'packagejson',
      root: [path.resolve(__dirname)],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {'^react-native$': 'react-native-web'}
    }]
  ]
}
