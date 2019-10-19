const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({ 
            filename:'index.html',
            template: "index.html",
            inject:true
        }),
        new VueLoaderPlugin() //new一个实例
    ],
    devServer: {
        historyApiFallback: true,//热服务，实时更新页面
    },
    stats: { children: false },
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test:/\.scss$/,
            use:[
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    }
}