const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const dotenv = require("dotenv").config({
    path: path.join(__dirname, ".env"),
});

const plugins = [
    new HTMLWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
    }),
    new webpack.ProvidePlugin({
        React: "react",
    }),
];

const npm_package = require("./package.json");

module.exports = {
    mode: "development",
    plugins,
    entry: ["./src/index.tsx", "@babel/polyfill"],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        alias: {
            helpers: path.resolve(__dirname, "src/helpers/"),
            components: path.resolve(__dirname, "src/components/"),
            api: path.resolve(__dirname, "src/api/"),
            pages: path.resolve(__dirname, "src/pages/"),
            baseUrl: path.resolve(__dirname, "src/"),
            store: path.resolve(__dirname, "src/redux/"),
            styles: path.resolve(__dirname, "src/styles/"),
        },
    },

    devServer: {
        port: 3010,
        static: { directory: path.join(__dirname, "./") },
        historyApiFallback: { disableDotRule: true },
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"],
            },
            {
                test: /\.(json)$/,
                use: { loader: "file-loader", options: { name: "[name].[ext]", outputPath: "./" } },
            },
        ],
    },
};
