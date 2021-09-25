/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//
//
const devServer = require('./webpack/devServer');
const {
  appIndex,
  distPath,
  sharedSrc,
  mobileAppSrc,
  appTemplate,
  publicFolder,
  variablesPath,
} = require('./constants');
const { appSrc } = require('./constants');

const jsRegExp = /\.js(x?)$/;
const styleRegExp = /s?(a|c)?ss$/;

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production';

  const config = {
    mode: 'production',
    entry: appIndex,
    devtool: isProd ? 'source-map' : false,
    output: {
      path: distPath,
      filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
      clean: true,
      publicPath: '/',
    },
    devServer,
    module: {
      rules: [
        {
          test: jsRegExp,
          include: [appSrc, mobileAppSrc, sharedSrc],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: styleRegExp,
          include: [appSrc, mobileAppSrc, sharedSrc],
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProd,
                esModule: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProd,
                data: `@import "${variablesPath}";`,
                includePaths: [variablesPath],
              },
            },
          ],
        },
        {
          test: /\.(jp(e?)g|webp|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[name].[hash:6].[ext]',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
            },
            {
              loader: 'file-loader',
              options: {
                name: 'assets/icons/[name].[hash:6].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@test/shared': sharedSrc,
        '@test/mobile_app': mobileAppSrc,
      },
      extensions: ['.js', '.json', '.jsx', '.scss'],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: publicFolder,
            globOptions: {
              ignore: appTemplate,
            },
            noErrorOnMissing: true,
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: appTemplate,
        inject: 'body',
      }),
      isProd
        ? new MiniCssExtractPlugin({
            filename: isProd ? 'css/[name].[hash].css' : 'css/[name].css',
          })
        : null,
      isProd ? new UglifyJsPlugin() : null,
    ].filter(Boolean),
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  };

  return config;
};
