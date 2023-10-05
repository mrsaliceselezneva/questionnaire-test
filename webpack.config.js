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
    entry: ["@babel/polyfill", "./src/index.tsx"],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
        alias: {
            helpers: path.resolve(__dirname, "src/helpers/"),
            components: path.resolve(__dirname, "src/components/"),
            api: path.resolve(__dirname, "src/api/"),
            pages: path.resolve(__dirname, "src/pages/"),
            baseUrl: path.resolve(__dirname, "src/"),
            store: path.resolve(__dirname, "src/redux"),
            styles: path.resolve(__dirname, "src/styles"),
        },
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        port: 3010,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
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
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
