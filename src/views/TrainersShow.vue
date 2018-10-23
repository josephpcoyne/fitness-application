
<template>
  <div class="trainers-show">
  	<div class="container">
  		<h2>{{ trainer.full_name }}</h2>
  		<h3>{{ trainer.bio }}</h3>
  		<h3>{{ trainer.rating }}</h3>
  		<h4>{{ trainer.location }}</h4>

  		<router-link to="/trainers">Back to trainers</router-link>
  	</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      trainer: {}
    };
  },
  created: function() {
  	axios.get("http://localhost:3000/api/trainers/" + this.$route.params.id)
  	.then(response => {
  		this.trainer = response.data;
  	})
  },
  methods: {},
  computed: {}
};
</script>