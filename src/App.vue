<template>
  <div id="app">
    <div id="nav">
      <nav>
        <div>
          <ul>
            <li id="logo"><a href=""><router-link to="/">Sparq</router-link></a></li>
          </ul>
          </div>
          <div>
            <ul>
              <li v-if="isLoggedIn()"><router-link to="/trainers">Trainers</router-link></li>
              <li v-if="isLoggedIn()""><router-link to="/appointments">Appointments</router-link>
              </li>
              <li v-if="isLoggedIn()"><router-link to="/users/me">Profile</router-link></li>
              <li v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link> </li>
              <li v-else><router-link to="/login">Login</router-link></li>
              <li v-else><router-link to="/signup">Signup</router-link></li>

          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>


</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  margin-bottom: 30px;
}
#logo {
  color: orange;
}
/*
#nav a {
  color: #2c3e50;
}
*/
/*#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>

<script>
export default {
methods: {
  isLoggedIn: function() {
    if(localStorage.getItem("jwt")) {
        return true;
      }
      return false;
    },
  },
    computed: {}
  };
</script>
