// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./public/*.html"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

let production = process.env.production === "TRUE";

module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer"), require("postcss-preset-env"), ...(production !== false ? [purgecss] : [])]
};
