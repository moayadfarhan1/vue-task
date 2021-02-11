// // vue.config.js file to be place in the root of your repository

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    publicPath:'http://localhost:8080/',
    configureWebpack: {
        plugins: [
            // new BundleAnalyzerPlugin()
          ],
          output: {
            crossOriginLoading: 'anonymous'
        },
    }
    // publicPath: process.env.NODE_ENV === 'production'? '/vue-task/':'http://localhost:8080/',
  }