import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

//  new Vue({
//    render: h => h(App)
//  }).$mount('#app1')

new Vue({
  store,
  el: '#app1',
  render: h => h(App)
});

 