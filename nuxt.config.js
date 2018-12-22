const pkg = require('./package')

module.exports = {
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? window.location : 'http://localhost:3000'),
    defaultLanguage: 'en'
  },
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Storyblok Content Delivery API Documentation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://img2.storyblok.com/57x57/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://img2.storyblok.com/60x60/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://img2.storyblok.com/72x72/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://img2.storyblok.com/76x76/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'https://img2.storyblok.com/114x114/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://img2.storyblok.com/120x120/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://img2.storyblok.com/144x144/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://img2.storyblok.com/152x152/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://img2.storyblok.com/180x180/f/40201/c55e612713/500x500_front_blue_transparent.png' },
      { rel: 'icon',sizes: '32x32', type: 'image/png', href: 'https://img2.storyblok.com/32x32/f/40201/c55e612713/500x500_front_blue_transparent.png'},
      { rel: 'icon',sizes: '192x192', type: 'image/png', href: 'https://img2.storyblok.com/192x192/f/40201/c55e612713/500x500_front_blue_transparent.png'},
      { rel: 'icon',sizes: '96x96', type: 'image/png', href: 'https://img2.storyblok.com/96x96/f/40201/c55e612713/500x500_front_blue_transparent.png'},
      { rel: 'icon',sizes: '16x16', type: 'image/png', href: 'https://img2.storyblok.com/16x16/f/40201/c55e612713/500x500_front_blue_transparent.png'},
      { rel: 'mask-icon', href: 'https://app.storyblok.com/images/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/inMarkdownComponents.js', ssr: false },
    { src: '~/plugins/intersectionObserverPolyfill.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/_variables.scss',
    ]],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
