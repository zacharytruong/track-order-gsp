const moduleRules = {
  'unused-imports/no-unused-imports': 'warn',
  'unused-imports/no-unused-vars': ['error'],
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'no-duplicate-imports': 'error',
  'no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['*../*'],
          message: 'Please import core modules from the ~/* path alias.',
        },
      ],
    },
  ],
};

module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['unused-imports', 'simple-import-sort', '@typescript-eslint'],
  rules: {
    curly: 'error',
    'dot-notation': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    ...moduleRules,
  },
};
