<template>
  <div class="trainers-profile">
    <div>
      <h2>{{ trainer.first_name }} {{trainer.last_name}}</h2>
      <h3>{{ trainer.email }}</h3>
     <!--  <button><router-link to="/trainers/:id/edit">Edit</router-link></button> -->
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
    axios
      .get("http://localhost:3000/api/trainers/" + this.$route.params.id)
      .then(response => {
        this.trainer = response.data;
      });

    // axios.post("http://localhost:3000/api/trainers", params).then(response => {
    //   this.$router.push("/");
    // }).catch(error => {
    //   this.errors = error.response.data.errors;
    // });
  },
  methods: {
    submit: function() {
      var params = {
        time: this.time
      };
    }
  },
  computed: {}
};
</script>
