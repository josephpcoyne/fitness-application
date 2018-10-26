<template>
  <div class="users-edit">
    <form v-on:submit.prevent="submit()">
      <h1>New Recipe</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label> 
        <input type="text" class="form-control" v-model="firstName">
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="lastName">
      </div>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" class="form-control" v-model="username">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Profile Picture:</label>
        <input type="number" class="form-control" v-model="pictureUrl">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      pictureUrl: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        username: this.username,
        email: this.email,
        picture_url: this.pictureUrl
      };
      axios
        .patch("http://localhost:3000/api/users/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>