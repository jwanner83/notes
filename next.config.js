module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(sc|c|sa)ss$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 2,
                    }
                },
                { loader: 'scoped-css-loader' },
                { loader: 'sass-loader' }
            ]
        })
    }
}