const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: process.env.PORT || 6000,
    disableHostCheck: true,
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
});
