
<template>
  <div class="users-show">
    <div>
      <h2>{{ user.first_name }} {{user.last_name}}</h2>
      <h3>{{ user.email }}</h3>
      <h3>{{ user.weight }}</h3>
      <h3>{{ user.height }}</h3>
      <button><router-link to="/users/:id/edit">Edit</router-link></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
      });

    // axios.post("http://localhost:3000/api/users", params).then(response => {
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
