module.exports = {
  publicPath: './',
  outputDir: '../chatty-chat-chat/www',
  assetsDir: './',
  devServer: {
    proxy: {
      "/base": {
        target: "http://192.168.1.24:3001",
        secure: true,
        changeOrigin: true
      }
    }
  }
}
