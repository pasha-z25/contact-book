module.exports = {
    devServer: {
        withCredentials: true,
        proxy: [{
            context: ['/', '/app'],
            target: 'https://phonebook.hillel.it',
            changeOrigin: true,
            secure: false
        }]
    }
};