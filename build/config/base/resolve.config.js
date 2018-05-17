var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '../../../', dir)
}

console.log('path:',resolve('src/assets'));
module.exports = {
  extensions: ['.js', '.vue', '.json', '.less'],
  alias: {
     vue: 'vue/dist/vue.js',
    '@': resolve('src'),
    '@static': resolve('static'),
    '@assets': resolve('src/assets'),
    '@models': resolve('src/models'),
    '@views': resolve('src/views'),
    '@components': resolve('src/views/components'),
  }
}