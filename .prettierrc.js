module.exports = {
  ...require('gts/.prettierrc.json'),
  rules: {
    quotes: [
      'warn',
      'single',
      {avoidEscape: true, allowTemplateLiterals: true},
    ],
  },
};
