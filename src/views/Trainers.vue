
<template>
  <div class="home">
    <div class="uk-grid-small uk-child-width-1-2@s" uk-grid>
<!-- Trainer Profile Cards -->
			<div class="uk-card uk-card-hover uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid v-for="trainer in trainers">
			    <div class="uk-card-media-left uk-cover-container">
			      <img :src="getImgUrl(trainer.profile_picture_url)" uk-cover>
			      <canvas width="600" height="400"></canvas>
			    </div>
			    <div>
			    	<div class="uk-card-body">
			      	<h3 class="uk-card-title">{{ trainer.first_name }} {{ trainer.last_name }}</h3>
			        <p>{{trainer.bio}}</p>
							<!-- trainer tags -->
			        <template v-for="tag in trainer.tags">
			   				<span class="uk-label uk-margin-right uk-card-footer">{{ tag.name }} </span>
							</template>
							<!-- trainer tags end -->
			     	</div>
			    </div>
			</div>
<!-- Trainer Profile Cards End -->
    </div>
  </div>
</template>

<style>
</style>

<script>
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
	methods: {
		getImgUrl(filename) {
    var images = require.context('../assets/', false, /\.jpg$/)
    return images('./' + filename + ".jpg")
  }
	},
	computed: {}
};
</script>

