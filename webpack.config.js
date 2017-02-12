module.exports = {
  entry: './content/js6/index.js',
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
    filename: './content/js/gvial.js',
  }
};