var webpack = require('webpack');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname + '/public/',
        filename: './js/bundle.js'
    },
    resolve:{
        root: __dirname,
        alias: {
            'Main': 'app/components/Main.jsx',
            'Nav': 'app/components/Nav.jsx',
            'AppStyles': 'app/styles/app.scss',
            'Home': 'app/components/Home.jsx',
            'Timer': 'app/components/Timer.jsx',
            'Countdown': 'app/components/Countdown.jsx',
            'Clock': 'app/components/Clock.jsx',
            'CountdownForm': 'app/components/CountdownForm.jsx'

        },
        extensions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'babel-preset-es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(?:\?.*|)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }
};