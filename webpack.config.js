const path = require('path')
const HtmlPlugin = require('html-webpack-plugin') 
const MiniCssPlugin = require('mini-css-extract-plugin') // 打包css库
const VuePlugin = require('vue-loader/lib/plugin') 
module.exports = {
    mode: "development",
    devServer: {
        open: true,
        host: 'localhost',
        port: 9999,
        contentBase:path.resolve(__dirname,'dist')
    },
    entry: path.resolve(__dirname,'./src/index.js'), // 输入
    output:{
        path: path.resolve(__dirname,'dist'), // 输出
    },
    plugins:[
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new MiniCssPlugin({
            filename: 'css/bundle.css'
        }),
        new VuePlugin()
    ],
    module:{
        // css 处理插件
        rules:[
            {
                test:/\.vue$/,loader: 'vue-loader'
            },
            {test:/\.css$/,use:[MiniCssPlugin.loader,'css-loader']},
            {test:/\.less$/,use:[MiniCssPlugin.loader,'css-loader','less-loader']},
            {test:/\.scss$/,use:[{
                loader: MiniCssPlugin.loader,
                options:{publicPath: '..'}
            },'css-loader','sass-loader']},
            {
                test:/\.html$/,loader: 'html-loader'
            }
        ],
    }
}