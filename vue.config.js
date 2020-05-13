module.exports ={
    runtimeCompiler: true,
    proxy: {
        '/api': {
            target: 'http://fanyi.youdao.com/translate',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
};