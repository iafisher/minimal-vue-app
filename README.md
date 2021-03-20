# Minimal Vue app
[Vue](https://vuejs.org/) is a great framework for frontend web development, but it comes with an opinionated CLI build tool that can be hard to integrate into existing projects.

This repository is a minimal example of a Vue 3 app with [Webpack](https://webpack.js.org/) that doesn't require the Vue CLI. It solves several tricky configuration issues so that Vue features like runtime template compilation, single file components and component-scoped CSS work out of the box.

Clone it to jump-start your own Vue project:

```
git clone https://github.com/iafisher/minimal-vue-app.git
cd minimal-vue-app
npm install
npm run build
```

Then, add

```
<script src="dist/bundle.js"></script>
```

to your HTML template, and start editing the files in the `src/` directory.

Or, if you want to add Vue to an existing project, read through `webpack.config.js` to see how to configure Webpack to work with Vue.
