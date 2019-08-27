const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
      
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
       test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
       test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ]
  },
  performance: {
    maxAssetSize: 400000,
    maxEntrypointSize: 400000,
    hints: 'error'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ]
};