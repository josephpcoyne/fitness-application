<template>
  <div class="users-edit">
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
        <label>Password:</label>
        <input type="text" v-model="password">
      </div>      
      <div class="form-group">
        <label>Password Confirmation:</label>
        <input type="text" v-model="password">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email">
      </div>
      <div class="form-group">
        <label>Height:</label>
        <input type="number" v-model="height">
      </div>
      <div class="form-group">
        <label>Weight:</label>
        <input type="number" v-model="weight">
      </div>
      <div class="form-group">
        <label>Profile Picture:</label>
        <input type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <input type="submit" value="Submit">
    </form>
    <button v-on:click="deleteUser(user)">Delete Account</button>
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
      password: "",
      passwordConfirmation: "",
      email: "",
      image: "",
      height: "",
      weight: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
        this.firstName = response.data.first_name
        this.lastName = response.data.last_name
        this.username = response.data.username
        this.email = response.data.email
        this.height = response.data.height
        this.weight = response.data.weight
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
        formData.append("password", this.password);
        formData.append("password_confirmation", this.password_confirmation);
        formData.append("email", this.email);
        formData.append("image", this.image);
        formData.append("height", this.height);
        formData.append("weight", this.weight);
      axios
        .patch("http://localhost:3000/api/users/" + this.$route.params.id, formData)
        .then(response => {
          this.$refs.fileInput.value = "";
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    deleteUser: function(user) {
      axios
        .delete("http://localhost:3000/api/users/" + this.$route.params.id)
        .then(response => {
          delete axios.defaults.headers.common["Authorization"];
          localStorage.removeItem("jwt");
          localStorage.removeItem("user_id");
          localStorage.removeItem("trainer_id");
          this.$router.push("/");
        });
    }
  }
};
</script>