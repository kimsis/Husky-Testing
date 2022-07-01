module.exports = {
  rules: {
    "header-max-length": [2, "always", 100],
    "subject-case": [2, "never", ["sentence-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "merge request",
      ],
    ],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\(([a-z]+)\)?\s?([A-Z]+-\d+):\s?(.*)$/,
      headerCorrespondence: ["type", "ticket", "subject"],
    },
  },
};
