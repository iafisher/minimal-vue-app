Minimal example of a Vue app using NPM, without all the bells and whistles that the Vue CLI adds.Produces a bundled JavaScript file suitable for use in an existing web application.

```
git clone https://github.com/iafisher/minimal-vue-app.git
cd minimal-vue-app
npm install
npm run build
```

Then open `index.html` in a browser.

Expected result: 'Hello, world!' from `components/App.vue`.

Actual result: No visible output, and a console warning from Vue that the `App` component is missing a template.
