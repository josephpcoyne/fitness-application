<template>
  <div class="users-appointments">
    <h1>{{ message }}</h1>
    <div v-for="appointment in appointments">
      <router-link v-bind:to="'/usersappointments/' + appointment.id"> 
      <h3>With {{appointment.trainer_name}} at {{appointment.strftime}}</h3>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Appointments",
      appointments: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/appointments").then(response => {
      console.log(response.data);
      this.appointments = response.data;
    });
  },
  methods: {
    setCurrentAppointment: function(appointment) {
      this.currentAppointment = appointment;
    },
  },
  computed: {}
};
</script>