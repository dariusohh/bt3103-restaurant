import Home from './components/Home.vue'
import Orders from './components/Orders.vue'
import modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'

export default [
  { path: '/', component: Home },
  { path: '/orders', component: Orders },
  { path: '/modify', name: 'modify', component: modify, props: true},
  { path: '/dashboard', component: Dashboard }
]
