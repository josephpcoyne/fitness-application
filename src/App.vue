<template>
  <div id="app">
<!-- Top Bar -->
    <div id="nav">
     <header id="topHead">
      <div class="container">

        <!-- PHONE/EMAIL -->
        <!-- SIGN IN -->
        <div class="pull-right nav signin-dd">
          <a v-if="isLoggedIn()"><router-link to="/logout">Logout</router-link></a>
          <a v-else><router-link to="/userslogin">
            <i class="fa fa-users"></i>
            <span> Sign In</span>
          </router-link></a>

        </div>
        <!-- /SIGN IN -->
        <!-- LINKS -->
        <div class="pull-right nav hidden-xs">
          <a v-if="isLoggedIn()"><router-link to="/users/me">Profile</router-link></a>

        </div>
        <!-- /LINKS -->
      </div>
    </header>
    <!-- /Top Bar -->

    <!-- TOP NAV -->
    <header id="topNav" class="topHead"><!-- remove class="topHead" if no topHead used! -->
      <div class="container">

        <!-- Mobile Menu Button -->
        <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
          <i class="fa fa-bars"></i>
        </button>

        <!-- Logo text or image -->
        <a class="logo" href="index.html">
        <router-link to="/">Sparq</router-link></li>
        </a>

        <!-- Top Nav -->
        <div class="navbar-collapse nav-main-collapse collapse pull-right">
          <nav class="nav-main mega-menu">
            <ul class="nav nav-pills nav-main scroll-menu" id="topMain">
              <li class="active">
                <a>
                  <router-link to="/">Home</router-link>
                </a>
              </li>
              <li class="active">
                <a v-if="isUser()">
                <router-link to="/trainers">Trainers</router-link>
                </a>
              </li>
              <li class="active">
                <a v-if="isUser()">
                  <router-link to="/usersappointments">Appointments</router-link>
                </a>
              </li>

              <!-- GLOBAL SEARCH -->
    <!--           <li class="search"> -->
                <!-- search form -->
<!--                 <form method="get" action="#" class="input-group pull-right">
                  <input type="text" class="form-control" name="k" id="k" value="" placeholder="Search">
                  <span class="input-group-btn">
                    <button class="btn btn-primary notransition"><i class="fa fa-search"></i></button>
                  </span>
                </form> -->
                <!-- /search form -->
<!--               </li> -->
              <!-- /GLOBAL SEARCH -->
            </ul>
          </nav>
        </div>
        <!-- /Top Nav -->

      </div>
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
body {
  margin-top: 50px;
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
