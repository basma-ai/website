import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Secondary from './views/Secondary.vue';
import Terms from './views/Terms.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Blog from './views/Blog.vue';
import Page from './views/Page.vue';
import Tag from './views/Tag.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/:id',
      name: 'page',
      component: Page,
      props: true
    },
    {
      path: '/:tag/:id',
      name: 'tag',
      component: Tag,
      props: true
    },
  ],
  mode: 'history'
});
