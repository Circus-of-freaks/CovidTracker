module.exports = api => {
    const isProd = process.env.NODE_ENV === 'production';
    api.cache.forever();

    const presets = [
        ['@babel/preset-env', {
            "useBuiltIns": "entry"
        }],
        '@babel/preset-react',
        'babel-preset-mobx',
        '@babel/preset-typescript',
    ];
    const plugins = [
        [
            'react-css-modules',
            {
                'filetypes': {
                    '.scss': {
                        'syntax': 'postcss-scss',
                        'plugins': ['postcss-nested']
                    }
                },
                'generateScopedName': !isProd ? '[path][name]__[local]' : '[hash:base64]',
                'webpackHotModuleReloading': true,
                'autoResolveMultipleImports': true
            }
        ],
        !isProd && 'react-refresh/babel',
        '@babel/plugin-proposal-optional-chaining'
    ].filter(Boolean);

    return {
        presets,
        plugins
    }
}