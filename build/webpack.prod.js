const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = function (env) {
    return {
        mode: "production",
        plugins: [
            new MiniCssExtractPlugin({
                filename: "style/[name].css",
            }),
            new PurgecssPlugin({
                paths: glob.sync(`${path.join(__dirname, "../src")}/**/*`, {
                    nodir: true,
                }),
            }),
            // new BundleAnalyzerPlugin(),
        ],
        optimization: {
            usedExports: true, // 提示使用哪个模块
            minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: "styles",
                        test: /\.css$/,
                        chunks: "all",
                        enforce: true,
                    },
                },
            },
        },
    };
};
