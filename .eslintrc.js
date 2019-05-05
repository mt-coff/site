module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
}
