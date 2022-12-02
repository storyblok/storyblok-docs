const pkg = require('./package')
const routes = require('./routes')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Storyblok API Documentation',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    script: [
      // needed to stop Prism to automatically highlight everything that is already highlighted:
      // https://github.com/PrismJS/prism/issues/765#issuecomment-139043403
      // https://github.com/PrismJS/prism/pull/1087#issuecomment-274952728
      { innerHTML: "window.Prism={manual:!0};", type: 'text/javascript', charset: 'utf-8' }
    ],
    link: [{
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: 'https://img2.storyblok.com/57x57/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: 'https://img2.storyblok.com/60x60/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: 'https://img2.storyblok.com/72x72/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: 'https://img2.storyblok.com/76x76/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: 'https://img2.storyblok.com/114x114/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: 'https://img2.storyblok.com/120x120/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: 'https://img2.storyblok.com/144x144/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: 'https://img2.storyblok.com/152x152/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'https://img2.storyblok.com/180x180/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: 'https://img2.storyblok.com/32x32/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        href: 'https://img2.storyblok.com/192x192/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'icon',
        sizes: '96x96',
        type: 'image/png',
        href: 'https://img2.storyblok.com/96x96/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: 'https://img2.storyblok.com/16x16/f/39898/515x515/3d1e05d1fc/storyblok-favicon.png'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources'
  ],

  css: [
    '~assets/_variables.scss'
  ],

  styleResources: {
    scss: ['./assets/*.scss']
  },

  generate: {
    routes(callback) {
      let enrichedRoutes = []
      routes.forEach(route => {
        const parts = route.split('/')
        let lang = parts[1]
        let origin = parts[4]
        if (lang == 'docs') {
          lang = 'v1'
          origin = parts[3]
        }
        if (route.indexOf('v2') >= 0) {
          lang = 'v2'
        }

        enrichedRoutes.push({
          route: route,
          payload: {
            sections: require(`${__dirname}/static/${origin}.methods.${lang}.json`),
            menu: require(`${__dirname}/static/${origin}.menu.${lang}.json`)
          }
        })
      })
      callback(null, enrichedRoutes)
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // add vue common runtime
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
