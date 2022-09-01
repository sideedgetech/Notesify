<template>
  <v-container fluid class="pa-0 px-1">
    <div>
      <v-textarea
        id="textarea"
        v-model="store"
        flat
        solo
        auto-grow
        no-resize
        background-color="textboxColor"
        placeholder="Type your notes here... When you come back your notes will still be here!"
      ></v-textarea>

      <v-speed-dial absolute fixed v-model="fab" bottom right direction="top">
        <template v-slot:activator>
          <v-btn v-model="fab" color="error" fab>
            <svg v-if="fab" style="width:30px;height:30px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
            <svg v-else style="width:30px;height:30px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </v-btn>
        </template>
        <v-btn @click="downloadFile()" fab dark small color="green">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
</svg>
        </v-btn>
        <v-btn @click.stop="dialog = true" fab dark small color="red">
         <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
</svg>
        </v-btn>
      </v-speed-dial>
    </div>

    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <h3 class="pa-4 pb-2">Delete everything?</h3>

        <p class="px-4 pb-1">This action is irreversible. Proceed with caution.</p>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="success" @click="dialog = false">No</v-btn>

          <v-btn text color="error" @click="dialog = false, deleteStore()">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Keeper",

  data: () => ({
    store: "",
    dialog: false,
  }),

  mounted() {
    this.store = JSON.parse(localStorage.getItem("notes"));
  },
  watch: {
    store(newData) {
      localStorage.setItem("notes", JSON.stringify(newData));
      this.store = JSON.parse(localStorage.getItem("notes"));
    },
  },

  methods: {
    deleteStore() {
      localStorage.setItem("notes", JSON.stringify(""));
      this.store = JSON.parse(localStorage.getItem("notes"));
    },

    downloadFile() {
      const blob = new Blob([this.store], { type: "text/plain" });
      const e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
      a.download = "notes.txt";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/plain", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    },
  },
};
</script>

<style >
#textarea {
  font-size: 15px;
  padding: 0px;
  font-weight: 500;
}
</style>