export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "sample-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "this is my sample app!" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.”dev/config-css)
  css: [
    // '@/assets/variables/scss'
  ],
  dev: process.env.NODE_ENV !== 'production',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  // Vuetify追加
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  //  '@nuxtjs/google-analytics'を追加
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    '@nuxtjs/composition-api'
  ],
  googleAnalytics: {
    id: 'UA-12345-0' //自身のアナリティクスコード
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
