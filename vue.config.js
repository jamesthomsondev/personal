module.exports = {
  runtimeCompiler: true,
  devServer: {
    http2: true,
    https: true,
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_mq.scss";`,
      },
    },
  },
};
