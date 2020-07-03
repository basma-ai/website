// const colors = require("vuetify/es5/util/colors").default;

module.exports = {
    mode: "universal",

    dotenv: {
        only: ["VUE_APP_API_URL", "VUE_APP_DASHBOARD_URL", "VUE_APP_CONTENT_API"]
    },

    server: {
        port: 5000, // default: 3000
        host: "localhost" // default: localhost
    },

    /*
     ** Headers of the page
     */
    head: function () {
        return {
            titleTemplate: "%s | basma.ai",
            title: "Launch your virtual branch now",
            // bodyAttrs: {
            //     class: ['has-animations', 'is-loaded']
            // },
            meta: [
                {charset: "utf-8"},
                {"http-equiv": "X-UA-Compatible", content: "IE=edge"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {name: "robots", content: "index,follow"},
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "call center,contact center,customer service,video call center,video chat,virtual branch,chatbot,whatsapp bot,covid19"
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: "Launch your virtual branch now | basma.ai"
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: "Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."
                },
                {name: "og:site_name", content: "basma.ai"},
                {
                    name: "og:image",
                    content:
                        "https://basma-cdn.s3.me-south-1.amazonaws.com/meta-whatsapp.png"
                },
                {name: "og:type", content: "website"},
                {name: "og:image:type", content: "image/png"},
                {name: "og:image:width", content: "300"},
                {name: "og:image:height", content: "300"},
                {name: "og:url", content: "https://basma.ai"},
            ],
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
                {rel: "canonical", href: "https://basma.ai" + this.$route.path},
                {rel: 'stylesheet', href: 'https://assets.calendly.com/assets/external/widget.css'}
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        "name": "basma.ai",
                        "url": "https://basma.ai",
                        "address": "",
                        "sameAs": ["https://facebook.com/basmadotai", "https://instagram.com/basmadotai", "https://twitter.com/basmadotai", "https://youtube.com/channel/UCjuatxjiXkSuL6xpqhtk_4A", "https://linkedin.com/company/basmadotai"]
                    }
                },
                {src: 'https://assets.calendly.com/assets/external/widget.js'}
            ]
        }
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: "#FFB600"},
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
            src: "~/plugins/freshchat",
            ssr: false
        },
        {
            src: "~/plugins/api",
            ssr: true
        },
        {
            src: "~/plugins/SectionProps",
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

    buildModules: [
        ['@nuxtjs/gtm']

        // id: 'UA-163382802-1',
        // debug: {
        //     enabled: true,
        //     sendHitTask: true
        // }
    ],

    gtm: {
        enabled: true,
        id: 'GTM-WNQZL95',
        pageTracking: true,
    },

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
        extend(config, ctx) {
        }
    },

    // router: {
    //   // customize nuxt.js router (vue-router).
    //   middleware: "i18n" // middleware all pages of the application
    // }
};
