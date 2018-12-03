const SRC_DIR = __dirname;

module.exports = {
    mode: 'development',
    entry: [
        SRC_DIR + "/js/index.js"
    ],
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    output: {
        path: SRC_DIR + "/build",
        filename: "app.js",
        publicPath: "/build/"
    }
}