import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import TrainerHome from "./views/TrainerHome.vue";
import UsersShow from "./views/UsersShow.vue";
import UsersEdit from "./views/UsersEdit.vue";
import Trainers from "./views/Trainers.vue";
import TrainersShow from "./views/TrainersShow.vue";
import Appointments from "./views/Appointments.vue";
import TrainerSignup from "./views/TrainerSignup.vue";
import UserSignup from "./views/UserSignup.vue";
import TrainerLogin from "./views/TrainerLogin.vue";
import UserLogin from "./views/UserLogin.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/trainerhome", name: "trainer-home", component: TrainerHome },
    { path: "/users/:id", name: "users-show", component: UsersShow },
    { path: "/users/:id/edit", name: "users-edit", component: UsersEdit },
    { path: "/trainers", name: "trainers", component: Trainers },
    { path: "/trainers/:id", name: "trainers-show", component: TrainersShow },
    { path: "/appointments", name: "appointments", component: Appointments },
    { path: "/usersignup", name: "user-signup", component: UserSignup },
    { path: "/userlogin", name: "user-login", component: UserLogin },
    {
      path: "/trainersignup",
      name: "trainer-signup",
      component: TrainerSignup
    },
    { path: "/trainerlogin", name: "trainer-login", component: TrainerLogin },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
