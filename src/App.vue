<template>
  <div id="app">
    <div id="nav">
      <nav>
        <div>
          <ul>
            <li id="logo"><router-link to="/">Sparq</router-link></li>
          </ul>
        </div>
         <div>
            <ul>
              <li v-if="isUser()"><router-link to="/trainers">Trainers</router-link></li>
              <li v-if="isUser()"><router-link to="/usersappointments">Appointments</router-link></li>
              <li v-else-if="isTrainer()"><router-link to="/trainersappointments">Appointments</router-link></li>
              <li v-else><router-link to="/userslogin">Login</router-link></li>
              <li v-else><router-link to="/userssignup">Signup</router-link></li>
              <li v-if="isUser()"><router-link to="/users/me">Profile</router-link></li>
              <li v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></li>
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
  isTrainer: function() {
    if(localStorage.getItem("trainer_id")) {
        return true;
      }
      return false;
    },  
    isUser: function() {
    if(localStorage.getItem("user_id")) {
        return true;
      }
      return false;
    },
  },
    computed: {}
  };
</script>
