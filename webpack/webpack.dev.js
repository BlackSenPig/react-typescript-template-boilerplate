const webpack = require("webpack")
//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    open:
    {
      app:
      {
        name: 'Google Chrome'
      }
    },
    hot: true,
    //open: true,
    port: 80,
  },
  plugins: [
    //  new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Vishwas"),
    }),
  ],
}
