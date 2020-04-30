module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
  open: true,
      port: 8080,
      proxy: {
    '/api': {
      target: 'http://jamkang.club/',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
        '^/api': ''
      }
    },
  }
}

}
