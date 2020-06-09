// const colors = require("vuetify/es5/util/colors").default;

module.exports = {
  mode: "universal",

  dotenv: {
    only: ["VUE_APP_API_URL","VUE_APP_DASHBOARD_URL","VUE_APP_CONTENT_API"]
  },

  server: {
    port: 5000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | basma.ai",
    title: "Launch your virtual branch now",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."
      },
      { name: "og:site_name", content: "basma.ai" },
      { name: "og:title", content: "Launch your virtual branch now | basma.ai" },
      {
        name: "og:description",
        content:
          "Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."
      },
      {
        name: "og:image",
        content:
          "https://basma-cdn.s3.me-south-1.amazonaws.com/meta-whatsapp.png"
      },
      { name: "og:type", content: "website" },
      { name: "og:image:type", content: "image/png" },
      { name: "og:image:width", content: "300" },
      { name: "og:image:height", content: "300" },
      { name: "og:url", content: "https://basma.ai" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/components",
      ssr: false
    },
    {
      src: "~/plugins/api",
      ssr: false
    },
    {
      src: "~/plugins/ScrollReveal",
      ssr: false
    },
    {
      src: "~/plugins/SectionProps",
      ssr: false
    },
    {
      src: '~/plugins/ga.js',
      ssr: false
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "nuxt-i18n"
  ],

  // i18n: {
  //   strategy: 'prefix_and_default',
  //   locales: [
  //     {
  //       code: 'ar',
  //       file: 'ar.json'
  //     },
  //     {
  //       code: 'en',
  //       file: 'en.json'
  //     },
  //   ],
  //   langDir: 'locales/',
  //   defaultLocale: 'en',
  //   lazy: true,
  // },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Socket.io module configuration
   ** See https://github.com/richardeschloss/nuxt-socket-io#configuration-io-sockets-
   */
  // io: {
  //   sockets: [
  //     {
  //       name: 'home',
  //       url: 'http://localhost:1061',
  //       default: true,
  //       vuex: { // optional
  //         mutations: [{progress: 'examples/SET_PROGRESS'}], // pass in the evt --> mutation map OR array of actions
  //         actions: [{chatMessage: 'FORMAT_MESSAGE'}, 'SOMETHING_ELSE'], // pass in the evt --> action map OR array of actions or mixed!,
  //         emitBacks: ['examples/sample', {'examples/sample2': 'sample2'}] // pass in the state props you want to listen for changes on. When those props thance, they'll fire these "emitBack" events. If the emitBack is a string, it will send the string, otherwise, if it's an object, it will send the mapped string. (see the updated examples in the page/examples.vue, where I also use a "mapState2Way" function in the component).
  //       },
  //       namespaces: {
  //         '/index': {
  //           emitters: ['getMessage2 + testMsg --> message2Rxd'],
  //           listeners: ['chatMessage2', 'chatMessage3 --> message3Rxd']
  //         },
  //         '/examples': {
  //           emitBacks: ['sample3', 'sample4 <-- myObj.sample4'],
  //           emitters: [
  //             'reset] getProgress + refreshInfo --> progress [handleDone'
  //           ],
  //           listeners: ['progress']
  //         }
  //       }
  //     }
  //   ]
  // },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  // vuetify: {
  //   customVariables: ["~/assets/css/variables.scss"],
  //   theme: {
  //     dark: false,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },
  /*
   ** Build configuration
   */
  /*
   ** Build configuration
   */
  build: {
    // vendor: ["vue-i18n"],
    // transpile: ["vuetify/lib"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  // router: {
  //   // customize nuxt.js router (vue-router).
  //   middleware: "i18n" // middleware all pages of the application
  // }
};
