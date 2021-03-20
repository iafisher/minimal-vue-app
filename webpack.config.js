const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            // https://github.com/vuejs/vue-style-loader/issues/46#issuecomment-670624576
            options: { esModule: false },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
  },

  // For runtime compilation of templates.
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
};
