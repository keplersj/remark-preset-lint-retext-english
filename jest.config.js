export default {
  projects: [
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testMatch: ["<rootDir>/**/*.js"],
    },
  ],
};
