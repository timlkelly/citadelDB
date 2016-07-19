var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [
      {
        test: /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          presets:['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.CITADEL_URL': "'http://localhost:9393'"
    })
  ]
};

module.exports = config;