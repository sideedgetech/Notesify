<template>
  <v-app class="ma-0 pa-0">
    <Navbar app></Navbar>

    <v-main>
      <Keeper />
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

import Keeper from "./components/Keeper";

export default {
  name: "App",

  components: {
    Keeper,
    
    Navbar,
  },

  data: () => ({}),
};
</script>

<style>


* {
  font-family: "Montserrat", sans-serif;
}
</style>