const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const sharedConfig = {
        mode: isDevBuild ? "development" : "production",
        optimization: {
            minimize: !isDevBuild
        },
        stats: { modules: false },
        resolve: { extensions: ['.js'] },
        module: {
            rules: [
                { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' }
            ]
        },
        entry: {
            vendor: [
                'json-to-url',
                'domain-wait',
                'react-paginating',
                'axios',
                './ClientApp/styles/preloader.css',
                'react-toastify/dist/ReactToastify.css',
                'react-toastify',
                'nserializejson',
                'nval-tippy',
                'nval',
                'tippy.js',
                'bootstrap3-native',
                'bootstrap-css-only/css/bootstrap.css',
                'history',
                'connected-react-router',
                'react-router',
                'react-helmet',
                'react',
                'react-dom',
                'react-redux',
                'redux',
                'redux-thunk',
                'custom-event-polyfill',
                'event-source-polyfill',
                '@babel/polyfill',
            ]
        },
        output: {
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]',
        },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, require.resolve('node-noop')), // Workaround for https://github.com/andris9/encoding/issues/16
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            })
        ].concat(isDevBuild ? [
            // Add module names to factory functions so they appear in browser profiler.
            new webpack.NamedModulesPlugin()
        ] : [])
    };

    const clientBundleConfig = merge(sharedConfig, {
        output: { path: path.join(__dirname, 'wwwroot', 'dist') },
        module: {
            rules: [
                { test: /\.css(\?|$)/, use: [MiniCssExtractPlugin.loader].concat(isDevBuild ? 'css-loader' : 'css-loader?minimize') }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "vendor.css"
            }),
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [
        ])
    });

    const serverBundleConfig = merge(sharedConfig, {
        target: 'node',
        resolve: { mainFields: ['main'] },
        output: {
            path: path.join(__dirname, 'ClientApp', 'dist'),
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [{ test: /\.css(\?|$)/, use: isDevBuild ? 'css-loader' : 'css-loader?minimize' }]
        },
        entry: { vendor: ['aspnet-prerendering', 'react-dom/server'] },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, 'ClientApp', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ]
    });

    return [clientBundleConfig, serverBundleConfig];
};
