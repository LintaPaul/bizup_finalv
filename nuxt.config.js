export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Bizup",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1 shrink-to-fit=yes"
      },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/eb953c93be.js"
      },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      },
      {
        src:
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      }
    ]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
      "@nuxtjs/axios",
      "@nuxtjs/auth",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],
  serverMiddleware: ['~/api/index.js'],
  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  axios: {},
  /*auth: {
    strategies: {
		local: {
			endpoints: {
				// these are the API endpoints we created in Express
				login: {
					url: '/api/users/login',
					method: 'post',
					propertyName: 'token'
				},
				logout: true,
				user: {
					url: '/api/users/user',
					method: 'get',
					propertyName: 'user'
				}
			},
			tokenRequired: true,
			tokenType: "Bearer"
		}
    },
    redirect: {
		  login: '/user/login', // User will be redirected to this path if login is required
		  logout: '/', // User will be redirected to this path if after logout, current route is protected
		  home: '/' // User will be redirect to this path after login if accessed login page directly
    }
    rewriteRedirects: true,
},*/
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
