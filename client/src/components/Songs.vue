<template>
  <div class="songs">
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="List out songs">
          <div v-for="song in songs" :key="song.id">
            {{ song.title}} - {{ song.artist}} - {{ song.album }}
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import panel from "@/components/Panel";
import SongsService from "@/services/SongsService";
export default {
  name: "songs",
  components: {
    panel
  },
  data() {
    return {
      songs: []
    };
  },
  async mounted() {
    this.songs = (await SongsService.index()).data.songs;
  }
};
</script>

<style>

</style>
