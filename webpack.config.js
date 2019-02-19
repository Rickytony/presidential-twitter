const path = require("path");
require("@babel/register");

const config = {
  mode: "development",
  entry: "./app/main.js",
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
