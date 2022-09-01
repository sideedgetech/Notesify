<template>
  <nav>
    <v-app-bar app tile color="navbarColor" :height="height">
      <h1 style="letter-spacing:5px;" class="px-1">Keeper</h1>
      <v-spacer></v-spacer>

      <!--theme-->
      <div>
        <v-btn v-if="isthemedark==false" @click="changeTheme()" class="px-6" icon color="svgColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </v-btn>

        <v-btn v-else class="px-6" color="svgColor" @click="changeTheme()" icon>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
            />
          </svg>
        </v-btn>
        <v-btn class="px-6" color="svgColor" @click.stop="dialog = true" icon>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </v-btn>
        <v-dialog v-model="dialog" width="350">
          <v-card>
            <h3 class="pa-6 pb-2">Keeper v1.0.0</h3>

            <p class="px-6">An offline-capable Note taking app made with VueJS.</p>
            <h4 class="px-6 pb-2">🚀 Features</h4>
            <ul class="px-10 pb-2">
              <li>Offline Capable. Write notes which are then saved to the browser's localStorage.</li>
              <li>Super lightweight, Loads almost instantly.</li>

              <li>Privacy-focused - We'll never collect your precious data.</li>

              <li>
                It's
                <a
                  style="text-decoration:none;"
                  target="_blank"
                  href="https://github.com/sumitkolhe/keeper"
                >open-source!</a>
              </li>
            </ul>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text color="error" @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    isthemedark: false,
    dialog: false,
  }),

  computed: {
    height() {
      if (this.$vuetify.breakpoint.xs) return 57;
      else return 60;
    },
  },

  mounted() {
    this.$vuetify.theme.dark =
      JSON.parse(localStorage.getItem("isThemeDark")) || false;
    this.isthemedark = this.$vuetify.theme.dark;
  },

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isthemedark = !this.isthemedark;
      localStorage.setItem(
        "isThemeDark",
        JSON.stringify(this.$vuetify.theme.dark)
      );
    },
  },
};
</script>

<style>
svg {
  height: 34px;
  width: 34px;
}
@media screen and (max-width: 600px) {
  svg {
    height: 30px;
    width: 30px;
  }
  .svg-padding {
    margin: 0rem 0.2rem;
  }
}
</style>