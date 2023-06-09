module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next'],
  rules: {
    semi: ['error', 'always'],
    '@next/next/no-img-element': 'off',
    'prettier/prettier': 2,
  },
};
