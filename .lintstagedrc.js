module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix", "tsc --noEmit"],
  "*.{json,md}": ["prettier --write"],
};
