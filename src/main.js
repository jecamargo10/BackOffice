import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import LobbyPage from './pages/Lobby.vue'
import RegistryPage from './pages/Registry.vue'
import ResultPage from './pages/Result.vue'
import CarSelection from './pages/CarSelection.vue'
import SettingPage from './pages/Setting.vue'
import FailCasePage from './pages/FailCase.vue'
import OptionsPage from './pages/Options.vue'
import DetailPage from './pages/Details.vue'
import CreditInfo from './pages/CreditInfo.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: LobbyPage},
  { path: '/registry', component: RegistryPage },
  { path: '/result', component: ResultPage },
  { path: '/carselection', component: CarSelection },
  { path: '/fail', component: FailCasePage },
  { path: '/lobby', component: LobbyPage },
  { path: '/options', component: OptionsPage },
  { path: '/details', component: DetailPage },
  { path: '/setting', component: SettingPage },
  { path: '/credit', component: CreditInfo }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
