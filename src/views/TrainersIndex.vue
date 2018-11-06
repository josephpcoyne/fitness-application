
<template>
  <div class="trainers">
  	<input v-model="searchText" list="tags" placeholder="Search by Tags">
  	
  	<transition-group name="fade">
		<div v-for="trainer in orderBy(filterBy(trainers, searchText), sortAttribute, sortAscending)" v-bind:key="trainer.id">
			<img :src="(trainer.image_url)">
			<router-link v-bind:to="'/trainers' + trainer.id">{{trainer.full_name}} </router-link>
			<p>{{trainer.bio}}</p>
			<div v-for="tag in trainer.tags">
				<li v-on:click="searchText = tag.name">{{tag.name}}</li>

			</div>
			<br>
 		</div>
 	</transition-group>
 	 	<datalist id="tags">
 			<option v-for="tag in tags">{{ tag.name }}</option>
 	 	</datalist>
<!--  		<div>
 		  <button v-on:click="setSortAttribute('name')">Sort by name</button>
 		  <button v-on:click="setSortAttribute('bio')">Sort by bio</button>
 		</div> -->

	</div>
</template>

<style>
/* Vue.js fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

/* Vue.js slide-right */
.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(10px);
    opacity: 0;
  }

  /* Vue.js slide-left */
  .slide-left-enter-active {
    transition: all .3s ease;
  }
  .slide-left-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-left-enter, .slide-left-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }

</style>

<script>
var axios = require("axios");
export default {
	data: function() {
		return {
			trainers: [],
			tags: [],
			searchText: "",
			sortAttribute: "name",
			sortAscending: 1
		};
	},
	created: function() {
		axios.get("http://localhost:3000/api/trainers").then(response => {
			console.log(response.data);
			this.trainers = response.data;
		});
		axios.get("http://localhost:3000/api/tags/").then(response => {
		  this.tags = response.data.map(a => {
		    return { name: a.name, id: a.id };
		  });
		});
	},
	methods: {
  setCurrentTrainer: function(trainer) {
    this.currentTrainer = Trainer;
	},
	setSortAttribute: function(attribute) {
		if(this.sortAttribute === attribute) {
			this.sortAscending = this.sortAscending * -1;
		} else {
			this.sortAscending = 1;
		}
		this.sortAttribute = attribute;
	}
},
	computed: {}
};
</script>

