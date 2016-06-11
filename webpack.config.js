const path = require("path");

module.exports = {
  entry: "./app/js/entry.js",
  output: {
    path: path.join(__dirname, "app"),
    filename: "bundle.js"
  },
   resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}