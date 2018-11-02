<template>
  <div class="trainers-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Profile</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label> 
        <input type="text" class="form-control" v-model="firstName">
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" v-model="lastName">
      </div>
      <div class="form-group">
        <label>Username:</label>
        <input type="text" v-model="username">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email">
      </div>
      <div class="form-group">
        <label>Bio:</label>
        <input type="text" v-model="bio">
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input type="text" v-model="location">
      </div>
        <div class="form-group">
          <label>Profile Picture:</label>
          <input type="file" v-on:change="setFile($event)" ref="fileInput">
        </div>
      <input type="submit" value="Submit">
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
      image: "",
      bio: "",
      location: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/trainers/" + this.$route.params.id)
      .then(response => {
        this.trainer = response.data;
        this.firstName = response.data.first_name
        this.lastName = response.data.last_name
        this.username = response.data.username
        this.email = response.data.email
        this.bio = response.data.bio
        this.location = response.data.location
        this.image = response.data.image
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
        formData.append("first_name", this.firstName);
        formData.append("last_name", this.lastName);
        formData.append("username", this.username);
        formData.append("email", this.email);
        formData.append("image", this.image);
        formData.append("bio", this.bio);
        formData.append("location", this.location);

      axios
        .patch("http://localhost:3000/api/trainers/" + this.$route.params.id, formData)
        .then(response => {
          this.$refs.fileInput.value = "";
          this.$router.push("/trainers/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
      });
    }
  }
};
</script>