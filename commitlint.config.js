module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(\(revert|fix|merge request|refactor|build\))\s?([A-Z]+-\d+):\s?(.*)$/,
      headerCorrespondence: ["type", "ticket", "subject"],
    },
  },

  rules: {
    "header-max-length": [2, "always", 100],
  },
};
