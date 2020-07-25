const path = require("path");
const webpack = require("webpack");

// const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");
// const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        port: 4000,
        compress: true,
        hot: true,
        contentBase: path.resolve(__dirname, "../dist"),
        after(app) {
            // app is a EventEmitter
        },
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // // 构建时会引用动态链接库的内容
        // new DllReferencePlugin({
        //     manifest: path.resolve(__dirname, "./dll/manifest.json"),
        // }),
        // // 需要手动引入react.dll.js
        // new AddAssetHtmlWebpackPlugin({
        //     filepath: path.resolve(__dirname, "../public/dll.js"),
        // }),
    ],
};
