const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const shared = path.join(__dirname, '..', 'shared');
const mobileApp = path.join(__dirname, '..', 'mobileApp');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[hash].js',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.join(mobileApp, 'src'),
          path.join(shared, 'src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@test/shared': path.join(shared, 'src'),
      '@test/mobile_app': path.join(mobileApp, 'src'),
    },
    extensions: ['.js', '.json', '.jsx', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      inject: 'body',
    }),
  ],
};
