module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'https://phonebook.hillel.it',
                ws: true,
                secure: false,
                proxyRoot: true,
                changeOrigin: true
            },
            '^/app': {
                target: 'https://phonebook.hillel.it',
                ws: true,
                secure: false,
                proxyRoot: true,
                changeOrigin: true
            }
        }
    }
};
/*
module.exports = {
    devServer: {
        proxy: 'https://phonebook.hillel.it',
    }
};
*/