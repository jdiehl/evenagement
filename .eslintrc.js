module.exports = {
  extends: [
    'next'
  ],
  settings: {
    'import/internal-regex': '^@src/'
  },
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'], 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'no-console': ['warn'],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-unreachable': ['warn'],
    'no-unused-vars': ['warn', { args: 'none' }],
    'quotes': ['warn', 'single'],
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 0,
    'require-await': 0,
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'react/jsx-curly-spacing': [2, { when: 'never', children: true }],
    camelcase: 0,
    curly: ['error', 'multi-line'],
    semi: ['error', 'never'],
  }
}
