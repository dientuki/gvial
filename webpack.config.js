module.exports = {
  entry: './content/js/index.js',
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|content)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    filename: './output/js/index.js',
  }
};