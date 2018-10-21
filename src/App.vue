<template>
  <div id="app">
    <div id="nav">
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href=""><router-link to="/">Home</router-link></a></li>
            <li class="uk-parent"><a href=""><router-link to="/trainers">Trainers</router-link></a></li>
            <li><a href="">Appointments</a></li>
            <li><a href="">Profile</a></li>
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
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
