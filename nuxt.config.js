export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mkt Place',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {hid: 'keywords',name: 'keywords',content: `Comunicação, Cantaloop, Cantacom`},
      {hid: 'author',name: 'author',content: `Cantacom`},
      {hid: 'description',name: 'description',content: `Acreditamos que criatividade não depende de tamanho nem plataforma. Marcas precisam entregar conteúdo, experiências e informações em diversos canais, da maneira mais assertiva possível. É para isso que estamos aqui.`},

      {hid: 'og:locale',name: 'og:locale',content: `pt_BR`},
      {hid: 'og:site_name',name: 'og:site_name',content: `Cantacom`},
      {hid: 'og:title',name: 'og:title',content: `Cantacom - Cantaloop Comunicação mas pode chamar de Cantacom`},
      {hid: 'og:type',name: 'og:type',content: `website`},
      {hid: 'og:image',name: 'og:image',content: `http://www.cantacom.com.br/website/_img/img-social.png`},
      {hid: 'og:url',name: 'og:url',content: `www.cantacom.com.br/`},
      {hid: 'og:description',name: 'og:description',content: `Acreditamos que criatividade não depende de tamanho nem plataforma. Marcas precisam entregar conteúdo, experiências e informações em diversos canais, da maneira mais assertiva possível. É para isso que estamos aqui.`},
      {hid: 'og:image:width',name: 'og:image:width',content: `800`},
      {hid: 'og:image:height',name: 'og:image:height',content: `600`},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src:"https://kit.fontawesome.com/3b5310efad.js"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/responsive.scss',
    '~/assets/scss/global.scss',
    '~/assets/scss/fonts.scss'
  ],

  styleResources: {
    scss: [
        '~/assets/scss/responsive.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/productsPage/',
    '~/components/cartPage/',
    '~/components/'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  serverMiddleware: [
    '~/middleware/redirects.js'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
