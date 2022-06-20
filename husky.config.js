module.exports = {
  hooks: {
    "post-merge": "yarn install --frozen-lockfile",
    "post-rebase": "yarn install",
    "pre-commit": "yarn lint-staged",
    "commit-msg": 'npx --no -- commitlint --edit "${1}"\n',
  },
};
