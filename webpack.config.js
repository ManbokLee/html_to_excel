const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'html_to_excel',
    libraryTarget: 'umd',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
