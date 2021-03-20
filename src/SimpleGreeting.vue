<template>
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
</template>

<script>
export default {
  data() {
    return { name: "" };
  },
};
</script>

<style scoped>
p {
  font-family: sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
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
