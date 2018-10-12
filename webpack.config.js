var path = require('path');
var BASE_DIR = path.resolve(__dirname, './');
var BUILD_DIR = path.resolve(__dirname, './dist/');
var APP_DIR = path.resolve(__dirname, './src');

const webpack = require('webpack');

//plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let cleanOptions = {
  root:     BASE_DIR,
  verbose:  true,
  dry:      false
};

const isProduction = (process.env.NODE_ENV ==='production') ? true : false;

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  output: {
    filename: 'js/build-bundle.js',
    publicPath: './static/',
    path: BUILD_DIR
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: process.env.PORT + 1,
  //   open: true,
  //   proxy: {
  //     "/api": `http://localhost:${process.env.PORT}`
  //   }
  // },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]',
          publicPath: `${APP_DIR}/assets/img`,
        },
        include: `${APP_DIR}/assets/img`
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_DIR], cleanOptions),
    // new HtmlWebPackPlugin({
    //   title: 'wp4test',
    //   template: './public/index.html',
    //   minify: {
    //     html5: true,
    //     removeComments: isProduction,
    //     collapseWhitespace: isProduction,
    //     preserveLineBreaks: true,
    //     decodeEntities: true,
    //   },
    // }),
    new OptimizeCSSAssetsPlugin({}),
    new webpack.LoaderOptionsPlugin({
      minimize: isProduction
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/build.css",
      chunkFilename: "css/[id].css"
    }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
    ]
  }
};