<template>
  <div id="app">
<!-- Top Bar -->
    <div id="nav">

    <!-- /Top Bar -->

    <!-- TOP NAV -->
    <header id="topNav"><!-- remove class="topHead" if no topHead used! -->
      <div class="container">

        <!-- Mobile Menu Button -->
        <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
          <i class="fa fa-bars"></i>
        </button>

        <!-- Logo text or image -->
        <a class="logo" href="/">
          <img src="./assets/sparqcropped.png" alt="Sparq" />
        </a>
        <!-- Top Nav -->
        <div class="navbar-collapse nav-main-collapse collapse pull-right">
          <nav class="">
            <ul class="nav nav-pills nav-main">

              <li>
                <a v-if="isUser()" class="styleColor">
                <router-link to="/trainers">Trainers</router-link>
                </a>
              </li>
              <li class="active">
                <a v-if="isUser()">
                  <router-link to="/usersappointments">Appointments</router-link>
                </a>
              </li>              
              <li class="active">
                <a v-if="isUser()">
                  <router-link to="/users/me">Profile</router-link>
                </a>
              </li>             
              <li class="active">
                <a v-if="isTrainer()">
                  <router-link to="/trainers/me">Profile</router-link>
                </a>
              </li>              
              <li class="active">
                <a v-if="isTrainer()">
                  <router-link to="/trainersappointments">Appointments</router-link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /Top Nav -->

      </div>
      <ul class="pull-right" id="signin">
        <li class="active" v-if="isLoggedIn()">
          <a>
            <router-link to="/logout">Sign Out</router-link>
          </a>
        </li>
        <li class="active" v-else="isLoggedOut()">
          <a>
            <router-link to="/userslogin">Sign In</router-link>
          </a>
        </li>              
      </ul>

    </header>
    <!-- /TOP NAV -->



    </div>
    <router-view/>
    <!-- FOOTER -->
    <footer>

      <!-- copyright , scrollTo Top -->
      <div class="footer-bar">
        <div class="container">
          <span class="copyright">Copyright &copy; Sparq, LLC . All Rights Reserved.</span>
          <a class="toTop" href="#topNav">BACK TO TOP <i class="fa fa-arrow-circle-up"></i></a>
        </div>
      </div>
      <!-- copyright , scrollTo Top -->


      <!-- footer content -->
      <div class="footer-content">
        <div class="container">

          <div class="row">


            <!-- FOOTER CONTACT INFO -->
              <div class="column col-md-5">
              <address class="font-opensans">
                <h3>Contact</h3>
                <ul>
                  <li class="footer-sprite address">
                    PO Box 21132<br />
                    Here Weare St, Melbourne<br />
                    Vivas 2355 Australia<br />
                  </li>
                  <li class="footer-sprite phone">
                    Phone: 1-800-565-2390
                  </li>
                  <li class="footer-sprite email">
                    <a href="mailto:support@yourname.com">support@yourname.com</a>
                  </li>
                </ul>
              </address>
            </div>
            <!-- /FOOTER CONTACT INFO -->


            <!-- FOOTER LOGO -->
<!--             <div class="column logo col-md-4 text-center">
              <div class="logo-content">
                <img class="animate_fade_in" src="assets/images/logo_footer.png" width="200" alt="" />
              </div>                      
            </div> -->
            <!-- /FOOTER LOGO -->


            <!-- FOOTER LATEST POSTS -->
            <!-- /FOOTER LATEST POSTS -->

          </div>

        </div>
      </div>
      <!-- footer content -->

    </footer>
    <!-- /FOOTER -->
  </div>
</template>

<style>
.nav {
 width: 300px !important;
 margin-right: -200px !important;
 text-align: right;
}
#signin {
  margin-right: 20px;
  margin-top: -43px;
  list-style-type: none;
}
a.logo {
  width: 115px;
}
.logo img {
  width: 100%;
  height: auto;
}
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
