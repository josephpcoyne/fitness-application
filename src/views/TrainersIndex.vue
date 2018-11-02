
<template>
  <div class="trainers-index">

			<div v-for="trainer in trainers">
					<router-link v-bind:to="'/trainers/' + trainer.id">{{trainer.full_name}} 
					</router-link><br>
					<img :src="(trainer.image_url)">
					<p>★★★★★</p>
			    <p>{{trainer.bio}}</p>
			    <div v-for="tag in trainer.tags">
			    	<li>{{tag.name}}</li>
			    </div><br>
			  </div>			 
  	</div>
</template>

<style>
img {
  height: 35%;
  width: 35%;
}
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

  setCurrentTrainer: function(trainer) {
    this.currentTrainer = Trainer;
	},
},
	computed: {}
};
</script>

