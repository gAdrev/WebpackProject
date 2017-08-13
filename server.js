const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3050;

const app = express();

const isDevelopment = process.env.NODE_ENV !== "production";
if (isDevelopment) {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.js");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static("dist"));

  // react-router browser history module compatibility stuff
  app.get("*", (req, res) => {
    res.sendFile(pat.join(__dirname, "dist/index.html"));
  })
}

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});