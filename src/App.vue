<template>
  <main>
    <h1>Minimal Vue App</h1>
    <p>
      This is a minimal example of a Vue 3 app. It builds with
      <a href="https://webpack.js.org/">Webpack</a> into a single bundled
      JavaScript file that can be used by any backend framework.
    </p>

    <p>Clone it to jump-start your own Vue project:</p>

    <pre><code><span class="prompt">&gt;  </span>git clone https://github.com/iafisher/minimal-vue-app.git
<span class="prompt">&gt;  </span>cd minimal-vue-app
<span class="prompt">&gt;  </span>npm install
<span class="prompt">&gt;  </span>npm run build</code></pre>

    <p>Then, add</p>
    <pre><code>&lt;script src="dist/bundle.js"&gt;&lt;script&gt;</code></pre>
    <p>
      to your HTML template, and start editing the files in the
      <code>src/</code> directory. Or, open <code>index.html</code> in your
      browser to see this page.
    </p>

    <p>
      The source code is available at
      <a href="https://github.com/iafisher/minimal-vue-app"
        >github.com/iafisher/minimal-vue-app</a
      >.
    </p>

    <hr />

    <!-- Use another Vue component. -->
    <simple-greeting />
  </main>
</template>

<script>
import SimpleGreeting from "./SimpleGreeting.vue";

export default {
  components: { SimpleGreeting },
};
</script>

<style scoped>
* {
  font-family: sans-serif;
}

main {
  max-width: 42rem;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
}

pre {
  text-align: left;
  background-color: whitesmoke;
  padding: 5px 10px;
  line-height: 1.5;
}

code {
  font-family: monospace;
}

.prompt {
  user-select: none;
  opacity: 25%;
}
</style>
