const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/frontend/App.tsx',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static/js')
    },

    externals: {
        react: 'React'
    }
};