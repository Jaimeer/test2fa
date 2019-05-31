module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:jest/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/standard',
  ],
  rules: {
    'no-return-await': 0,
    'no-var': 2,
    'prefer-const': 2,
    'no-debugger': 2,
    'no-console': [2, { allow: ['info', 'error'] }],
    'vue/require-v-for-key': 0,
    'vue/valid-v-on': 0,
    'vue/max-attributes-per-line': [2, { singleline: 2 }],
  },
}
