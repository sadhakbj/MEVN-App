<template>
 <div class="create-song">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Add New Song">
          <v-text-field type="email" name="email" v-model="email" label="Email" />
          <v-text-field type="password" name="password" v-model="password" label="Password" />
          <div class="error" v-if="error" v-html="error"></div>
          <v-btn class="cyan" @click="login" dark>Login </v-btn>

        </panel>
      </v-flex>
    </v-layout>
 </div>
</template>

<script>
import panel from "@/components/Panel";
export default {
  name: "createSong",
  components: {
    panel
  },
  data() {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    };
  }
};
</script>
<style>

</style>
