const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind/tailwind.js"), require("autoprefixer")]
};
