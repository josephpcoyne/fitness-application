
<template>
  <div class="trainers">
			<div v-for="trainer in trainers">
<!--  	<img :src="getImgUrl(trainer.profile_picture_url)"> -->
					<router-link v-bind:to="'/trainers/' + trainer.id">{{trainer.full_name}} </router-link>
			    <p>{{trainer.bio}}</p>
			    <div v-for="tag in trainer.tags">
			    	<li>{{tag.name}}</li>
			    </div>
			    <br>

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
			trainers: [],
			searchText: ""
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
  },
  setCurrentTrainer: function(trainer) {
    this.currentTrainer = Trainer;
	},
},
	computed: {}
};
</script>

