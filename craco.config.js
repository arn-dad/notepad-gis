const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components"), 
      '@modules': path.resolve(__dirname, "src/modules"),
      '@config': path.resolve(__dirname, "src/config")
    }
  }
}