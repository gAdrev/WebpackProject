const express = require("express");
const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

const PORT = 3050;

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});