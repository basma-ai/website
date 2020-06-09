import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bac1bc1 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _6877884c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7ab02836 = () => interopDefault(import('../pages/secondary.vue' /* webpackChunkName: "pages/secondary" */))
const _0dc5a712 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _a7cb5210 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _021c98c3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a320202a = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))
const _b8d9d1b6 = () => interopDefault(import('../pages/_tag/_id.vue' /* webpackChunkName: "pages/_tag/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _0bac1bc1,
    name: "blog"
  }, {
    path: "/login",
    component: _6877884c,
    name: "login"
  }, {
    path: "/secondary",
    component: _7ab02836,
    name: "secondary"
  }, {
    path: "/signup",
    component: _0dc5a712,
    name: "signup"
  }, {
    path: "/terms",
    component: _a7cb5210,
    name: "terms"
  }, {
    path: "/",
    component: _021c98c3,
    name: "index"
  }, {
    path: "/:id",
    component: _a320202a,
    name: "id"
  }, {
    path: "/:tag/:id?",
    component: _b8d9d1b6,
    name: "tag-id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
