
var webpack = require('webpack');
//
// module.exports = {
//   context: __dirname,
//   devtool: false,
//   entry: './js/scripts.js',
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015'],
//           plugins: ['transform-decorators-legacy']
//         }
//       }
//     ]
//   },
//   output: {
//     path: __dirname + '/js',
//     filename: 'scripts.min.js'
//   }
//
// };

// development ----------------------------------------------------
var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  devtool: false,
  entry: './js/scripts.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'scripts.min.js'
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: false,
    // proxy: {
    //   '/medsforlife/*': {
    //     target: 'http://projectsgono.com',
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ]
};
