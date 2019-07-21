const path = require('path')
// 启用热更新的第二步
const webpack = require('webpack')
// 导入了在内存中生成 HTML 页面的插件
// 只要是插件，都要放到 plugins 节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件，其实就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
    //手动指定 入口 和 出口
    entry: path.join(__dirname, './src/main.js'),
    output:{    
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer:{ // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        open: true, //自动打开浏览器
        port: 3004, // 设置启动端口
        contentBase: 'src', // 指定托管的根目录
        hot: true, // 启用热更新的第一步了
    },
    plugins: [ // 配置插件的节点
       new  webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象，这是启用热更新的第三步 
       new htmlWebpackPlugin({ //创建一个 在内存中 生成 HTML 页面的插件
        template: path.join(__dirname, './src/index.html'), // 指定模版页面，将来会根据指定的页面路径，去生成内存中的 页面
        filename: 'index.html'
       })
    ],
    module: { // 用于配置所有的第三方模块 加载器
        rules: [ // 所有的第三方模块的 匹配规则
            { test: /\.css$/, use:['style-loader', 'css-loader'] },// 配置处理第三方loder规则 
            { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, loader:'url-loader',options:{limit:41410} },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader' },// 处理 字体文件的loader
            { test:/\.js$/, use:'babel-loader', exclude:/node_modules/ },
            {test:/\.vue$/, use:'vue-loader'},
        ]
    }
}

// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 安装到项目的本地开发依赖
// 2. 安装后，与webpack用法一致
// 3. 由于是本地安装，而非全局，所以无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到全局 -g 的工具，才能在终端中运行）