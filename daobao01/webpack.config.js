// webpack.config.js是一个配置文件具体指定了webpack要干那些活，当运行webpack时会加载里面的配置
// 所有的构建工具都是基于node.js平台运行的 模块化默认采用common.js
// resolve用来拼接绝对路径的方法
const { resolve } = require("path");

module.exports={
    // webpack配置有5个
    // 入口文件路径
    entry:'./src/index.js',
    // 输出文件路径
    output:{
        // 输出文件名
        filename:'built.js',
        // path为文件路径
        path:resolve(__dirname,'build')
    },
    // module配置模块主要是一些loader
    module:{
        // module中的具体配置
        rules:[
            
            {
                // test匹配那些文件它的值是一个正则表达式
                test:/\.css$/,
                // 使用那些loader来处理
                use:[
                    // 执行顺序为从下到上一次执行

                    // 创建一个style标签 将js中的样式资源插入进去 添加到head中生效
                    'style-loader',
                    // 将css文件以字符串的形式变为common.js模块加载到我们的模块中
                    // 里面的内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    // 插件模块配置
    plugins:[
        // 详细的插件模块配置
    ],

    // 开发模式还是生产模式
    mode:'development',
    // mode:"production",

}