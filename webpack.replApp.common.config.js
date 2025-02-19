const InjectPlugin = require("webpack-inject-plugin")
const path = require("path")

module.exports = () => {
    return {
        entry: './replApp/replApp.ts',
        output: {
            filename: 'dist/imageWebWatch.js',
            chunkFilename: 'dist/[name].js',
            path: path.resolve(path.dirname(''), "public"),
            publicPath: "/"
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /([a-zA-Z0-9\s_\\.\-\(\):])+\.static\.([a-zA-Z0-9])+$/,
                    use: 'raw-loader',
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            configFile: "tsconfig.replApp.json"
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader'],
                },
                {
                    test: /\.pug$/,
                    use: ['raw-loader', 'pug-html-loader']
                }
            ]
        }
    }
};
