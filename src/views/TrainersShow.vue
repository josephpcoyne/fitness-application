
<template>
  <div class="trainers-show">
  	<div class="container">
  		<h2>{{ trainer.full_name }}</h2>
  		<h3>{{ trainer.bio }}</h3>
  		<h3>{{ trainer.rating }}</h3>
  		<h4>{{ trainer.location }}</h4>

  		<router-link to="/trainers">Back to trainers</router-link>
  	</div>



<!-- Appointment Create Modal -->
    <div class="appointment-new">
      <h4>Schedule {{trainer.full_name}}</h4>
      <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label></label> 
          <input type="datetime-local" class="form-control" v-model="time">
        </div>
        <input type="submit" value="Schedule">
      </form>
    </div>



  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      trainer: {},
      time: "",
    };
  },
  created: function() {
  	axios.get("http://localhost:3000/api/trainers/" + this.$route.params.id)
  	.then(response => {
  		this.trainer = response.data;
  	});

    axios.post("http://localhost:3000/api/appointments", params).then(response => {
      this.$router.push("/appointments");
    }).catch(error => {
      this.errors = error.response.data.errors;
    });
  },
  methods: {
    submit: function() {
      var params = {
        time: this.time
      }
    }
  },
  computed: {}
};
</script>