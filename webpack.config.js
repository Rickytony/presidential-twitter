const path = require("path");
require("@babel/register");
require("@babel/polyfill");

const config = {
  mode: "development",
  entry: ["@babel/polyfill", "./app/main.js"],
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  watch: true,
  devtool: "inline-source-map"
};

module.exports = config;
