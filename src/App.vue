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
    <pre><code>&lt;script src="dist/main.js"&gt;&lt;script&gt;</code></pre>
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

    <p>To prove this isn't just a static HTML page...</p>
    <p>
      <label
        >Enter your name and Vue will say hello:
        <input v-model="name" autocomplete="off" spellcheck="false"
      /></label>
    </p>
    <p v-show="name.length > 0" class="greeting">
      Hello, <span class="festive">{{ name }}</span
      >!
    </p>
  </main>
</template>

<script>
module.exports = {
  data() {
    return { name: "" };
  },
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

input {
  font-size: 1.2rem;
}

.greeting {
  margin-top: 20px;
  font-size: 1.4rem;
  text-align: center;
}

.festive {
  color: #ff5722;
  font-weight: bold;
}
</style>
