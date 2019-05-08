import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import LoginPage from './pages/Login.vue'
import LobbyPage from './pages/Lobby.vue'
import RegistryPage from './pages/Registry.vue'
import ResultPage from './pages/Result.vue'
import SettingPage from './pages/Setting.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: LoginPage},
  { path: '/lobby', component: LobbyPage},
  { path: '/registry', component: RegistryPage },
  { path: '/result', component: ResultPage },
  { path: '/setting', component: SettingPage }
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
