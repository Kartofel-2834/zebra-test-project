const { defineConfig } = require("@vue/cli-service");

const { NODE_ENV } = process.env;

function getPublicPath() {
  return NODE_ENV === "production"
    ? "https://kartofel-2834.github.io/zebra-test-project/"
    : "/";
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: getPublicPath(),
});
