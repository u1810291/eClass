module.exports = {
  env: {
    browser: true,
    jasmine: true,
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "no-shadow": "off",
    "react/no-children-prop": "off",
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-underscore-dangle": 0,
    "react/prop-types": 0,
  },
};
