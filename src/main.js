import Vue from 'vue';

import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

import Vue2TouchEvents from 'vue2-touch-events';
Vue.use(Vue2TouchEvents);

import App from './App.vue';
import router from './router';

import '@/assets/scss/style.scss';

Vue.config.productionTip = false;

import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

import VueFeather from 'vue-feather';
Vue.use(VueFeather);

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.component('vue-phone-number-input', VuePhoneNumberInput);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
