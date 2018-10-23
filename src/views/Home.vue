<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <router-link to="/signup">Signup</router-link>
    <br>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Sparq"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
