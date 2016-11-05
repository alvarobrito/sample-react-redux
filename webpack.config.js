var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'client'),
    outhPath = path.join(__dirname, 'dist');

module.exports = {
  entry: [path.join(entryPath, 'index.js')],
  output: {
    path: outhPath,
    filename: 'bundle.js',
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx
        include: entryPath,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., babel?cacheDirectory=<path>
        loader: 'babel-loader',
        exclude: /node_modules/,
        // Parse only app files! Without this it will go through
        // the entire project. In addition to being slow,
        // that will most likely result in an error.
      },
    ],
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  //     },
  //   }),
  // ],
  devServer: {
    historyApiFallback: true,
    contentBase: outhPath,
  },
};
