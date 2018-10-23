import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Trainers from "./views/Trainers.vue";
import TrainersShow from "./views/TrainersShow.vue";
import Appointments from "./views/Appointments.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },

    { path: "/trainers", name: "trainers", component: Trainers },
    { path: "/trainers/:id", name: "trainers-show", component: TrainersShow },
    { path: "/appointments", name: "appointments", component: Appointments },

    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
