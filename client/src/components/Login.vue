<template>
  <div class="register">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Login">
          <v-text-field type="email" name="email" v-model="email" label="Email" />
          <v-text-field type="password" name="password" v-model="password" label="Password" />
          <div class="error" v-if="error" v-html="error"></div>
          <br>
          <v-btn class="cyan" @click="login" dark>Login </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import AuthService from "@/services/AuthService";
  import panel from "@/components/Panel";
  export default {
    name: "login",
    data() {
      return {
        email: "",
        password: "",
        error: null
      };
    },
    components: {
      panel
    },
    methods: {
      async login() {
        try {
          const response = await AuthService.login({
            email: this.email,
            password: this.password
          });
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setUser", response.data.user);
        } catch (error) {
          console.log(error);
          this.error = error.response.data.error;
        }
      }
    }
  };

</script>
<style scoped>
  .error {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: rgb(155, 24, 24);
  }

</style>
