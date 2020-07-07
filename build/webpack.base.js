const DEVELOPMENT_CONFIG = require("./webpack.dev");
const PROD_CONFIG = require("./webpack.prod");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

module.exports = function (env) {
    const isDevelopment = env.development;
    const isProduction = env.production;

    const BASE_CONFIG = {
        entry: path.resolve(__dirname, "../src/index.tsx"),
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            extensions: [".js", ".json", "ts"],
        },
        externals: {
            // jquery: "$",
        },
        module: {
            rules: [
                {
                    // 解析js文件 默认会调用@babel/core
                    //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
                    test: /\.(ts|js)x?$/,
                    use: "happypack/loader?id=handleBabelPack",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2,
                            },
                        },
                        "postcss-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                            },
                        },
                    ],
                },
                {
                    // 匹配到scss结尾的使用sass-loader，指定dart-sass来处理
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2,
                            },
                        },
                        "postcss-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                            },
                        },
                    ],
                },
                {
                    // 图标的转化
                    test: /\.(woff|ttf|eot)$/,
                    use: "file-loader",
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: "image/[contentHash].[ext]",
                                limit: 1024,
                            },
                        },
                        {
                            loader: "image-webpack-loader",
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 80,
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 80,
                                },
                            },
                        },
                    ],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../public/index.html"),
                title: "hello webpack",
                filename: "index.html",
                minify: isProduction && {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                },
            }),
            new HappyPack({
                id: "handleBabelPack",
                //共享进程池
                threadPool: happyThreadPool,
                //允许 HappyPack 输出日志
                verbose: true,
                loaders: ["babel-loader"],
            }),
        ].filter(Boolean),
    };

    return isDevelopment
        ? merge(BASE_CONFIG, DEVELOPMENT_CONFIG)
        : merge(BASE_CONFIG, PROD_CONFIG(env));
};
