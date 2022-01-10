const path = require("path");

module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    add: {
      import: "./src/add.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
