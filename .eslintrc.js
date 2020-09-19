/*
http://eslint.cn/docs/user-guide/getting-started
https://prettier.io/docs/en/install.html
https://github.com/prettier/eslint-plugin-prettier
https://github.com/prettier/eslint-config-prettier#special-rules
*/
/*
module.exports = {
  extends: ["eslint-config-ali", "prettier", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
  globals: {
    React: "readable",
  },
};
*/

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  // parser: "@typescript-eslint/parser",
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    strict: 0,
  },
};
