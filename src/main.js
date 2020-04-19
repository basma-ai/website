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

import OtpInput from "@bachdgvn/vue-otp-input";

Vue.component("v-otp-input", OtpInput);

import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

function toast({title, message, type, timeout, cb}) {
    if (type === VueNotifications.types.warn) type = 'warning'
    return iziToast[type]({title, message, timeout})
}

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
}

// Activate plugin
// VueNotifications have auto install but if we want to specify options we've got to do it manually.
Vue.use(VueNotifications, options)


import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import {required, email, min} from 'vee-validate/dist/rules';
import {messages} from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    });
});

// Add a rule.
// No message specified.
extend('email', {
    ...email,
    message: 'Email is not valid'
});

// Override the default message.
extend('required', {
    ...required,
    message: 'This field is required'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

import {VueReCaptcha} from 'vue-recaptcha-v3'

Vue.use(VueReCaptcha, {
    siteKey: '6LePAesUAAAAAJ2Py1XIgKexIrkNY3CFNUBnEWCc',
    loaderOptions: {
        autoHideBadge: true
    }
})

import VueAnalytics from 'vue-analytics';

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-163382802-1',
    router
});

// VueDebounce
import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
