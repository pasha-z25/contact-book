module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://phonebook.hillel.it/",
                ws: true,
                secure: true,
                proxyRoot: true,
                changeOrigin: true,
            },
        },
    },
};