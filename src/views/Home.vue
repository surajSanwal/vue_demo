<template>
  <div>
    <b-row class="text-center" style="margin-top:20px">
      <b-col></b-col>
      <b-col cols="5">
        <h4>Login Form</h4>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row class="text-center">
      <b-col></b-col>
      <b-col cols="5">
        <b-form-group class="mb-0" label-for="input-formatter">
          <b-form-input
            id="input-formatter"
            v-model="username"
            placeholder="Enter your name"
            :formatter="format"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row class="text-center" style="margin-top:20px">
      <b-col></b-col>
      <b-col cols="5">
        <b-button v-on:click="onLoginPress" variant="success">Login</b-button>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    onLoginPress() {
      localStorage.setItem("username", this.username);
      this.$router.push("/users");
    }
  }
};
</script>
