var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var extractSASS = new ExtractTextPlugin('./public/css/[name].scss');

module.exports = [{
  entry: {
    app: "./src/js/entry.js"
  },
  output: {
      path: './public/js',
      publicPath: '/js/',
      filename: "[name].js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2'],
          compact: false
        }
      }
    ]
  },
  plugins: [
    /* use jQuery as Global */
    new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
    })
    //new webpack.optimize.CommonsChunkPlugin('common.js'),
    //new webpack.optimize.DedupePlugin(),
    /* https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugina */
    /*, new webpack.optimize.UglifyJsPlugin({
      compress:true,
      debug:true
    }),*/
    //new webpack.optimize.AggressiveMergingPlugin()
  ],
  resolve: {
    // require()する時に拡張子を省略可能にします。
    extensions: ['', '.js']
  },
  eslint: {
    configFile: './.eslintrc'
  }
}, {
  entry: {
    app: "./src/scss/entry.scss"
  },
  output: {
      path: './public/css',
      publicPath: '/css/',
      filename: "[name].css"
  },
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    // require()する時に拡張子を省略可能にします。
    extensions: ['', '.css']
  },
}];
