// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers: https://nuxt.com/docs/api/configuration/nuxt-config#head
  app: {
    head: {
      title: 'Mestnost Records',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Московский лейбл «Местность»',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    baseURL: '/', // Set the base URL for the application
  },

  // Global CSS: https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/fonts/Acrom-Medium.otf',
    '~/assets/fonts/Acrom-Regular.otf',
    '~/assets/fonts/Cocomat-Bold.ttf',
    '~/assets/fonts/Cocomat-UltraLight.ttf',
    '~/assets/fonts/Cocomat.ttf',
    '~/assets/css/styles.css',
  ],

  // Plugins to run before rendering page: https://nuxt.com/docs/api/configuration/nuxt-config#plugins
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/font_awesome_icons.js', mode: 'client' },
    { src: '~/plugins/vuetify.js', mode: 'client' },
  ],

  // Auto import components: https://nuxt.com/docs/api/configuration/nuxt-config#components
  components: true,

  // Modules for dev and build (recommended): https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: [],

  // Build Configuration: https://nuxt.com/docs/api/configuration/nuxt-config#build
  build: {},

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      yandexMetrikaId: '73630327',
      siteUrl: 'https://mestnostrecords.com',
    },
  },
})
