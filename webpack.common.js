const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico|woff|woff2|eot|ttf)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }]
    })
  ]
};
