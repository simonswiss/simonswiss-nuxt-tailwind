const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

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
    extractCSS: true,
    postcss: [
      require("tailwindcss")("./tailwind/tailwind.js"),
      require("autoprefixer")
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      // if (!isDev) {
      // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
      // for more information about purgecss.
      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, "./pages/**/*.vue"),
            path.join(__dirname, "./layouts/**/*.vue"),
            path.join(__dirname, "./components/**/*.vue")
          ]),
          extractors: [
            {
              extractor: TailwindExtractor,
              extensions: ["html", "js", "vue"]
            }
          ],
          whitelist: ["html", "body"]
        })
      );
      // }

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
