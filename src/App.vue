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
              <li><a href=""><router-link to="/">Home</router-link></a></li>

              <li><a href=""><router-link to="/trainers">Trainers</router-link></a></li>

              <li><a href=""><router-link to="/appointments">Appointments</router-link>
              </a></li>

              <li><a href="">Profile</a></li>

              <li><a href=""><router-link to="/signup">Signup</router-link></a></li>

              <li><a href=""><router-link to="/login">Login</router-link> </a></li>
              <li><a href=""><router-link to="/logout">Logout</router-link> </a></li>
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
