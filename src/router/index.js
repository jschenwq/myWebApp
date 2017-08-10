import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/page/home/home.js'
import Account from '@/page/accountInfo/account.js';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
