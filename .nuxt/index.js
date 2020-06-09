import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_pluginrouting_ba4c5b2a from 'nuxt_plugin_pluginrouting_ba4c5b2a' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_615f28e4 from 'nuxt_plugin_pluginmain_615f28e4' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_axios_635ac67b from 'nuxt_plugin_axios_635ac67b' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_components_6fb0430c from 'nuxt_plugin_components_6fb0430c' // Source: ../plugins/components (mode: 'client')
import nuxt_plugin_api_5e4622e4 from 'nuxt_plugin_api_5e4622e4' // Source: ../plugins/api (mode: 'client')
import nuxt_plugin_ScrollReveal_3da99b90 from 'nuxt_plugin_ScrollReveal_3da99b90' // Source: ../plugins/ScrollReveal (mode: 'client')
import nuxt_plugin_SectionProps_dbae5fbe from 'nuxt_plugin_SectionProps_dbae5fbe' // Source: ../plugins/SectionProps (mode: 'client')
import nuxt_plugin_ga_34d435b2 from 'nuxt_plugin_ga_34d435b2' // Source: ../plugins/ga.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s | basma.ai","title":"Launch your virtual branch now","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."},{"name":"og:site_name","content":"basma.ai"},{"name":"og:title","content":"Launch your virtual branch now | basma.ai"},{"name":"og:description","content":"Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."},{"name":"og:image","content":"https:\u002F\u002Fbasma-cdn.s3.me-south-1.amazonaws.com\u002Fmeta-whatsapp.png"},{"name":"og:type","content":"website"},{"name":"og:image:type","content":"image\u002Fpng"},{"name":"og:image:width","content":"300"},{"name":"og:image:height","content":"300"},{"name":"og:url","content":"https:\u002F\u002Fbasma.ai"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Plugin execution

  if (typeof nuxt_plugin_pluginrouting_ba4c5b2a === 'function') {
    await nuxt_plugin_pluginrouting_ba4c5b2a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_615f28e4 === 'function') {
    await nuxt_plugin_pluginmain_615f28e4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_635ac67b === 'function') {
    await nuxt_plugin_axios_635ac67b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_components_6fb0430c === 'function') {
    await nuxt_plugin_components_6fb0430c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_api_5e4622e4 === 'function') {
    await nuxt_plugin_api_5e4622e4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ScrollReveal_3da99b90 === 'function') {
    await nuxt_plugin_ScrollReveal_3da99b90(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_SectionProps_dbae5fbe === 'function') {
    await nuxt_plugin_SectionProps_dbae5fbe(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_34d435b2 === 'function') {
    await nuxt_plugin_ga_34d435b2(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
