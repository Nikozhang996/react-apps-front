module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix", "git add"],
  "*.{html,css,less,ejs,json}": ["prettier --write", "git add"],
};
