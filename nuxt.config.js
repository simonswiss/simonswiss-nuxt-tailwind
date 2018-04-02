module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "sswiss",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@/assets/css/tailwind.css"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#F85B5B" },

  modules: [
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-22027845-1"
      }
    ]
  ],
  sitemap: {
    generate: true,
    hostname: "https://www.simonswiss.com"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
