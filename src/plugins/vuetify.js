import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// vuetify color
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.darken1,
    secondary: colors.cyan.darken3,
    accent: colors.blueGrey.darken1,
    error: colors.red.base,
    info: colors.blue.base,
    warning: colors.amber.base,
    success: colors.purple.base
  },
})