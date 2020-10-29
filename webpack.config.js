const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { esModule: false },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  entry: './index.js',

  // For runtime compilation of templates.
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
};
