<template>
   <v-toolbar fixed class="cyan" dark>
     <v-toolbar-title class="mr-4">
       <router-link :to="{name: 'home'}" class="home">
          My App
       </router-link>
     </v-toolbar-title>
     <v-toolbar-items>
       <v-btn dark flat :to="{ name: 'songs' }">
         View All
       </v-btn>
     </v-toolbar-items>

     <v-spacer></v-spacer>
     <v-toolbar-items>
       <v-btn dark flat :to="{ name: 'login'}" v-if="!$store.state.isUserLoggedIn">
         Sign In
       </v-btn>
       <v-btn dark flat :to="{ name: 'register'}" v-if="!$store.state.isUserLoggedIn">
         Sign Up
       </v-btn>
       <v-btn dark flat @click="logOut" v-if="$store.state.isUserLoggedIn">
         Log Out
       </v-btn>
     </v-toolbar-items>
   </v-toolbar>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
.home {
  color: white;
  text-decoration: none;
}

.home:hover {
  color: #dadada;
}
</style>
