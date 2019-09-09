module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_mq.scss";`
      }
    }
  }
}