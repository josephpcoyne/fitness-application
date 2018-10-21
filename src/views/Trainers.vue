Vue.component('star-rating', StarRating);
<template>
  <div class="home">
    <div class="uk-grid-small uk-child-width-1-2@s" uk-grid >
<!-- Trainer Profile Cards -->
			<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid v-for="trainer in trainers">
			    <div class="uk-card-media-left uk-cover-container">
			        <img src="../assets/trainer_profile3.jpg" uk-cover />
			        <canvas width="600" height="400"></canvas>
			    </div>
			    <div>
			        <div class="uk-card-body">
			            <h3 class="uk-card-title">{{ trainer.first_name }} {{ trainer.last_name }}</h3>
			            <p>{{trainer.bio}}</p>

									<div class="uk-child-width-1-4 uk-grid-small uk-text-center" uk-grid v-for="tag in trainer.tags">
									    <div>
									        <div class="uk-tile uk-tile-primary uk-padding-remove" >
									            <p  class="uk-h5">{{tag.name}}</p>
									        </div>
									    </div>
									</div>






			        </div>
			    </div>
			</div>
<!-- Trainer Profile Cards End -->
<!--     	<h4>{{trainer.first_name}} {{trainer.last_name}}</h4>
    	{{trainer.rating}} stars
    	<p>{{trainer.bio}}</p>
		<li>{{trainer.tags}}</li> -->
    </div>
  </div>
</template>

<style>
</style>

<script>
var StarRating = require('vue-star-rating');
var axios = require("axios");
export default {
	data: function() {
		return {
			trainers: []
		};
	},
	created: function() {
		axios.get("http://localhost:3000/api/trainers").then(response => {
			console.log(response.data);
			this.trainers = response.data;
		});
	},
	methods: {},
	computed: {}
};
</script>

