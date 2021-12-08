module.exports = {
  extends: [
    'next'
  ],
  ignorePatterns: ['node_modules', '.next'],
  plugins: [
    'evenagement'
  ],
  settings: {
    'import/internal-regex': '^@(src|community|event|main|ui|user)/'
  },
  rules: {
    '@next/next/no-img-element': 0,
    'arrow-parens': 0,
    'camelcase': 0,
    'comma-dangle': 0,
    'curly': ['error', 'multi-line'],
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'], 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'no-console': ['warn'],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-unreachable': ['warn'],
    'no-unused-vars': ['warn', { args: 'none' }],
    'quotes': ['warn', 'single'],
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 0,
    'require-await': 0,
    'semi': ['error', 'never'],
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'evenagement/separate-ui-components': 0,
    'evenagement/ui-has-storybook': 2
  }
}
