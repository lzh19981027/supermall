// 导出模块
module.exports = {
  configureWebpack: {
    // resolve：解决路径相关的
    resolve: {
      extensions: [],
      // 配置别名，默认：'@': 'src'
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',

      }
    }
  }
}
