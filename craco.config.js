const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components"), 
      '@modules': path.resolve(__dirname, "src/modules"),
      '@config': path.resolve(__dirname, "src/config"),
      '@services': path.resolve(__dirname, "src/services"),
      '@utilities': path.resolve(__dirname, "src/utilities"),
    }
  }
}