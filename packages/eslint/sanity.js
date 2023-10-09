/** @type {import("eslint").Config} */
module.exports = {
    extends: "@sanity/eslint-config-studio",
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn"
    }
  }
  