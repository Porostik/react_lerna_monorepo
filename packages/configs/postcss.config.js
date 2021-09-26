/* eslint-disable*/
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      browsers: 'last 2 versions',
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
