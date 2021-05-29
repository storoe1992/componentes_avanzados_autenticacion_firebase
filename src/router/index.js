import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      login: true
    },
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  let user = Firebase.auth().currentUser;
  let authRequeired = to.matched.some(route => route.meta.login);
  console.log(user);
  if(user && authRequeired){
    next();
  }else if(!authRequeired){
    next();
  }else if(from && from.name && from.name != 'Login'){
    next('/login');
  }
});

export default router
