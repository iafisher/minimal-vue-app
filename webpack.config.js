const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  entry: './index.js',
  // output: {
  //   filename: 'bundle.js',
  // },
  // For runtime compilation of templates.
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
};
