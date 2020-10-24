module.exports = [
  {
    mode: 'development',
    entry: './pm.js',
    output: {
      filename: 'pm.bundle.js',
    },
    // For runtime compilation of templates.
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
  },
];
