module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: 'http://shuting.iijx.site'
    },
    configureWebpack:{
        //引入cdn中的vue
        // externals:{
        //     'vue': 'Vue',
        // }
    },
    chainWebpack: config => {
        config.plugin('html').tap(option => {
            console.log(option);
            option[0].title = '数听英语';
            return option
        })
    }
}

