module.exports ={
  devServer: {
    proxy: {
        '/api': {
            target: 'http://fanyi.youdao.com/',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
  }
}