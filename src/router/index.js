import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Userpage from '../views/Userpage.vue'
import WalletPage from '../views/WalletPage.vue'
import TransactionPage from '../views/TransactionPage.vue'
import AddWallet from '../views/AddWallet.vue'
import AddTransaction from '../views/AddTransaction.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/register",
    name: 'Register',
    component: Register
  },
  {
    path: "/login",
    name: 'Login',
    component: Login
  },
  {
    path: "/userpage",
    name: "Userpage",
    component: Userpage
  },
  {
    path:"/walletpage",
    name: "WalletPage",
    component: WalletPage
  },
  {
    path: "/transactionPage",
    name: "TransactionPage",
    component: TransactionPage
  },
  {
    path: "/addWallet",
    name: "AddWallet",
    component: AddWallet
  },
  {
    path: "/addTransaction",
    name: "AddTransaction",
    component: AddTransaction
  },
]

const router = new VueRouter({
  routes
})

export default router
