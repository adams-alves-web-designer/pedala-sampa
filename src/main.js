import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueMoment from 'vue-moment'
import './stylus/style.styl'

Vue.config.productionTip = false

Vue.use(VueMoment)

Vue.prototype.$api = Vue.$api = axios.create({
  baseURL: `${process.env.VUE_APP_AIRTABLE_API_URL}${process.env.VUE_APP_AIRTABLE_BASE}`,
  headers: {
    'Authorization': `Bearer ${process.env.VUE_APP_AIRTABLE_API_KEY}`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
