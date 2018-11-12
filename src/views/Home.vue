<template>
  <div class="home">
    <!-- WRAPPER -->
    <div id="wrapper">


      <section class="container text-center top-no-header"><!--  top-no-header - home only, if no slider used -->
        <h1 class="text-center">
          Ignite your <strong>Sparq</strong>
<!--           <span class="subtitle"></span> -->
        </h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
      </section>


      <div class="container">
        <hr class="half-margins" /><!-- hr line -->
      </div>


      <!-- FEATURED BOXES 3 -->
      <section class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="featured-box nobg border-only">
              <div class="box-content">
                <i class="fa fa-users"></i>
                <h4>For Everyone</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="featured-box nobg border-only left-separator">
              <i class="fa fa-book"></i>
              <h4>Well Documented</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="featured-box nobg border-only left-separator">
              <i class="fa fa-trophy"></i>
              <h4>For Your Business</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="featured-box nobg border-only left-separator">
              <i class="fa fa-cogs"></i>
              <h4>Customizable</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /FEATURED BOXES 3 -->


      <div class="container">
        <hr class="no-lines" /><!-- hr line -->
      </div>


      <!-- CALLOUT -->
      <div class="bs-callout margin-top text-center styleBackground noradius">
        <h3>Welcome to <strong>Atropos</strong> Multipurpose <strong>template</strong>.
        <a href="https://wrapbootstrap.com/theme/atropos-responsive-website-template-WB05SR527" target="_blank" class="btn btn-primary btn-lg">Buy Now!</a></h3>
      </div>
      <!-- /CALLOUT -->



      <!-- PARALLAX -->
      <section class="parallax delayed margin-footer" data-stellar-background-ratio="0.7" style="background-image: url('assets/images/demo/parallax.jpg');">
        <span class="overlay"></span>

        <div class="container">

          <div class="row">
            <!-- left content -->
            <div class="col-md-7 animation_fade_in">
              <h2>Atropos <strong>Multipurpose</strong></h2>
              <p class="lead">
                Atropos is a multipurpose template for business or portfolio website. It is fully responsive design ready for PC, Tablet and Mobile.
              </p>
              <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.
              </p>
              <p>
                <small><em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.</em></small>
              </p>

              <a class="btn btn-primary btn-lg" href="index-more.html">Tell Me More</a>
            </div>

            <!-- right image -->
            <div class="col-md-5 animation_fade_in">
              <img class="visible-md visible-lg img-responsive pull-right" src="assets/images/demo/desktop2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <!-- PARALLAX -->

    </div>
    <!-- /WRAPPER -->


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
