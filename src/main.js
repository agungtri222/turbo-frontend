import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VeeValidate, {
  locale: 'en',
  dictionary: {
    en: {
      messages: {
        required: () => 'This field is required',
        not_in: () => 'This value is duplicated',
        alpha_num: () => 'This field may only contain alpha-numeric characters.',
        numeric: () => 'This field may only contain numeric characters.',
        max_value: (name, max) => `This field cannot be greater than ${max}.`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
