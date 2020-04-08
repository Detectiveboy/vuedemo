import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/exerciseone',
    name: 'Exerciseone',
    component: () => import('../views/Exerciseone.vue')
  },
  {
    path: '/v-for',
    name: 'V-for',
    component: () => import('../views/V-for.vue')
  },
  {
    path: '/exercisetwo',
    name: 'Exercisetwo',
    component: () => import('../views/Exercisetwo.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/exercisethree',
    name: 'Exercisethree',
    component: () => import('../views/Exercisethree.vue')
  },
  {
    path: '/exercisethree',
    name: 'Exercisethree',
    component: () => import('../views/Exercisethree.vue')
  },
  {
    path: '/twoProps',
    name: 'TwoProps',
    component: () => import('../views/TwoProps.vue')
  },
  {
    path: '/exercisefour',
    name: 'Exercisefour',
    component: () => import('../views/Exercisefour.vue')
  },
  {
    path: '/directive',
    name: 'Directive',
    component: () => import('../views/Directive.vue')
  },
  {
    path: '/exercisefive',
    name: 'Exercisefive',
    component: () => import('../views/Exercisefive.vue')
  },
  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: () => import('../views/LifeCycle.vue')
  },
  {
    path: '/exercisesix',
    name: 'Exercisesix',
    component: () => import('../views/Exercisesix.vue')
  },
  {
    path: '/component',
    name: 'Component',
    component: () => import('../views/Component.vue')
  },
  {
    path: '/exerciseseave',
    name: 'Exerciseseave',
    component: () => import('../views/Exerciseseave.vue')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/Parent.vue')
  },
  {
    path: '/vuexdemo',
    name: 'Vuexdemo',
    component: () => import('../views/Vuexdemo.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/Slot.vue')
  },
  {
    path: '/compgroup',
    name: 'CompGroup',
    component: () => import('../views/CompGroup.vue')
  },
  {
    path: '/render',
    name: 'Render',
    component: () => import('../views/Render.vue')
  },
  {
    path: '/exerciseeight',
    name: 'Exerciseeight',
    component: () => import('../views/Exerciseeight.vue')
  },
  {
    path: '/routerparams',
    name: 'Routerparams',
    component: () => import('../views/Routerparams.vue'),
    children: [
      {
        path: 'home',
        name: 'wel',
        component: Home
      },
      {
        path: 'about',
        name: 'abo',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: '/singlerouter',
    name: 'Singlerouter',
    component: {
      default: () => import('../views/Singlerouter.vue'),
      viewA: () => import('../views/About.vue'),
      viewB: Home
    }
  },
  {
    path: '/routerguard',
    name: 'Routerguard',
    component: () => import('../views/Routerguard.vue'),
    beforeEnter(to, from, next) {
      console.log('我是私有路由守卫')
      next()
    }
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/Axios.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
