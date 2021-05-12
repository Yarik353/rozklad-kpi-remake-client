import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import { BootstrapVue} from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(SmartTable)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
