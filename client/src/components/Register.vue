<template>
  <div class="register">
<v-layout column>
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>

        <div class="pl-4 pt-2 pb-2">
            <v-text-field type="email" name="email" v-model="email" placeholder="Email" />
            <v-text-field type="password" name="password" v-model="password" placeholder="password" />
            <div class="error" v-html="error"></div>
                <v-btn
                class="cyan"
                @click="register">
                Register
                </v-btn>
            </div>
        </div>
    </v-flex>
</v-layout>



  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        });

        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
