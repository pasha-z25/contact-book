module.exports = {
    devServer: {
        proxy: 'https://phonebook.hillel.it'
    }
};
/*
module.exports = {
    devServer: {
        host: 'https://phonebook.hillel.it',
        proxy: {
            '^/api': {
                target: 'https://phonebook.hillel.it',
                ws: true,
                secure: false,
                // proxyRoot: true,
                changeOrigin: true
            },
            '^/app': {
                target: 'https://phonebook.hillel.it',
                ws: true,
                secure: false,
                // proxyRoot: true,
                changeOrigin: true
            }
        }
    }
};
 */