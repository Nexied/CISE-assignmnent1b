module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  "eslintConfig": {
    "extends": "react-app"   
  },
  rules: {
    semi: 0,
    'no-console': 'off',
    'linebreak-style': 0,
    'no-multiple-empty-lines': [2, { max: 99999, maxEOF: 0 }],
  },
};
