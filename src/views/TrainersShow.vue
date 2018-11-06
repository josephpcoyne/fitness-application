
<template>
  <div class="trainers-show">
  	<div>
  		<h2>{{ trainer.first_name }} {{ trainer.last_name }}</h2>
      <button v-if="isTrainer()">
        <router-link :to="'/trainers/' + trainer.id + '/edit'">Edit</router-link>
      </button><br>
      <img :src="trainer.image_url">
      <p>★★★★★</p>
  		<h3>{{ trainer.bio }}</h3>
  		<h3>{{ trainer.rating }}</h3>
      <div v-for="tag in trainer.tags">
        <li>{{tag.name}}</li>
      </div>
  		<h4>{{ trainer.location }}</h4>
      <iframe width="560" height="315" :src="trainer.video_url + '?&showinfo=0&controls=0&amp;start=5'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  	</div>

<!-- Appointment Create Modal -->

    <div v-if="isUser()" class="appointment-new">
      <h4>Schedule {{trainer.full_name}}</h4>
      <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label></label> 
          <input type="datetime-local" class="form-control" v-model="time">
        </div>
        <input type="submit" value="submit">
      </form>
      <router-link to="/trainers">Back to trainers</router-link>
    </div>

<!-- Appointment Create Modal End -->
  </div>
</template>

<style>
  img {
    height: 35%;
    width: 35%;
  }
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      trainer: {},
      time: "",
      errors: []
    };
  },
  created: function() {
  	axios.get("http://localhost:3000/api/trainers/" + this.$route.params.id)
  	.then(response => {
  		this.trainer = response.data;
  	});
  },
  methods: {
    submit: function() {
      var params = {
        time: this.time,
        trainer_id: this.trainer.id
      }
      axios
        .post("http://localhost:3000/api/appointments", params)
        .then(response => {
          this.$router.push("/appointments");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    isUser: function() {
    if(localStorage.getItem("user_id")) {
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
  },
  computed: {}
};
</script>