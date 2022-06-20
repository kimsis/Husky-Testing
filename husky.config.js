const runYarnLock = "yarn install --frozen-lockfile";

module.exports = {
  hooks: {
    "post-checkout": `if [[ $HUSKY_GIT_PARAMS =~ 1$ ]]; then ${runYarnLock}; fi`,
    "post-merge": runYarnLock,
    "post-rebase": "yarn install",
    "pre-commit": "yarn lint-staged",
    "commit-msg": 'npx --no -- commitlint --edit "${1}"\n',
  },
};
