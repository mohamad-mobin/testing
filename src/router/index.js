import { createRouter, createWebHashHistory} from 'vue-router'
import Test from '../components/test.vue'

const routes = [
  { path: '/test', name: 'About', component: Test },
]

const router = createRouter({
  history: createWebHashHistory('/testing/'),
  routes,
})

export default router
