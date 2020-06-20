module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: 'http://shuting.iijx.site'
    },

    chainWebpack: config => {
        config.plugin('html').tap(option => {
            console.log(option);
            option[0].title = '数听英语';
            return option
        })
    }
}

