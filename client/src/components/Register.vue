<template>
  <div class="register">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
               <v-text-field type="email" name="email" v-model="email" label="Email"/>
               <v-text-field type="password" name="password" v-model="password" label="Password" />
               <div class="error" v-html="error"></div> <br>
              <v-btn class="cyan" @click="register" dark>Register </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import AuthService from "@/services/AuthService";
import panel from "@/components/Panel";
export default {
  name: "Register",
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
    async register() {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
< !-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}
</style>
