import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        navbarColor: "#fff",
        svgColor:"#000",
        textboxColor:"#fff"
      },
      dark: {
        navbarColor: "#242424",
        svgColor:"#fff",
        textboxColor:"#121212"
      },
    },
  },
});
