const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  name: 'www',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "www",
      // library: { type: "var", name: "www" },
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.jsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3001
  }
};
