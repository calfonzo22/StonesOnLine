import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../components/products/ProductView.vue'
import CartView from '../views/CartView.vue'

import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  {path: '/', name: 'HomeView',component: HomeView},
  {path: '/cart', name: 'cart', component: CartView},
 
  {path: '/products/productview',name:'productview', component: ProductView},
  {path: '/login',name:'login', component: LoginView},
  {path: '/signup',name:'SignUp', component: SignUpView}
  
]

const router = createRouter({
  history: createWebHashHistory (process.env.BASE_URL),
  routes
})

export default router
