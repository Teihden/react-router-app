import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: [ "@commitlint/config-conventional" ],
  rules: {
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
        "ref",
        "revert",
        "style",
        "test",
      ],
    ],
    "header-max-length": [ 2, "always", 100 ],
    "header-full-stop": [ 2, "never", "." ],
    "subject-empty": [ 2, "never" ],
    "subject-full-stop": [ 2, "never", "." ],
  },
};

export default Configuration;
