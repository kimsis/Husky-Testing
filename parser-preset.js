module.exports = {
  parserOpts: {
    headerPattern:
      /^(\(revert|fix|merge request|refactor|build\))\s?([A-Z]+-[0-9]+):\s?(.*)$/,
    headerCorrespondence: ["type", "ticket", "subject"],
  },
};
