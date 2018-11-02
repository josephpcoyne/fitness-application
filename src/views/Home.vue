<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <router-link to="/userssignup">Signup</router-link>
    <br>
    <router-link to="/userslogin">Login</router-link>
    <br>
    <router-link to="/trainershome">Trainer Portal</router-link>
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
