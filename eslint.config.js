import eslint from 'eslint'
import eslintJs from '@eslint/js'
import stylisticEslint from '@stylistic/eslint-plugin-plus'
import reactNative from 'eslint-plugin-react-native'
import react from 'eslint-plugin-react'
import security from 'eslint-plugin-security'
import xss from 'eslint-plugin-xss'

import rnPlugin from 'eslint-plugin-react-native'
import rnPluginRecommended from 'eslint-plugin-react/configs/recommended.js'

const rnPluginGlobals = rnPlugin.environments['react-native'].globals
const rnPluginAll = rnPlugin.rulesConfig

export default [{
  // ...reactRecommendedPatched,
  ...eslintJs.configs.recommended,
  ...xss.configs.recommended,
  plugins: {eslint, stylisticEslint, react, 'react-native': reactNative, security},
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  ignores: ["node_modules/*", "**/*.config.js"],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    parserOptions: {
      ecmaFeatures: {jsx: true}},
    globals: rnPluginGlobals
  },
  'settings': {
    'react': {'version': 'detect'}
  },
  rules: {
    ...rnPluginRecommended.rules,
    ...rnPluginAll.rules,
    ...security.configs.recommended.rules,
    'indent': [
      'error',
      2,
      {MemberExpression: 'off',
        SwitchCase: 1,
        flatTernaryExpressions: false}
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-tabs': ['error', {allowIndentationTabs: false}],
    'no-mixed-spaces-and-tabs': ['error', true],
    'no-multiple-empty-lines': ['error'],
    'func-style': ['error', 'declaration'],
    'semi': [
      'error',
      'never'
    ],
    'no-extra-semi': 'error',
    'semi-spacing': [
      'error',
      {before: false, after: true}
    ],
    'quotes': [
      'error',
      'single',
      {allowTemplateLiterals: true}
    ],
    'no-trailing-spaces': ['error'],
    'comma-dangle': [
      'error',
      'never'
    ],
    'block-spacing': [
      'error',
      'never'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'never'
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'keyword-spacing': [
      'error', {
        before: true,
        after: true
      }
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'object-curly-newline': [
      'error',
      {'consistent': true}
    ],
    'array-bracket-newline': [
      'error',
      'consistent'
    ],
    'no-unused-vars': [
      'warn',
      {
        caughtErrors: 'all',
        vars: 'local',
        ignoreRestSiblings: true
      }
    ],
    'no-console': [
      'warn', {allow: ['info', 'warn', 'error']}
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {maximum: 1}
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0
  }
}]
