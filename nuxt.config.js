export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr:false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eshier dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // loading: '~/components/LoadingBar.vue',

  router: {
    middleware: [],
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/auth/login',
        components: {
          default: resolve(__dirname, 'pages/login/login.vue')
        }
      }),

      routes.push({
        path: '/auth/register',
        components: {
          default: resolve(__dirname, 'pages/login/register.vue')
        }
      }),

      routes.push({
        // how to get id from path (this.$route.params.orgid)
        path: '/menus/:tableid?/:orgid?',
        components: {
          default: resolve(__dirname, 'pages/menus/merchant.vue')
        }
      })
    }
  },

  axios: {
    baseURL:"http://192.176.145.49:5000/eshier"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: 'plugins/axiosauth.js'},
    { src: 'plugins/newAxios.js'},
    { src: 'plugins/hashpassword.js'},
    { src: 'plugins/chart.js'},
    { src: 'plugins/vue-charts-cus.js'},
    { src: 'plugins/getOrgId.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { parseJSON: false }],
    'nuxt-session'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
